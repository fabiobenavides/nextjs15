import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  console.log("fabio log", session);
  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  changeUserPassword(session, req, res);
  return;
}


async function changeUserPassword(session, req, res) {
  const userEmail = session.user.email;
  const { currentPassword, newPassword } = req.body;

  const client = await connectToDatabase();
  const db = client.db();
  const user = await db.collection('users').findOne({ email: userEmail });

  if (!user) {
    client.close();
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  const isValid = await verifyPassword(currentPassword, user.password);
  if (!isValid) {
    client.close();
    res.status(403).json({ message: 'Invalid current password.' });
    return;
  }
  const hashedPassword = await hashPassword(newPassword);
  await db.collection('users')
    .updateOne({email: userEmail},
        { $set: { password: hashedPassword } });
    
  client.close();
  res.status(200).json({ message: 'Password updated!' });
  return;
}