import { Bar } from 'react-chartjs-2';

const Reports = () => {
    // Örnek veri
    const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [
            {
                label: 'Aylık Abonelik Harcamaları ($)',
                data: [120, 190, 300, 500, 200, 300],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Raporlar</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={data} />
            </div>
        </div>
    );
};

export default Reports;
