import { FaHome, FaList, FaChartPie, FaCalendarAlt, FaCog } from "react-icons/fa";

const PanelSidebar = () => {
    return (
        <div className="h-screen bg-gray-800 text-white w-64">
            <div className="p-6">
                <h1 className="text-xl font-bold text-fuchsia-200">Admin Panel</h1>
            </div>
            <ul className="mt-6">
                <li className="px-6 py-3 hover:bg-gray-700 transition-colors cursor-pointer flex items-center">
                    <FaHome className="mr-3" /> Dashboard
                </li>
                <li className="px-6 py-3 hover:bg-gray-700 transition-colors cursor-pointer flex items-center">
                    <FaList className="mr-3" /> Abonelikler
                </li>
                <li className="px-6 py-3 hover:bg-gray-700 transition-colors cursor-pointer flex items-center">
                    <FaChartPie className="mr-3" /> Raporlar
                </li>
                <li className="px-6 py-3 hover:bg-gray-700 transition-colors cursor-pointer flex items-center">
                    <FaCalendarAlt className="mr-3" /> Takvim
                </li>
                <li className="px-6 py-3 hover:bg-gray-700 transition-colors cursor-pointer flex items-center">
                    <FaCog className="mr-3" /> Ayarlar
                </li>
            </ul>
        </div>
    );
};

export default PanelSidebar;
