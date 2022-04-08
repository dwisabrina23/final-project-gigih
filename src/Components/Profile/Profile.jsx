import React from 'react';

function Profile({data}) {
    return (
        <div className='d-flex m-3'>
            <div>
                <img  className='rounded-circle' style={{width:"30px", height:"30px"}} src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"/>
            </div>
            <h5 className='px-3'>{data.display_name}</h5>
        </div>
    );
}

export default Profile;