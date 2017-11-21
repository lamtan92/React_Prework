import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customTweets: [
        {
          text: "Hello",
          liked: true
        },
        {
          text: "World",
          liked: false
        }
      ]
    }
  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false
    }
    this.setState({
      customTweets: this.state.customTweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.customTweets.map((t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });

    this.setState({
      customTweets: tweets
    })
  }

  handleDelete(tweet) {
    let tweets = this.state.customTweets.filter(t => t.text !== tweet.text);
    this.setState({
      customTweets: tweets
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Coder School Prework</h1>
        </header>
        <div>
          <TweetBox prompt="What is your status? " onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div className="App-tweet">
          {
            this.state.customTweets.map((tweet) => 
              <Tweet 
                tweet={tweet}
                handleLike={this.handleLike.bind(this)}
                handleDelete= {this.handleDelete.bind(this)}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
