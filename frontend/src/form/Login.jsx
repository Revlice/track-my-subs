import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada, form verilerini bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz.
        console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
    };

    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
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
                    <a href="#" className="text-sm text-fuchsia-400 hover:text-fuchsia-500">Şifremi Unuttum?</a>
                </div>
                <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    Giriş
                </button>
                <p className="mt-4 text-center">
                    Kayıt olmadıysanız{' '}
                    <a href="#" className="text-fuchsia-400 hover:text-fuchsia-500 font-bold">
                        Kayıt Olun
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
