import React, { useContext } from 'react';
import  { AuthContext } from '../../context/UserContext';

const Inventory = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            well come to inventory paga.
            <small>{user?.email}</small>
        </div>
    );
};

export default Inventory;