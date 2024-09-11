import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Panel from './pages/Panel.jsx';
import HowItWorks from "./pages/HowItWorks.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Login from "./form/Login.jsx";
import SignUp from "./form/SignUp.jsx";
import { handleLogin, checkSession } from './store/loginAuth';

function App() {
    const isLoggedIn = useSelector((state) => state.login.login);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const loginTime = localStorage.getItem('loginTime') || sessionStorage.getItem('loginTime');

        if (token && loginTime) {
            dispatch(handleLogin({ login: true, loginTime: parseInt(loginTime, 10) }));
            dispatch(checkSession());
        }
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anasayfa" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/panel" element={isLoggedIn ? <Panel /> : <Navigate to="/login" />} />
            </Routes>
        </>
    );
}

export default App;
