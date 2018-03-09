import React, {Component} from 'react';

export default class ComponentLifeCycle extends Component {
	// Function componentWillMount() akan di Mount/loading di awal sebelum fungsi render running
	componentWillMount() {
		console.log('componentWillMount');
	}

	// Function componentDidMount() akan di Mount/loading setelah fungsi render running
	componentDidMount() {
		console.log('componentDidMount');
	}

	// Function componentWillReceiveProps() akan berfungsi setelah ada Props yang di jalankan
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	}

	// Function componentWillUnmount() berfungsi untuk meng-unmount component yang di mount/loading
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		return(
			<div>
				<p>React Component Life Cycle</p>
			</div>
		);
	}
}