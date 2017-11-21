import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div className="Tweet">
                {tweet.text}
                <br/>
                <a href='#' onClick={() => this.props.handleLike(tweet)}>
                    {tweet.liked ? 'Like' : 'Unlike'} Post
                </a>
                <br/>
                <a href='#' onClick={() => this.props.handleDelete(tweet)}>
                    Delete Post
                </a>
            </div>
        )
    }
}
export default Tweet;