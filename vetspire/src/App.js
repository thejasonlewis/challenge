
import './App.css';
import Dogs from './components/dogs'
import logo from './vetspire.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Navbar/> */}
        <img className="logo" src={logo} alt="vetspire"/>
        <Dogs/>
         
        
        Tests
      </header>
    </div>
  );
}

export default App;
