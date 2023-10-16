import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Service/>
     <Contact/>
    </div>
  );
}

export default App;
