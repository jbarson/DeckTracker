import React from 'react';
import base from '../base';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: {},
      accountsPending: true,
      players: {},
      games: {},
      gamesPending: true,
      game: ''
    }
  }

  componentWillMount() {
    this.accountsRef = base.syncState('accounts', {
      context: this,
      state: 'accounts'
    })
    //this.gamesRef=base.syncState('games',{content:this, state:'games'})
  }
  componentWillUnmount() {
    base.removeBinding(this.accountsRef);
    base.removeBinding(this.gamesRef);
  }
  createGame = () => {
    const players = this.state.players;
    const gameName = document
      .getElementById('gameName')
      .value;
    if (players.length === 0) {
      alert('game must include a player');
      return
    }
    if (!gameName) {
      alert('game must have a name');
      return
    }
    console.log("creating a game");
    base
      .push('games', {
      data: {
        players,
        name: gameName
      }
    })
      .then(game => this.setState({game: game.key}))

  }
  addPlayer = (player) => {
    const players = this.state.players
    if (!players.includes(player)) {
      players.push(player);
    }
    this.setState((state, props) => {
      return {players}
    });

  }
  removePlayer = (player) => {
    const players = this.state.players
    players.splice(players.indexOf(player), 1)
    this.setState((state, props) => {
      return {players}
    });
  }

  render() {
    return (
      <div className="container">
        <div className="show-div row">
          <div className="col-sm-4">

            <div className="well">
              <h3>Available Players</h3>
              <ul className="list-group">
                {Object
                  .keys(this.state.accounts)
                  .map((key) => {
                    return (
                      <li key={key} className="list-group-item">
                        <button className="btn btn-default btn-xs" onClick={() => this.addPlayer(key)}>Add to Game</button>
                        <span>{this.state.accounts[key].name}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>

          </div>
          <div className="col-sm-4">

            <div className="well">
              <h3>Current Participants</h3>
              <ul className="list-group">
                {Object
                  .keys(this.state.players)
                  .map((key) => {
                    return (
                      <li key={key} className="list-group-item">
                        <button className="btn btn-default btn-xs" onClick={() => this.removePlayer()}>Remove from Game</button>
                        <span>{key}</span>
                      </li>
                    )
                  })}
              </ul>
              <input id="gameName" placeholder="Name of game"/>
              <button className="btn btn-default" onClick={() => this.createGame()}>Create Game</button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well" > 
            <h3>Current Games</h3> 
            <ul className="list-group" > {
              Object
                .keys(this.state.games)
                .map((key) => {
                  return (
                    <li key={key} className="list-group-item">
                      <span>{this.state.games[key].name}</span>
                    </li>
                  )
                })
            } </ul>
                </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Create;