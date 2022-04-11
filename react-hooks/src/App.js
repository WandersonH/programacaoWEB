import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Teste from './Componentes/teste'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/teste">Teste</Link> 
      <Routes>
        <Route path="/teste" element={<Teste />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
