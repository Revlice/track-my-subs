import logo from '../assets/logo.png';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="w-full h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex flex-col items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around h-auto p-4">
                <div className="flex flex-col mt-12 md:w-1/2 lg:w-1/3">
                    <p className="text-3xl font-semibold mb-4 leading-loose">
                        Tüm abonelikleriniz tek bir yerde düzenlendi
                    </p>
                    <p className="text-lg font-medium leading-8">
                        Abonelik izleyicimiz tüm aboneliklerinizi kontrol altına almanızı ve gereksiz ücretlerden kaçınmanızı sağlar. Bir sonraki ödemenizden önce kişiselleştirilmiş uyarılar almanızı sağlar.
                    </p>
                    <button onClick={()=>navigate('/panel')} className="px-4 py-3 mt-4 bg-white text-black rounded-xl text-xl hover:bg-fuchsia-500 hover:text-white transition-colors">Aboneliklerinizi Ekleyin</button>
                    <p className="font-light text-sm mt-8">10. Parça Abonelikleri ÜCRETSİZ, Yükseltme için sadece Kredi Kartınızı ekleyin</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <img className="w-52 scale-150" src={logo} alt="logo" />
                </div>
            </div>
        </motion.div>
    );
};

export default Main;
