import React from 'react';
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
      <div className="container">
        <div className="show-div row">
          {this.state.accountsPending
              ?<h2>Loading...</h2>
              :<div>
                <h2>Available Players</h2>
                <ul className="list-group">
                  {this
                    .state
                    .accounts
                    .map((item, index) => {
                      return (
                        <li key={index} className="list-group-item">
                          <input type="checkbox" onChange={(e)=>console.log(item) }/>
                          <span>{item}</span>
                        </li>
                      )
                    })}
                </ul>
                <button className="btn" onClick={()=>this.createGame()}>Create Game</button>
                <hr/>
              </div>}
        </div>
      </div>
    );
  }
}

export default Create;