import { BulbListing, SocketType } from '../types';
import headlightPairImg from '../assets/images/headlight_pair.jpg';

export const BULB_LISTINGS: BulbListing[] = [
  {
    id: 'H1',
    name: 'H1 Mini 6000K LED Headlight Bulbs',
    socketCode: 'H1',
    aliases: ['H1', 'P14.5s'],
    beamType: 'Single High/Low',
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: '12,000 RPM Silent Turbo Fan + Aviation Aluminum',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['Acura Integra', 'Honda Civic (Selected Projectors)', 'BMW 3-Series High Beam/Fog', 'Audi A4/A6 High Beam', 'Subaru Legacy', 'Hyundai Veloster'],
    inStock: true,
    image: headlightPairImg,
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
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair (30W per bulb)',
    cooling: 'Turbo Cooling Fan + Copper Core Heat Pipe',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Audi A4/A6 Fog', 'Volkswagen Golf/Jetta Fog', 'Subaru Impreza/WRX Fog', 'Toyota 4Runner Fog', 'Nissan Frontier Fog', 'Mazda Miata Aux'],
    inStock: true,
    image: headlightPairImg,
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
    id: 'H4',
    name: 'H4 / 9003 / HB2 Hi/Low Dual Beam LED Bulbs',
    socketCode: 'H4 / 9003 / HB2',
    aliases: ['H4', '9003', 'HB2', 'P43t'],
    beamType: 'Dual Hi/Low',
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair (Hi & Low Combined)',
    wattage: '60W / Pair',
    cooling: 'Active Turbo Cooling Fan + Pure Copper Substrate',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Honda Civic (96-03)', 'Honda Fit', 'Toyota Tacoma (05-15)', 'Jeep Wrangler (TJ/JK)', 'Toyota Corolla (older)', 'Nissan Frontier', 'Subaru Forester (98-08)', 'Mazda Miata NA/NB', 'Motorcycles & ATVs'],
    inStock: true,
    image: headlightPairImg,
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
    name: 'H7 Mini 6000K LED Headlight Bulbs',
    socketCode: 'H7',
    aliases: ['H7', 'PX26d'],
    beamType: 'Single High/Low',
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'High-Velocity Turbo Fan + Aviation Aluminum Heat Pipe',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['BMW 3 & 5 Series', 'Mercedes-Benz C & E Class', 'Volkswagen Golf, Jetta, Passat', 'Audi A3, A4', 'Hyundai Elantra, Sonata', 'Kia Optima, Forte', 'Ford Fusion', 'Subaru Outback'],
    inStock: true,
    image: headlightPairImg,
    description: {
      en: 'The #1 European & domestic standard H7 Mini LED bulb. Engineered with an ultra-short collar base that locks cleanly into tricky German and domestic twist-lock retainers without needing bulky aftermarket adapter rings.',
      es: 'La bombilla LED mini H7 estándar europea y nacional. Base ultra compacta que encaja en retenedores alemanes y nacionales sin requerir adaptadores voluminosos.',
      pl: 'Najpopularniejsza europejska żarówka H7 Mini LED. Zaprojektowana ze skróconym kołnierzem, który bez problemu blokuje się w fabrycznych gniazdach BMW, VW, Mercedesa i innych bez drogich adapterów.',
      lt: 'Populiariausia europinių automobilių H7 Mini LED lemputė. Sukurta su kompaktišku žiedu, kuris idealiai fiksuojasi vokiškuose ir kituose žibintuose be papildomų adapterių.',
      uk: 'Найпопулярніша європейська лампа H7 Mini LED. Компактна основа без проблем фіксується у фарах BMW, VW, Mercedes без громіздких перехідників.',
      ru: 'Самая популярная европейская лампа H7 Mini LED. Компактное основание легко фиксируется в фарах BMW, VW, Mercedes без дополнительных переходников.'
    },
    features: {
      en: [
        'Direct twist-in fitment for BMW, Mercedes, VW, Audi, Hyundai & Kia',
        'Engineered to match halogen filament focal length exactly',
        'Canbus error-free architecture prevents bulb out warnings',
        '360-degree beam angle adjustment ring',
        'Pure 6000K Diamond White cuts eye fatigue on highway drives'
      ],
      es: [
        'Ajuste directo para BMW, Mercedes, VW, Audi, Hyundai y Kia',
        'Diseñado para coincidir exactamente con el punto focal del halógeno',
        'Arquitectura Canbus que previene avisos en el tablero',
        'Anillo de rotación de 360 grados para ajuste de haz',
        'Blanco diamante 6000K que reduce la fatiga visual'
      ],
      pl: [
        'Bezpośredni montaż w BMW, Mercedes, VW, Audi, Hyundai, Kia',
        'Identyczna ogniskowa jak w tradycyjnym żarniku halogenowym',
        'Kompatybilność z szyną Canbus (brak błędu spalonej żarówki)',
        'Regulacja kąta świecenia 360 stopni',
        'Diamentowa biel 6000K zmniejsza zmęczenie oczu podczas nocnej jazdy'
      ],
      lt: [
        'Tiesioginis montavimas į BMW, Mercedes, VW, Audi, Hyundai ir Kia',
        'Tikslus šviesos fokusavimas kaip originalaus halogeno',
        'Canbus suderinamumas (nėra klaidų skydelyje)',
        '360 laipsnių reguliuojamas žiedas',
        '6000K deimantinė balta šviesa nevargina akių tolimose kelionėse'
      ],
      uk: [
        'Пряма установка в BMW, Mercedes, VW, Audi, Hyundai та Kia',
        'Точний фокус відповідає штатній нитці розжарювання',
        'Canbus сумісність без помилок на панелі приладів',
        'Регулювання кута 360 градусів',
        'Чистий білий колір 6000K знижує втому очей'
      ],
      ru: [
        'Прямая установка в BMW, Mercedes, VW, Audi, Hyundai и Kia',
        'Точный фокус повторяет заводскую нить накаливания',
        'Canbus совместимость без ошибок на приборной панели',
        'Регулировка угла 360 градусов',
        'Чистый белый свет 6000K снижает усталость глаз'
      ]
    }
  },
  {
    id: '9005',
    name: '9005 / HB3 / HB5 High Beam Powerhouse LED Bulbs',
    socketCode: '9005 / HB5',
    aliases: ['9005', 'HB3', 'HB5', '9011', 'P20d'],
    beamType: 'High Beam / Fog',
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Dual Heat Dissipation Pipe + High-RPM Micro Fan',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Waterproof',
    popularVehicles: ['Toyota Camry, RAV4, Highlander High Beam', 'Honda Accord, Civic, CR-V High Beam', 'Ford F-150, Explorer', 'Chevy Silverado, Tahoe', 'Jeep Grand Cherokee', 'Nissan Altima, Rogue', 'Subaru Outback, Forester'],
    inStock: true,
    image: headlightPairImg,
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
    id: 'H8',
    name: 'H8 Mini 6000K LED Fog & DRL Bulbs',
    socketCode: 'H8',
    aliases: ['H8', 'PGJ19-1'],
    beamType: 'Fog / Low Beam',
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Compact High-Flow Turbo Fan + Aluminum Ribs',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['BMW Angel Eyes / Fog Lights (E90, E92, F10, F30)', 'Audi A3/A4/A5 Fog', 'Volkswagen GTI/Golf Fog', 'Mini Cooper Fog', 'Ford Mustang Fog', 'Jeep Renegade'],
    inStock: true,
    image: headlightPairImg,
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
    price: 30,
    colorTemp: '6000K Diamond White',
    lumens: '16,000 LM / Pair',
    wattage: '60W / Pair',
    cooling: 'Ultra-Fast 12,000 RPM Turbo Fan + Double Copper Core',
    lifespan: '50,000+ Hours',
    voltage: '9V - 32V DC',
    waterproof: 'IP68 Submersible Waterproof',
    popularVehicles: ['Toyota Camry, Corolla, RAV4, Tacoma, Highlander', 'Honda Civic, Accord, CR-V, Pilot', 'Ford F-150, Explorer, Escape', 'Subaru Outback, Forester, Crosstrek, WRX', 'Chevy Silverado, Equinox, Malibu', 'Nissan Altima, Rogue, Sentra', 'Jeep Cherokee, Grand Cherokee'],
    inStock: true,
    image: headlightPairImg,
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

// Popular vehicles compatibility reference database for instant lookups
export const POPULAR_VEHICLE_DATABASE = [
  { make: 'Toyota', model: 'Camry (2012-2024)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Toyota', model: 'Corolla (2014-2024)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Toyota', model: 'RAV4 (2013-2024)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Toyota', model: 'Tacoma (2016-2023)', low: 'H11', high: 'H9 / 9005', fog: 'H11' },
  { make: 'Toyota', model: 'Tacoma (2005-2015)', low: 'H4', high: 'H4', fog: 'H11' },
  { make: 'Toyota', model: 'Highlander (2014-2022)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Honda', model: 'Civic (2016-2021)', low: 'H11', high: '9005', fog: 'H8 / H11' },
  { make: 'Honda', model: 'Civic (2006-2015)', low: '9006', high: '9005', fog: 'H11' },
  { make: 'Honda', model: 'Civic (1996-2005)', low: 'H4', high: 'H4', fog: 'H3' },
  { make: 'Honda', model: 'Accord (2013-2022)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Honda', model: 'CR-V (2012-2022)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Ford', model: 'F-150 (2015-2020)', low: 'H11', high: '9005', fog: '9005 / 9140' },
  { make: 'Ford', model: 'F-150 (2004-2014)', low: 'H13', high: 'H13', fog: '9005 / 9140' },
  { make: 'Ford', model: 'Explorer (2011-2019)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Ford', model: 'Fusion (2013-2020)', low: 'H7', high: 'H7', fog: 'H11' },
  { make: 'Chevrolet', model: 'Silverado 1500 (2014-2019)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Chevrolet', model: 'Equinox (2010-2017)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Chevrolet', model: 'Malibu (2013-2022)', low: 'H11', high: 'H7 / 9005', fog: 'H11' },
  { make: 'Nissan', model: 'Altima (2013-2023)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Nissan', model: 'Rogue (2014-2020)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Subaru', model: 'Outback (2015-2024)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Subaru', model: 'Forester (2014-2023)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Subaru', model: 'WRX / STI (2015-2021)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'BMW', model: '3-Series (E90 / F30)', low: 'H7', high: 'H7', fog: 'H8 / H11' },
  { make: 'BMW', model: '5-Series (E60 / F10)', low: 'H7', high: 'H7', fog: 'H8 / H11' },
  { make: 'Volkswagen', model: 'Jetta / Golf (Mk6 / Mk7)', low: 'H7', high: 'H7', fog: 'H8 / H11' },
  { make: 'Hyundai', model: 'Elantra (2011-2020)', low: 'H7', high: '9005 / H7', fog: 'H8' },
  { make: 'Hyundai', model: 'Sonata (2011-2019)', low: 'H7', high: '9005 / H7', fog: 'H8' },
  { make: 'Kia', model: 'Optima / Forte (2011-2020)', low: 'H7', high: '9005', fog: 'H8 / H11' },
  { make: 'Jeep', model: 'Grand Cherokee (2011-2021)', low: 'H11', high: '9005', fog: 'H11' },
  { make: 'Jeep', model: 'Wrangler (TJ / JK)', low: 'H4', high: 'H4', fog: 'H16 / 5202' }
];

export const OWNER_CONTACT = {
  name: 'Mantas',
  location: 'Chicago, IL',
  phone: '+1 (312) 385 - 9229',
  phoneRaw: '+13123859229',
  email: 'MantasChicago36@Gmail.Com',
  cashAppHandle: 'muahz26',
  cashAppUrl: 'https://cash.app/$muahz26',
  cashTag: '$muahz26',
  websiteName: 'LED Headlights',
  websiteDomain: 'LEDHeadlights.Org',
  pricePerPair: 30,
  shippingCost: 15
};
