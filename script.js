const questions = [
    {
        question: "Колко отбора участват в груповата фаза на Шампионската лига?",
        answers: [
            {text: "24", correct: false},
            {text: "32", correct: true},
            {text: "16", correct: false},
            {text: "64", correct: false},
        ]
    },
    {
        question: "Кой е първият български цар?",
        answers: [
            {text: "Аспарух", correct: false},
            {text: "Симеон Велики", correct: false},
            {text: "Борис I", correct: true},
            {text: "Иван Асен II", correct: false},
        ]
    },
    ,
    {
        question: "Коя река е най-дългата в България?",
        answers: [
            {text: "Дунав", correct: false},
            {text: "Марица", correct: false},
            {text: "Искър", correct: true},
            {text: "Янтра", correct: false},
        ]
    },
    {
        question: "Което Черноморско крайбрежие се намира на север от България?",
        answers: [
            {text: "Варненско", correct: true},
            {text: "Бургаско", correct: false},
            {text: "Русенско", correct: false},
            {text: "Добричко", correct: false},
        ]
    },
    {
        question: "Коя е най-високата планина в България?",
        answers: [
            {text: "Рила", correct: false},
            {text: "Пирин", correct: false},
            {text: "Стара планина", correct: false},
            {text: "Родопи", correct: true},
        ]
    },
    [
        {
            question: "Какво представлява HTML?",
            answers: [
                {text: "Hyper Text Markup Language", correct: true},
                {text: "High-level Text Machine Language", correct: false},
                {text: "Hyperlink and Text Markup Language", correct: false},
                {text: "Hyper Transfer Mode Language", correct: false},
            ]
        },
        {
            question: "Коя е първата програма, която се изпълнява при стартиране на компютър?",
            answers: [
                {text: "BIOS", correct: true},
                {text: "Operating System", correct: false},
                {text: "Device Manager", correct: false},
                {text: "Compiler", correct: false},
            ]
        },
        {
            question: "Какъв тип език е Python?",
            answers: [
                {text: "High-level programming language", correct: true},
                {text: "Low-level programming language", correct: false},
                {text: "Assembly language", correct: false},
                {text: "Machine language", correct: false},
            ]
        },
        {
            question: "Каква е функцията на операционната система на компютъра?",
            answers: [
                {text: "Управление на хардуера и предоставяне на услуги за софтуера", correct: true},
                {text: "Създаване на графични интерфейси", correct: false},
                {text: "Изпълнение на програмиране задачи", correct: false},
                {text: "Генериране на случайни числа", correct: false},
            ]
        },
        {
            question: "Какъв е средният живот на батерията на мобилен телефон?",
            answers: [
                {text: "Варира в зависимост от модела и употребата, но около 2-3 години", correct: true},
                {text: "Постоянно се подобрява и не се износва", correct: false},
                {text: "Около 6 месеца", correct: false},
                {text: "До 10 години", correct: false},
            ]
        },
        {
            question: "Коя компания произвежда операционната система Windows?",
            answers: [
                {text: "Microsoft", correct: true},
                {text: "Apple", correct: false},
                {text: "Google", correct: false},
                {text: "Linux", correct: false},
            ]
        },
        {
            question: "Какъв вид трансмисия има повечето автомобили с ръчна скоростна кутия?",
            answers: [
                {text: "Механична", correct: true},
                {text: "Автоматична", correct: false},
                {text: "Полуавтоматична", correct: false},
                {text: "Секвентна", correct: false},
            ]
        },
        {
            question: "Коя е първата личност, която е получила първото патентовано превозно средство?",
            answers: [
                {text: "Карл Бенц", correct: true},
                {text: "Генри Форд", correct: false},
                {text: "Елиас Уотърман", correct: false},
                {text: "Никола Тесла", correct: false},
            ]
        },
        {
            question: "Какъв вид гориво използва електрическият автомобил?",
            answers: [
                {text: "Електричество", correct: true},
                {text: "Бензин", correct: false},
                {text: "Дизел", correct: false},
                {text: "Пропан-бутан", correct: false},
            ]
        },
        {
            question: "Какво представлява законът за движение по пътищата в България?",
            answers: [
                {text: "Правила и норми, които регулират движението по пътищата", correct: true},
                {text: "Списък с всички пътища в страната", correct: false},
                {text: "График на обществения транспорт", correct: false},
                {text: "Схема на градския транспорт", correct: false},
            ]
        },
        {
            question: "Какво представлява телефонен IMEI номер?",
            answers: [
                {text: "Уникален идентификатор на мобилното устройство", correct: true},
                {text: "Код за достъп до интернет", correct: false},
                {text: "Код за достъп до мобилната мрежа", correct: false},
                {text: "Код за отключване на SIM картата", correct: false},
            ]
        },
        {
            question: "Как се нарича програма, която се изпълнява автоматично при стартиране на операционната система?",
            answers: [
                {text: "Startup програма", correct: false},
                {text: "Auto-run програма", correct: false},
                {text: "Boot програма", correct: false},
                {text: "Daemon програма", correct: true},
            ]
        },
        {
            question: "Как се измерва производителността на процесора?",
            answers: [
                {text: "В мегахерци (MHz)", correct: false},
                {text: "В гигахерци (GHz)", correct: true},
                {text: "В килогерци (KHz)", correct: false},
                {text: "В байтове (B)", correct: false},
            ]
        },
        {
            question: "Какъв вид софтуер е операционната система Linux?",
            answers: [
                {text: "Отворен код (Open-source)", correct: true},
                {text: "Проприетарен", correct: false},
                {text: "Фрийуер (Freeware)", correct: false},
                {text: "Споделен (Shareware)", correct: false},
            ]
        },
        {
            question: "Как се казва процесът, при който компютърът преобразува програмен код в машинни инструкции?",
            answers: [
                {text: "Компилация", correct: true},
                {text: "Интерпретация", correct: false},
                {text: "Експорт", correct: false},
                {text: "Конверсия", correct: false},
            ]
        },
        {
            question: "Как се нарича процесът, при който компютърът превежда изходния код на програма в машинен код в реално време?",
            answers: [
                {text: "Интерпретация", correct: true},
                {text: "Компилация", correct: false},
                {text: "Конверсия", correct: false},
                {text: "Транспилация", correct: false},
            ]
        },
        {
            question: "Какъв е средният живот на съвременен смартфон?",
            answers: [
                {text: "3-4 години", correct: true},
                {text: "1 година", correct: false},
                {text: "5-6 години", correct: false},
                {text: "10+ години", correct: false},
            ]
        },
        {
            question: "Какво представлява функцията 'if' в програмирането?",
            answers: [
                {text: "Условие за изпълнение на код", correct: true},
                {text: "Цикъл за повторение на операции", correct: false},
                {text: "Функция за математически изчисления", correct: false},
                {text: "Оператор за присвояване", correct: false},
            ]
        },
        {
            question: "Какво е GPS съкращение?",
            answers: [
                {text: "Global Positioning System", correct: true},
                {text: "General Programming System", correct: false},
                {text: "Geographical Positioning System", correct: false},
                {text: "General Positioning Service", correct: false},
            ]
        }
    ],
    {
        question: "Коя столица е най-голямата градска зона в България?",
        answers: [
            {text: "София", correct: true},
            {text: "Варна", correct: false},
            {text: "Пловдив", correct: false},
            {text: "Бургас", correct: false},
        ]
    },
    {
        question: "Кой водопад е най-високият в България?",
        answers: [
            {text: "Водопад Скакля", correct: false},
            {text: "Водопад Райски Стъпала", correct: true},
            {text: "Водопад Бачковски", correct: false},
            {text: "Водопад Карандила", correct: false},
        ]
    },
    {
        question: "Кой град е известен като „Морската столица“ на България?",
        answers: [
            {text: "Бургас", correct: true},
            {text: "Варна", correct: false},
            {text: "Русе", correct: false},
            {text: "Созопол", correct: false},
        ]
    },
    {
        question: "Кое е най-голямото езеро в България?",
        answers: [
            {text: "Язовир Искър", correct: false},
            {text: "Язовир Ангел Кънчев", correct: false},
            {text: "Язовир Широка поляна", correct: false},
            {text: "Язовир Мандра", correct: true},
        ]
    },
    {
        question: "Каква е общата площ на България?",
        answers: [
            {text: "110,879 кв. км.", correct: true},
            {text: "92,856 кв. км.", correct: false},
            {text: "75,217 кв. км.", correct: false},
            {text: "64,901 кв. км.", correct: false},
        ]
    },
    {
        question: "Кое е най-големото езеро в света?",
        answers: [
            {text: "Байкал", correct: true},
            {text: "Каспийско", correct: false},
            {text: "Виктория", correct: false},
            {text: "Чад", correct: false},
        ]
    },
    {
        question: "Кой е най-успешният футболист в историята на Лигата на шампионите?",
        answers: [
            {text: "Lionel Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Andrés Iniesta", correct: false},
            {text: "Paolo Maldini", correct: false},
        ]
    },
    {
        question: "Къде се намира пустинята Сахара?",
        answers: [
            {text: "Африка", correct: true},
            {text: "Азия", correct: false},
            {text: "Австралия", correct: false},
            {text: "Северна Америка", correct: false},
        ]
    },
    {
        question: "Колко златни топки има Песко?",
        answers: [
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: false},
            {text: "7", correct: true},
        ]
    },
    {
        question: "Кой е най-дългогодишният треньор в историята на НБА?",
        answers: [
            {text: "Phil Jackson", correct: true},
            {text: "Gregg Popovich", correct: false},
            {text: "Pat Riley", correct: false},
            {text: "Red Auerbach", correct: false},
        ]
    },
    {
        question: "Къде се провежда най-големият турнир по тенис 'Уимбълдън'?",
        answers: [
            {text: "Лондон", correct: true},
            {text: "Ню Йорк", correct: false},
            {text: "Париж", correct: false},
            {text: "Сидни", correct: false},
        ]
    },
    {
        question: "Кой е най-успешният отбор в историята на Шампионската лига?",
        answers: [
            {text: "Реал Мадрид", correct: true},
            {text: "Барселона", correct: false},
            {text: "Байерн Мюнхен", correct: false},
            {text: "АС Милан", correct: false},
        ]
    },
    {
        question: "Какво е дължината на стандартно баскетболно игрище (в метри)?",
        answers: [
            {text: "28", correct: false},
            {text: "25", correct: false},
            {text: "26", correct: true},
            {text: "27", correct: false},
        ]
    },
    {
        question: "Кой е най-младият олимпийски шампион в историята на леката атлетика?",
        answers: [
            {text: "Usain Bolt", correct: false},
            {text: "Carl Lewis", correct: false},
            {text: "Bob Beamon", correct: false},
            {text: "Ferdinand 'Bud' Keegan", correct: true},
        ]
    },
    {
        question: "Как се казва най-висшият връх в света?",
        answers: [
            {text: "Еверест", correct: true},
            {text: "К2", correct: false},
            {text: "Канченджанга", correct: false},
            {text: "Килиманджаро", correct: false},
        ]
    },
    {
        question: "Кой е първият баскетболист, който се присъедини към Националната баскетболна асоциация (NBA) от Централна и Източна Европа?",
        answers: [
            {text: "Тони Кукоч", correct: true},
            {text: "Дино Раджа", correct: false},
            {text: "Шарунас Марциулионис", correct: false},
            {text: "Владе Дивац", correct: false},
        ]
    },
    {
        question: "Кой е най-успешният състезател в историята на Формула 1?",
        answers: [
            {text: "Луис Хамилтън", correct: true},
            {text: "Михаел Шумахер", correct: false},
            {text: "Айртон Сенa", correct: false},
            {text: "Себастиан Фетел", correct: false},
        ]
    },
    {
        question: "Кой е авторът на романа 'Майстор и Маргарита'?",
        answers: [
            {text: "Фьодор Достоевский", correct: false},
            {text: "Лев Толстой", correct: false},
            {text: "Михаил Булгаков", correct: true},
            {text: "Иван Тургенев", correct: false},
        ]
    },
    {
        question: "Кое е най-големото животно на света?",
        answers: [
            {text: "Син кит", correct: true},
            {text: "Слон", correct: false},
            {text: "Голямата бяла акула", correct: false},
            {text: "Зебра", correct: false},
        ]
    },
    {
        question: "Кой е известен като 'Кралят на попа'?",
        answers: [
            {text: "Бийтълджус", correct: false},
            {text: "Майкъл Джаксън", correct: true},
            {text: "Елвис Пресли", correct: false},
            {text: "Фреди Меркюри", correct: false},
        ]
    },
    {
        question: "Колко планети има в Слънчевата система?",
        answers: [
            {text: "7", correct: false},
            {text: "8", correct: true},
            {text: "9", correct: false},
            {text: "6", correct: false},
        ]
    },
    {
        question: "Кой е композиторът на операта 'Кармен'?",
        answers: [
            {text: "Верди", correct: false},
            {text: "Моцарт", correct: false},
            {text: "Бизе", correct: true},
            {text: "Пучини", correct: false},
        ]
    },
    {
        question: "Как се нарича най-високата планина в Северна Америка?",
        answers: [
            {text: "Денили", correct: true},
            {text: "Еверест", correct: false},
            {text: "Килиманджаро", correct: false},
            {text: "К2", correct: false},
        ]
    },
    {
        question: "Коя е най-голямата пустиня в света?",
        answers: [
            {text: "Сахара", correct: false},
            {text: "Гоби", correct: false},
            {text: "Атакама", correct: false},
            {text: "Антарктида", correct: true},
        ]
    },
    {
        question: "Кой е авторът на романа 'Война и мир'?",
        answers: [
            {text: "Фьодор Достоевский", correct: false},
            {text: "Лев Толстой", correct: true},
            {text: "Иван Тургенев", correct: false},
            {text: "Анна Ахматова", correct: false},
        ]
    },
    {
        question: "Кой е рекордьорът за най-много вкарани голове в един сезон на английската Премиър лига?",
        answers: [
            {text: "Thierry Henry", correct: false},
            {text: "Alan Shearer", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Luis Suarez", correct: false},
        ]
    },
    {
        question: "Кой е единственият футболист, който е спечелил Златната топка (Ballon d'Or) четири пъти поред?",
        answers: [
            {text: "Lionel Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Michel Platini", correct: false},
            {text: "Johan Cruyff", correct: false},
        ]
    },
    {
        question: "Кой е най-младият футболист, който е играл на световно първенство?",
        answers: [
            {text: "Pele", correct: true},
            {text: "Diego Maradona", correct: false},
            {text: "Lionel Messi", correct: false},
            {text: "Ronaldinho", correct: false},
        ]
    },
    {
        question: "Кой отбор спечели първото издание на Световното клубно първенство през 2000 г.?",
        answers: [
            {text: "Manchester United", correct: false},
            {text: "Real Madrid", correct: true},
            {text: "AC Milan", correct: false},
            {text: "Barcelona", correct: false},
        ]
    },
    {
        question: "Кой е най-вратарят с най-много изиграни мачове за националния отбор на Италия?",
        answers: [
            {text: "Dino Zoff", correct: true},
            {text: "Gianluigi Buffon", correct: false},
            {text: "Walter Zenga", correct: false},
            {text: "Gianluca Pagliuca", correct: false},
        ]
    },
    {
        question: "Кой е най-успешният национален отбор в историята на Копа Америка?",
        answers: [
            {text: "Brazil", correct: true},
            {text: "Argentina", correct: false},
            {text: "Uruguay", correct: false},
            {text: "Chile", correct: false},
        ]
    },
    {
        question: "Кой футболист носи прякора 'O Fenômeno'?",
        answers: [
            {text: "Ronaldo Nazário", correct: true},
            {text: "Lionel Messi", correct: false},
            {text: "Neymar", correct: false},
            {text: "Ronaldinho", correct: false},
        ]
    },
    {
        question: "Коя страна е домакин на футболното европейско първенство през 2024 г.?",
        answers: [
            {text: "Germany", correct: false},
            {text: "France", correct: false},
            {text: "Spain", correct: false},
            {text: "Italy", correct: true},
        ]
    },
    {
        question: "Кой отбор спечели най-много титли в историята на английската Премиър лига към септември 2021 г.?",
        answers: [
            {text: "Manchester United", correct: true},
            {text: "Liverpool", correct: false},
            {text: "Chelsea", correct: false},
            {text: "Arsenal", correct: false},
        ]
    },
    {
        question: "Кой футболист е известен като 'Il Divin Codino' (Божественият кодин)?",
        answers: [
            {text: "Roberto Baggio", correct: true},
            {text: "Alessandro Del Piero", correct: false},
            {text: "Francesco Totti", correct: false},
            {text: "Paolo Maldini", correct: false},
        ]
    },
    {
        question: "Кой български владетел е известен с прозвището 'Багряната петлица'?",
        answers: [
            {text: "Крум", correct: false},
            {text: "Симеон Велики", correct: false},
            {text: "Иван Асен II", correct: true},
            {text: "Борис I", correct: false},
        ]
    },
    {
        question: "Коя планина пресича България от запад на изток?",
        answers: [
            {text: "Рила", correct: false},
            {text: "Пирин", correct: false},
            {text: "Стара планина", correct: true},
            {text: "Родопи", correct: false},
        ]
    },
    {
        question: "Кой български поет е автор на стихотворението 'Левски'?",
        answers: [
            {text: "Христо Ботев", correct: true},
            {text: "Пенчо Славейков", correct: false},
            {text: "Иван Вазов", correct: false},
            {text: "Пейо Яворов", correct: false},
        ]
    },
    {
        question: "Кой български политик е прозван 'Батката'?",
        answers: [
            {text: "Александър Стамболийски", correct: true},
            {text: "Стойно Стойнов", correct: false},
            {text: "Георги Димитров", correct: false},
            {text: "Тодор Живков", correct: false},
        ]
    },
    {
        question: "Кой български град е известен като 'Градът на царете'?",
        answers: [
            {text: "София", correct: false},
            {text: "Велико Търново", correct: true},
            {text: "Пловдив", correct: false},
            {text: "Бургас", correct: false},
        ]
    },
    {
        question: "Кой български революционер е автор на книгата 'Идеята за щастие'?",
        answers: [
            {text: "Васил Левски", correct: true},
            {text: "Христо Ботев", correct: false},
            {text: "Георги Стойков Раковски", correct: false},
            {text: "Дамян Груев", correct: false},
        ]
    },
    {
        question: "Кой е първият премиер-министър на Република България след края на комунизма?",
        answers: [
            {text: "Жан Виденов", correct: false},
            {text: "Филип Димитров", correct: true},
            {text: "Симеон Сакскобургготски", correct: false},
            {text: "Иван Костов", correct: false},
        ]
    },
    {
        question: "Кой български географ е автор на първата българска карта 'Карта на Освободените български земи'?",
        answers: [
            {text: "Иван Шишманов", correct: false},
            {text: "Алеко Константинов", correct: false},
            {text: "Димитър Мишев", correct: true},
            {text: "Йоаким Груев", correct: false},
        ]
    },
    {
        question: "Кой български футболист има най-много мачове за националния отбор?",
        answers: [
            {text: "Борислав Михайлов", correct: false},
            {text: "Трайчо Костов", correct: false},
            {text: "Любо Пенев", correct: true},
            {text: "Христо Стоичков", correct: false},
        ]
    },
    {
        question: "Кой български писател е автор на романа 'Под игото'?",
        answers: [
            {text: "Христо Смирненски", correct: false},
            {text: "Елин Пелин", correct: false},
            {text: "Иван Вазов", correct: true},
            {text: "Алеко Константинов", correct: false},
        ]
    },
    {
        question: "Кой български архитект е проектирал Националния дворец на културата в София?",
        answers: [
            {text: "Иван Васев", correct: false},
            {text: "Георги Парапанов", correct: true},
            {text: "Александър Малинов", correct: false},
            {text: "Петко Сиркуров", correct: false},
        ]
    },
    {
        question: "Кой български влогодар е основател на Софийската книжовна школа?",
        answers: [
            {text: "Патриарх Евтимий", correct: false},
            {text: "Иван Асен II", correct: false},
            {text: "Свети Иван Рилски", correct: true},
            {text: "Цар Симеон Велики", correct: false},
        ]
    },
    {
        question: "Кой български археолог разкрива първите български столици Плиска и Велики Преслав?",
        answers: [
            {text: "Иван Вазов", correct: false},
            {text: "Александър Фол", correct: true},
            {text: "Васил Левски", correct: false},
            {text: "Христо Ботев", correct: false},
        ]
    },
    {
        question: "Каква е столицата на Франция?",
        answers: [
            {text: "Берлин", correct: false},
            {text: "Мадрид", correct: false},
            {text: "Лондон", correct: false},
            {text: "Париж", correct: true},
        ]
    },
    {
        question: "Каква е столицата на Италия?",
        answers: [
            {text: "Рим", correct: true},
            {text: "Атина", correct: false},
            {text: "София", correct: false},
            {text: "Будапеща", correct: false},
        ]
    },
    {
        question: "Каква е столицата на Япония?",
        answers: [
            {text: "Бангкок", correct: false},
            {text: "Сеул", correct: false},
            {text: "Токио", correct: true},
            {text: "Пекин", correct: false},
        ]
    },
    {
        question: "Каква е столицата на Русия?",
        answers: [
            {text: "Варшава", correct: false},
            {text: "Москва", correct: true},
            {text: "Киев", correct: false},
            {text: "Минск", correct: false},
        ]
    },
    {
        question: "Каква е столицата на Бразилия?",
        answers: [
            {text: "Буенос Айрес", correct: false},
            {text: "Лима", correct: false},
            {text: "Богота", correct: false},
            {text: "Бразилиа", correct: true},
        ]
    },
    {
        question: "Каква е столицата на Египет?",
        answers: [
            {text: "Алжир", correct: false},
            {text: "Тунис", correct: false},
            {text: "Работа", correct: false},
            {text: "Кайро", correct: true},
        ]
    },
    {
        question: "Коя българска река е най-дългата?",
        answers: [
            {text: "Дунав", correct: true},
            {text: "Марица", correct: false},
            {text: "Искър", correct: false},
            {text: "Янтра", correct: false},
        ]
    },
    {
        question: "Кой български архитект проектира паметника 'Алиана мост'?",
        answers: [
            {text: "Захари Зограф", correct: false},
            {text: "Алеко Константинов", correct: false},
            {text: "Боян Радев", correct: false},
            {text: "Георги Финков", correct: true},
        ]
    },
    {
        question: "Коя партия формира първото правителство след 10 ноември 1989 г.?",
        answers: [
            {text: "БКП", correct: false},
            {text: "ДПС", correct: false},
            {text: "СДС", correct: true},
            {text: "БСП", correct: false},
        ]
    },
    {
        question: "Кой български поет е автор на стихотворението 'Септември'?",
        answers: [
            {text: "Христо Ботев", correct: false},
            {text: "Пенчо Славейков", correct: true},
            {text: "Елин Пелин", correct: false},
            {text: "Алеко Константинов", correct: false},
        ]
    },
    {
        question: "Кой български политик е първият президент на Република България след края на комунизма?",
        answers: [
            {text: "Желю Желев", correct: true},
            {text: "Тодор Живков", correct: false},
            {text: "Петър Младенов", correct: false},
            {text: "Жан Виденов", correct: false},
        ]
    },
    {
        question: "Кой български писател е автор на романа 'Тютюн'?",
        answers: [
            {text: "Христо Смирненски", correct: false},
            {text: "Алеко Константинов", correct: false},
            {text: "Димитър Димов", correct: true},
            {text: "Елин Пелин", correct: false},
        ]
    },
    {
        question: "Коя река преминава през София?",
        answers: [
            {text: "Искър", correct: true},
            {text: "Марица", correct: false},
            {text: "Дунав", correct: false},
            {text: "Янтра", correct: false},
        ]
    },
    {
        question: "Кой български архитект е проектирал Народния театър в София?",
        answers: [
            {text: "Иван Васев", correct: true},
            {text: "Георги Парапанов", correct: false},
            {text: "Боян Радев", correct: false},
            {text: "Алеко Константинов", correct: false},
        ]
    },
    {
        question: "Коя е най-високата връхна точка на Рила?",
        answers: [
            {text: "Мусала", correct: true},
            {text: "Вихрен", correct: false},
            {text: "Мальовица", correct: false},
            {text: "Кутело", correct: false},
        ]
    },
    {
        question: "Кой български учен е известен с прозвището 'Бащата на българската география'?",
        answers: [
            {text: "Христо Данов", correct: false},
            {text: "Иван Георгов", correct: true},
            {text: "Пейо Яворов", correct: false},
            {text: "Христо Смирненски", correct: false},
        ]
    },
    {
        question: "Коя планина пресича България от север на юг?",
        answers: [
            {text: "Рила", correct: false},
            {text: "Стара планина", correct: false},
            {text: "Родопи", correct: false},
            {text: "Балкан", correct: true},
        ]
    },
    {
        question: "В коя година е основан Футболен клуб 'Левски' София?",
        answers: [
            {text: "1911", correct: false},
            {text: "1920", correct: false},
            {text: "1945", correct: false},
            {text: "1914", correct: true},
        ]
    },
    {
        question: "Кой е най-успешният треньор в историята на Левски?",
        answers: [
            {text: "Любослав Пенев", correct: true},
            {text: "Георги Василев - Гошо", correct: false},
            {text: "Найден Найденов - СТРУМА", correct: false},
            {text: "Гунди", correct: false},
        ]
    },
    {
        question: "Кой е всичкият подреждач на Левски, който се прозвал 'Магьосника'?",
        answers: [
            {text: "Христо Стоичков", correct: false},
            {text: "Христо Бонев", correct: true},
            {text: "Любослав Пенев", correct: false},
            {text: "Георги Василев - Гошо", correct: false},
        ]
    },
    {
        question: "Кой е най-вратарят с най-много изиграни мачове за Левски?",
        answers: [
            {text: "Георги Петков", correct: true},
            {text: "Благой Стоянов", correct: false},
            {text: "Бойко Борисов", correct: false},
            {text: "Милан Борян", correct: false},
        ]
    },
    {
        question: "Кой е най-вечният враг на Левски в българския футбол?",
        answers: [
            {text: "Лудогорец", correct: false},
            {text: "ЦСКА", correct: true},
            {text: "Берое", correct: false},
            {text: "Славия", correct: false},
        ]
    },
    {
        question: "Кой е авторът на романа 'Престъпление и наказание'?",
        answers: [
            {text: "Фьодор Достоевски", correct: true},
            {text: "Лев Толстой", correct: false},
            {text: "Хоноре дьо Балзак", correct: false},
            {text: "Джейн Остин", correct: false},
        ]
    },
    {
        question: "Кой е авторът на картина 'Мона Лиза'?",
        answers: [
            {text: "Леонардо да Винчи", correct: true},
            {text: "Пабло Пикасо", correct: false},
            {text: "Винсент ван Гог", correct: false},
            {text: "Микеланджело", correct: false},
        ]
    },
    {
        question: "Кой е основателят на теорията за относителността?",
        answers: [
            {text: "Алберт Ейнщайн", correct: true},
            {text: "Никола Тесла", correct: false},
            {text: "Мария Кюри", correct: false},
            {text: "Айнщайн не е физик", correct: false},
        ]
    },
    {
        question: "Кой е първият човек, който стъпил на Луната?",
        answers: [
            {text: "Нийл Армстронг", correct: true},
            {text: "Юрий Гагарин", correct: false},
            {text: "Джон Глен", correct: false},
            {text: "Баз Алдрин", correct: false},
        ]
    },
    {
        question: "Кой е авторът на пиесата 'Хамлет'?",
        answers: [
            {text: "Уилям Шекспир", correct: true},
            {text: "Гьоте", correct: false},
            {text: "Достоевски", correct: false},
            {text: "Толстой", correct: false},
        ]
    },
    {
        question: "Кой е основателят на съвременната атомна теория?",
        answers: [
            {text: "Джон Далтън", correct: true},
            {text: "Архимед", correct: false},
            {text: "Демокрит", correct: false},
            {text: "Ньютон", correct: false},
        ]
    },
    {
        question: "Кой е авторът на скулптурата 'Давид'?",
        answers: [
            {text: "Микеланджело", correct: true},
            {text: "Рафаело", correct: false},
            {text: "Донатело", correct: false},
            {text: "Тинторето", correct: false},
        ]
    },
    {
        question: "Какво е операционна система?",
        answers: [
            {text: "Системен софтуер, който управлява хардуерните ресурси на компютъра и предоставя услуги на софтуерните приложения.", correct: true},
            {text: "Програма за рисуване и графично дизайн.", correct: false},
            {text: "Програмен език за програмиране.", correct: false},
            {text: "Специален софтуер за разработка на игри.", correct: false},
        ]
    },
    {
        question: "Какво представлява RAM и каква е неговата роля в компютърните системи?",
        answers: [
            {text: "RAM е вид хардуер, който съхранява постоянна информация.", correct: false},
            {text: "RAM означава 'Read-Only Memory' и се използва за съхранение на постоянни данни.", correct: false},
            {text: "RAM е оперативна памет, която съхранява текущо използваните данни и инструкции от софтуерните приложения.", correct: true},
            {text: "RAM се използва за съхранение на мултимедийни файлове.", correct: false},
        ]
    },
    {
        question: "Какво е основното предназначение на графичната карта в компютърната система?",
        answers: [
            {text: "Обработка на графична информация и подобряване на визуалния изглед на дисплея.", correct: true},
            {text: "Управление на мрежови връзки.", correct: false},
            {text: "Съхранение на постоянни данни.", correct: false},
            {text: "Извършване на математически операции.", correct: false},
        ]
    },
    {
        question: "Каква е разликата между компилатор и интерпретатор?",
        answers: [
            {text: "Компилатор превежда целия програмен код в машинни инструкции преди изпълнение, докато интерпретатор превежда и изпълнява кода ред по ред.", correct: true},
            {text: "Компилатор превежда кода на ниско ниво, докато интерпретатор работи с високо ниво на абстракция.", correct: false},
            {text: "Компилатор е един вид програмен език, докато интерпретатор е софтуерен инструмент за отстраняване на грешки.", correct: false},
            {text: "Компилатори се използват само в уеб програмирането, докато интерпретатори - в desktop приложенията.", correct: false},
        ]
    },
    {
        question: "Какво представлява цикъл в програмирането?",
        answers: [
            {text: "Цикъл е конструкция, която позволява на програмата да изпълнява определени команди повторно, докато е изпълнено определено условие.", correct: true},
            {text: "Цикъл е част от паметта, която се използва за временно съхранение на данни.", correct: false},
            {text: "Цикъл е файлов формат, който се използва за съхранение на изображения.", correct: false},
            {text: "Цикъл е апарат, който се използва за обработка на графични данни.", correct: false},
        ]
    },
    {
        question: "Каква е функцията на хардуерната памет (като например хард диск) в компютърната система?",
        answers: [
            {text: "Съхраняване на постоянна информация и програми.", correct: true},
            {text: "Обработка на графични данни.", correct: false},
            {text: "Управление на входни и изходни устройства.", correct: false},
            {text: "Управление на оперативната памет.", correct: false},
        ]
    },
    {
        question: "Какво е масив в програмирането?",
        answers: [
            {text: "Масив е структура от данни, която съдържа група от елементи с еднакъв тип, които могат да бъдат достъпвани чрез индекси.", correct: true},
            {text: "Масив е функция, която извършва математически операции с числа.", correct: false},
            {text: "Масив е специфичен тип променлива, която пази в себе си допълнителна информация за обработка.", correct: false},
            {text: "Масив е алгоритъм за сортиране на данни.", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const dramaticSound = document.getElementById("dramatic-sound");
const goodSound = document.getElementById("good-sount");



function playGoodSound(){
    goodSound.play();
}

function playDramaticSound() {
    dramaticSound.play();
}

function shuffleQuestions(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let newArray = array.slice();

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
    }

    return newArray;
}
const nameInput = document.getElementById("name");
const startButton = document.getElementById("start-btn");

let playerName = ""; // Variable to store the player's name

startButton.addEventListener("click", () => {
    playerName = nameInput.value;
    if (playerName) {
        startQuiz();
    } else {
        alert("Please enter your name.");
    }
});

const shuffledQuestions = shuffleQuestions(questions);

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;  // Инициализация
 // Variable to store the player's name

startButton.addEventListener("click", () => {
    playerName = nameInput.value;
    if (playerName) {
        startQuiz();
    } else {
        alert("Please enter your name.");
    }
});

// ... (след)
function startQuiz(){
    if(playerName){ // Проверка за наличие на име
        currentQuestionIndex = 0;
        score = 0;
        answeredQuestions = 0;  // Нулиране на отговорените въпроси
        nextButton.innerHTML = "Next";
        showQuestion();
    } else {
        alert("Please enter your name."); // Ако няма въведено име, предупредете потребителя.
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let quesionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = quesionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        playGoodSound(); // Тук трябва да извикате функцията
    } else {
        selectedBtn.classList.add("incorrect");
        playDramaticSound(); // Тук трябва да извикате функцията
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    answeredQuestions++;  // Увеличаване на броя на отговорените въпроси
    if (answeredQuestions === 15) {
        showScore();
        nextButton.style.display = "none";
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `${playerName}, you scored ${score} out of ${answeredQuestions}!<br>`;

    const newGameButton = document.createElement("button");
    newGameButton.innerHTML = "New Game";
    newGameButton.classList.add("btn");
    newGameButton.addEventListener("click", startQuiz);
    answerButtons.appendChild(newGameButton);

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        if (answeredQuestions === 10) {  // Променено условие
            showScore();
            nextButton.style.display = "none";
        } else {
            startQuiz();
        }
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();