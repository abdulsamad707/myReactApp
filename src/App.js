import logo from './logo.svg';
import './App.css';
import  MyForm  from "./component/form.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Web App  
          Welcome 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Code By Henrry And Thapa Technical

        </a>
      </header>
      <MyForm/>
    </div>
  
        
  );
}

export default App;
