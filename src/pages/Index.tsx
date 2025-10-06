import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Александр Петров",
    position: "Генеральный директор",
    experience: "15 лет",
    certification: "CFA, MBA",
    photo: "👨‍💼"
  },
  {
    name: "Елена Смирнова",
    position: "Финансовый директор",
    experience: "12 лет",
    certification: "ACCA, CPA",
    photo: "👩‍💼"
  },
  {
    name: "Михаил Иванов",
    position: "Директор по рискам",
    experience: "10 лет",
    certification: "FRM, CFA",
    photo: "👨‍💼"
  },
  {
    name: "Ольга Козлова",
    position: "Главный аналитик",
    experience: "8 лет",
    certification: "CFA Level II",
    photo: "👩‍💼"
  }
];

const performanceData = [
  { metric: "ROI портфеля", value: "12.5%", trend: "up", change: "+2.3%" },
  { metric: "Активы под управлением", value: "5.2 млрд ₽", trend: "up", change: "+15%" },
  { metric: "Количество клиентов", value: "1,240", trend: "up", change: "+8%" },
  { metric: "Средний чек", value: "4.2 млн ₽", trend: "stable", change: "0%" },
  { metric: "Уровень удержания", value: "94%", trend: "up", change: "+3%" }
];

const certifications = [
  { name: "Лицензия ЦБ РФ", number: "№ 177-06783-100000", icon: "Building2" },
  { name: "ISO 27001:2013", number: "Информационная безопасность", icon: "Shield" },
  { name: "SWIFT", number: "Международные переводы", icon: "Globe" },
  { name: "Страхование АСВ", number: "До 1.4 млн ₽", icon: "BadgeCheck" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Наша команда</h1>
          <p className="text-lg opacity-90">Профессионалы с многолетним опытом в финансовом секторе</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg p-6 mx-auto w-32 h-32 flex items-center justify-center">
                    {member.photo}
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-base">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                    <span>Опыт: {member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Award" size={16} className="text-muted-foreground" />
                    <span>{member.certification}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="TrendingUp" size={32} className="text-primary" />
            Показатели эффективности
          </h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">Метрика</TableHead>
                    <TableHead className="font-bold">Значение</TableHead>
                    <TableHead className="font-bold">Динамика</TableHead>
                    <TableHead className="font-bold text-right">Изменение</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {performanceData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{row.metric}</TableCell>
                      <TableCell className="text-lg font-bold text-primary">{row.value}</TableCell>
                      <TableCell>
                        {row.trend === "up" && (
                          <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
                            <Icon name="ArrowUp" size={14} className="mr-1" />
                            Рост
                          </Badge>
                        )}
                        {row.trend === "stable" && (
                          <Badge variant="secondary">
                            <Icon name="Minus" size={14} className="mr-1" />
                            Стабильно
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right font-semibold">{row.change}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="BarChart3" size={32} className="text-primary" />
            Визуализация роста активов
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-end justify-between gap-4 h-64">
                  {[
                    { year: "2020", value: 2.1, label: "2.1 млрд" },
                    { year: "2021", value: 3.2, label: "3.2 млрд" },
                    { year: "2022", value: 4.1, label: "4.1 млрд" },
                    { year: "2023", value: 4.5, label: "4.5 млрд" },
                    { year: "2024", value: 5.2, label: "5.2 млрд" }
                  ].map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">{item.label}</div>
                      <div
                        className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-md transition-all duration-500 hover:opacity-80 cursor-pointer"
                        style={{ height: `${(item.value / 5.2) * 100}%` }}
                      ></div>
                      <div className="text-sm font-bold mt-2">{item.year}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Динамика роста активов под управлением (млрд ₽)
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="ShieldCheck" size={32} className="text-primary" />
            Сертификаты и лицензии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name={cert.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.number}</p>
                  </div>
                  <Icon name="CheckCircle2" size={24} className="text-green-600" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Доверьте свои финансы профессионалам</h2>
          <p className="text-lg mb-8 opacity-90">
            Более 15 лет опыта, 1,240+ довольных клиентов, 5.2 млрд ₽ активов под управлением
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="font-semibold">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-semibold">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-75">© 2024 Финансовая компания. Все права защищены.</p>
          <p className="text-xs opacity-60 mt-2">Лицензия ЦБ РФ № 177-06783-100000</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
