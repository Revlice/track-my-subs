import logo from '../../assets/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowDownward } from "react-icons/md";
const PanelHeader = ()=>{



    return(
        <div className="w-full h-auto bg-black/90 text-white">
            <div className="container mx-auto flex items-center justify-evenly">
                <div>
                    <img className="w-24 " src={logo} alt=""/>
                </div>
                <div>
                    <ul className="inline-flex">
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Abonelikler
                        </li>
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Raporlar
                            <MdArrowDownward className="size-5"/>
                        </li>
                        <li className="cursor-pointer flex items-center transition-colors text-fuchsia-200 pr-12 hover:text-fuchsia-50">
                            Takvim
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <FaRegUserCircle className="size-10"/>
                    <div className="ml-4">
                    <h1>Kullanıcı Adı</h1>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PanelHeader;
