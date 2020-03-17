import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class Fetchdata extends Component {
  state = {
    posts: {},
    isLoading: true,
    errors: null,
    loading:"Loading....."
  };
 
  getPosts() {
    axios("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      })
    .catch(error => this.setState({ error, isLoading: false }));
      
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h2>Random Post</h2>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>USerID</th>
                    <th>ID</th>
                    <th >Title</th>
                </tr>
            </thead>
           <tbody>
            {!isLoading ? (
                posts.map(post => {
                const {userId,id, title} = post;
                return (
                    <tr key={id}>
                        <td>{userId}</td>
                        <td>{id}</td>
                        <td>{title}</td>
                    </tr>
                );
                })
            ) : (
                <tr>{this.state.loading}</tr>
            )}
          </tbody> 
        </Table>
      </React.Fragment>
    );
  }
}

export default Fetchdata;
