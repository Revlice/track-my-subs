import logo from '../../assets/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { handleLogOut } from "../../store/loginAuth.js";
import {useNavigate} from "react-router-dom";

const PanelHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogoutClick = () => {
        dispatch(handleLogOut());
        navigate("/");
    };

    return (
        <div className="w-full h-auto bg-black/90 text-white">
            <div className="container mx-auto flex items-center justify-evenly">
                <div>
                    <img className="w-24" src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className="inline-flex">
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Abonelikler
                        </li>
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Raporlar

                        </li>
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Takvim
                        </li>
                    </ul>
                </div>
                <div
                    onMouseEnter={handleDropdownToggle}
                    onMouseLeave={handleDropdownToggle}
                    className="relative flex items-center cursor-pointer"
                >
                    <FaRegUserCircle className="size-10" />
                    <div className="ml-4">
                        <h1>Kullanıcı Adı</h1>
                    </div>
                    <FaArrowDown className="w-10" />

                    <div
                        className={`absolute right-0 mt-40 w-48 bg-white text-black rounded shadow-lg transition-all duration-300 transform 
                        ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profil</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ayarlar</li>
                            <li onClick={handleLogoutClick} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Çıkış</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanelHeader;

