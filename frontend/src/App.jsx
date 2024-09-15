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
import ForgotPassword from './formForget/ForgotPassword.jsx';
import ResetPassword from './formForget/ResetPassword.jsx';
import { handleLogin, checkSession } from './store/loginAuth';

// Admin Panel Sayfaları
import Subscriptions from './pages/Subscriptions.jsx';
import Reports from './pages/Reports.jsx';
import Calendar from './pages/Calendar.jsx';

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
                {/* Genel Sayfalar */}
                <Route path="/" element={<Home />} />
                <Route path="/anasayfa" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Admin Panel */}
                <Route path="/panel" element={isLoggedIn ? <Panel /> : <Navigate to="/login" />} />

                {/* Admin Panel İç Sayfalar (Abonelikler, Raporlar, Takvim) */}
                <Route path="/subscriptions" element={isLoggedIn ? <Subscriptions /> : <Navigate to="/login" />} />
                <Route path="/reports" element={isLoggedIn ? <Reports /> : <Navigate to="/login" />} />
                <Route path="/calendar" element={isLoggedIn ? <Calendar /> : <Navigate to="/login" />} />
            </Routes>
        </>
    );
}

export default App;
