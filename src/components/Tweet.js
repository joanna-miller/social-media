import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from 'react-bootstrap'

function Tweet(props){
  return(
    <React.Fragment>
      <Card>
        <Card.Title style={{display: 'flex', flexDirection: 'row'}}>
          {props.image}<h5>{props.username}</h5>
        </Card.Title>
        <Card.Body><p>{props.body}</p></Card.Body>
      </Card>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  image: PropTypes.element,
  username: PropTypes.string,
  body: PropTypes.string
};

export default Tweet;