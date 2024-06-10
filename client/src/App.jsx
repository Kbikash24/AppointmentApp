import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/userForm';
import UserList from './components/userList';
import './App.css'

const App = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>
            <h1>User Management</h1>
            <UserForm loadUsers={loadUsers} />
            <UserList users={users} loadUsers={loadUsers} />
        </div>
    );
};

export default App;
