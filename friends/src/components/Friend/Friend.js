import React from 'react';
import './Friend.css';

function Friend(props) {
    return (
        <div className="friend">
            <div className="name">Name: {props.friend.name}</div>
            <div className="age">Age: {props.friend.age}</div>
            <div className="email">Email: {props.friend.email}</div>
            <div className="buttons">
                <button className="delete-button" onClick={props.deleteFriendHandler} data-id={props.friend.id}>Delete</button>
            </div>
        </div>
    );
}

export default Friend;