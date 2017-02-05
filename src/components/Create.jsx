import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';


const Create = () => {
    let accounts= ["Fred", "Joe", "Lisa"]
    return (
        <Grid>
          <Row className="show-grid">
            <Col>
              <h2>Available Players</h2>
              <ListGroup>
                {accounts
                  .map((item, index) => {
                    return (
                      <ListGroupItem key={index}>
                        <input type="checkbox"/>
                        <span>{item}</span>
                      </ListGroupItem>
                    )
                  })}
              </ListGroup>
              <button className="btn">Create Game</button>
              <hr/>
            </Col>
          </Row>
        </Grid>
    );
};

export default Create;