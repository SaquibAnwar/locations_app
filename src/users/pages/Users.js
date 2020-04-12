import React from 'react';

import UsersList from '../components/UsersList';

const Users = () =>{
    const USERS = [
        { 
            id: 'u1', 
            name: 'Saquib Anwar', 
            image: 
                'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            places:  3
        },
        { 
            id: 'u2', 
            name: 'Saquib Anwar', 
            image: 
                'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            places:  3
        }
    ];

    return(<UsersList items={USERS} />);
}

export default Users;