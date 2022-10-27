import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='bg-custom border border-start-0 border-end-0 border-warning text-white'>
            <h2 className='text-center my-3'><span className='text-warning'>Skill</span> Hub Blog</h2>
            <div className='border border-warning rounded w-75 mx-auto my-4 p-4'>
                <div className='text-justify'>
                    <h4>1. What is cors?</h4>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className='text-justify'>
                    <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                        <br />
                        Auth0, MongoDB, Passport, and Okta are the most popular alternatives to Firebase Authentication.
                    </p>
                </div>
                <div className='text-justify'>
                    <h4>3. How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div className='text-justify'>
                    <h4>4. What is Node? How does Node work?</h4>
                    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
                        <br />
                        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        Node.js basically works on two concept

                        Asynchronous
                        Non-blocking I/O
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;