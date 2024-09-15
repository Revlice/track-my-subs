import React, { useState } from 'react';

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([
        // Başlangıçta varsayılan abonelikler
    ]);

    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({ name: '', startDate: '', endDate: '', price: '', status: '' });
    const [showAddForm, setShowAddForm] = useState(false);

    // Düzenleme işlemi
    const handleEdit = (subscription) => {
        setEditId(subscription.id);
        setFormData({ ...subscription, price: subscription.price.replace('TL', '') });
    };

    const handleSave = () => {
        if (editId) {
            // Düzenleme işlemi
            setSubscriptions(subscriptions.map(sub =>
                sub.id === editId ? { ...formData, price: `${formData.price}TL`, id: editId } : sub
            ));
            setEditId(null);
        } else {
            // Ekleme işlemi
            setSubscriptions([
                ...subscriptions,
                { ...formData, id: subscriptions.length + 1, price: `${formData.price}TL` }
            ]);
        }
        setFormData({ name: '', startDate: '', endDate: '', price: '', status: '' });
        setShowAddForm(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDelete = (id) => {
        setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    };

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
                    {subscriptions.map(sub => (
                        <tr key={sub.id} className="border-t">
                            <td className="py-3 px-6">{sub.name}</td>
                            <td className="py-3 px-6">{sub.startDate}</td>
                            <td className="py-3 px-6">{sub.endDate}</td>
                            <td className="py-3 px-6">{sub.price}</td>
                            <td className="py-3 px-6">
                                <span className={`bg-${sub.status === 'Aktif' ? 'green' : 'red'}-500 text-white px-3 py-1 rounded-full`}>
                                    {sub.status}
                                </span>
                            </td>
                            <td className="py-3 px-6 text-right">
                                <button
                                    onClick={() => handleEdit(sub)}
                                    className="text-blue-500 hover:underline mr-4"
                                >
                                    Düzenle
                                </button>
                                <button
                                    onClick={() => handleDelete(sub.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-6">
                <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Ekle
                </button>
            </div>
            {(editId || showAddForm) && (
                <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">{editId ? 'Düzenle' : 'Yeni Abonelik Ekle'}</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Abonelik Adı</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Başlangıç Tarihi</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Bitiş Tarihi</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Ücret</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <span className="text-gray-700">TL</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Durum</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="Aktif">Aktif</option>
                                <option value="Pasif">Pasif</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            {editId ? 'Kaydet' : 'Ekle'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Subscriptions;