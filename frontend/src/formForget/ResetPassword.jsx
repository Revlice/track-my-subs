import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/auth/reset-password', {
                email,
                token,
                newPassword
            });
            toast.success('Şifreniz başarıyla sıfırlandı.');
            navigate('/login');
        } catch (error) {
            toast.error('Şifre sıfırlama işlemi başarısız.');
            console.error('Error resetting password:', error.response.data);
        }
    };

    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="bg-stone-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6">Şifre Sıfırlama</h2>
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
                    <label htmlFor="token" className="block text-sm font-medium mb-2">
                        Doğrulama Kodu:
                    </label>
                    <input
                        type="text"
                        id="token"
                        className="w-full p-3 rounded-lg bg-stone-700 text-white"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
                        Yeni Şifre:
                    </label>
                    <input
                        type="password"
                        id="newPassword"
                        className="w-full p-3 rounded-lg bg-stone-700 text-white"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    Şifreyi Sıfırla
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
