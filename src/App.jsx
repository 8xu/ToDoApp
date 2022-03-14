import header from './components/Header';
import main from './components/main';
import './App.css';

function App() {

  return (
    <div className="App">
      {header()}
      
      {main()}
    </div>
  )
}

export default App
