import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import logo from "../assets/logo.png";


const HowItWorks = ()=>{

    return(
        <>
            <Header/>
            <div
                className="w-full h-screen text-white font-suse bg-gradient-to-b from-stone-900 to-fuchsia-800 flex flex-col items-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-around h-auto p-4">
                    <div className="flex flex-col mt-12 md:w-1/2 lg:w-1/3">
                        <p className="text-3xl font-semibold mb-4 leading-loose">
                            Abonelik Takip Uygulaması Nedir?
                        </p>
                        <p className="text-lg font-medium leading-8">

                            Abonelik Takip Uygulaması, kullanıcıların çeşitli hizmetlere ait aboneliklerini kolayca yönetebilmelerini sağlayan bir platformdur. Uygulama, kullanıcının tüm aboneliklerini tek bir yerde toplamasına olanak tanır ve bu sayede ödeme tarihlerini, abonelik sürelerini ve ücretlendirme detaylarını düzenli olarak takip edebilmesini sağlar. Kullanıcılar, aboneliklerini sisteme ekledikten sonra yaklaşan ödeme tarihleri için bildirim alır, böylece ödemelerini zamanında yaparak gecikme ya da unutma durumlarından kaçınır. Ayrıca, uygulama sunduğu raporlama özellikleriyle kullanıcılara aylık ve yıllık bazda abonelik harcamalarını analiz etme imkanı tanır. Bu özellikler, kullanıcıların bütçe yönetimini daha etkin bir şekilde yapmalarına yardımcı olur. Aboneliklerin yenileme veya iptal zamanlarını hatırlatan sistem, gereksiz abonelikleri sonlandırma ve maliyetleri optimize etme konusunda da kullanıcıya rehberlik eder.
                        </p>
                        <button
                            className="px-4 py-3 mt-4 bg-white text-black rounded-xl text-xl hover:bg-fuchsia-500 hover:text-white transition-colors">
                            Hemen Başlayın
                        </button>

                    </div>

                    <div className="mt-8 md:mt-0">
                        <img className="w-52 scale-150" src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default HowItWorks;
