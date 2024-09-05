import logo from '../assets/logo.png';
import {NavLink,useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();


    const liste = [
        {
            name:'Nasıl Çalışır?',
            go:"/how-it-works"
        },
        {
            name:'Fiyatlandırma',
            go:"/pricing"
        },
        {
            name:'Blog',
            go:"/blog"
        },
        {
            name:'Hakkında',
            go:"/about"
        }];

    return (
        <div className="h-auto w-full bg-black/90 font-suse">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                <img onClick={()=> navigate("/")} className="w-24 cursor-pointer" src={logo} alt="r_logo.png" />
                <ul className="inline-flex space-x-4">
                    {liste.map((item, index) => (
                        <li  className="text-white px-1.5 hover:text-white/80 transition-colors" key={index}>
                            <NavLink
                                to={item.go}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-fuchsia-500 border-b w-full border-fuchsia-500 pb-1 px-1.5 transition-colors"  // Aktif link için stil
                                        : "text-white px-1.5 hover:text-white/80 transition-colors" // Aktif olmayanlar için stil
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                    <button className="text-lg mx-2 text-white px-4 py-1 border-0 rounded-lg transition-colors hover:text-white/80">Giriş</button>
                    <button className="text-lg border-2 border-fuchsia-500 mx-2 hover:text-black px-4 py-1 text-white rounded-lg transition-colors hover:bg-fuchsia-500">ŞİMDİ BAŞLA</button>
                </div>
            </div>
        </div>
    )
};

export default Header;
