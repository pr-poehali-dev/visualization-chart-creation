import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const businessCards = [
  {
    name: "Анна Красова",
    position: "Стилист-колорист",
    phone: "+7 (999) 123-45-67",
    email: "anna@beautyservice.ru",
    specialty: "Окрашивание L'Oréal",
    gradient: "from-rose-400 to-pink-600"
  },
  {
    name: "Мария Локонова",
    position: "Топ-стилист",
    phone: "+7 (999) 234-56-78",
    email: "maria@beautyservice.ru",
    specialty: "Эксперт Matrix",
    gradient: "from-purple-400 to-indigo-600"
  },
  {
    name: "Елена Блонд",
    position: "Мастер-колорист",
    phone: "+7 (999) 345-67-89",
    email: "elena@beautyservice.ru",
    specialty: "Сложное окрашивание",
    gradient: "from-amber-400 to-orange-600"
  },
  {
    name: "Ольга Стайл",
    position: "Старший мастер",
    phone: "+7 (999) 456-78-90",
    email: "olga@beautyservice.ru",
    specialty: "Стрижки & укладки",
    gradient: "from-emerald-400 to-teal-600"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-sm py-8 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Beauty Service
          </h1>
          <p className="text-lg text-gray-600 mb-4">Салон красоты премиум-класса</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-2xl">🇫🇷</span>
              <span>Официальный партнёр L'Oréal</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-2xl">💎</span>
              <span>Сертифицированный салон Matrix</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Наши мастера</h2>
          <p className="text-gray-600">Профессионалы с международной сертификацией</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {businessCards.map((card, index) => (
            <div key={index} className="group perspective-1000">
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${card.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-8xl opacity-10">✨</div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl">
                          💇‍♀️
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{card.name}</h3>
                          <p className="text-sm font-medium opacity-90">{card.position}</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                        <p className="text-sm font-semibold">{card.specialty}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 bg-white">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={18} className="text-rose-600" />
                      </div>
                      <span className="font-medium">{card.phone}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={18} className="text-purple-600" />
                      </div>
                      <span className="font-medium">{card.email}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={18} className="text-pink-600" />
                      </div>
                      <span className="text-sm">ул. Красоты, д. 15, Москва</span>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Button className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 transition-opacity font-semibold`}>
                        <Icon name="Calendar" size={18} className="mr-2" />
                        Записаться на приём
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-2xl overflow-hidden">
            <CardContent className="p-10 relative">
              <div className="absolute top-0 right-0 text-9xl opacity-5">💇‍♀️</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Beauty Service</h3>
                <p className="text-lg mb-6 opacity-90">Салон красоты премиум-класса</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-rose-400" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-purple-400" />
                      <span>info@beautyservice.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-pink-400" />
                      <span>ул. Красоты, д. 15, Москва</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={20} className="text-amber-400" />
                      <span>Пн-Вс: 10:00 - 21:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Instagram" size={20} className="text-orange-400" />
                      <span>@beautyservice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Globe" size={20} className="text-emerald-400" />
                      <span>beautyservice.ru</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center gap-8 flex-wrap">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🇫🇷</div>
                      <p className="text-sm font-semibold">L'Oréal Partner</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">💎</div>
                      <p className="text-sm font-semibold">Matrix Certified</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">⭐</div>
                      <p className="text-sm font-semibold">5+ лет опыта</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-bold px-8 py-6 text-lg shadow-xl">
            <Icon name="Download" size={24} className="mr-3" />
            Скачать все визитки PDF
          </Button>
        </div>
      </main>

      <footer className="bg-white mt-20 py-8 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Beauty Service. Все права защищены.</p>
          <p className="text-sm text-gray-500 mt-2">Официальный партнёр L'Oréal Professional & Matrix</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
