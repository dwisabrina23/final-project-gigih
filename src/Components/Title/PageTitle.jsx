import React from 'react';

function PageTitle({title}) {
    return (
        <div className='mb-3'>
            <h1>{title}</h1>
            <hr />
        </div>
    );
}

export default PageTitle;