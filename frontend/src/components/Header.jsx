import logo from '../assets/logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger ve kapatma ikonları

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Menü durumu için state

    const liste = [
        {
            name: 'Nasıl Çalışır?',
            go: "/how-it-works"
        },
        {
            name: 'Fiyatlandırma',
            go: "/pricing"
        },
        {
            name: 'Hakkında',
            go: "/about"
        }];

    return (
        <div className="h-auto w-full bg-black/90 font-suse">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <img onClick={() => navigate("/")} className="w-24 cursor-pointer" src={logo} alt="r_logo.png" />

                {/* Hamburger Menüsü */}
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </button>
                </div>

                {/* Menünün büyük ekranlarda görünmesi */}
                <ul className="hidden sm:flex space-x-4">
                    {liste.map((item, index) => (
                        <li className="text-white px-1.5 hover:text-white/80 transition-colors" key={index}>
                            <NavLink
                                to={item.go}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-fuchsia-500 border-b border-fuchsia-500 pb-1 px-1.5 transition-colors"
                                        : "text-white px-1.5 hover:text-white/80 transition-colors"
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Butonlar */}
                <div className="hidden sm:flex space-x-2">
                    <button
                    onClick={()=> navigate("/login")}
                        className="text-lg mx-2 text-white px-4 py-1 border-0 rounded-lg transition-colors hover:text-white/80">Giriş</button>
                    <button
                        onClick={()=> navigate("/signup")}
                        className="text-lg border-2 border-fuchsia-500 mx-2 hover:text-black px-4 py-1 text-white rounded-lg transition-colors hover:bg-fuchsia-500">ŞİMDİ BAŞLA</button>
                </div>
            </div>

            {/* Mobil menü */}
            {menuOpen && (
                <div className="sm:hidden flex flex-col items-center bg-black/90">
                    <ul className="flex flex-col space-y-4 mt-4">
                        {liste.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.go}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-fuchsia-500 border-b border-fuchsia-500 pb-1 transition-colors"
                                            : "text-white pb-1 hover:text-white/80 transition-colors"
                                    }
                                    onClick={() => setMenuOpen(false)} // Link tıklandığında menüyü kapat
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <div className="flex flex-col space-y-2 mt-4">
                            <button onClick={() =>navigate("/login")} className="text-lg text-white px-4 py-1 border-0 rounded-lg transition-colors hover:text-white/80">Giriş</button>
                            <button onClick={()=>navigate("/signup")} className="text-lg border-2 border-fuchsia-500 hover:text-black px-4 py-1 text-white rounded-lg transition-colors hover:bg-fuchsia-500">ŞİMDİ BAŞLA</button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
