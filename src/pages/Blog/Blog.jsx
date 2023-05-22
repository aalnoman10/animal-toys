import React from 'react';
import CustomHelmet from '../Helmet/Helmet';

const Blog = () => {
    return (
        <div className='p-5'>
            <CustomHelmet title='| Blog'></CustomHelmet>
            <h1 className="text-3xl text-center py-4 pt-0 font-semibold">Important Question</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-base-300 p-4 rounded-lg'>
                    <h3 className='text-xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <br />
                    <p>An access token is a credentia used to authenticate and authorize requests to access protected resources. A refresh token is a long-lived credential used to obtain a new access token when the original token expires.</p>
                </div>
                <div className='bg-base-300 p-4 rounded-lg'>
                    <h3 className='text-xl'>Compare SQL and NoSQL databases?</h3>
                    <br />
                    <p>SQL databases use structured data models, predefined schemas, and offer strong consistency. NoSQL databases are flexible, non-relational, and provide high scalability with eventual consistency. SQL is suitable for complex queries, while NoSQL handles unstructured data and emphasizes scalability and availability.</p>
                </div>
                <div className='bg-base-300 p-4 rounded-lg'>
                    <h3 className='text-xl'>What is express js? What is Nest JS?</h3>
                    <br />
                    <p>Express.js is a flexible web application framework for Node.js. It simplifies building web server and APIs with its minimalist approach and powerful features.</p>
                    <p>NestJS is a progressive framework for building scalable and maintainable server-side applications. It utilizes TypeScript, decorators, and dependency injection to create modular and efficient applications, drawing inspiration from Angular's structure and concepts.</p>
                </div>
                <div className='bg-base-300 p-4 rounded-lg'>
                    <h3 className='text-xl'>What is MongoDB aggregate and how does it work?</h3>
                    <br />
                    <p>The aggregate operation in MongoDB is used for advanced data processing and aggregation. It allows for complex queries, transformations, and analysis by applying a sequence of stages to input documents. Each stage performs a specific operation, passing the results to the next stage for further processing.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;