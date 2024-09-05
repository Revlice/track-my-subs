import PriceCards from "./PriceCards";

const Price = () => {
    return (
            <div className="w-full h-auto text-white bg-gradient-to-t from-stone-900 to-fuchsia-800 py-12">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold">Fiyatlandırma</h2>
                        <p className="text-md lg:text-lg mt-2 font-light">
                            Sizin için en uygun planı seçin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PriceCards
                            title="Ücretsiz"
                            price="0$"
                            features={[
                                "10 Abonelik",
                                "Sınırlı Özellikler",
                                "E-posta Uyarıları",
                                "Zapier Entegrasyonu"
                            ]}
                            shadowColor ="shadow-fuchsia-500"
                            borderTColor ="border-t-fuchsia-500"

                        />
                        <PriceCards
                            title="Standart"
                            price="2$"
                            features={[
                                "50 Abonelik",
                                "Tüm Özellikler",
                                "E-posta & SMS Uyarıları",
                                "Zapier & API Entegrasyonu"
                            ]}
                            shadowColor ="shadow-red-500"
                            borderTColor ="border-t-red-500"


                        />
                        <PriceCards
                            title="Profesyonel"
                            price="15$"
                            features={[
                                "Sınırsız Abonelik",
                                "Özelleştirilebilir Özellikler",
                                "24/7 Destek",
                                "Gelişmiş Entegrasyonlar"
                            ]}
                            shadowColor ="shadow-yellow-500"
                            borderTColor ="border-t-yellow-500"

                        />
                    </div>
                </div>
            </div>
        );
};

export default Price;
