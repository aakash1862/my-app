import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <h1>Nested Route 1</h1>
            <p>This is an example to showcase dynamic routing.</p>

            <ul className="mt-10">
                <li><Link href="/nested-routes/users/1">User 1</Link></li>
                <li><Link href="/nested-routes/users/2">User 2</Link></li>
                <li><Link href="/nested-routes/users/3">User 3</Link></li>
            </ul>
        </div>
    );
}

export default Page;