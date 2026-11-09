import { BulbListing, SocketType } from '../types';
import headlightPairImg from '../assets/images/headlight_pair.jpg';

export const BULB_LISTINGS: BulbListing[] = [
  {
    id: 'H1',
    name: 'H1 Mini 6000K LED Headlight Bulbs',
    socketCode: 'H1',
    aliases: ['H1', 'P14.5s'],
    beamType: 'Single High/Low',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: '12,000 RPM Silent Turbo Fan + Aviation Aluminum',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['Acura Integra', 'Honda Civic (Selected Projectors)', 'BMW 3-Series High Beam/Fog', 'Audi A4/A6 High Beam', 'Subaru Legacy', 'Hyundai Veloster'],
    inStock: true,
    image: '/assets/aistudio/Screenshot_20261106_034713_AliExpress_197b664c.jpg',
    description: {
      en: 'Ultra-compact H1 Mini LED headlight bulb set delivering brilliant 6000K diamond crisp white illumination. 1:1 halogen filament design fits perfectly into projector lenses and tight high-beam or fog light housings with zero modification.',
      es: 'Juego de bombillas LED mini H1 6000K blanco diamante ultra brillante. Diseño 1:1 que cabe perfectamente en carcasas de proyectores y luces antiniebla sin modificaciones.',
      pl: 'Ultrakompaktowy zestaw żarówek LED H1 Mini 6000K diamentowa biel. Konstrukcja 1:1 idealnie pasuje do soczewek projektorowych, świateł drogowych i przeciwmgielnych bez przeróbek.',
      lt: 'Itin kompaktiškos H1 Mini LED lemputės 6000K deimantinė balta šviesa. 1:1 halogeno dydis tobulai tinka lęšiniams žibintams ir rūko žibintams be jokių perdarymų.',
      uk: 'Ультракомпактний комплект LED ламп H1 Mini 6000K діамантовий білий. Дизайн 1:1 ідеально підходить для лінз та протитуманних фар без будь-яких доробок.',
      ru: 'Ультракомпактный комплект светодиодных ламп H1 Mini 6000K кристально-белый свет. Размер 1:1 идеально подходит для линз и противотуманных фар без доработок.'
    },
    features: {
      en: [
        'Pure 6000K Diamond Xenon White light output',
        '1:1 Mini body fits into tight headlight housings',
        'Built-in 12,000 RPM silent turbo cooling fan',
        'Instant 0.01s instant start with zero warm-up time',
        'Aviation-grade 6063 aluminum alloy heatsink',
        'Plug & play socket, non-polarity connection'
      ],
      es: [
        'Luz blanca pura de xenón diamante 6000K',
        'Cuerpo mini 1:1 para carcasas ajustadas',
        'Ventilador turbo silencioso integrado de 12.000 RPM',
        'Encendido instantáneo en 0.01s sin calentamiento',
        'Disipador de aluminio aeronáutico 6063',
        'Conexión plug & play sin polaridad'
      ],
      pl: [
        'Czysta diamentowa biel 6000K',
        'Kompaktowy korpus 1:1 do ciasnych reflektorów',
        'Wbudowany cichy wentylator turbo 12 000 obr./min',
        'Błyskawiczny start w 0,01s bez nagrzewania',
        'Radiator z aluminium lotniczego 6063',
        'Podłączenie Plug & Play bez względu na polaryzację'
      ],
      lt: [
        'Gryna 6000K deimantinė ksenono balta šviesa',
        '1:1 mini korpusas tinka ankštoms žibintų dėžutėms',
        'Integruotas tylus 12 000 aps./min aušinimo ventiliatorius',
        'Akimirksniu įsižiebia per 0,01 sek.',
        'Aviacinio 6063 aliuminio lydinio radiatorius',
        'Plug & Play montavimas be poliarizacijos vargo'
      ],
      uk: [
        'Чисте діамантове біле світло 6000K',
        'Міні корпус 1:1 підходить у будь-які фари',
        'Вбудований безшумний турбовентилятор 12 000 об/хв',
        'Миттєве включення 0.01с',
        'Авіаційний алюмінієвий радіатор 6063',
        'Підключення Plug & Play'
      ],
      ru: [
        'Чистый кристально-белый свет 6000K',
        'Миниатюрный корпус 1:1 для компактных фар',
        'Встроенный бесшумный турбовентилятор 12 000 об/мин',
        'Мгновенный розжиг за 0.01 секунды',
        'Авиационный алюминиевый радиатор 6063',
        'Подключение Plug & Play'
      ]
    }
  },
  {
    id: 'H3',
    name: 'H3 Mini 6000K LED Fog / Driving Bulbs',
    socketCode: 'H3',
    aliases: ['H3', 'PK22s'],
    beamType: 'Fog / Low Beam',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: 'Turbo Cooling Fan + Copper Core Heat Pipe',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Audi A4/A6 Fog', 'Volkswagen Golf/Jetta Fog', 'Subaru Impreza/WRX Fog', 'Toyota 4Runner Fog', 'Nissan Frontier Fog', 'Mazda Miata Aux'],
    inStock: true,
    image: '/assets/aistudio/grok_1794041258109_b9a798b1.jpg',
    description: {
      en: 'Dedicated H3 Mini LED bulb pair with flexible silicone lead wire and compact base. Engineered specifically for auxiliary fog lights and tight bumper housings, slicing through mist, rain, and darkness with 6000K pure white beam.',
      es: 'Par de bombillas LED mini H3 con cable flexible y base compacta. Diseñado para luces antiniebla y parachoques estrechos, penetrando la niebla y lluvia con luz blanca 6000K.',
      pl: 'Dedykowana para żarówek H3 Mini LED z elastycznym przewodem silikonowym. Zaprojektowana do świateł przeciwmgielnych i dodatkowych reflektorów, zapewniając doskonałą widoczność 6000K.',
      lt: 'H3 Mini LED lempučių pora su lanksčiu laidu ir kompaktišku pagrindu. Sukurta rūko ir papildomiems žibintams, suteikia skaidrią 6000K šviesą rūke ir tamsoje.',
      uk: 'Пара ламп H3 Mini LED з гнучким проводом для протитуманних фар. Пробиває туман і дощ чистим білим світлом 6000K.',
      ru: 'Комплект ламп H3 Mini LED с гибким проводом для противотуманных фар. Пробивает туман и дождь чистым белым светом 6000K.'
    },
    features: {
      en: [
        'Dedicated flexible high-temp silicone lead wire',
        'Ultra-slim blade chip placement for razor-sharp beam cutoff',
        '300% more road illumination than factory H3 halogens',
        'IP68 waterproof seal prevents moisture fogging',
        'Aluminum alloy thermal dissipation base'
      ],
      es: [
        'Cable de silicona de alta temperatura',
        'Diseño ultra delgado para un corte de haz perfecto',
        '300% más iluminación que los halógenos de fábrica',
        'Sellado impermeable IP68 contra condensación',
        'Base de disipación de aleación de aluminio'
      ],
      pl: [
        'Odporny na wysokie temperatury przewód silikonowy',
        'Cienka konstrukcja gwarantująca idealną linię odcięcia',
        '300% więcej światła niż fabryczny halogen H3',
        'Wodoodporność IP68 zabezpieczająca przed parowaniem',
        'Wydajna aluminiowa podstawa chłodząca'
      ],
      lt: [
        'Karščiui atsparus lankstus silikoninis laidas',
        'Itin plonas lustų išdėstymas tiksliam šviesos spinduliui',
        '300% daugiau šviesos kelyje nei standartinis halogenas',
        'IP68 atsparumas drėgmei ir dulkėms',
        'Efektyvus aliuminio lydinio šilumos šalinimas'
      ],
      uk: [
        'Термостійкий силіконовий провід',
        'Чітка світлотіньова межа без засліплення',
        'На 300% яскравіше за штатний галоген',
        'Захист IP68 від вологи та пилу',
        'Алюмінієвий тепловідвід'
      ],
      ru: [
        'Термостойкий силиконовый провод',
        'Четкая светотеневая граница без ослепления',
        'На 300% ярче штатных галогенок',
        'Защита IP68 от влаги и пыли',
        'Алюминиевый теплоотвод'
      ]
    }
  },
  {
    id: 'H3-COB',
    name: 'Aftermarket COB LED H3 Replacement Kit',
    socketCode: 'H3 (COB Kit)',
    aliases: ['H3 COB', 'H3 COB Kit', 'Aftermarket H3 Kit', 'H3 PK22s COB'],
    beamType: 'Fog / Low Beam',
    variantNote: 'Aftermarket High-Density COB Chip Kit',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: 'Solid Fluted Aluminum Heatsink Base + Ceramic Substrate',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Universal Aftermarket H3 Fog Housings', 'Audi A4/A6 Fog', 'VW Golf/Jetta Fog', 'Subaru Impreza Fog', 'Toyota 4Runner Aux Pods', 'Nissan Frontier Fog', 'Mazda Miata Fog Lights', 'Off-Road Bumper Light Pods'],
    inStock: true,
    image: '/assets/aistudio/grok_1794041051588_18132497.jpg',
    description: {
      en: 'Aftermarket COB LED H3 Replacement Kit featuring high-density Chip-On-Board (COB) matrix arrays and heavy-duty insulated dual spade lead wires. Designed as a direct drop-in replacement for aftermarket fog lamps and auxiliary light housings, producing an ultra-wide 360-degree 6000K diamond white light spread.',
      es: 'Kit de reemplazo LED COB H3 para mercado de accesorios con matrices COB de alta densidad y cables con terminales dobles. Reemplazo directo para luces antiniebla y auxiliares con luz blanca 6000K de 360 grados.',
      pl: 'Zestaw zamienny Aftermarket COB LED H3 z matrycami COB o wysokiej gęstości oraz podwójnymi przewodami połączeniowymi. Bezpośredni zamiennik do lamp przeciwmgielnych i dodatkowych reflektorów 6000K.',
      lt: 'Aftermarket COB LED H3 pakeitimo komplektas su didelio tankio COB mikroschemomis ir izoliuotais dvigubais laidais. Tiesioginis pakaitalas rūko ir papildomiems žibintams su 6000K deimantine šviesa.',
      uk: 'Комплект Aftermarket COB LED H3 зі щільними COB матрицями та подвійними клемами підключення. Ідеальний для додаткових та протитуманних фар 6000K.',
      ru: 'Комплект Aftermarket COB LED H3 с матрицами высокой плотности COB и двойными изолированными проводами. Отличная замена для противотуманных и дополнительных фар 6000K.',
      de: 'Aftermarket COB LED H3 Ersatz-Kit mit hochdichten COB-Chips und doppelten Flachsteckerkabeln für Nebelscheinwerfer.',
      fr: 'Kit de remplacement COB LED H3 avec puces COB haute densité et câbles doubles pour feux antibrouillard.',
      it: 'Kit di ricambio Aftermarket COB LED H3 con chip COB ad alta densità e doppi cavi per fendinebbia.',
      pt: 'Kit de reposição Aftermarket COB LED H3 com chips COB de alta densidade e cabos duplos para faróis de neblina.',
      ar: 'طقم استبدال ليد COB H3 عالي الكثافة للمصابيح الضبابية والإضافية بإضاءة 6000K نقية.'
    },
    features: {
      en: [
        'High-density Chip-On-Board (COB) wide-angle illumination',
        'Extended heat-resistant insulated lead wires with dual spade connectors',
        'Fluted aircraft aluminum heatsink barrel for rapid heat expulsion',
        'Instantaneous 0.01s full luminosity with zero warm-up period',
        '1:1 compact base fits inside tight aftermarket fog lamp housings',
        'IP68 fully submersible waterproof & vibration-resistant construction'
      ],
      es: [
        'Iluminación gran angular Chip-On-Board (COB) de alta densidad',
        'Cables aislados resistentes al calor con conectores de doble clavija',
        'Cuerpo de aluminio de aviación acanalado para disipación térmica rápida',
        'Encendido instantáneo en 0.01s sin retraso',
        'Base compacta 1:1 para carcasas ajustadas',
        'Construcción IP68 sumergible y resistente a vibraciones'
      ],
      pl: [
        'Szerokokątna matryca Chip-On-Board (COB) o wysokiej gęstości',
        'Wzmocnione, odporne na ciepło przewody z podwójnymi konektorami',
        'Żebrowany korpus z aluminium lotniczego dla szybkiego chłodzenia',
        'Błyskawiczny start 0.01s bez zwłoki',
        'Kompaktowa baza 1:1 pasująca do ciasnych obudów',
        'Odporność IP68 na wodę, kurz i wstrząsy'
      ],
      lt: [
        'Didelio tankio Chip-On-Board (COB) plataus kampo apšvietimas',
        'Karščiui atsparūs izoliuoti laidai su dvigubomis jungtimis',
        'Rifliuotas aviacinio aliuminio korpusas greitam šilumos atidavimui',
        'Akimirksniu įsižiebia per 0.01s be jokio įkaitimo laiko',
        '1:1 kompaktiškas pagrindas tinka ankštiems žibintų korpusams',
        'IP68 visiškas atsparumas vandeniui, dulkėms ir vibracijoms'
      ],
      uk: [
        'Ширококутне освітлення матриці COB високої щільності',
        'Термостійкі проводи з подвійними роз’ємами',
        'Ребристий алюмінієвий корпус для ефективного охолодження',
        'Миттєвий запуск 0.01с без затримки',
        'Компактний цоколь 1:1 для тісних фар',
        'Захист IP68 від води, пилу та вібрацій'
      ],
      ru: [
        'Широкоугольное освещение высокой плотности COB',
        'Термостойкие изолированные провода с двойными клеммами',
        'Ребристый корпус из авиационного алюминия для быстрого охлаждения',
        'Мгновенный розжиг за 0.01с без задержки',
        'Компактный размер 1:1 для плотных противотуманных фар',
        'Защита IP68 от влаги, грязи и вибраций'
      ]
    }
  },
  {
    id: 'H4',
    name: 'H4 / 9003 / HB2 Hi/Low Dual Beam LED Bulbs',
    socketCode: 'H4 / 9003 / HB2',
    aliases: ['H4', '9003', 'HB2', 'P43t'],
    beamType: 'Dual Hi/Low',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair (Hi & Low Combined)',
    wattage: '60W / Pair',
    cooling: 'Active Turbo Cooling Fan + Pure Copper Substrate',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Honda Civic (96-03)', 'Honda Fit', 'Toyota Tacoma (05-15)', 'Jeep Wrangler (TJ/JK)', 'Toyota Corolla (older)', 'Nissan Frontier', 'Subaru Forester (98-08)', 'Mazda Miata NA/NB', 'Motorcycles & ATVs'],
    inStock: true,
    image: '/assets/aistudio/Screenshot_20261106_034930_AliExpress_b533142a.jpg',
    description: {
      en: 'The legendary H4 / 9003 / HB2 dual-beam master bulb with high beam and low beam integrated into a single bulb with factory 3-prong connector. Built with anti-glare light shielding shields to project a laser-sharp low beam cutoff and devastating long-distance high beam.',
      es: 'La legendaria bombilla dual H4 / 9003 / HB2 con luces altas y bajas integradas con conector de 3 clavijas. Diseñada con escudo antideslumbrante para un corte nítido en bajas y gran alcance en altas.',
      pl: 'Kultowa żarówka dwuwłóknowa H4 / 9003 / HB2 ze zintegrowanymi światłami mijania i drogowymi oraz standardową wtyczką 3-pinową. Wyposażona w osłonę przeciwolśnieniową dla ostrej linii odcięcia.',
      lt: 'Populiarios dviejų funkcijų H4 / 9003 / HB2 LED lemputės (trumpos ir ilgos šviesos vienoje lemputėje su 3 kontaktų jungtimi). Tikslus šviesos spindulys neakina priešpriešinių vairuotojų.',
      uk: 'Легендарна двопроменева лампа H4 / 9003 / HB2 (ближній + дальні світло в одній лампі з 3-контактним роз’ємом). Оснащена шторкою проти засліплення зустрічного транспорту.',
      ru: 'Легендарная двухрежимная лампа H4 / 9003 / HB2 (ближний + дальний свет в одной лампе с 3-контактным разъемом). Оснащена шторкой для защиты от ослепления встречных водителей.'
    },
    features: {
      en: [
        'Dual-beam technology: High Beam & Low Beam in one bulb',
        'Standard 3-prong factory plug directly connects to car harness',
        'Integrated micro-shield prevents glaring oncoming traffic',
        'Super bright 6000K diamond white light punches through dark nights',
        'Fits cars, trucks, Jeeps, SUVs, motorcycles and ATVs'
      ],
      es: [
        'Tecnología de doble haz: Luz Alta y Baja en una sola bombilla',
        'Conector estándar de 3 clavijas directo al arnés original',
        'Escudo integrado que previene deslumbrar a otros conductores',
        'Blanco diamante 6000K ultra brillante para máxima visibilidad nocturna',
        'Compatible con autos, camionetas, Jeeps, motos y cuatrimotos'
      ],
      pl: [
        'Światła mijania i drogowe (długie/krótkie) w jednej żarówce',
        'Standardowa fabryczna wtyczka 3-pin bez adapterów',
        'Zintegrowana przesłona chroni przed oślepianiem innych',
        'Mocna diamentowa biel 6000K rozświetlająca całą drogę',
        'Pasuje do aut, ciężarówek, Jeepów i motocykli'
      ],
      lt: [
        'Dvigubas spindulys: tolimosios ir artimosios šviesos vienoje lemputėje',
        'Standartinė 3 kontaktų originali jungtis',
        'Apsauginis skydelis užkerta kelią priešpriešos akinimui',
        'Ypatingai ryški 6000K šviesa puikiam matomumui naktį',
        'Tinka lengviesiems automobiliams, visureigiams ir motociklams'
      ],
      uk: [
        'Ближнє і дальнє світло в одній лампі',
        'Стандартний заводський 3-контактний штекер',
        'Спеціальний екран проти засліплення зустрічних авто',
        'Яскравий білий промінь 6000K для максимальної безпеки',
        'Підходить для авто, позашляховиків та мотоциклів'
      ],
      ru: [
        'Ближний и дальний свет в одной лампе',
        'Стандартный заводской 3-контактный штекер',
        'Встроенный экран для четкой светотеневой границы',
        'Яркий белый луч 6000K для максимальной видимости ночью',
        'Подходит для авто, внедорожников и мотоциклов'
      ]
    }
  },
  {
    id: 'H7',
    name: 'H7 Direct Plug Mini 6000K LED Bulbs (Wireless 1:1 OEM)',
    socketCode: 'H7 (Direct Plug)',
    aliases: ['H7', 'H7 Direct', 'PX26d', 'Wireless H7', '1:1 H7'],
    beamType: 'Single High/Low',
    variantNote: 'Direct Plug Wireless Base',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: 'High-Velocity Turbo Fan + Aviation Aluminum Heat Pipe',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['BMW 3 & 5 Series', 'Mercedes-Benz C & E Class', 'Volkswagen Golf, Jetta, Passat', 'Audi A3, A4', 'Hyundai Elantra, Sonata', 'Kia Optima, Forte', 'Ford Fusion', 'Subaru Outback'],
    inStock: true,
    image: '/assets/aistudio/grok_1794249862156_bf6881f0.jpg',
    description: {
      en: 'Direct-Plug wireless H7 Mini 6000K LED bulb pair with factory 2-prong base built directly into the collar. No external wire pigtails or dangling connectors — locks straight into factory European and domestic twist-lock retainers just like an OEM halogen bulb.',
      es: 'Par de bombillas LED mini H7 6000K de conexión directa inalámbrica con clavijas integradas en la base. Sin cables colgantes: encaja directamente en retenedores alemanes y nacionales exactamente como el halógeno original.',
      de: 'Direkt-Steck H7 Mini 6000K LED Birnen mit kabelloser 2-Pin Basis direkt am Sockel. Keine störenden Kabelpeitschen — rastet direkt in deutsche und internationale Drehverschlüsse ein.',
      fr: 'Ampoules LED H7 Mini 6000K à branchement direct sans fil avec broches intégrées au culot. Aucun câble externe encombrant — se verrouille directement dans les supports d’origine.',
      it: 'Coppia di lampadine LED H7 Mini 6000K a innesto diretto senza cavi, con pin integrati nella base. Si blocca nei fermi originali europei esattamente come una lampadina alogena standard.',
      pt: 'Par de lâmpadas LED H7 Mini 6000K de encaixe direto sem fios, com pinos integrados na base. Trava diretamente nos encaixes de fábrica sem fios pendurados.',
      pl: 'Bezpośrednio wpinane żarówki LED H7 Mini 6000K z pinami wbudowanymi w korpus (bez przewodów). Blokują się w fabrycznych gniazdach BMW, VW, Mercedesa dokładnie jak tradycyjny halogen.',
      lt: 'Tiesioginio pajungimo H7 Mini 6000K LED lemputės be laidų (kontaktai integruoti korpuse). Fiksuojasi vokiškuose žibintuose be jokių perdirbimų ir be laidų.',
      uk: 'Бездротові лампи H7 Mini 6000K з прямим підключенням (контакти вмонтовані в основу). Фіксуються в штатних замках фар без зайвих проводів.',
      ru: 'Беспроводные лампы H7 Mini 6000K с прямым подключением (контакты встроены в цоколь). Устанавливаются в штатные крепления фар точно так же, как галогенки.',
      ar: 'طقم لمبات ليد H7 ميني 6000K بتركيب مباشر بدون أسلاك، دبابيس مدمجة في القاعدة للتثبيت السريع مثل لمبة الوكالة تماماً.'
    },
    features: {
      en: [
        'Direct 1:1 wireless plug — no extension wire or bulky cable harness',
        'Direct twist-in fitment for BMW, Mercedes, VW, Audi, Hyundai & Kia',
        'Engineered to match halogen filament focal length exactly',
        'Canbus error-free architecture prevents bulb out warnings',
        '360-degree beam angle adjustment ring',
        'Pure 6000K Diamond White cuts eye fatigue on highway drives'
      ],
      es: [
        'Enchufe inalámbrico 1:1 directo: sin cables colgantes',
        'Ajuste directo para BMW, Mercedes, VW, Audi, Hyundai y Kia',
        'Diseñado para coincidir exactamente con el punto focal del halógeno',
        'Arquitectura Canbus que previene avisos en el tablero',
        'Anillo de rotación de 360 grados para ajuste de haz',
        'Blanco diamante 6000K que reduce la fatiga visual'
      ],
      de: [
        'Direkter 1:1 kabelloser Anschluss — keine Kabelverlängerung nötig',
        'Direkte Passform für BMW, Mercedes, VW, Audi, Hyundai & Kia',
        'Exakter Halogen-Brennpunkt für scharfe Hell-Dunkel-Grenze',
        'Canbus-kompatibel ohne Fehlermeldungen im Bordcomputer',
        '360-Grad drehbarer Einstellring',
        'Kristallklares 6000K Diamantweiß gegen Ermüdung der Augen'
      ],
      fr: [
        'Branchement sans fil direct 1:1 — aucun faisceau de câbles externe',
        'Installation directe pour BMW, Mercedes, VW, Audi, Hyundai et Kia',
        'Point focal identique au filament halogène d’origine',
        'Compatible Canbus sans message d’erreur au tableau de bord',
        'Bague orientable à 360 degrés',
        'Blanc diamant 6000K réduisant la fatigue oculaire'
      ],
      it: [
        'Innesto wireless diretto 1:1 senza cavi esterni',
        'Montaggio perfetto per BMW, Mercedes, VW, Audi, Hyundai e Kia',
        'Punto focale millimetrico per fascio di luce perfetto',
        'Sistema Canbus anti-errore',
        'Ghiera regolabile a 360 gradi',
        'Luce bianco diamante 6000K ad alta visibilità'
      ],
      pt: [
        'Encaixe 1:1 direto sem fios — sem cabos pendurados',
        'Compatibilidade direta com BMW, Mercedes, VW, Audi, Hyundai e Kia',
        'Ponto focal idêntico ao halogênio para corte perfeito',
        'Sistema Canbus sem avisos no painel',
        'Anel ajustável em 360 graus',
        'Branco diamante 6000K para máxima segurança noturna'
      ],
      pl: [
        'Bezpośredni montaż bez kabli (wtyk zintegrowany w podstawie)',
        'Bezpośredni montaż w BMW, Mercedes, VW, Audi, Hyundai, Kia',
        'Identyczna ogniskowa jak w tradycyjnym żarniku halogenowym',
        'Kompatybilność z szyną Canbus (brak błędu spalonej żarówki)',
        'Regulacja kąta świecenia 360 stopni',
        'Diamentowa biel 6000K zmniejsza zmęczenie oczu podczas nocnej jazdy'
      ],
      lt: [
        'Tiesioginis 1:1 pajungimas be jokių išorinių laidų',
        'Tiesioginis montavimas į BMW, Mercedes, VW, Audi, Hyundai ir Kia',
        'Tikslus šviesos fokusavimas kaip originalaus halogeno',
        'Canbus suderinamumas (nėra klaidų skydelyje)',
        '360 laipsnių reguliuojamas žiedas',
        '6000K deimantinė balta šviesa nevargina akių tolimose kelionėse'
      ],
      uk: [
        'Пряме бездротове підключення 1:1 без зовнішнього кабелю',
        'Пряма установка в BMW, Mercedes, VW, Audi, Hyundai та Kia',
        'Точний фокус відповідає штатній нитці розжарювання',
        'Canbus сумісність без помилок на панелі приладів',
        'Регулювання кута 360 градусів',
        'Чистий білий колір 6000K знижує втому очей'
      ],
      ru: [
        'Прямое беспроводное подключение 1:1 без внешних проводов',
        'Прямая установка в BMW, Mercedes, VW, Audi, Hyundai и Kia',
        'Точный фокус повторяет заводскую нить накаливания',
        'Canbus совместимость без ошибок на приборной панели',
        'Регулировка угла 360 градусов',
        'Чистый белый свет 6000K снижает усталость глаз'
      ],
      ar: [
        'تركيب مباشر 1:1 بدون أسلاك خارجية',
        'توافق مباشر لسيارات بي إم دبليو، مرسيدس، فولكس فاجن، أودي، هونداي، كيا',
        'نقطة تركيز بصرية مطابقة لفتيلة الهالوجين لمنع التشتت',
        'نظام Canbus بدون أخطاء في لوحة العدادات',
        'حلقة قابلة للتدوير 360 درجة لضبط زاوية الشعاع',
        'إضاءة 6000K بيضاء ساطعة تمنع إجهاد العين'
      ]
    }
  },
  {
    id: 'H7-WIRE',
    name: 'H7 Mini 6000K LED Bulbs with Wire Extension (Flexible Pigtail)',
    socketCode: 'H7 (With Extension)',
    aliases: ['H7 Wire', 'H7 Extension', 'H7 Pigtail', 'H7 Flexible Harness'],
    beamType: 'Single High/Low',
    variantNote: 'With Flexible Wire Harness Extension',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: 'High-Velocity Turbo Fan + Aviation Aluminum Heat Pipe',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['BMW E39/E46/E90 with Deep Housing', 'Mercedes Sprinter & Metris', 'Volkswagen Passat & Tiguan (Spring Clip)', 'Audi TT & A6', 'Ford Focus & Mondeo', 'Volvo S60/XC90', 'Motorcycles & ATVs'],
    inStock: true,
    image: '/assets/aistudio/file_00000000999881f58b73a673f6c2ddae_0b0d5466.png',
    description: {
      en: 'H7 Mini 6000K LED bulb pair featuring an ultra-flexible high-temp wire extension cable ending in standard 2-pin spade terminals. Engineered for headlight housings with spring-loaded retaining wire clips, deep projector barrels, and vehicles requiring flexible harness positioning.',
      es: 'Par de bombillas LED mini H7 6000K con cable de extensión flexible de alta temperatura y terminales de 2 clavijas. Diseñado para faros con clips de resorte y carcasas profundas que requieren flexibilidad.',
      de: 'H7 Mini 6000K LED Birnen mit hochflexiblem, hitzebeständigem Kabelanschluss und 2-Pin Flachsteckern. Ideal für Scheinwerfer mit Federklammern und tiefe Projektorgehäuse.',
      fr: 'Ampoules LED H7 Mini 6000K avec câble d’extension flexible haute température et fiches 2 broches. Conçues pour les optiques à clips ressort et fûts de projecteurs profonds.',
      it: 'Lampadine LED H7 Mini 6000K con cavo di prolunga flessibile ad alta temperatura e connettori a 2 pin. Ottimale per fari con clip a molla e alloggiamenti profondi.',
      pt: 'Lâmpadas LED H7 Mini 6000K com chicote de extensão flexível resistente a altas temperaturas. Perfeitas para faróis com presilhas de mola e carcaças profundas.',
      pl: 'Para żarówek LED H7 Mini 6000K z elastycznym przewodem połączeniowym i standardową wtyczką 2-pin. Niezastąpione w reflektorach z drucianymi spinkami dociskowymi i głębokich soczewkach.',
      lt: 'H7 Mini 6000K LED lempučių pora su lanksčiu karščiui atspariu laidu ir 2 kontaktų jungtimi. Skirta žibintams su metalinėmis spyruoklinėmis fiksavimo sąvaržomis ir giliais korpusais.',
      uk: 'Пара ламп H7 Mini 6000K з гнучким термостійким кабелем та роз’ємом 2-pin. Спеціально для фар з дротяними пружинними фіксаторами та глибокими лінзами.',
      ru: 'Комплект ламп H7 Mini 6000K с гибким термостойким проводом и разъемом 2-pin. Идеально для фар с проволочными пружинными зажимами и глубокими корпусами.',
      ar: 'طقم لمبات ليد H7 ميني 6000K مزود بسلك تمديد مرن ومقاوم للحرارة، مصمم للمصابيح العميقة ومثبتات المشابك المعدنية.'
    },
    features: {
      en: [
        'Heavy-duty flexible high-temperature silicone wire extension',
        'Standard 2-pin female spade connector fits all car factory plugs',
        'Easily fits around metal spring retainer clips without obstruction',
        'Allows flexible tucking inside tight waterproof dust covers',
        'Active 12,000 RPM silent hydraulic turbo fan for continuous cooling',
        'Pure 6000K Diamond White illumination with 300%+ brightness'
      ],
      es: [
        'Cable de silicona resistente a altas temperaturas y máxima flexibilidad',
        'Conector estándar de 2 clavijas compatible con el arnés original',
        'Facilita el enganche de clips metálicos de resorte sin obstrucción',
        'Permite acomodar el cable dentro de la tapa antipolvo',
        'Ventilador turbo silencioso de 12.000 RPM',
        'Luz blanca diamante 6000K más de un 300% más brillante'
      ],
      de: [
        'Hitzebeständige flexible Silikon-Kabelverlängerung',
        'Standard 2-Pin Anschluss passend für alle Werksstecker',
        'Einfache Montage bei Metall-Haltefedern ohne Blockieren',
        'Kompaktes Verstauen unter Original-Staubkappen',
        'Aktiver 12.000 U/min Turbokühler',
        '6000K Diamantweiß für 300%+ mehr Sicht'
      ],
      fr: [
        'Câble d’extension en silicone souple haute température',
        'Connecteur standard 2 broches adapté aux faisceaux d’origine',
        'Passage aisé des agrafes métalliques de retenue',
        'Permet un rangement facile sous les couvercles étanches',
        'Ventilateur turbo silencieux 12 000 tr/min',
        'Éclairage blanc diamant 6000K avec +300% de luminosité'
      ],
      it: [
        'Cavo in silicone flessibile ad alta resistenza termica',
        'Connettore standard a 2 pin per impianto originale',
        'Montaggio agevole con ganci e fermi a molla metallici',
        'Chiusura perfetta dei coperchi antipolvere',
        'Ventola turbo da 12.000 RPM ad alta efficienza',
        'Bianco diamante 6000K +300% di luce sulla strada'
      ],
      pt: [
        'Cabo de extensão em silicone altamente resistente ao calor',
        'Conector padrão de 2 pinos para chicote original',
        'Facilita a fixação com presilhas metálicas de mola',
        'Encaixe perfeito sob as tampas de vedação',
        'Ventoinha turbo de 12.000 RPM',
        'Branco diamante 6000K com mais de 300% de brilho'
      ],
      pl: [
        'Wytrzymały przewód w elastycznej silikonowej osłonie wysokotemperaturowej',
        'Standardowy wtyk 2-pin pasujący do fabrycznej instalacji',
        'Ułatwia montaż w reflektorach z metalowymi spinkami sprężynowymi',
        'Swobodne układanie wewnątrz ciasnej puszki reflektora',
        'Cichy wentylator chłodzący 12 000 obr./min',
        'Czysta diamentowa biel 6000K o ponad 300% wyższej jasności'
      ],
      lt: [
        'Aukštos temperatūros lankstus silikoninis laidas',
        'Standartinė 2 kontaktų jungtis originaliems lizdams',
        'Lengvas montavimas žibintuose su spyruokliniais segtukais',
        'Patogiai telpa po gamykliniu dangteliu',
        'Aktyvus 12 000 aps./min aušinimo ventiliatorius',
        '6000K deimantinė balta šviesa +300% ryškesnė už halogeną'
      ],
      uk: [
        'Термостійкий силіконовий кабель подовжувач',
        'Стандартний 2-контактний роз’єм для заводської проводки',
        'Легко встановлюється під металеві пружинні скоби',
        'Компактно ховається всередині корпусу фари',
        'Турбовентилятор 12 000 об/хв для надійного охолодження',
        'Яскраве біле світло 6000K на 300%+ потужніше'
      ],
      ru: [
        'Термостойкий гибкий силиконовый провод-удлинитель',
        'Стандартный 2-контактный разъем для штатной проводки',
        'Легко фиксируется металлической пружинной скобой',
        'Удобно укладывается внутри фары под крышкой',
        'Турбовентилятор 12 000 об/мин для активного охлаждения',
        'Кристально-белый свет 6000K ярче штатных ламп более чем на 300%'
      ],
      ar: [
        'سلك تمديد سيليكوني مرن ومقاوم لدرجات الحرارة العالية',
        'موصل قياسي بدبوسين مطابق لكابل الوكالة',
        'سهولة التركيب مع مشابك التثبيت السلكية',
        'يتسع بسهولة داخل أغطية المصابيح المحكمة',
        'مروحة تبريد توربو صامتة 12,000 دورة بالدقيقة',
        'إضاءة 6000K ناصعة البياض بزيادة تفوق 300% مقارنة بالهالوجين'
      ]
    }
  },
  {
    id: '9005',
    name: '9005 / HB3 / HB5 High Beam Powerhouse LED Bulbs',
    socketCode: '9005 / HB5',
    aliases: ['9005', 'HB3', 'HB5', '9011', 'P20d'],
    beamType: 'High Beam / Fog',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Dual Heat Dissipation Pipe + High-RPM Micro Fan',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Toyota Camry, RAV4, Highlander High Beam', 'Honda Accord, Civic, CR-V High Beam', 'Ford F-150, Explorer', 'Chevy Silverado, Tahoe', 'Jeep Grand Cherokee', 'Nissan Altima, Rogue', 'Subaru Outback, Forester'],
    inStock: true,
    image: '/assets/aistudio/Screenshot_20261106_035852_AliExpress_9edc57b2.jpg',
    description: {
      en: 'High-intensity 9005 / HB5 / HB3 long-distance LED beam designed to illuminate up to 1,200 feet ahead. Perfect upgrade for high-beam headlights and high-output fog lights on American and Japanese trucks, SUVs, and sedans.',
      es: 'Bombilla LED 9005 / HB5 / HB3 de largo alcance con proyección de hasta 350 metros. La mejora perfecta para luces altas y faros en camionetas, SUV y autos americanos y japoneses.',
      pl: 'Wysokowydajne żarówki LED 9005 / HB5 / HB3 o dalekim zasięgu świecące do 350 metrów. Idealne jako światła drogowe w autach amerykańskich i japońskich SUV-ach, pickupach i sedanach.',
      lt: 'Ypač galingos 9005 / HB5 / HB3 tolimojo spindulio LED lemputės, apšviečiančios kelią iki 350 metrų į priekį. Puikus atnaujinimas amerikietiškiems ir japoniškiems automobiliams bei visureigiams.',
      uk: 'Високопотужні лампи 9005 / HB5 / HB3 дальнього світла з дальністю освітлення до 350 метрів. Ідеально для американських та японських авто, кросоверів та пікапів.',
      ru: 'Высокомощные лампы 9005 / HB5 / HB3 дальнего света с дальностью освещения до 350 метров. Идеально для американских и японских авто, кроссоверов и пикапов.'
    },
    features: {
      en: [
        'Extreme distance projection up to 1,200 feet down dark roads',
        'Matches 9005, HB3, and dual high-output HB5 application sockets',
        'Weather-tight rubber O-ring seal locks out road grime & moisture',
        'Zero warm-up time gives instant high-beam flashing for safety',
        'Heavy-duty aluminum construction built for tough Chicago winters'
      ],
      es: [
        'Proyección extrema de hasta 350 metros en caminos oscuros',
        'Compatible con enchufes 9005, HB3 y aplicaciones HB5',
        'Sello de goma impermeable contra humedad y polvo',
        'Encendido instantáneo para ráfagas de luces altas seguras',
        'Aluminio resistente diseñado para inviernos extremos'
      ],
      pl: [
        'Ekstremalny zasięg do 350 metrów na ciemnych drogach',
        'Kompatybilność z gniazdami 9005, HB3 oraz HB5',
        'Szczelna gumowa uszczelka chroniąca przed wilgocią i solą',
        'Natychmiastowe mruganie światłami drogowymi dla bezpieczeństwa',
        'Solidna konstrukcja aluminiowa odporna na ostre zimy'
      ],
      lt: [
        'Ekstremalus šviesos nuotolis iki 350 metrų',
        'Suderinama su 9005, HB3 ir HB5 lizdais',
        'Sandari guminė tarpinė apsaugo nuo drėgmės ir purvo',
        'Akimirksniu mirksi tolimosiomis šviesomis be delsimo',
        'Tvirtas aliuminio korpusas, atsparus net atšiauriausioms žiemoms'
      ],
      uk: [
        'Дальність променя до 350 метрів у темряві',
        'Сумісність з роз’ємами 9005, HB3 та HB5',
        'Герметичне гумове кільце від вологи та пилу',
        'Миттєве блимання дальнім світлом для безпеки',
        'Міцний алюмінієвий корпус для будь-якої погоди'
      ],
      ru: [
        'Дальность луча до 350 метров в темноте',
        'Совместимость с разъемами 9005, HB3 и HB5',
        'Герметичное резиновое кольцо от влаги и дорожной пыли',
        'Мгновенное мигание дальним светом для безопасности',
        'Прочный алюминиевый корпус для суровых зим'
      ]
    }
  },
  {
    id: '9006',
    name: '9006 / HB4 Low Beam Powerhouse LED Bulbs',
    socketCode: '9006 / HB4',
    aliases: ['9006', 'HB4', '9012', 'HIR2', 'P22d'],
    beamType: 'Low / Fog',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: '12,000 RPM Silent Turbo Fan + Aviation Aluminum',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: [
      'Chevy Silverado & Tahoe (1999-2006) Low Beam',
      'Toyota Camry & Corolla (2000-2011) Low Beam',
      'Honda Civic & Accord (1998-2012) Low Beam',
      'Pontiac Grand Prix & Grand Am Low Beam',
      'Dodge Charger & Ram 1500 (2002-2008) Low Beam',
      'Nissan Altima & Maxima Low Beam',
      'Lexus IS300, GS300, ES300 Low Beam',
      'GMC Sierra & Yukon (1999-2006) Low Beam',
      'Ford Explorer & Taurus Low Beam',
      'BMW 3-Series (E36/E46) Fog & Low Beam'
    ],
    inStock: true,
    image: '/assets/aistudio/grok_1794250254936_db0e0480.jpg',
    description: {
      en: 'Classic 9006 / HB4 Low Beam Powerhouse LED bulb pair. Direct 1:1 plug-and-play replacement for millions of American and Japanese trucks, SUVs, and sedans. Delivers 300%+ brighter 6000K diamond crisp white light with razor-sharp horizontal cutoffs to eliminate oncoming glare.',
      es: 'Par de bombillas LED 9006 / HB4 de haz bajo. Reemplazo directo 1:1 plug-and-play para millones de camionetas, SUV y sedanes. Entrega luz blanca diamante 6000K un 300% más brillante con un corte horizontal nítido.',
      pl: 'Klasyczna para żarówek LED 9006 / HB4 świateł mijania. Bezpośredni zamiennik 1:1 Plug & Play dla milionów samochodów amerykańskich i japońskich. Daje o 300% jaśniejsze światło 6000K z ostrą linią odcięcia.',
      lt: 'Klasikinė 9006 / HB4 trumpųjų šviesų LED lempučių pora. Tiesioginis 1:1 montavimas vietoje gamyklinių halogenų milijonams automobilių. Suteikia 300% ryškesnę 6000K deimantinę šviesą su aiškia spindulio riba.',
      uk: 'Пара ламп 9006 / HB4 ближнього світла. Пряма заміна 1:1 для мільйонів авто. Світить на 300% яскравіше чистим білим світлом 6000K з чіткою світлотіньовою межею.',
      ru: 'Классический комплект ламп 9006 / HB4 ближнего света. Прямая замена 1:1 для миллионов автомобилей. На 300% ярче штатного галогена с чистым белым светом 6000K и четкой границей.'
    },
    features: {
      en: [
        'The definitive low-beam companion to 9005 high beams',
        'Standard 2-pin 90-degree factory 9006 / HB4 connector',
        'Precision micro-blade LED chip alignment for perfect beam cutoff',
        'High-speed 12,000 RPM silent hydraulic cooling fan',
        '6000K Diamond White penetrates dark country roads and rain',
        'Fits factory dust caps and headlight buckets without cutting'
      ],
      es: [
        'La compañera definitiva de luces bajas para luces altas 9005',
        'Conector estándar de 2 pines en ángulo de 90 grados',
        'Alineación precisa de chips para un corte de haz perfecto',
        'Ventilador hidráulico silencioso de 12.000 RPM',
        'Blanco diamante 6000K para penetrar la oscuridad y lluvia',
        'Cabe bajo las tapas de fábrica sin cortar cables'
      ],
      pl: [
        'Idealny zestaw świateł mijania uzupełniający drogowe 9005',
        'Standardowe kątowe złącze 2-pin 9006 / HB4',
        'Precyzyjne rozmieszczenie diod dla idealnej linii odcięcia',
        'Cichy wentylator chłodzący 12 000 obr./min',
        'Diamentowa biel 6000K doskonale oświetla pobocze i znaki',
        'Pasuje pod fabryczne dekielki bez przeróbek instalacji'
      ],
      lt: [
        'Idealus trumpųjų šviesų pasirinkimas prie tolimųjų 9005',
        'Standartinė 2 kontaktų 90 laipsnių kampinė 9006 jungtis',
        'Tikslus LED lustų išdėstymas tobulai šviesos linijai',
        'Tylus 12 000 aps./min hidraulinis aušinimo ventiliatorius',
        '6000K deimantinė balta šviesa lietuje ir tamsoje',
        'Telpa po gamykliniais dangteliais be jokių perdarymų'
      ],
      uk: [
        'Ідеальний комплект ближнього світла в парі з дальнім 9005',
        'Штатний кутовий роз’єм 9006 / HB4 2-pin',
        'Точне фокусування без засліплення зустрічного руху',
        'Безшумний гідравлічний вентилятор 12 000 об/хв',
        'Діамантовий білий 6000K для дощу та туману',
        'Встановлюється під штатні кришки без доопрацювань'
      ],
      ru: [
        'Идеальный комплект ближнего света в пару к дальнему 9005',
        'Штатный угловой разъем 9006 / HB4 2-pin',
        'Точное совмещение с фокусом фары без ослепления',
        'Бесшумный вентилятор охлаждения 12 000 об/мин',
        'Кристально-белый свет 6000K для ночи и непогоды',
        'Помещается под штатные крышки фар без подрезки'
      ]
    }
  },
  {
    id: 'H8',
    name: 'H8 Mini 6000K LED Fog & DRL Bulbs',
    socketCode: 'H8',
    aliases: ['H8', 'PGJ19-1'],
    beamType: 'Fog / Low Beam',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Compact High-Flow Turbo Fan + Aluminum Ribs',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['BMW Angel Eyes / Fog Lights (E90, E92, F10, F30)', 'Audi A3/A4/A5 Fog', 'Volkswagen GTI/Golf Fog', 'Mini Cooper Fog', 'Ford Mustang Fog', 'Jeep Renegade'],
    inStock: true,
    image: '/assets/aistudio/file_00000000617081f5b6a16a7328504a08_cbef1694.png',
    description: {
      en: 'H8 Mini 6000K LED bulb pair optimized for modern fog light housings, projector fog lamps, and BMW halo angel eye rings. Delivers pure icy diamond white brilliance to perfectly match modern LED daytime running lights.',
      es: 'Par de bombillas LED mini H8 6000K optimizadas para luces antiniebla y aros angel eyes de BMW. Brillo blanco hielo puro que combina con las luces diurnas LED modernas.',
      pl: 'Para żarówek H8 Mini 6000K zoptymalizowana do reflektorów przeciwmgielnych oraz ringów BMW Angel Eyes. Zapewnia czystą diamentową biel idealnie pasującą do nowoczesnych świateł DRL.',
      lt: 'H8 Mini 6000K LED lempučių pora, skirta rūko žibintams ir BMW angel eyes žiedams. Suteikia šaltą deimantinę baltą spalvą, idealiai derančią prie modernių LED dienos šviesų.',
      uk: 'Пара ламп H8 Mini 6000K для протитуманних фар та ангельських глазок BMW. Чисте крижане біле світло ідеально поєднується з сучасними ДХО.',
      ru: 'Комплект ламп H8 Mini 6000K для противотуманных фар и ангельских глазок BMW. Чистый ледяной белый свет гармонирует с современными ДХО.'
    },
    features: {
      en: [
        'Perfect color match for BMW Angel Eyes & LED daytime running lights',
        'Wide 180-degree beam spread maximizes peripheral fog illumination',
        'Direct 90-degree twist-lock socket matches factory H8 harness',
        'No warning errors on BMW iDrive or European instrument clusters',
        'IP68 fully sealed against splash and car washes'
      ],
      es: [
        'Color perfecto para aros BMW Angel Eyes y luces DRL',
        'Haz amplio de 180 grados para máxima visibilidad en niebla',
        'Giro directo de 90 grados compatible con conector original H8',
        'Sin errores en el cuadro de mandos o sistemas europeos',
        'Totalmente sellado IP68 contra agua y lavados a presión'
      ],
      pl: [
        'Perfekcyjne dopasowanie barwy do ringów BMW Angel Eyes i świateł DRL',
        'Szeroki kąt świecenia 180 stopni dla maksymalnej widoczności w mgle',
        'Fabryczne złącze kątowe 90 stopni pasujące do wtyczki H8',
        'Brak błędów na komputerze pokładowym BMW iDrive / VAG',
        'Pełna wodoszczelność IP68 na myjnie ciśnieniowe'
      ],
      lt: [
        'Tobulas spalvos suderinamumas su BMW Angel Eyes ir DRL',
        'Platus 180 laipsnių šviesos kampas rūke',
        'Originali 90 laipsnių kampinė H8 jungtis',
        'Jokių klaidų BMW iDrive ar kituose borto kompiuteriuose',
        'IP68 visiškas sandarumas nuo vandens ir plovyklų'
      ],
      uk: [
        'Ідеальний колір для ангельських глазок BMW та ДХО',
        'Широкий кут 180 градусів для максимальної видимості в тумані',
        'Штатне кутове підключення 90 градусів',
        'Без помилок на панелі приладів',
        'Повна водонепроникність IP68'
      ],
      ru: [
        'Идеальный цвет для ангельских глазок BMW и ДХО',
        'Широкий угол 180 градусов для максимальной видимости в тумане',
        'Штатное угловое подключение 90 градусов',
        'Без ошибок на приборной панели',
        'Полная водонепроникность IP68'
      ]
    }
  },
  {
    id: 'H11',
    name: 'H11 Mini 6000K LED Headlight Bulbs (#1 Best Seller)',
    socketCode: 'H11',
    aliases: ['H11', 'H9', 'H16', 'PGJ19-2'],
    beamType: 'Low / Fog',
    price: 40,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Ultra-Fast 12,000 RPM Turbo Fan + Double Copper Core',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['Toyota Camry, Corolla, RAV4, Tacoma, Highlander', 'Honda Civic, Accord, CR-V, Pilot', 'Ford F-150, Explorer, Escape', 'Subaru Outback, Forester, Crosstrek, WRX', 'Chevy Silverado, Equinox, Malibu', 'Nissan Altima, Rogue, Sentra', 'Jeep Cherokee, Grand Cherokee'],
    inStock: true,
    image: '/assets/aistudio/grok_1794249437893_9d17f48a.jpg',
    description: {
      en: 'Our #1 top-selling automotive bulb socket in the country. The H11 Mini LED bulb fits millions of modern Toyota, Honda, Ford, Chevy, Nissan, and Subaru low beams and fog lights. Delivers immediate 300% night visibility transformation in 10 minutes flat.',
      es: 'Nuestra bombilla más vendida en todo el país. La bombilla LED mini H11 se adapta a millones de luces bajas y antiniebla de Toyota, Honda, Ford, Chevy, Nissan y Subaru. Transforma la visibilidad nocturna en solo 10 minutos.',
      pl: 'Nasz bestseller nr 1! Żarówka H11 Mini LED pasuje do milionów modeli aut Toyota, Honda, Ford, Chevy, Nissan i Subaru jako światła mijania i przeciwmgielne. Zapewnia 300% więcej światła i montaż w 10 minut.',
      lt: 'Mūsų populiariausia #1 LED lemputė! H11 Mini tinka milijonams Toyota, Honda, Ford, Chevy, Nissan, Subaru automobilių artimosioms ir rūko šviesoms. 300% geresnis matomumas naktį vos per 10 minučių montavimo.',
      uk: 'Наш бестселер №1! Лампа H11 Mini LED підходить для мільйонів авто Toyota, Honda, Ford, Nissan, Subaru як ближнє світло або ПТФ. На 300% яскравіше світло за 10 хвилин установки.',
      ru: 'Наш бестселлер №1! Лампа H11 Mini LED подходит для миллионов авто Toyota, Honda, Ford, Nissan, Subaru как ближний свет или ПТФ. На 300% ярче за 10 минут установки.'
    },
    features: {
      en: [
        'America\'s #1 most popular low beam & fog light bulb socket',
        'Cross-compatible with H11, H9, and H16 automotive plugs',
        'Ultra-compact mini housing fits under 100% of OEM dust caps',
        'Razor-sharp light cutoff prevents blinding oncoming cars',
        'Instant plug-and-play install in under 10 minutes per side'
      ],
      es: [
        'El zócalo más popular en Estados Unidos para luces bajas y antiniebla',
        'Compatible con enchufes H11, H9 y H16 automotrices',
        'Cuerpo ultra compacto que entra bajo las tapas de fábrica',
        'Corte de luz preciso para no encandilar el tráfico en contra',
        'Instalación directa plug-and-play en menos de 10 minutos'
      ],
      pl: [
        'Najpopularniejsze gniazdo świateł mijania i przeciwmgielnych w USA i Europie',
        'Kompatybilność krzyżowa z gniazdami H11, H9 i H16',
        'Kompaktowa konstrukcja mieści się pod fabrycznym dekielkiem reflektora',
        'Laserowa linia odcięcia gwarantuje brak oślepiania innych kierowców',
        'Błyskawiczny montaż Plug & Play poniżej 10 minut na stronę'
      ],
      lt: [
        'Populiariausias artimųjų ir rūko šviesų lizdas',
        'Tinka vietoje H11, H9 ir H16 lempučių',
        'Kompaktiškas dydis telpa po visais gamykliniais dangteliais',
        'Tikslus spindulio nukirpimas neakina kitų eismo dalyvių',
        'Greitas montavimas per 10 minučių be jokių įrankių'
      ],
      uk: [
        'Найпопулярніший роз’єм ближнього світла та ПТФ',
        'Взаємозамінний з H11, H9 та H16',
        'Компактний розмір поміщається під будь-які захисні кришки',
        'Чітка світлова межа без засліплення зустрічки',
        'Встановлення Plug & Play за 10 хвилин'
      ],
      ru: [
        'Самый популярный цоколь ближнего света и ПТФ',
        'Взаимозаменяем с H11, H9 и H16',
        'Компактный размер помещается под любые крышки фар',
        'Четкая светотеневая граница без ослепления встречных',
        'Установка Plug & Play за 10 минут'
      ]
    }
  }
];

export { POPULAR_VEHICLE_DATABASE, AUTOMOTIVE_GROUPS } from './vehicleData';

export const OWNER_CONTACT = {
  name: 'Matt',
  location: 'Chicago, IL',
  phone: '+1 (312) 385 - 9229',
  phoneRaw: '+13123859229',
  email: 'LEDHeadLightsChicago@Gmail.Com',
  orderEmail: 'LEDHeadLightsChicago@Gmail.Com',
  cashAppHandle: 'muahz26',
  cashAppUrl: 'https://cash.app/$muahz26',
  cashTag: '$muahz26',
  tikTokUrl: 'https://www.tiktok.com/@mattchicago36',
  instagramUrl: 'https://instagram.com/ledheadlights.ai.studio',
  whatsAppUrl: 'https://wa.me/13123859229',
  websiteName: 'LED Bulbs',
  websiteDomain: 'LEDHeadlights.Org',
  studioBranding: 'LEDHeadLights.Ai.Studio',
  pricePerPair: 40,
  shippingCostPerPair: 0,
  shippingCost: 0,
  shippingDuration: 'Free Tracked Shipping (7-14 Business Days)',
  freeShipping: true,
  satisfactionGuarantee: '100% Customer Satisfaction Guarantee & Free Replacement'
};
