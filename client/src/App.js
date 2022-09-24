import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import MainPage from './components/MainPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<MainPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Route>
        <Route 
          path='*' 
          element={
          <div>
            <p>Route Not Found</p>
          </div>
          }
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
