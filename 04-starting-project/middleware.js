import { NextResponse } from "next/server";

//run in any request 
export function middleware(request) {
    console.log(request);

    return NextResponse.next();
}

//for filter the type of request
export const config = {
    matcher: '/news'
};