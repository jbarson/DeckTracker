import React from 'react';
import base from '../base';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      accountsPending: true,
      players:[],
      game:''
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
    const players = this.state.players;
    if (players.length===0) {
      alert('game must include a player');
      return
    }
    console.log("creating a game");
    let game =base.push('games',{
      data: {players}
    }).then(game => this.setState({game: game.key}))
  }
  addPlayer=(player)=>{
    const players =this.state.players
    if (!players.includes(player)){
      players.push(player);
    }
    this.setState((state, props) => { return { players }});
    
  }
  removePlayer=(player)=>{
    const players =this.state.players
    players.splice(players.indexOf(player),1)
    this.setState((state, props) => { return { players }});
  }

  render() {
    return (
      <div className="container">
        <div className="show-div row">
          <div className="col-md-6">
          
            {this.state.accountsPending
                ?<h2>Loading...</h2>
                :<div className="well">
                  <h3>Available Players</h3>
                  <ul className="list-group">
                    {this
                      .state
                      .accounts
                      .map((item, index) => {
                        return (
                          <li key={index} className="list-group-item">
                            <button className="btn btn-default btn-xs" onClick={()=>this.addPlayer(item)}>Add to Game</button>
                            <span>{item}</span>
                          </li>
                        )
                      })}
                  </ul>
                </div>}
          
          </div>
          <div className="col-md-6">

            <div className="well">
              <h3>Current Participants</h3>
              <ul className="list-group">
                    {this
                      .state
                      .players
                      .map((item, index) => {
                        return (
                          <li key={index} className="list-group-item">
                            <button className="btn btn-default btn-xs" onClick={()=>this.removePlayer()}>Remove from Game</button>
                            <span>{item}</span>
                          </li>
                        )
                      })}
                  </ul>
                  <button className="btn btn-default" onClick={()=>this.createGame()}>Create Game</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;