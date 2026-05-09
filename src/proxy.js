import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers
    })
    console.log("Session exists:");
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))

    }
}

export const config = {
    matcher: ['/profile', '/products/:path'],
}