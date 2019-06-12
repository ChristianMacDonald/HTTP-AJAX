import React from 'react';
import Friend from '../Friend/Friend';
import './FriendsList.css';

function FriendsList(props) {
  return (
    <div className="friend-container">
      <div className="friends-list">
        {props.friends.map((friend, index) => <Friend key={index} friend={friend} deleteFriendHandler={props.deleteFriendHandler} />)}
      </div>
      <div>
        <form className="new-friend-form" onSubmit={props.newFriendHandler}>
          <div>
            <input type="radio" name="purpose" value="new" defaultChecked />
            <label htmlFor="new">New</label>
            <input type="radio" name="purpose" value="update" />
            <label htmlFor="update">Update</label>
          </div>
          <div>
            <label htmlFor="name">Enter friend's name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="age">Enter friend's age:</label>
            <input type="text" name="age" />
          </div>
          <div>
            <label htmlFor="email">Enter friend's email:</label>
            <input type="text" name="email" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FriendsList;