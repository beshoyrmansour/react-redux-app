import React, { Component } from "react";

export default class CreatePoject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row card">
          <form className="col s12 card-content" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="content"
                  className="validate materialize-textarea"
                  data-length="500"
                  cols="30"
                  rows="10"
                  onChange={this.handleChange}
                />

                <label htmlFor="content">content</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button type="submit" className="btn">
                  Sign<strong>In</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
