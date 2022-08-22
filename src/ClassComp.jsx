import React, { Component } from 'react';

export class Person extends Component {
	render() {
		return <div>class {this.state.name}</div>;
	}
}

// prev: <div key={1} style={{ color: 'blue' }} >class Ayxan</div>
// now: <div key={1} style={{ color: 'red' }}>class Nadir</div>
