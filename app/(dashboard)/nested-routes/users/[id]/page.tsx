import React from 'react';

const Page = ({ params }: { params: {id: string }}) => {
    const { id } = params;
    return (
        <h1 className="text-3xl">Dynamic Routing of User ID: {id}</h1>
    );
}

export default Page;