import React from 'react';

function PageTitle({title}) {
    return (
        <div className='mb-3'>
            <h1 style={{color:"rgb(138, 197, 175)", fontSize:"22px"}}>{title}</h1>
        </div>
    );
}

export default PageTitle;