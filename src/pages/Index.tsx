import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">ТрансЛогистик</h1>
            </div>
            
            <nav className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button variant="default" className="hidden md:inline-flex bg-accent hover:bg-accent/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-24 bg-gradient-to-br from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Надёжная логистика для вашего бизнеса
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Грузовые перевозки по России, Санкт-Петербургу и Ленинградской области. Спецтранспорт и спецтехника для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                  onClick={() => scrollToSection('services')}
                >
                  Наши услуги
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  onClick={() => scrollToSection('contacts')}
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Clock', title: '15+ лет опыта', desc: 'На рынке грузовых перевозок' },
                { icon: 'TrendingUp', title: '5000+ рейсов', desc: 'Успешно выполнено в этом году' },
                { icon: 'Shield', title: '100% гарантия', desc: 'Сохранности и своевременной доставки' }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name={stat.icon} size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{stat.title}</h3>
                    <p className="text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                ТрансЛогистик — надёжный партнёр в грузовых перевозках по России и Северо-Западу
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Icon name="Target" size={40} className="text-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-3">Наша миссия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Обеспечивать быструю и надёжную доставку грузов по России, Санкт-Петербургу и Ленобласти с персональным подходом к каждому клиенту
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Icon name="Award" size={40} className="text-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-3">Наши ценности</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Надёжность, прозрачность, профессионализм. Мы строим долгосрочные партнёрские 
                    отношения, основанные на доверии и взаимной выгоде
                  </p>
                </Card>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  Почему выбирают нас
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Собственный автопарк из 120+ единиц техники',
                    'Спецтранспорт и спецтехника для любых задач',
                    'Система GPS-мониторинга всех перевозок',
                    'Страхование грузов на полную стоимость',
                    'Круглосуточная диспетчерская служба',
                    'Гибкая система скидок для постоянных клиентов'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Грузовые перевозки и спецтехника для вашего бизнеса
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: 'Truck',
                  title: 'Грузоперевозки по России',
                  desc: 'Автомобильные перевозки по всей России. Доставка грузов любого объёма и сложности с гарантией сохранности.',
                  features: ['До 20 тонн', 'Экспресс-доставка', 'Межрегиональные маршруты']
                },
                {
                  icon: 'MapPin',
                  title: 'Перевозки по СПб и Ленобласти',
                  desc: 'Быстрая доставка по Санкт-Петербургу и Ленинградской области. Доставка в день заказа.',
                  features: ['Городские перевозки', 'Областные маршруты', 'Срочная доставка']
                },
                {
                  icon: 'Construction',
                  title: 'Спецтранспорт',
                  desc: 'Манипуляторы, краны, эвакуаторы и другая специализированная техника для любых задач.',
                  features: ['Манипуляторы', 'Краны', 'Эвакуаторы']
                },
                {
                  icon: 'HardHat',
                  title: 'Спецтехника',
                  desc: 'Аренда экскаваторов, погрузчиков, бульдозеров и другой строительной техники.',
                  features: ['Экскаваторы', 'Погрузчики', 'Бульдозеры']
                },
                {
                  icon: 'Package',
                  title: 'Перевозка негабаритных грузов',
                  desc: 'Транспортировка крупногабаритных и тяжеловесных грузов с получением всех разрешений.',
                  features: ['Крупногабаритные грузы', 'Тяжеловесные грузы', 'Оформление разрешений']
                },
                {
                  icon: 'Settings',
                  title: 'Индивидуальные решения',
                  desc: 'Разработка персональных транспортных схем под уникальные требования вашего бизнеса.',
                  features: ['Персональный менеджер', 'Гибкие условия', 'Масштабируемость']
                }
              ].map((service, idx) => (
                <Card key={idx} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-6">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-16">
                Готовы ответить на ваши вопросы и предложить оптимальное решение
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-8">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Адрес</h4>
                        <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">info@translogistik.ru</p>
                        <p className="text-muted-foreground">support@translogistik.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon name="Clock" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Режим работы</h4>
                        <p className="text-muted-foreground">Пн-Пт: 08:00 - 20:00</p>
                        <p className="text-muted-foreground">Сб-Вс: 09:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Отправить сообщение</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="example@mail.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Расскажите о ваших потребностях..." 
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 font-semibold" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">ТрансЛогистик</h3>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональные логистические решения для вашего бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Грузоперевозки</li>
                <li>Складское хранение</li>
                <li>Международная доставка</li>
                <li>Складская логистика</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@translogistik.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ТрансЛогистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;