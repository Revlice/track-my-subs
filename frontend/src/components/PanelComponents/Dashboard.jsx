import { FaUsers, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Abonelik Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Abonelikler</h3>
                        <p className="text-sm text-gray-500">Toplam Abonelikler</p>
                        <h1 className="text-2xl font-bold mt-2">54</h1>
                    </div>
                    <FaUsers className="text-fuchsia-500 text-4xl" />
                </div>
            </div>

            {/* Gelir Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Toplam Gelir</h3>
                        <p className="text-sm text-gray-500">Bu Ayki Gelir</p>
                        <h1 className="text-2xl font-bold mt-2">$3,200</h1>
                    </div>
                    <FaDollarSign className="text-fuchsia-500 text-4xl" />
                </div>
            </div>

            {/* Takvim Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Yaklaşan Etkinlikler</h3>
                        <p className="text-sm text-gray-500">Bu Ay</p>
                        <h1 className="text-2xl font-bold mt-2">8</h1>
                    </div>
                    <FaCalendarAlt className="text-fuchsia-500 text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
