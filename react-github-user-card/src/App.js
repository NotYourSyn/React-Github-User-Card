import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      gitCard: [],
      followers: [],
    };
  }
  handleChanges = (e) => {
    this.setState({
      ...this.state,
      gitCard: e.target.value
    });
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/NotYourSyn')
      .then((res) => {
        this.setState({gitCard: res.data});
      })
      .catch((err) => console.log(err));

    axios
      .get('https://api.github.com/users/NotYourSyn/follwers')
      .then ((res) => {
        res.data.forEach((item) =>{
          axios
            .get(`https://api.github.com/users/${item.login}`)
            .then((response) =>{
              this.setState({
                followers: [...this.state.followers, response.data]
              })
            })
        })
      })
  }

  componentDidUpdate(prevState, prevProps) {
    if(prevState.gitCard !== this.state.gitCard) {
      console.log('gitCard has changed!');
    }
  }

  render() {
    return(
      <div>
        <h2>Github User Card</h2>
        <UserCard gitCard={this.state.gitCard} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;