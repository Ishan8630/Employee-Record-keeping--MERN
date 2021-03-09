import './App.css';
import Add from './components/Add'
import Show from './components/Show'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Add} />
          <Route path="/display" component={Show} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
