
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Product_detail } from './pages/Product_detail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
      {/* <Product_detail/> */}
    </div>
  );
}

export default App;
