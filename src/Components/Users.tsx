import React from 'react';
import User from './User';


const Users = () => {
    const handleAddUser = (user: UserModel): void =>{
        const newTeam = [...team, user];
        setTeam(newTeam);
    }
    return (
        <div>
            <h2>my user</h2>
           <User name="rohomot" age={55} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;