import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <p className='display-5'>Oops...something wrong</p>
            <h2><span className='text-danger'>404 !</span> Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;