import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import sosyalmedya from "../assets/sosyalmedya.png";
import {motion} from 'framer-motion';

const HowItWorks = () => {
    return (
        <>
            <Header />

            <div className="w-full min-h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex flex-col items-center py-12">
                <motion.div
                    initial={{translateY:-100}}
                    animate={{translateY:0}}
                    transition={{duration:0.2}}
                    className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4">
                    <div className="flex flex-col md:w-1/2 lg:w-1/2 lg:pr-8">
                        <p className="text-2xl md:text-3xl font-semibold mb-4 leading-relaxed">
                            Abonelik Takip Uygulaması Nedir?
                        </p>
                        <p className="text-base md:text-lg font-medium leading-relaxed">
                            Abonelik Takip Uygulaması, kullanıcıların çeşitli hizmetlere ait aboneliklerini kolayca
                            yönetebilmelerini sağlayan bir platformdur. Uygulama, kullanıcının tüm aboneliklerini tek
                            bir yerde toplamasına olanak tanır ve bu sayede ödeme tarihlerini, abonelik sürelerini ve
                            ücretlendirme detaylarını düzenli olarak takip edebilmesini sağlar. Kullanıcılar,
                            aboneliklerini sisteme ekledikten sonra yaklaşan ödeme tarihleri için bildirim alır, böylece
                            ödemelerini zamanında yaparak gecikme ya da unutma durumlarından kaçınır. Ayrıca, uygulama
                            sunduğu raporlama özellikleriyle kullanıcılara aylık ve yıllık bazda abonelik harcamalarını
                            analiz etme imkanı tanır. Bu özellikler, kullanıcıların bütçe yönetimini daha etkin bir
                            şekilde yapmalarına yardımcı olur. Aboneliklerin yenileme veya iptal zamanlarını hatırlatan
                            sistem, gereksiz abonelikleri sonlandırma ve maliyetleri optimize etme konusunda da
                            kullanıcıya rehberlik eder.
                        </p>
                        <button className="px-4 py-3 mt-4 bg-white text-black rounded-xl text-base md:text-xl hover:bg-fuchsia-500 hover:text-white transition-colors">
                            Hemen Başlayın
                        </button>
                    </div>

                    <div className="flex justify-center md:w-1/2">
                        <img className="w-80 md:w-96 lg:w-[450px] mx-auto" src={sosyalmedya} alt="sosyalmedya" />
                    </div>
                </motion.div>
            </div>

            <Footer />
        </>
    );
};

export default HowItWorks;
