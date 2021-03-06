import logo from './logo.png';
import logo2 from './logo2.png';
import map_img from './map.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">Івано-Франківська область</p>
      </header>
        <div className="App-body">
            <h1>Івано-Франківська область</h1>
            <div className="Article-description">
                <strong>Івано-Франківська область (до 1962 року – Станіславська область) була утворена 4 грудня 1939 року. Обласний центр – місто Івано-Франківськ. Область розташована на південному заході України і межує з Львівською, Тернопільською, Чернівецькою та Закарпатською областями. На крайньому півдні область межує з Румунією.</strong>
                <div className="Images-block">
                    <div>
                        <img src={logo} alt="logo" />
                        <p>Герб Івано-Франківської області</p>
                    </div>
                    <div>
                        <img src={logo2} alt="logo" />
                        <p>Прапор Івано-Франківської області</p>
                    </div>
                    <div>
                        <img src={map_img} alt="logo" />
                    </div>
                </div>
            </div>

            <h2>Адміністративно-територіальна характеристика</h2>
            <p>Площа області 13,9 тис. км2

                За адміністративно-територіальним поділом на початок 2021 року область налічує 6 районів, 15 міст, 24 селища. В області створені 15 міських територіальних громад, 23 селищні та 24 сільські територіальні громади.

                Всього в області налічується 804 населених пункти, з них – 765 сільські.

                Обласний центр – м. Івано-Франківськ. Віддаль від центру до Києва в км: залізницею – 716,  шосейними шляхами – 614.

                Райони області: Верховинський, Івано-Франківський, Калуський, Коломийський, Косівський, Надвірнянський.
            </p>

            <h2>Соціально-демографічна ситуація</h2>
            <p>Чисельність наявного населення області, за оцінкою, за попередніми даними, на 1 січня 2021 року становила 1361,1 тис. осіб, у тому числі у міській місцевості – 605,4 тис., у сільській – 755,7 тис. осіб. Упродовж 2020 року чисельність населення області зменшилась на 7 тис. осіб. Такі зміни відбулися за рахунок природного скорочення (на 7,4 тис. осіб), водночас зафіксовано міграційний приріст (на 0,4 тис. осіб).</p>
            <p>Серед міст та районів області рівень природного скорочення коливався від 15,4 особи на 1000 осіб наявного населення у Рогатинському районі до 0,8 особи у Верховинському районі. Природний приріст населення зафіксовано тільки в Яремчанській міськраді (19 осіб або 0,8 осіб на 1000 осіб наявного населення).</p>
            <p>Упродовж 2020 року в області народилося 11,8 тис. малюків, 19,2 тис. осіб померло. На 100 померлих в області припадає 61 живонароджений проти 48 в середньому по державі. Порівняно з 2019 роком кількість живонароджених зменшилась на 2,8%, померлих – збільшилась на 9,3%.</p>
            <p>Рівень народжуваності коливався від 6,2 особи на 1000 осіб наявного населення у Рогатинському районі до 12,1 особи у Верховинському районі, смертності – від 10,1 особи на 1000 осіб наявного населення у Івано-Франківській міській раді до 21,6 особи у Рогатинському районі.</p>
            <p>У 2020 році до області прибуло 12,6 тис. осіб, вибуло – 12,2 тис. Унаслідок міграційного руху в усіх містах обласного значення та районах, крім міст Івано-Франківська (міськради), Калуша, Коломиї та Яремче (міськради) спостерігалося міграційне скорочення населення.</p>
            <p><strong>Національний склад населення:</strong> (за даними Всеукраїнського перепису населення 2001 року)</p>
            <table border="1">
                <thead>
                    <tr>
                        <td><p>Національність</p></td>
                        <td><p>Кількість осіб</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>українці</td><td>1371242</td></tr>
                    <tr><td>росіяни</td><td>24925</td></tr>
                    <tr><td>поляки</td><td>1864</td></tr>
                    <tr><td>білоруси</td><td>1468</td></tr>
                    <tr><td>інші національності</td><td>3494</td></tr>
                    <tr><td>національність не вказана</td><td>3136</td></tr>
                    <tr><td>усього</td><td>1406129</td></tr>
                </tbody>
            </table>


            <h2>Економічна ситуація</h2>
            <h3>Промисловість у січні-березні 2021 року</h3>

            <p> Важливим завданням економічної регіональної політики є створення сприятливого середовища для формування та функціонування  господарського комплексу – дієвого засобу  розв’язання першочергових соціально-економічних проблем, зокрема, створення додаткових робочих місць та наповнення бюджетів усіх рівнів.</p>
            <p> З початку 2021 року подолано спад промислового виробництва, який спостерігався у попередньому році. Індекс промислової продукції в області за підсумками січня-квітня 2021 року до відповідного періоду 2020 року складає 108,7% (6 місце в Україні).</p>
            <p> Із приростом виробництва промислової продукції з початку року працювали підприємства машинобудування на 60,9%, металургійного виробництва, виробництва готових металевих виробів, крім машин та устатковання - на 31,1%, з виготовлення виробів з деревини, виробництва паперу та поліграфічної діяльності на 19,8%, текстильного виробництва, виробництва одягу, шкіри, виробів зі шкіри та інших матеріалів на 19,4%, постачання електроенергії, газу, пари та кондиційованоготповітря на 16,7%,  виробництва хімічних речовин та хімічної продукції  на 12,1%, виробництва гумових і пластмасових виробів, іншої неметалевої мінеральної продукції на 5,1%.</p>
            <p> В області реалізовано промислової продукції (товарів, послуг) на суму 19,5 млрд грн, що складає 2,5% в реалізованій продукції України (12 місце в Україні).</p>
            <p> На ТОВ «Карпатнафтохім» нарощено потужності з випуску рідкого кисню, що є вкрай необхідним для забезпечення потреб медичних закладів області в умовах пандемії короновірусу. Також освоєно випуск обгортуючої поліетиленової плівки з використанням лінійного поліетилену компанії Aramco.</p>
            <p> Позитивним напрямком для розвитку бізнесу є діяльність єдиного приватного індустріального парку «Аркан», на території якого вже працює 6 підприємств-резидентів. Серед новостворених -  ТОВ «Оптімус Трал», яким в минулому році введено в дію виробництво автоцистерн  «Barrel Dash» для нафтопродуктів. Програма розвитку парку розрахована на три роки і забезпечить створення 1,5 тис. нових робочих місць.</p>
            <p> З введенням нової моделі ринку електроенергії ВП «Бурштинська ТЕС» ПАТ «ДТЕК Західенерго» зберігає свої переваги на ринку Бурштинського енергоострова, що працює паралельно з Об’єднаною енергосистемою Європейського Союзу.</p>
            <p> З початку поточного року підприємством збільшено виробництво електроенергії за рахунок максимального завантаження потужностей (7-8 блоків), що, в свою чергу, забезпечило безперебійне постачання електроенергії на внутрішній ринок та стабільну роботу Об’єднаної енергетичної системи України.</p>
            <p> За рахунок цього у січні-квітні 2021 року в галузі постачання, електроенергії, газу, пари та кондиційованого повітря індекс промислової продукції склав 116,7%.</p>
            <p> На промислових підприємствах області у березні 2021 року працювало  43,1 тис. осіб із середньою заробітною  платою  штатних працівників 13,1 тис. грн.</p>
            <p> У розвиток підприємств промисловості у 1 кварталі 2021 року спрямовано найбільшу частку капітальних інвестицій – 45,1% загального обсягу капітальних інвестицій або 701,5 млн. грн.</p>


            <h2>Енергоефективність</h2>
            <p>В області суттєво зросла кількість об’єктів у сфері відновлюваної енергетики, зокрема сонячної. Станом на 01.04.2021 року, функціонує:</p>
            <ul>
                <li>101 промислова сонячна електростанція (СЕС), загальна потужність котрих складає понад 232 МВт;</li>
                <li>біогазовий завод, потужність якого складає 1,2 МВт;</li>
                <li>біогазова станція з переробки сміття потужністю 0,66 МВт;</li>
                <li>перша черга вітрової електростанції (ВЕС) потужністю 0,6 МВт;</li>
                <li>5 міні ГЕС загальною потужністю 3,9 МВт.</li>
                <li>5 міні ГЕС загальною потужністю 3,9 МВт.</li>
            </ul>
            <p> Крім того, 2135 приватних домогосподарства приєднались до електричних мереж АТ «Прикарпаттяобленерго» (а це 4 місце серед областей по кількості встановлених СЕС та 3 місце по потужності встановлених СЕС). Їх сумарна потужність становить 60,6 МВт, а вироблена електроенергія покриває власні потреби в межах середнього рівня споживання більше 15 тисяч домогосподарств.</p>
            <p> В області розроблена та затверджена рішенням обласної ради від 23.12.2020 № 31-2/2020 «Регіональна цільова програма енергозбереження для населення на 2021 рік» (далі – обласна Програма), в рамках реалізації державної програми «теплих кредитів». Обласна Програма розроблена відповідно до Постанови Кабінету Міністрів України від 30. 09. 2020 року № 896 «Про внесення змін до постанов Кабінету Міністрів України від 1 березня 2010 р. № 243 і від 17 жовтня 2011 р. № 1056».</p>
            <p> Проєктом обласної Програми передбачено здійснення відшкодування частини суми кредиту (10 відс.) за залученими в кредитно-фінансових установах кредитами на впровадження енергозберігаючих заходів для ОСББ та фізичних осіб області.</p>
            <p> Обласна Програма передбачає можливість фінансування заходів 2,2 млн. грн, водночас в обласному бюджеті на заходи даної Програми у 2021 році передбачено кошти в розмірі лише 200 тис гривень. В цьому році вилучена вимога щодо співфінансування з місцевих бюджетів.</p>
            <p> На даний час, розпорядженням Івано-Франківської обласної державної адміністрації від 23.04.2021 року № 148, зареєстроване в Південно-Західному міжрегіональному управлінні Міністерства юстиції (м. Івано-Франківськ) 29.04.2021 р. за № 35/156, затверджено «Порядок використання коштів обласного бюджету на виконання регіональної цільової програми енергозбереження для населення Івано-Франківської області на 2021 рік».</p>
            <p> Також підготовлено договори для підписання з обласними установами АТ Ощадбанк та АБ Укргазбанк про співробітництва з облдержадміністрацією в рамках Програми «теплих кредитів».</p>
            <p> Здійснення обласної Програми заплановано розпочати у червні 2021 року. Аналогічна програма прийнята у місті Калуші, на заходи якої у 2021 році виділено з місцевого бюджету – 100 тис гривень.</p>
            <p> Разом з тим, продовжено роботу та напрацювання спільної концепції з метою подальшої реалізації кампаній з популяризації Програми «ЕНЕРГОДІМ», в рамках Фонду енергоефективності. Відповідно, облдержадміністрація проводить роботу з органами місцевого самоврядування  з метою стимулювання до розроблення місцевих програм для підтримки ОСББ в рамках Програми «Енергодім». На даний час, такі програми розроблені у містах Івано-Франківську та Коломиї.</p>


        </div>
    </div>
  );
}

export default App;
