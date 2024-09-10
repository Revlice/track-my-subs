import logo from '../assets/logo.png';
import {FaInstagram, FaLinkedin,FaGithub} from "react-icons/fa";


const Footer = ()=>{
    const liste = ['Nasıl Çalışır?', 'Fiyatlandırma', 'Blog', 'Hakkında'];
    const liste2 = [{
        name:"Instagram",
        icon:FaInstagram,
    },{
        name:"Linkedin",
        icon:FaLinkedin,
    },{
        name:"GitHub",
        icon:FaGithub,
    }];
    return(
        <div className="w-full h-auto bg-stone-900 text-white flex items-center flex-col">
            <div className="container mx-auto pt-12">
                <div className="flex items-center justify-between">
                    <div>
                        <img className="w-32" src={logo} alt="resim.png"/>
                        <a className="hover:text-white text-sky-200 cursor-pointer">rahmicantut052@gmail.com</a>
                    </div>
                    <div>
                        <ul>
                            {liste.map((item,index)=>(
                                <li className="text-white px-1.5 hover:text-white/80 transition-colors cursor-pointer" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="inline-flex  flex-col justify-center">
                            {liste2.map((item,index)=>(
                                <li className="text-white inline-flex  items-center  px-1.5 hover:text-white/80 transition-colors cursor-pointer" key={index}>
                                    <item.icon/>
                                    <p className="pl-2 ">{item.name}</p></li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="mt-12 w-1/2 flex justify-center items-center flex-col">
                <p className="font-extralight">Bu sitedeki materyal yalnızca genel bilgi amaçlı sağlanmıştır ve birincil, daha doğru, daha eksiksiz
                    veya daha güncel bilgi kaynaklarına danışılmadan karar almanın tek temeli olarak güvenilmemeli veya
                    kullanılmamalıdır. Bu sitedeki materyale güvenmek kendi riskinizdir.</p>
                <p className="font-medium">coded by Revlice <span className="font-extrabold">@2024</span></p>
            </div>
        </div>
    )
};

export default Footer;
