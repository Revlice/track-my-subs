import { FaCalendarCheck } from "react-icons/fa";
import { AiFillApi, AiFillControl } from "react-icons/ai";
import { IoMdMegaphone } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

const Section2 = () => {
    const liste = [
        {
            name: 'Takvim',
            icon: FaCalendarCheck,
            color: "text-fuchsia-300",
            sentence: "Hangi ödemelerin hangi gün yapılacağını görün. 12 aylık görünümde büyük aylar ve yıllık harcamalar öne çıkıyor."
        },
        {
            name: 'Entegrasyonlar',
            icon: AiFillApi,
            color: "text-red-300",
            sentence: "Zapier ile diğer tüm uygulamalarınıza bağlanın. Favori platformunuzda uyarılar oluşturun."
        },
        {
            name: 'Organizasyonlar',
            icon: AiFillControl,
            color: "text-blue-300",
            sentence: "Derin organizasyon özellikleri her aboneliği doğru varlıklarla eşleştirmenizi sağlar."
        },
        {
            name: 'Uyarılar',
            icon: IoMdMegaphone,
            color: "text-yellow-300",
            sentence: "Önceden ayarlanmış uyarılarla ödemelerinizi asla kaçırmayın. Tüm cihazlarınızda entegre bildirimler alın."
        },
        {
            name: 'Bulut Yedekleme',
            icon: FaCloudUploadAlt,
            color: "text-green-300",
            sentence: "Tüm verilerinizi güvenli bir şekilde bulut üzerinde saklayın ve her yerden erişin."
        }
    ];

    return (
        <div className="w-full h-auto text-white bg-gradient-to-b from-stone-900 to-fuchsia-800 py-12">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold">Özellikler</h2>
                    <p className="text-md lg:text-lg mt-2 font-light">
                        Aboneliklerinizi yönetmenizi sağlayan güçlü özellikler
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {liste.map((item, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-2xl  backdrop-brightness-75 transition-shadow">
                            <div className={`flex justify-center items-center text-5xl mb-4 ${item.color}`}>
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-md font-light">{item.sentence}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section2;
