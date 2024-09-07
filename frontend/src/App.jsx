import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Panel from './pages/Panel.jsx';
import HowItWorks from "./pages/HowItWorks.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Login from "./form/Login.jsx";
import SignUp from "./form/SignUp.jsx";

function App() {


  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/anasayfa" element={<Home/>}/>
            <Route path="/how-it-works" element={<HowItWorks/>}></Route>
            <Route path="/pricing" element={<Pricing/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/panel" element={<Panel/>}></Route>
            <Route path="/login" exact element={<Login/>}></Route>
            <Route path="/signup" exact element={<SignUp/>}></Route>
        </Routes>
    </>
  )
}

export default App
