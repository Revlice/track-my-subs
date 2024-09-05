import { VscCheck } from "react-icons/vsc";

const PriceCards = ({ title, price, features , shadowColor,borderTColor}) => {
    return (
        <div className={`"bg-stone-900 p-8 rounded-lg shadow-xl border-t-4 ${shadowColor} ${borderTColor}  transition-shadow"`}>
            <h3 className="text-xl lg:text-2xl font-semibold text-center mb-4">{title}</h3>
            <p className="text-3xl lg:text-4xl font-bold text-center mb-6">{price}</p>
            <ul className="text-md lg:text-lg font-light mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-3">
                        <VscCheck className="text-xl pr-2 text-fuchsia-400" />
                        {feature}
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <button className="px-6 py-3 bg-fuchsia-500 text-white rounded-lg transition-colors hover:bg-fuchsia-600">
                    Seç
                </button>
            </div>
        </div>
    );
};

export default PriceCards;
