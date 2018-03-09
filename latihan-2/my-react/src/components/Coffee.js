import React, {Component} from 'react';
import '../myApp.css';

export default class Coffee extends Component {
	constructor(){
		super(); // untuk memanggil fungsi parent dari Method Constructor
		this.state = {
			numbers: 1, Pieces: 'Pcs' //case sensitive
		}
	}

	handleClick() { /* nama fungsi bebas */
		const number = this.state.numbers + 1; // cara panggil state => this.state.namaStatenya
		this.setState({
			// pilihan 1: numbers = nilai state dan number = nilai const / variabel;
			numbers: number,

			// pilihan 2: jika variabel output sama dgn nilai state maka sebutkan nilai statenya
			// numbers
		});
	}

	render() {
		const {bean, volume, type, color, margin, fontWeight} = this.props;
		
		return(
			<div>
				<h3>Coffee XYZ</h3>
				<ul>
					<li>Bean: {bean}</li>
					<li>Volume: {volume} Kg</li>
					<li>Type: {type}</li>
					<li className="list-style">Color: {color}</li>
					<li>
						Amount: {this.state.numbers} {this.state.Pieces}.
						<span className="amount" onClick={()=> this.handleClick()}>+</span>
					</li>
				</ul>
			</div>
		);
	}
}