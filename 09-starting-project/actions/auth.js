'use server';

import { createAuthSession, destroyedSession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email';
    }
    if (password.trim().length < 8) {
        errors.password = 'Password must be greater that 8 characters long';
    }

    if (Object.keys(errors).length > 0 ) {
        return {
            errors
        };
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const id = createUser(email, hashedPassword);
        await createAuthSession(id);
        redirect('/training');
    } catch (error) {
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: 'Dev: Duplicate email'
                }
            }
        }
        throw error;
    }
}

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    
    const user = await getUserByEmail(email);
    if (!user) {
        return {
            errors: {
                email: 'Invalid credentials'
            }
        };
    }

    const validPassword = verifyPassword(user.password, password);
    if (!validPassword) {
        return {
            errors: {
                password: 'Invalid credentials'
            }
        };
    }

    await createAuthSession(user.id);
    redirect('/training');
}

export async function authAction(mode, prevState, formData) {
    if (mode === 'login') {
        return login(prevState, formData);
    } 
    return signup(prevState, formData);
}

export async function logout() {
    await destroyedSession();
    redirect('/?mode=login');
}
