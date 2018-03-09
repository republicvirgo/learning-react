import React from 'react';
// import component dari react engine

import ReactDOM from 'react-dom';
// import component ReactDOM dari react-dom engine

import './index.css';
// import file index.css

//import App from './App';
// import component App dari file App.js

import NamaComponentBebas from './my_app';
// import NamaComponentBebas wajib diawali huruf besar (format Camel Case / Pascal Case)
// from './my_app' harus sama besar kecil huruf dgn nama filenya

//import registerServiceWorker from './registerServiceWorker';
// import component registerServiceWorker dari file registerServiceWorker.js

ReactDOM.render(<NamaComponentBebas />, document.getElementById('root'));
// <NamaComponentBebas /> diambil dari import NamaComponentBebas wajib sama besar kecil hurufnya

//ReactDOM.render(<App />, document.getElementById('root'));
// menjalankan fungsi render dari komponen App untuk memanipulasi 
// struktur HTML dgn element/tag ber id 'root'

//registerServiceWorker();
// menjalankan function registerServiceWorker dari file registerServiceWorker.js

