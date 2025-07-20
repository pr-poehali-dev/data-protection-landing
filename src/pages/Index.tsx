import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Комитет по информационной и правовой безопасности</h1>
            <Button variant="secondary" size="sm">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              К списку услуг
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Комплексная подготовка к проверкам Роскомнадзора
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Защитите свою организацию от штрафов. Обеспечим полное соответствие требованиям 152-ФЗ "О персональных данных" и подготовим к любым проверкам контролирующих органов
          </p>
          <div className="flex justify-center">
            <img 
              src="/img/497b182c-4bca-497a-abd7-253515483598.jpg" 
              alt="Защита персональных данных" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-12">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <Icon name="AlertTriangle" size={24} className="mr-2" />
                Проблематика нарушений 152-ФЗ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Штрафы за нарушения:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Должностные лица: до 20 000 руб.</li>
                    <li>• ИП: до 75 000 руб.</li>
                    <li>• Юридические лица: до 6 000 000 руб.</li>
                    <li>• Приостановление деятельности до 90 суток</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Типичные нарушения:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Отсутствие уведомления об обработке ПДн</li>
                    <li>• Нарушения в политике конфиденциальности</li>
                    <li>• Отсутствие технических мер защиты</li>
                    <li>• Нарушения в документообороте</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Self-Diagnostic */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="CheckCircle" size={24} className="mr-2" />
                Самодиагностика: нужна ли вам наша услуга?
              </CardTitle>
              <CardDescription>
                Ответьте на вопросы, чтобы понять актуальность подготовки к проверке
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Обрабатываете ли вы персональные данные?</p>
                  <p className="text-sm text-muted-foreground">Данные сотрудников, клиентов, посетителей сайта</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Есть ли у вас уведомление в Роскомнадзор?</p>
                  <p className="text-sm text-muted-foreground">Обязательно для большинства организаций</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Когда последний раз обновляли документы по ПДн?</p>
                  <p className="text-sm text-muted-foreground">Требования регулярно изменяются</p>
                </div>
                <div className="p-4 border rounded-lg bg-primary/10">
                  <p className="font-medium text-primary">Если вы ответили "Да" на первый вопрос - наша услуга актуальна для вас</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Content */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Что входит в услугу</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Документооборот
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Политика обработки персональных данных</li>
                    <li>• Положение об обработке ПДн</li>
                    <li>• Согласия на обработку</li>
                    <li>• Приказы и инструкции</li>
                    <li>• Журналы учета и контроля</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Технические меры
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Аудит информационной безопасности</li>
                    <li>• Настройка антивирусной защиты</li>
                    <li>• Контроль доступа к данным</li>
                    <li>• Резервное копирование</li>
                    <li>• Журналирование событий</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Icon name="Users" size={20} className="mr-2" />
                  Обучение персонала
                </h4>
                <p className="text-sm mb-3">Проводим обучающие семинары для ваших сотрудников по работе с персональными данными</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Очное обучение</Badge>
                  <Badge variant="secondary">Дистанционные курсы</Badge>
                  <Badge variant="secondary">Сертификаты</Badge>
                  <Badge variant="secondary">Методические материалы</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing & Timeline */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-2" />
                  Сроки выполнения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Экспресс-аудит</span>
                    <Badge>3-5 дней</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Базовый пакет</span>
                    <Badge>10-14 дней</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Полный комплекс</span>
                    <Badge>3-4 недели</Badge>
                  </div>
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    Срочное выполнение +50% к стоимости
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2" />
                  Стоимость услуг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Экспресс-аудит</span>
                      <span className="text-2xl font-bold">от 25 000 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Быстрая оценка соответствия</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Базовый пакет</span>
                      <span className="text-2xl font-bold">от 85 000 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Документы + базовые техмеры</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Полный комплекс</span>
                      <span className="text-2xl font-bold">от 150 000 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Все включено + обучение</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Преимущества работы с Комитетом</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Экспертиза</h4>
                  <p className="text-sm text-muted-foreground">Более 10 лет опыта в сфере защиты персональных данных</p>
                </div>
                <div className="text-center">
                  <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Гарантии</h4>
                  <p className="text-sm text-muted-foreground">100% соответствие требованиям или доработка за наш счет</p>
                </div>
                <div className="text-center">
                  <Icon name="HeadphonesIcon" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Поддержка</h4>
                  <p className="text-sm text-muted-foreground">Консультации и поддержка в течение года после проекта</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visual Confirmations */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Документальные подтверждения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <Icon name="FileCheck" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Лицензии и сертификаты</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Icon name="BookOpen" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Методические материалы</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Команда экспертов</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Icon name="TrendingUp" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Результаты проектов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Отзывы клиентов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">ООО "ТехСервис"</p>
                      <p className="text-sm text-muted-foreground">Директор по безопасности</p>
                    </div>
                  </div>
                  <p className="text-sm">"Комитет помог нам подготовиться к внеплановой проверке Роскомнадзора. Все документы были готовы в срок, проверка прошла без замечаний. Рекомендуем!"</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">МКУ "Городской центр"</p>
                      <p className="text-sm text-muted-foreground">Начальник отдела</p>
                    </div>
                  </div>
                  <p className="text-sm">"Профессиональный подход, качественные документы и отличная поддержка. Все требования 152-ФЗ выполнены полностью."</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Обязательно ли уведомлять Роскомнадзор о обработке ПДн?</AccordionTrigger>
                  <AccordionContent>
                    Да, согласно статье 22 152-ФЗ, оператор обязан уведомить уполномоченный орган о намерении осуществлять обработку персональных данных до начала их обработки, за исключением случаев, предусмотренных частью 2 данной статьи.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какие штрафы предусмотрены за нарушения?</AccordionTrigger>
                  <AccordionContent>
                    Штрафы варьируются от 3 000 до 6 000 000 рублей в зависимости от тяжести нарушения и статуса нарушителя. Также возможно приостановление деятельности на срок до 90 суток.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Как часто нужно обновлять документы по защите ПДн?</AccordionTrigger>
                  <AccordionContent>
                    Документы должны обновляться при изменении законодательства, технологических процессов обработки данных, структуры организации. Рекомендуется проводить ревизию не реже одного раза в год.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Что делать, если пришло уведомление о проверке?</AccordionTrigger>
                  <AccordionContent>
                    Немедленно обратиться к специалистам для экспресс-подготовки. У нас есть опыт подготовки к внеплановым проверкам в сжатые сроки. Важно не паниковать и действовать системно.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в течение рабочего дня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="inn">ИНН организации *</Label>
                    <Input id="inn" placeholder="1234567890" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="info@company.ru" />
                </div>
                <div>
                  <Label htmlFor="company">Название организации</Label>
                  <Input id="company" placeholder="ООО 'Ваша компания'" />
                </div>
                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea id="message" placeholder="Опишите вашу ситуацию..." />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Комитет по информационной и правовой безопасности
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">Главная</Button>
            <Button variant="ghost" size="sm">Услуги</Button>
            <Button variant="ghost" size="sm">Контакты</Button>
            <Button variant="ghost" size="sm">Документы</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;