import React from 'react';
import { FaCheckCircle, FaHeadset, FaShieldAlt } from 'react-icons/fa'; // Modern ikonlar

const InformationCards = ({ title }) => {
    // Kart başlıklarına göre açıklamalar ve ikonlar
    const cardData = {
        "Güvenilir": {
            description: "Veri güvenliği ve gizlilik bizim önceliğimizdir. Aboneliklerinizi güvenli bir şekilde takip edin.",
            icon: <FaShieldAlt className="text-blue-500 text-4xl mb-4" /> // Güvenlik simgesi
        },
        "Hizmetinizde": {
            description: "Her zaman sizin yanınızdayız. Destek ekibimiz, sorularınızı yanıtlamak için hazır.",
            icon: <FaCheckCircle className="text-green-500 text-4xl mb-4" /> // Hizmet simgesi
        },
        "Destek Hattı": {
            description: "7/24 hizmet veren destek hattımız ile sorularınıza hızlı çözümler bulun.",
            icon: <FaHeadset className="text-red-500 text-4xl mb-4" /> // Destek simgesi
        }
    };

    const card = cardData[title];

    return (
        <div className="bg-fuchsia-950 shadow-lg rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out max-w-sm mx-auto">
            {card.icon} {/* İkon */}
            <h3 className="text-xl text-white font-semibold mb-12">{title}</h3>
            <p className="text-fuchsia-100">{card.description}</p>
        </div>
    );
};

export default InformationCards;
