import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ekip from "../assets/ekip.png";
import InformationCards from "../components/InformationCards.jsx";
import {motion} from 'framer-motion';



const About = () => {
    return (
        <>
            <Header />
            <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex flex-col items-center">
                <motion.div
                    initial={{translateX:100}}
                    animate={{translateX:0}}
                    className="container mx-auto flex flex-col md:flex-row items-center justify-around h-auto p-4">
                    <div className="flex flex-col mt-12 md:w-1/2 lg:w-1/3 text-center md:text-left">
                        <p className="text-3xl font-semibold mb-4 leading-loose">
                            Hakkımızda
                        </p>
                        <p className="text-lg font-medium leading-8">
                            Aboneliklerinizi kolayca takip edebilmeniz için çalışan bir ekibiz. Amacımız, dijital dünyadaki aboneliklerinizi düzenli tutmanızı sağlamak ve son ödeme tarihlerini kaçırmadan kontrol altında tutmanıza yardımcı olmaktır. Kullanıcı dostu platformumuz ile aboneliklerinizi yönetmek hiç olmadığı kadar kolay ve hızlı. Aboneliklerinizi bizimle unutmayın, hayatınıza odaklanın
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 flex justify-center">
                        <img className="w-60 scale-150" src={ekip} alt="logo" />
                    </div>
                </motion.div>

            <motion.div
                initial={{translateX:100}}
                animate={{translateX:0}}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-20 w-full max-w-6xl">
                    <InformationCards title="Güvenilir" />
                    <InformationCards title="Hizmetinizde" />
                    <InformationCards title="Destek Hattı" />
            </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default About;
