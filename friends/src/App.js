import React from 'react';
import './App.css';
import Axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = { friends: [] };
    this.addNewFriend = this.addNewFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/friends')
      .then(result => {
        this.setState({ friends: result.data, purpose: 'none' });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addNewFriend(event) {
    let elements = event.target.elements;
    
    let newFriend = {
      name: elements['name'].value,
      age: parseInt(elements['age'].value),
      email: elements['email'].value
    }

    if (elements['purpose'].value === 'new') {
      Axios.post('http://localhost:5000/friends', newFriend)
        .then(result => {
          this.setState({ friends: result.data });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      let matches = this.state.friends.filter(friend => friend.name === newFriend.name);
      Axios.put(`http://localhost:5000/friends/${matches[0].id}`, newFriend)
        .then(result => {
          this.setState({ friends: result.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  deleteFriend(event) {
    let id = event.target.dataset.id;
    Axios.delete(`http://localhost:5000/friends/${id}`)
      .then(result => {
        this.setState({ friends: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.friends);
    console.log(this.state.purpose);
    return (
      <FriendsList friends={this.state.friends} newFriendHandler={this.addNewFriend} deleteFriendHandler={this.deleteFriend} />
    );
  }
}

export default App;
