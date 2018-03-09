import React, { Component } from 'react'; 
// import/loading component react
// { Component } utk menjadikan App.js sebagai Component tambahan yang di panggil komponen lainnya

import logo from './logo.svg'; 
// import gambar logo.svg

import './App.css'; 
// import App.css

class App extends Component { // buat class dgn nama App
  render() { // function render() untuk menampilkan nilai return ke browser dalam bentuk HTML
    return ( 

      // start of syntax jsx (javascript library for HTML)
      <div className="App">
        <header className="App-header"> 
        {/* comment di jsx */}
        {/* tidak gunakan class tp className (camel case) yang artinya case sensitive */}
          <img src={logo} className="App-logo" alt="logo" /> 
          {/* logo => diambil dari deklarasi komponen logo diatas */}
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      // end of syntax jsx
    );
  }
}

export default App; // meng-export komponen App.js supaya bisa di import oleh komponen lain

// alternatif pembuatan class tanpa harus membuat export default NamaClass secara terpisah
// export default class NamaClass extends Component { ... }

