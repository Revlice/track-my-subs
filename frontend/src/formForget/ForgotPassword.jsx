import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
            toast.success('E-posta gönderildi. Lütfen e-posta adresinizi kontrol edin.');
            navigate('/reset-password');
        } catch (error) {
            toast.error('Bir hata oluştu. Lütfen e-posta adresinizi kontrol edin.');
            console.error('Error sending reset email:', error.response.data);
        }
    };

    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="bg-stone-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6">Şifremi Unuttum</h2>
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
                <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    E-posta Gönder
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
