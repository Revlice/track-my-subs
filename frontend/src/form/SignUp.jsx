import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
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
        console.log('Email:', email, 'Password:', password);

        // Form başarılı bir şekilde gönderildiğinde inputları temizle
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex justify-center items-center">
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
                <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg">
                    Kayıt Ol!
                </button>
            </form>
        </div>
    );
};

export default SignUp;
