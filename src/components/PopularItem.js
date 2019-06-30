import React, { Component } from "react";
import {
  Row,
  Col,
  CardImg,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdDateRange } from "react-icons/md";

export class PopularItem extends Component {

  constructor(props) {
    super(props);
    this.state = {height: props.width};
  }
  
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth});
    });
  }

  render() {
    const post = this.props.post;

    return (
      <div>
        <ListGroupItem key={post.id}>
          <Row>
            <Col sm="2" xs="12">
              <CardImg
                className={this.state.width > 570 ? 'rounded-circle' : 'card-img-top'}
                src={post.media[0]["media-metadata"][0].url}
                alt={post.media[0].caption}
              />
            </Col>
            <Col sm="8" xs="10" style={{textAlign: 'left'}}>
              <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
              <Row>
                <Col xs="12">
                  <ListGroupItemText>{post.byline.length > 0 ? post.byline.split(',').length > 0 ? post.byline.split(',')[0] : post.byline.supstring(0, 15) : null}</ListGroupItemText>
                </Col>
                <Col xs="12">
                  <ListGroupItemText>
                    {" "}
                    <MdDateRange /> {post.published_date}
                  </ListGroupItemText>
                </Col>
              </Row>
            </Col>
            <Col sm="2" xs="1" style={{ borderRadius: "5px" }}>
              <GoToDetails post={post} />
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  }
}

function GoToDetails(props) {
  return (
    <Link
      to={{
        pathname: "/details",
        state: { post: props.post }
      }}
    >
      <MdKeyboardArrowRight
        style={{
          position: "absolute",
          top: "45%",
          fontSize: "40px",
          fontWeight: "bolder",
          color: "#ffc107"
        }}
      />
    </Link>
  );
}



export default PopularItem;
