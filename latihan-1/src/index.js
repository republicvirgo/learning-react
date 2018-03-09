import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
  	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
  	const [a, b, c] = lines[i];
		
		if (squares[a] && squares[a] === squares[b] 
    	&& squares[a] === squares[c]) {

      return squares[a];
    }
  }

  return null;
}

function KotakKotak(props) {
  return (
    <button className="kotak" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class PapanPermainan extends React.Component {
  /* step 10: constructor dipindah ke 
  class Permainan */
  // constructor(props) {}

  /* step 10: pindahkan fungsi handleClick 
  ke Class Permainan */
  // handleClick(i) {}

  renderKotak(i) {
  	/* step 10: gunakan props mengantikan state */
    return (
      <KotakKotak
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

	render() {
		/* step 10: pindah ke Class Permainan */
		/* const winner ... if (winner) {} */

    return (
    	<div>
        {/* step 10: div status dihapus
        <div className="status">{status}</div>
      	*/}

        <div className="board-row">
          {/* tampilkan renderKotak dari atas */}
          {this.renderKotak(0)}
          {this.renderKotak(1)}
          {this.renderKotak(2)}
        </div>

        <div className="board-row">
          {this.renderKotak(3)}
          {this.renderKotak(4)}
          {this.renderKotak(5)}
        </div>

        <div className="board-row">
          {this.renderKotak(6)}
          {this.renderKotak(7)}
          {this.renderKotak(8)}
        </div>
      </div>
    );
  }
}

class Permainan extends React.Component {
  /* step 10: pindah dari Class PapanPermainan */
  constructor(props) {
    super(props);
    this.state = {
      /* step 10: ditambahkan state history 
      permainan dan stepNumber */
      history: [
	      {
	        squares: Array(9).fill(null),
	      }
      ],
      stepNumber: 0,

      xIsNext: true,
    };
  }

  handleClick(i) {
  	/* step 10: Pindah dari Class PapanPermainan */
  	const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
		const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    this.setState({
    	/* step 10: update state history 
    	dan stepNumber */
    	history: history.concat([
	    	{
	        squares: squares,
	      }
      ]),
    	stepNumber: history.length,

    	xIsNext: !this.state.xIsNext,
    });
  }

  /* step 10: buat fungsi jumpTo 
  untuk update stepNumber dan xIsNext */
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
  	/* step 10: */
  	const history = this.state.history;
    const current = history[this.state.stepNumber];
    
    /* step 10: pindah dari Class PapanPermainan */
    const winner = calculateWinner(current.squares);

    /* step 10: membuat history pergerakan pemain */
    const moves = history.map((step, move) => {
      const desc = move ?
        'Langkah ke-' + move :
        'Mulai Permainan Baru';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    /* step 10: pindah dari Class PapanPermainan */
    let status;
    if (winner) {
      status = 'Pemenang: ' + winner;
    } else {
      status = 'Pemain Selanjutnya: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          {/* step 10: */}
        	<PapanPermainan
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>

        <div className="game-info">
          <div>
          	{/* step 10: variabel status */}
          	{status}
          </div>
          <ol>
        		{/* step 10: variabel status */}
          	{moves}
          </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Permainan/>,
  document.getElementById('root')
);

