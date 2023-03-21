import './App.css';
import Clock from './components/clock';
import Card from './components/card';
import Menu from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Clock/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
