import { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();




    const handleSubmit =async (e) => {
        e.preventDefault();
        setError('');

        // Boş input kontrolü
        if (!email || !password || !confirmPassword) {
            setError('Tüm alanları doldurmanız gerekiyor.');
            return;
        }

        // Şifre ve şifre tekrarı kontrolü
        if (password !== confirmPassword) {
            setError('Şifreler uyuşmuyor.');
            return;
        }

        // Form verilerini burada işleyin (örneğin, bir API'ye gönderin)
        try{
            const response = await axios.post("http://localhost:3000/api/auth/signup",{
                email,
                password,
                confirmPassword
            })

            toast.success("Başarıyla kayıt olundu!");
            console.log("User registered",response.data);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setTimeout(()=>{
                navigate("/login")
            },1500)

        }catch(error){
            toast.error("Kullanıcı zaten bulunuyor");
            console.error("Error during signup",error.response.data);

        }



    };
    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
            <Toaster position="top-center"/>
            <form onSubmit={handleSubmit} className="bg-stone-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6">Kayıt Ol</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                        Şifre Tekrarı:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full p-3 rounded-lg bg-stone-700 text-white"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"
                        className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    Kayıt Ol!
                </button>
                <p className="mt-4 text-center">
                    Zaten kayıtlı mısınız ? {' '}
                    <Link to="/login" className="text-fuchsia-400 hover:text-fuchsia-500 font-bold">
                        Giriş Yapın
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
