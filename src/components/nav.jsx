"use client";
import Link from "next/link";

export default function Cnavbar(){
    return(
       <nav className="bg-blue-600 h-14 flex justify-between py-4 px-4 text-white">
        <div>
                <h2 className="text-2xl font-mono"><Link href="/profile">Course Registration</Link></h2>
        </div>
        <div>
            <ul className="flex space-x-4">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/add-course'}>Add course</Link></li>
                <li><Link href={'/view-Courses'}>View Course</Link></li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <ul className="flex space-x-4">
                <li><a>Login</a></li>
                <li><a>Sign-up</a></li>
            </ul>
        </div>

       </nav>
    );
}