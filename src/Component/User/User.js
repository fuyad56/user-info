import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';




const User = (props) => {
    const {name, email, phone, profile, salary} = props.user;
    const handleAddFriend = props.handleAddFriend;
    
    return (
        <div className='card'>
            <img src={profile} alt="" />
            <h3><b>Name: </b> {name}</h3>
            <p><b>Email: </b> {email} </p>
            <p><b>Phone: </b> {phone}</p>
            <p><b>Salary: </b> {salary}</p>
            <button onClick={() => handleAddFriend(props.user)}> <FontAwesomeIcon icon={faUserPlus} /> Add Fried</button>
        </div>
    );
};

export default User;