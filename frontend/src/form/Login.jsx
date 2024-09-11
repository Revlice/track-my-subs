import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin, checkSession } from "../store/loginAuth.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.login);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password,
            });

            const { token } = response.data;
            const loginTime = new Date().getTime();

            if (rememberMe) {
                localStorage.setItem('token', token);
                localStorage.setItem('loginTime', loginTime);
            } else {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('loginTime', loginTime);
            }

            toast.success("Başarıyla giriş yapıldı");
            dispatch(handleLogin({ login: true, loginTime }));
            navigate("/panel");

        } catch (error) {
            toast.error("Hatalı e-posta veya şifre!");
            console.error("Error during signup", error.response.data);
        }
    };

    useEffect(() => {
        dispatch(checkSession());
        if (isLoggedIn) {
            navigate("/panel");
        }
    }, [dispatch, isLoggedIn, navigate]);

    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="bg-stone-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6">Giriş</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-posta:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-stone-700 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Şifre:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded-lg bg-stone-700 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="mr-2"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe" className="text-sm">Beni Hatırla</label>
                    </div>
                    <a href="/forgot-password" className="text-sm text-fuchsia-400 hover:text-fuchsia-500">Şifremi Unuttum?</a>
                </div>
                <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    Giriş
                </button>
                <p className="mt-4 text-center">
                    Kayıt olmadıysanız{' '}
                    <Link to="/signup" className="text-fuchsia-400 hover:text-fuchsia-500 font-bold">
                        Kayıt Olun
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
    