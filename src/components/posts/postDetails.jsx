import React, { Component } from "react";
import { connect } from "react-redux";
import PostSuper from "./postSuper";

import { deletePost } from "../../actions/postActions";


class PostDetails extends Component {
  handleDeletePost = () => {
    this.props.deletPost(this.props.post.id);
    this.props.history.push('/')
  };
  render() {
    let { post } = this.props;

    return post ? (
      <React.Fragment>
        <div className="card-content white-text">
          <h2 >{post.title}</h2>
          <h4>{post.body}</h4>
        </div>
        <div className="card-action">
          <button className="btn red" onClick={this.handleDeletePost}>Delete This Post</button>
        </div>
      </React.Fragment>
    ) : (
      <div className="card-content white-text">
        <h2 className="">Post No Longer Exist</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletPost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSuper(PostDetails));
