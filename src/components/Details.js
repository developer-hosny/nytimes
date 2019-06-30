import React, { Component } from "react";
import {
  Card,
  Row,
  CardImg,
  Container,
  Col,
  CardTitle,
  CardBody,
  CardText
} from "reactstrap";
import Header from "./layout/Header";
import { MdDateRange } from "react-icons/md";

export class Details extends Component {
  render() {
    const post = this.props.location.state.post;
    return (
      <Container>
        <Header isHome={false} />
        <Card>
          <CardImg
            className="img-fluid rounded"
            src={post.media[0]["media-metadata"][5].url}
            alt={post.media[0].caption}
          />
          <CardTitle>{post.title}</CardTitle>
          <CardBody>
            <CardText>{post.abstract}</CardText>
            <Row>
              <Col>
                <small className="text-muted">{post.byline}</small>
              </Col>
              <Col>
                <MdDateRange />
                {" "}
                <small className="text-muted">{post.published_date}</small>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Details;
