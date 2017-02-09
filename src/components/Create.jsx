import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import base from '../base';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      accountsPending: true
    }
  }
  
  componentDidMount() {
    base
      .fetch('accounts', {
      context: this,
      asArray: true
    })
      .then(data => {
        this.setState((state, props) => {
          return {
            accounts: data.map(i => i.name),
            accountsPending: false
          }
        });
      })
      .catch(error =>
        console.error(error)
      )
  }
  createGame =() => {
    console.log(this.state.accounts);
    this.state.accounts.map()
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {this.state.accountsPending?<h2>Loading...</h2>:<Col>
            <h2>Available Players</h2>
            <ListGroup>
              {this
                .state
                .accounts
                .map((item, index) => {
                  return (
                    <ListGroupItem key={index}>
                      <input type="checkbox" onChange={(e)=>console.log(item) }/>
                      <span>{item}</span>
                    </ListGroupItem>
                  )
                })}
            </ListGroup>
            <button className="btn" onClick={()=>this.createGame()}>Create Game</button>
            <hr/>
          </Col>}
        </Row>
      </Grid>
    );
  }
}

export default Create;