export const CONTACT = '@talking_about_sense';
export const PROJECTS = [
 {id:'mono',title:'MONO',category:'Модульная архитектура',image:'mono.webp',width:1265,height:712,url:'https://chooomi.github.io/mono/',color:'#e8ece3',ink:'#263428',lead:'Дом начинается с выбора своего пространства.',task:'Показать характер архитектурного бренда и помочь сравнить три модели дома, материалы и комплектации.',solution:'Спокойная типографика, лесные визуализации и конфигуратор: изменения видны и на доме, и в расчёте.',features:['Три модели с интерактивными планировками','Выбор фасада, террасы и комплектации','Дневные и вечерние визуализации','Сохранение конфигурации в ссылке и спецификации'],note:'Концептуальный бренд. Цены демонстрационные, реальные заказы не принимаются.'},
 {id:'tandem',title:'Tandem',category:'Юридическая практика',image:'tandem.webp',width:1440,height:1000,url:'https://tandem-law.hlebskiy.workers.dev/',color:'#242625',ink:'#f7f3e8',lead:'Серьёзная тема. Понятная подача.',task:'Представить юридическую практику через её направления и специалистов, сохранив ясную навигацию.',solution:'Сдержанная тёмная палитра, крупные заголовки и последовательная структура: от знакомства с практикой к обращению.',features:['Первый экран с характером бренда','Направления юридической практики','Представление команды и специалистов','Адаптация навигации для телефона'],note:'Демонстрационный проект юридического сайта. Не является предложением юридических услуг студии «Толк».'},
 {id:'glubina',title:'Глубина',category:'Магазин рыболовных снастей',image:'glubina.webp',width:1265,height:712,url:'https://glubina-shop.hlebskiy.workers.dev/',color:'#073343',ink:'#dff3ec',lead:'От настроения большой воды — к выбору снастей.',task:'Соединить атмосферу рыбалки с понятным каталогом, в котором удобно искать и сравнивать товары.',solution:'Выразительный первый экран и практичная торговая часть: категории, поиск, сортировка и корзина.',features:['Каталог с фильтрацией по категориям','Поиск и сортировка товаров','Карточки с характеристиками','Демонстрационная корзина'],note:'Демонстрационный магазин. Оформление и оплата заказов не подключены.'}
];
export function routeFromHash(hash=''){
 if(hash==='#b-work')return {page:'home',section:'work'};
 if(!hash||hash==='#'||hash==='#/')return {page:'home',section:''};
 if(/^#(?:work|services|approach|contact|about|main)$/.test(hash))return {page:'home',section:hash.slice(1)};
 const match=/^#\/project\/([a-z]+)$/.exec(hash);
 return match&&PROJECTS.some(p=>p.id===match[1])?{page:'project',id:match[1]}:{page:'404'};
}
export function createBrief(values={}){
 const task=String(values.task||'').trim();
 if(task.length<12)throw new Error('Опишите задачу чуть подробнее — хотя бы в 12 символах.');
 const line=(label,value)=>String(value||'').trim()?label+': '+String(value).trim():'';
 return ['Здравствуйте, студия «Толк»! Хочу обсудить сайт.',line('Меня зовут',values.name),line('Бизнес',values.business),line('Формат',values.service),line('Задача',task),line('Сроки',values.timing)].filter(Boolean).join('\n\n');
}
export function telegramURL(value){
 const match=/^(?:@|https:\/\/t\.me\/)?([a-zA-Z][a-zA-Z0-9_]{4,31})\/?$/.exec(String(value||'').trim());
 return match?'https://t.me/'+match[1]:null;
}
