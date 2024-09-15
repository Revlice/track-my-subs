const Subscriptions = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Abonelikler</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                    <tr className="bg-gray-100 text-left text-gray-700">
                        <th className="py-3 px-6">Abonelik Adı</th>
                        <th className="py-3 px-6">Başlangıç Tarihi</th>
                        <th className="py-3 px-6">Bitiş Tarihi</th>
                        <th className="py-3 px-6">Ücret</th>
                        <th className="py-3 px-6">Durum</th>
                        <th className="py-3 px-6 text-right">İşlemler</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t">
                        <td className="py-3 px-6">Netflix</td>
                        <td className="py-3 px-6">01/09/2023</td>
                        <td className="py-3 px-6">01/09/2024</td>
                        <td className="py-3 px-6">$13.99</td>
                        <td className="py-3 px-6">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full">Aktif</span>
                        </td>
                        <td className="py-3 px-6 text-right">
                            <button className="text-blue-500 hover:underline mr-4">Düzenle</button>
                            <button className="text-red-500 hover:underline">Sil</button>
                        </td>
                    </tr>
                    {/* Diğer abonelikler de bu şekilde eklenir */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscriptions;
