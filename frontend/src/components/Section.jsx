import { useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";

const Section = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoURL = "https://trackmysubs.com/wp-content/uploads/2022/06/11-TrackMySubs-Keep-track-of-your-subscriptions.mp4";
    const imageURL = "https://trackmysubs.com/wp-content/uploads/2022/06/vg-what-you-need-to-know-as-an-entrepreneur.jpg";

    const handlePlayVideo = () => {
        setIsPlaying(true);
        const videoElement = document.getElementById("myVideo");
        if (videoElement) {
            videoElement.play();
        }
    };

    return (
        <div className="w-full h-screen text-white bg-gradient-to-t from-stone-900 to-fuchsia-800">
            <div className="container mx-auto flex flex-col items-center p-4">
                <h1 className="font-bold text-4xl text-center">İptal etmeyi unuttuğunuz faturaları ödemekten nefret mi ediyorsunuz?</h1>
                <div className="flex flex-col lg:flex-row items-center mt-8 space-y-8 lg:space-y-0 lg:space-x-12">
                    <div className="relative w-full lg:w-[60%] h-auto cursor-pointer">
                        {isPlaying ? (
                            <video id="myVideo" className="w-full h-auto" controls src={videoURL}></video>
                        ) : (
                            <div onClick={handlePlayVideo}>
                                <img src={imageURL} alt="Video Placeholder" className="w-full h-auto" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-fuchsia-500 hover:text-white hover:bg-fuchsia-600 bg-opacity-50 text-black transition-all w-20 h-20 flex justify-center items-center rounded-full">
                                        <FaPlay className="scale-150" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="font-suse text-center lg:text-left">
                        <h2 className="text-2xl font-bold mb-4">Başka Bir Aboneliği Asla Unutma</h2>
                        <p className="text-md font-medium mb-4">Zaman ve paradan tasarruf etmeniz için özel olarak tasarlanmış bir abonelik izleyicisi. Ödemeleri hatırlamaya veya karmaşık bir elektronik tablo kullanmaya çalışmayı bırakın.</p>
                        <ul className="text-md font-light space-y-4">
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-1 text-fuchsia-400" />
                                <p>Ödemenizden ÖNCE E-posta Uyarıları</p>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-1 text-fuchsia-400" />
                                <p>Zamanlamayı ve Bildirimleri Özelleştirin</p>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <VscCheck className="text-xl pr-1 text-fuchsia-400" />
                                <p>Birden Fazla E-postaya Uyarı Gönder</p>
                            </li>
                        </ul>
                        <div className="flex flex-col text-center lg:text-left mt-10">
                            <button className="px-4 py-2 rounded-lg bg-fuchsia-300 text-black hover:text-white hover:bg-fuchsia-500 transition-colors">Ücretsiz Başlayın</button>
                            <p className="font-extralight text-sm opacity-50 mt-2">Kredi Kartı gerekmez</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
