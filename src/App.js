import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const obj = {
    name : "Siva",
    rol : 22,
    age : 20
  } 

  return (
    <div className="App">
      <Header />
      <Main data = {obj}/>
    </div>
  );
}

export default App;
