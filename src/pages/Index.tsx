import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const representatives = [
  {
    name: "Александр Петров",
    position: "Коммерческий директор",
    phone: "+7 (495) 123-45-67",
    mobile: "+7 (999) 123-45-67",
    email: "a.petrov@beauty-distribution.ru"
  },
  {
    name: "Мария Соколова",
    position: "Региональный менеджер",
    phone: "+7 (495) 123-45-68",
    mobile: "+7 (999) 234-56-78",
    email: "m.sokolova@beauty-distribution.ru"
  },
  {
    name: "Дмитрий Волков",
    position: "Менеджер по развитию",
    phone: "+7 (495) 123-45-69",
    mobile: "+7 (999) 345-67-89",
    email: "d.volkov@beauty-distribution.ru"
  },
  {
    name: "Елена Морозова",
    position: "Ведущий специалист",
    phone: "+7 (495) 123-45-70",
    mobile: "+7 (999) 456-78-90",
    email: "e.morozova@beauty-distribution.ru"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg shadow-2xl">
              <Icon name="Sparkles" size={40} className="text-black" />
              <div className="text-left">
                <h1 className="text-4xl font-bold tracking-tight">BEAUTY PRO</h1>
                <p className="text-xs tracking-widest text-gray-600 uppercase">Distribution</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Официальный дистрибьютор мировых брендов профессиональной косметики
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {representatives.map((rep, index) => (
            <div key={index} className="group">
              <Card className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="bg-black text-white px-8 py-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                      
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <Icon name="Sparkles" size={24} className="text-black" />
                            </div>
                            <div>
                              <h2 className="text-sm tracking-widest text-gray-400 uppercase font-semibold">Beauty Pro</h2>
                              <p className="text-xs text-gray-500">Distribution</p>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-1">{rep.name}</h3>
                          <p className="text-sm text-gray-400 font-medium">{rep.position}</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-bold">PREMIUM</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4 bg-white">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700 group/item hover:text-black transition-colors">
                        <div className="w-10 h-10 bg-gray-100 group-hover/item:bg-black group-hover/item:text-white rounded-lg flex items-center justify-center transition-colors">
                          <Icon name="Phone" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Офис</p>
                          <p className="font-semibold">{rep.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700 group/item hover:text-black transition-colors">
                        <div className="w-10 h-10 bg-gray-100 group-hover/item:bg-black group-hover/item:text-white rounded-lg flex items-center justify-center transition-colors">
                          <Icon name="Smartphone" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Мобильный</p>
                          <p className="font-semibold">{rep.mobile}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700 group/item hover:text-black transition-colors">
                        <div className="w-10 h-10 bg-gray-100 group-hover/item:bg-black group-hover/item:text-white rounded-lg flex items-center justify-center transition-colors">
                          <Icon name="Mail" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="font-semibold text-sm">{rep.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon name="MapPin" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Адрес</p>
                          <p className="font-medium text-sm">Москва, Кутузовский пр-т, д. 36, стр. 1</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t-2 border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="font-bold text-2xl">L'Oréal</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Professional</div>
                          </div>
                          <div className="w-px h-10 bg-gray-300"></div>
                          <div className="text-center">
                            <div className="font-bold text-2xl">MATRIX</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Official</div>
                          </div>
                        </div>
                        <Icon name="Award" size={32} className="text-gray-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-black text-white border-none shadow-2xl overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-xl">
                    <Icon name="Sparkles" size={40} className="text-black" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">BEAUTY PRO</h2>
                    <p className="text-sm tracking-widest text-gray-400 uppercase">Distribution Company</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Контакты</h3>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Центральный офис</p>
                        <p className="font-semibold">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Отдел продаж</p>
                        <p className="font-semibold">sales@beauty-distribution.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Globe" size={20} className="text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Веб-сайт</p>
                        <p className="font-semibold">www.beauty-distribution.ru</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Офис</h3>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-gray-400 mt-1" />
                      <div>
                        <p className="font-medium">Москва, Кутузовский проспект,</p>
                        <p className="font-medium">д. 36, стр. 1, офис 801</p>
                        <p className="text-sm text-gray-400 mt-2">Метро: Кутузовская</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <Icon name="Clock" size={20} className="text-gray-400" />
                      <div>
                        <p className="font-medium">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-sm text-gray-400">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6 text-center">
                    Официальный дистрибьютор премиум-брендов
                  </h3>
                  <div className="flex items-center justify-center gap-12 flex-wrap">
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 mb-2">
                        <div className="text-3xl font-bold">L'Oréal</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Professional</div>
                      </div>
                      <div className="text-xs text-gray-500">Официальный партнёр</div>
                    </div>
                    
                    <div className="w-px h-16 bg-white/20"></div>
                    
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 mb-2">
                        <div className="text-3xl font-bold">MATRIX</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Official Salon</div>
                      </div>
                      <div className="text-xs text-gray-500">Сертифицированный дистрибьютор</div>
                    </div>
                    
                    <div className="w-px h-16 bg-white/20"></div>
                    
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2">
                        <Icon name="Award" size={40} className="mx-auto" />
                      </div>
                      <div className="text-xs text-gray-500">10+ лет на рынке</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white py-8 px-6 border-t-2 border-gray-200 mt-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Sparkles" size={24} className="text-black" />
            <span className="text-xl font-bold">BEAUTY PRO Distribution</span>
          </div>
          <p className="text-gray-600 text-sm">© 2024 Все права защищены</p>
          <p className="text-xs text-gray-500 mt-2">Официальный дистрибьютор L'Oréal Professional & Matrix</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
