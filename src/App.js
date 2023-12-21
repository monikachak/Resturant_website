// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Menu} from './pages/Menu'
import {Pagenotfound} from "./pages/Pagenotfound"



function App() {  
  return (
    <div>
      {/* <h1>Restorent-Website</h1>
      <Layout/> */}
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
