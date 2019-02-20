import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home">
        <h1 className="center">Home Component</h1>
        {this.props.posts.map(post => {
          return (
            <div className="card" key={post.id}>
              <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                  {post.title}
                </span>
                <p>{post.body}</p>
              </div>
              <div className="card-action">
                <Link to={"/posts/"+post.id}>Show More Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
