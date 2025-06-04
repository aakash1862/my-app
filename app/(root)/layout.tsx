import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-black-100 min-h-screen">
            <nav className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-3xl font-bold">NAVBAR</h1>
            </nav>
            <main className="container mx-auto p-4">
                {children}
            </main>
        </div>
    );
}

export default Layout;