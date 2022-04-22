import React from 'react';

function Profile({data}) {
    return (
        <div className='d-flex m-3 align-items-center'>
            <div>
                <img  className='rounded-circle' style={{width:"30px", height:"30px"}} alt="profile pic" src={data.image}/>
            </div>
            <h5 className='px-3'>{data.display_name}</h5>
        </div>
    );
}

export default Profile;