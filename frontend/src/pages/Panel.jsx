import PanelHeader from '../components/PanelComponents/PanelHeader';
import Sidebar from '../components/PanelComponents/PanelSidebar.jsx';
import Dashboard from '../components/PanelComponents/Dashboard.jsx';

const Panel = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <PanelHeader />
                <main className="p-6 bg-gray-100 flex-grow">
                    <Dashboard/>
                </main>
            </div>
        </div>
    );
};

export default Panel;
