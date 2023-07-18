import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from "react-router";
import NavBar from './components/Navbar'
import FavList from './components/FavList'

function App() {
  return (
    <div className="App">
      <NavBar/>
   {/* <Home/> */}
   <Routes>
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/favList" element={<FavList/>} />
                </Routes>
    </div>
  );
}

export default App;
