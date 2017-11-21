import React, { Component } from 'react';
import './TweetBox.css';

class TweetBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      charsRemaining: 140
    }
  }

  handleTextChange(text) {
    this.setState({
      text: text,
      charsRemaining: 140 - text.length
    })
  }

  render() {
    return (
      <div>
        <input type="text" 
              placeholder={this.props.prompt} 
              onChange={(e) => this.handleTextChange(e.target.value)}
              value={this.state.text}
              className="TweetInput"
        />
        <p> {this.state.charsRemaining} </p>
        <button 
          className="TweetButton"
          onClick={() => {
            this.props.onTweet(this.state.text);
            this.setState({text:""})
          }}
          disabled={this.state.charsRemaining < 0}
        > 
          Tweet {" "}
        </button>
      </div>
    );
  }
}

export default TweetBox;
