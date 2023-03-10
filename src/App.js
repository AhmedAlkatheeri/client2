import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import { BrowserRouter } from 'react-router-dom'
import Routers from './components/Routers';

function App() {
  return (
    
    <div className="App">
    
      <BrowserRouter>  
    <Header> </Header> 
    <Routers> </Routers>
    <Footer> </Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
