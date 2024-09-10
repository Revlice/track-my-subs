import { VscCheck } from "react-icons/vsc";
import abonePicture from '../assets/abone4.png';


const Section = () => {
    return (
        <div className="w-full min-h-screen text-white bg-gradient-to-t from-stone-900 to-fuchsia-800 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
                    İptal etmeyi unuttuğunuz faturaları ödemekten nefret mi ediyorsunuz?
                </h1>
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
                    <div className="flex-1 flex items-center justify-center">
                        <img className="w-full" src={abonePicture} alt="abone" />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                            Başka Bir Aboneliği Asla Unutma
                        </h2>
                        <p className="text-base md:text-lg font-medium mb-4">
                            Zaman ve paradan tasarruf etmeniz için özel olarak tasarlanmış bir abonelik izleyicisi.
                            Ödemeleri hatırlamaya veya karmaşık bir elektronik tablo kullanmaya çalışmayı bırakın.
                        </p>
                        <ul className="text-base md:text-md font-light space-y-4">
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-2 text-fuchsia-400" />
                                <p>Ödemenizden ÖNCE E-posta Uyarıları</p>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-2 text-fuchsia-400" />
                                <p>Zamanlamayı ve Bildirimleri Özelleştirin</p>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-2 text-fuchsia-400" />
                                <p>Birden Fazla E-postaya Uyarı Gönder</p>
                            </li>
                        </ul>
                        <div className="flex flex-col items-center lg:items-start mt-8">
                            <button className="px-4 py-2 rounded-lg bg-fuchsia-300 text-black hover:text-white hover:bg-fuchsia-500 transition-colors">
                                Ücretsiz Başlayın
                            </button>
                            <p className="font-extralight text-sm opacity-50 mt-2">Kredi Kartı gerekmez</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
