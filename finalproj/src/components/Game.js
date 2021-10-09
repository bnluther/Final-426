import React from 'react';
import Heart from'./hearticon.js';
import Music from './musicicon.js';
import Navbar from './Navbar.js';

function Space(props) {
    return <button className="space" onClick={props.onClick}> {props.value} </button>;
};

function findDraw(moves){
    if (moves === 9) {
        return true; 
    } else { 
        return false; 
    }
};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spaces: Array(9).fill(null),
            temp_spaces: Array(9).fill(null),
            moves: 0,
            player_one_next: true
        };
        this.base_state = this.state;
    }

    restart = () => {
        this.setState(this.base_state);
    }

    handleClick(i) {
        const spaces = this.state.spaces.slice();
        const temp_spaces = this.state.temp_spaces.slice();
        if(findWinner(temp_spaces)||temp_spaces[i]){
            return;
        } else {
            spaces[i]=this.state.player_one_next ? <Music /> : <Heart />;
            temp_spaces[i]=this.state.player_one_next ? '1' : '0';
            this.setState({
                spaces: spaces,
                temp_spaces: temp_spaces,
                moves: this.state.moves+1,
                player_one_next: !this.state.player_one_next
            });
        }
    }

    renderSpace(i) {
        return(
            <Space
            value={this.state.spaces[i]}
            onClick={()=>this.handleClick(i)} />
        );
    }
  
    render(){
        const winner=findWinner(this.state.temp_spaces);
        const draw = findDraw(this.state.moves);
        let end_result;
        let status;

        if(winner){
            end_result='WINNER';
            status = (!this.state.player_one_next ? 'PLAYER ONE' : 'PLAYER TWO') + ' WON!';
        } else if (draw){
            end_result = 'DRAW GAME';
            status = '';
        } else {
            status = (this.state.player_one_next ? 'PLAYER ONE' : 'PLAYER TWO') + ' IS NEXT';
        }

        return(
            <div>
                <div className="game-text" style ={{fontSize:"40px", marginBottom:".5px"}}>{end_result}</div>
                <div className="game-text">{status}</div>
                <div className="grid-row">
                    {this.renderSpace(0)}
                    {this.renderSpace(1)}
                    {this.renderSpace(2)}
                </div>
                <div className="grid-row">
                    {this.renderSpace(3)}
                    {this.renderSpace(4)}
                    {this.renderSpace(5)}
                </div>
                <div className="grid-row">
                    {this.renderSpace(6)}
                    {this.renderSpace(7)}
                    {this.renderSpace(8)}
                </div> 
                <div><Button reset={this.restart}/></div>  
            </div>
        );
    }
}

const Button = (props) => {
    return (
      <div>
        <button onClick={props.reset} style={{marginTop: "40px"}}>Restart
        </button>
      </div>
    );
}

class Game extends React.Component {
    render() { 
        return (
            <div>
                <Navbar />
                <div className="game-container">
                    <div className="game-text" style={{fontSize:"50px"}}>Play a game of Tic Tac Toe!</div>
                    <div className="game">
                        <Board />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;

function findWinner(temp_spaces) {
    const winning_rows=[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],[2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i=0; i<winning_rows.length; i++) {
        const[x, y, z] = winning_rows[i];
        if(temp_spaces[x] === temp_spaces[y] && temp_spaces[x] === temp_spaces[z]) {
            return temp_spaces[x];
        }
    }
    return null;
};