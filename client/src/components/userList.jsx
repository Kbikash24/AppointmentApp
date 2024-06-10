import React from 'react';
import axios from 'axios';

const UserList = ({ users, loadUsers }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/users/${id}`);
            loadUsers();
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.email})
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
