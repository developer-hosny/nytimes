import React, { Component } from "react";
import axios from "axios";
import { ListGroup, Container } from "reactstrap";

import PropTypes from "prop-types";
import PopularItem from "./PopularItem";
import Header from "./layout/Header";
export class Popular extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPopular();
  }

  fetchPopular = async () =>{
    await axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=gAvj2T8M17hBFi9mtOvjaHEGxG45xIgN`
    )
    .then(res => {
      const posts = res.data.results;
      this.setState({ posts });
      return posts;
    });
  }

  render() {
    return (
      <Container>
        <Header isHome={true} />
        <ListGroup>
          {this.state.posts.map(post => {
            return <PopularItem key={post.id} post={post} />;
          })}
        </ListGroup>
      </Container>
    );
  }
}

Popular.protoType = {
  post: PropTypes.object.isRequired
};

export default Popular;
