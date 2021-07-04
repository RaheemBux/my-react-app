import logo from './logo.svg';
import './App.css';
import React from 'react';
let users  = [
  {
    name : "Rahim Bux",
    age : "24"
  },
  {
    name : "Roshan",
    age : "25"
  },
  {
    name : "Sanaullah",
    age : "26"
  }


]
function App() {
  return <React.Fragment>
    <div className="App">
      <header className="App-header">
        <h1>Hello Welcome to World of React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>List of Employes</h3>
        <ol>
        {
          users.map(user=><li>{user.name}</li>)
        }
        </ol>
        
      </header>
    </div>
  </React.Fragment>
}

export default App;
