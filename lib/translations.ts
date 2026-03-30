import { Locale } from './i18n';

// Utility type for translations
type T = Record<Locale, string>;

// ===== LAYOUT / NAV =====
export const nav: Record<string, T> = {
  home: { he: 'בית', en: 'Home', ru: 'Главная' },
  mashe: { he: 'מודל מעש״ה', en: 'MASHE Model', ru: 'Модель МАШЕ' },
  teams: { he: 'צוותי החירום', en: 'Emergency Teams', ru: 'Команды ЧС' },
  scripts: { he: 'תסריטי שיחה', en: 'Conversation Scripts', ru: 'Сценарии бесед' },
  contacts: { he: 'ספר טלפונים', en: 'Phone Book', ru: 'Телефонный справочник' },
  orgchart: { he: 'מבנה ארגוני', en: 'Org Chart', ru: 'Оргструктура' },
  faq: { he: 'שאלות ותשובות', en: 'FAQ', ru: 'Вопросы и ответы' },
  brand: { he: 'צוותי חירום', en: 'Emergency Teams', ru: 'Команды ЧС' },
  brandSub: { he: 'מנהל שירותים חברתיים - נתניה', en: 'Social Services Administration - Netanya', ru: 'Управление соцслужб - Нетания' },
};

export const footer: Record<string, T> = {
  line1: { he: 'יוזמה פרטית לסיוע לצוותי חירום · מנהל השירותים החברתיים, נתניה', en: 'Private initiative to assist emergency teams · Social Services Administration, Netanya', ru: 'Частная инициатива для помощи группам ЧС · Управление соцслужб, Нетания' },
  line2: { he: 'אתר זה אינו אתר רשמי של עיריית נתניה · כלי לריענון ותרגול · אין להסתמך כתחליף לנהלים רשמיים', en: 'This is not an official Netanya municipality website · Training & refresher tool · Not a substitute for official procedures', ru: 'Это не официальный сайт муниципалитета Нетании · Инструмент для обучения · Не заменяет официальные процедуры' },
  accessibility: { he: 'הצהרת נגישות', en: 'Accessibility', ru: 'Доступность' },
  privacy: { he: 'מדיניות פרטיות', en: 'Privacy Policy', ru: 'Конфиденциальность' },
};

// ===== HOME PAGE =====
export const home: Record<string, T> = {
  heroTitle: { he: 'מכלול אוכלוסייה', en: 'Population Division', ru: 'Отдел населения' },
  heroSubtitle: { he: 'מנהל הרווחה - עיריית נתניה', en: 'Welfare Administration - Netanya Municipality', ru: 'Управление соцобеспечения - Нетания' },
  heroDesc: { he: 'כלי לריענון ותרגול הפעלת מכלול אוכלוסייה בנתניה', en: 'A tool for refreshing and practicing the Population Division operations in Netanya', ru: 'Инструмент для обновления и практики работы отдела населения Нетании' },
  msrSystem: { he: 'מערכת טפסי מס״ר', en: 'MSR Forms System', ru: 'Система форм МСР' },
  msrDesc: { he: 'רישום משפחות · יציאה מאזור שנפגע · איתור נעדרים', en: 'Family registration · Evacuation from affected area · Locating missing persons', ru: 'Регистрация семей · Эвакуация из зоны · Поиск пропавших' },
  yachadSystem: { he: 'מערכת יחד – לחץ כאן', en: 'YACHAD System – Click here', ru: 'Система ЯХАД – нажмите' },
  yachadDesc: { he: 'מערכת לאומית לניהול אירועי חירום ברשויות מקומיות', en: 'National system for managing emergencies in local authorities', ru: 'Национальная система управления ЧС в местных органах власти' },
  taxReport: { he: 'דיווח תושבים שביתם ניזוק – רשות המיסים', en: 'Report damaged property – Tax Authority', ru: 'Сообщить о повреждении имущества – Налоговая служба' },
  taxDesc: { he: 'מילוי למי שביתו נפגע · מגיע לצוות מלונות ולמס רכוש', en: 'For residents whose home was hit · Goes to hotel team & property tax', ru: 'Для жителей с повреждённым жильём · Для команды отелей и налога' },
  flowTitle: { he: 'זרימת הפעלת הצוותים באירוע הרס', en: 'Team Activation Flow in a Destruction Event', ru: 'Порядок активации команд при ЧС' },
  flowDesc: { he: 'לחצו על כל שלב כדי לראות פירוט', en: 'Click each step for details', ru: 'Нажмите на шаг для подробностей' },
  parallelTitle: { he: 'צוותים מקבילים', en: 'Parallel Teams', ru: 'Параллельные команды' },
  parallelDesc: { he: 'צוותים שפועלים במקביל לזרם הראשי', en: 'Teams operating in parallel to the main flow', ru: 'Команды, работающие параллельно основному потоку' },
  tipLabel: { he: 'טיפ מקצועי לצוות החירום', en: 'Professional Tip for Emergency Team', ru: 'Профессиональный совет для команды ЧС' },
  emergencyDial: { he: 'חיוג מהיר למוקדי חירום', en: 'Quick Dial – Emergency Numbers', ru: 'Быстрый набор экстренных служб' },
  emergencyDialDesc: { he: 'לחצו על מספר כדי לחייג', en: 'Click a number to dial', ru: 'Нажмите на номер для звонка' },
  fullPhoneBook: { he: 'לספר הטלפונים המלא', en: 'Full phone book', ru: 'Полный справочник' },
};

export const homeQuickLinks = {
  mashe: { label: { he: 'מודל מעש״ה', en: 'MASHE Model', ru: 'Модель МАШЕ' }, sublabel: { he: 'עזרה ראשונה נפשית', en: 'Psychological first aid', ru: 'Психологическая первая помощь' } },
  teams: { label: { he: 'צוותי החירום', en: 'Emergency Teams', ru: 'Команды ЧС' }, sublabel: { he: 'תוכניות הפעלה מלאות', en: 'Full activation plans', ru: 'Полные планы активации' } },
  scripts: { label: { he: 'תסריטי שיחה', en: 'Conversation Scripts', ru: 'Сценарии бесед' }, sublabel: { he: 'מצבי שטח מעשיים', en: 'Practical field scenarios', ru: 'Практические полевые сценарии' } },
  contacts: { label: { he: 'ספר טלפונים', en: 'Phone Book', ru: 'Телефонный справочник' }, sublabel: { he: 'אנשי קשר מרכזיים', en: 'Key contacts', ru: 'Основные контакты' } },
  faq: { label: { he: 'שאלות ותשובות', en: 'FAQ', ru: 'Вопросы и ответы' }, sublabel: { he: 'מערכת יחד ותהליכים', en: 'YACHAD system & processes', ru: 'Система ЯХАД и процессы' } },
};

export const homeFlowSteps = [
  {
    title: { he: 'אירוע הרס', en: 'Destruction Event', ru: 'Разрушительное событие' },
    subtitle: { he: 'נפילת טיל / אירוע המוני', en: 'Missile strike / Mass casualty event', ru: 'Ракетный удар / Массовое бедствие' },
    details: [
      { he: 'קבלת התרעה / דיווח על אירוע', en: 'Receiving alert / event report', ru: 'Получение тревоги / сообщения о событии' },
      { he: 'ראש מכלול אוכלוסייה וראשי מטות מגיעים למקום האירוע', en: 'Population division head and staff heads arrive at the scene', ru: 'Глава отдела населения и руководители штабов прибывают на место' },
      { he: 'הפעלת הצוותים הרלוונטיים באמצעות קבוצות וואטסאפ', en: 'Activating relevant teams via WhatsApp groups', ru: 'Активация команд через группы WhatsApp' },
    ],
  },
  {
    title: { he: 'צוות תקרית באזור האירוע', en: 'Incident Team at Event Area', ru: 'Группа инцидента в зоне события' },
    subtitle: { he: 'הרגעה · טיפול · ניתוב', en: 'Calming · Treatment · Routing', ru: 'Успокоение · Помощь · Маршрутизация' },
    details: [
      { he: 'הגעה ראשונה לאזור האירוע', en: 'First arrival at the event area', ru: 'Первое прибытие в зону события' },
      { he: 'מענה נפשי ראשוני לפצועים ולנוכחים', en: 'Initial psychological response for injured and bystanders', ru: 'Первичная психологическая помощь пострадавшим и присутствующим' },
      { he: 'אחרי הרגעה – רישום ראשוני באפליקציית מודיעין אוכלוסייה', en: 'After calming – initial registration in population intelligence app', ru: 'После успокоения – первичная регистрация в приложении' },
      { he: 'ניתוב תושבים לנקודות קליטה', en: 'Routing residents to reception points', ru: 'Маршрутизация жителей к пунктам приёма' },
      { he: 'דיווח למטה על תמונת מצב', en: 'Reporting situation to headquarters', ru: 'Доклад обстановки в штаб' },
    ],
  },
  {
    title: { he: 'מס"ר – מרכז סיוע ראשוני', en: 'MSR – Primary Assistance Center', ru: 'МСР – Центр первичной помощи' },
    subtitle: { he: 'קליטה · המתנה · שיבוץ · נעדרים', en: 'Reception · Waiting · Placement · Missing', ru: 'Приём · Ожидание · Размещение · Пропавшие' },
    details: [
      { he: 'מתחם קליטה – קליטה ע"י ברקוד מערכת "יחד"', en: 'Reception area – registration via YACHAD system barcode', ru: 'Зона приёма – регистрация через штрих-код системы ЯХАД' },
      { he: 'מתחם המתנה – מתחם שהייה והפעלה, מתן סיוע רגשי לזקוקים לכך', en: 'Waiting area – stay and activities complex, emotional support for those in need', ru: 'Зона ожидания – место пребывания, эмоциональная поддержка нуждающимся' },
      { he: 'מתחם שיבוץ לבתי מלון', en: 'Hotel placement area', ru: 'Зона размещения в отели' },
      { he: 'מתחם נעדרים – תשאול לאיתור נעדרים בשיתוף משטרת ישראל', en: 'Missing persons area – inquiry for locating missing with Israel Police', ru: 'Зона пропавших – опрос для поиска пропавших совместно с полицией' },
      { he: 'במס"ר יושב לרוב נציג מס רכוש, נציג קופ"ח, נציג פיקוד העורף, נציג דוברת העירייה והוא נתמך ע"י צוות לוגיסטיקה', en: 'MSR typically includes representatives from property tax, HMO, Home Front Command, city spokesperson, supported by logistics team', ru: 'В МСР обычно присутствуют представители налоговой, больничной кассы, тыла, пресс-службы, при поддержке логистической группы' },
    ],
  },
];

export const homeTips: T[] = [
  { he: 'בהיכון תמידי: ודאי שכל הציוד הקריטי זמין, תקין ומוכן להפעלה מיידית.', en: 'Always ready: Ensure all critical equipment is available, functional and ready for immediate use.', ru: 'Всегда наготове: убедитесь, что всё критическое оборудование доступно и готово к работе.' },
  { he: 'שמור על קשר רציף עם המטה – דווח כל 15 דקות על תמונת מצב.', en: 'Maintain continuous contact with HQ – report status every 15 minutes.', ru: 'Поддерживайте постоянную связь со штабом – докладывайте каждые 15 минут.' },
  { he: 'הקפד על זיהוי עצמי מול תושבים – אמון הוא הבסיס להתערבות.', en: 'Always identify yourself to residents – trust is the basis for intervention.', ru: 'Всегда представляйтесь жителям – доверие является основой вмешательства.' },
  { he: 'אל תבטיח תוצאות – הבטח נוכחות: "אני כאן איתך".', en: 'Don\'t promise outcomes – promise presence: "I\'m here with you."', ru: 'Не обещайте результатов – обещайте присутствие: «Я здесь с вами».' },
  { he: 'תעד כל פעולה – הרישום חשוב לא פחות מהטיפול.', en: 'Document every action – recording is as important as treatment.', ru: 'Документируйте каждое действие – запись так же важна, как и помощь.' },
  { he: 'דאג לעצמך – אתה לא יכול לעזור אם אתה שבור.', en: 'Take care of yourself – you can\'t help if you\'re broken.', ru: 'Заботьтесь о себе – вы не сможете помочь, если сломлены.' },
  { he: 'הכר את הצוותים האחרים – תיאום הוא מפתח ההצלחה.', en: 'Know the other teams – coordination is the key to success.', ru: 'Знайте другие команды – координация является ключом к успеху.' },
  { he: 'שמור על שפה רגועה ועובדתית – הימנע מדרמטיזציה.', en: 'Keep calm, factual language – avoid dramatization.', ru: 'Говорите спокойно и по фактам – избегайте драматизации.' },
  { he: 'ודא שכל תושב שעוזב את המקום יודע לאן לפנות.', en: 'Make sure every resident leaving knows where to go.', ru: 'Убедитесь, что каждый уходящий житель знает, куда обратиться.' },
  { he: 'בסוף המשמרת – ונטילציה חובה, לא המלצה.', en: 'End of shift – debriefing is mandatory, not optional.', ru: 'Конец смены – дебрифинг обязателен, а не рекомендация.' },
  { he: 'אל תניח שאתה יודע מה האדם מרגיש – שאל ותקשיב.', en: 'Don\'t assume you know how someone feels – ask and listen.', ru: 'Не думайте, что знаете, что чувствует человек – спросите и слушайте.' },
  { he: 'אם אתה לא בטוח – התייעץ עם הצוות. אין בושה בזה.', en: 'If unsure – consult the team. There\'s no shame in that.', ru: 'Если не уверены – посоветуйтесь с командой. В этом нет ничего постыдного.' },
  { he: 'הכן ערכת חירום אישית עם מים, חטיף, מטען ופנס.', en: 'Prepare a personal emergency kit with water, snacks, charger and flashlight.', ru: 'Подготовьте личный аварийный набор: вода, перекус, зарядка, фонарик.' },
  { he: 'למד את שמות אנשי הקשר המרכזיים בכל צוות.', en: 'Learn the names of key contacts in each team.', ru: 'Выучите имена ключевых контактов в каждой команде.' },
  { he: 'הפסקה קצרה כל שעה – שתייה, נשימה, חזרה.', en: 'Short break every hour – drink, breathe, return.', ru: 'Короткий перерыв каждый час – вода, дыхание, возврат.' },
];

export const homeParallelTeams = [
  { title: { he: 'צוות קישור לבתי חולים', en: 'Hospital Liaison Team', ru: 'Группа связи с больницами' }, desc: { he: 'יציאה לבתי חולים: לניאדו, מאיר, הלל יפה', en: 'Deploying to hospitals: Laniado, Meir, Hillel Yaffe', ru: 'Выезд в больницы: Ланиадо, Меир, Гилель Яффе' }, people: { he: 'שמרית דיאמנט · אסנת דוד', en: 'Shamrit Diamant · Osnat David', ru: 'Шамрит Диамант · Оснат Давид' } },
  { title: { he: 'צוות קליטת אוכלוסייה בבתי מלון', en: 'Hotel Population Intake Team', ru: 'Группа размещения в отелях' }, desc: { he: 'עבודה מול המלונות', en: 'Working with hotels', ru: 'Работа с отелями' }, people: { he: 'אתי עמיאל · הדר שחר פז', en: 'Eti Amiel · Hadar Shachar Paz', ru: 'Эти Амиэль · Хадар Шахар Паз' } },
  { title: { he: 'צוות בשורה מרה', en: 'Death Notification Team', ru: 'Группа печальных известий' }, desc: { he: 'מסירת הודעה על הרוג\nלעולם לא בשטח האירוע', en: 'Delivering death notifications\nNever at the event site', ru: 'Доставка уведомлений о гибели\nНикогда на месте события' }, people: { he: 'נילי חומן · יעל שחר', en: 'Nili Homan · Yael Shachar', ru: 'Нили Хоман · Яэль Шахар' } },
  { title: { he: 'צוות תל"ם', en: 'TALEM Team', ru: 'Группа ТАЛЕМ' }, desc: { he: 'קשר יזום עם אוכלוסיות פגיעות\nמופעל שעות לאחר שיא האירוע', en: 'Proactive contact with vulnerable populations\nActivated hours after peak event', ru: 'Инициативный контакт с уязвимым населением\nАктивируется через часы после пика события' }, people: { he: 'קלרה חן · יעל רכס', en: 'Clara Chen · Yael Reches', ru: 'Клара Хен · Яэль Рехес' } },
  { title: { he: 'צוות קו פתוח', en: 'Open Line Team', ru: 'Группа горячей линии' }, desc: { he: 'מענה טלפוני לתושבים במצוקה רגשית\nהפניות ממוקד 106', en: 'Phone support for emotionally distressed residents\nReferrals from 106 center', ru: 'Телефонная поддержка жителям в стрессе\nНаправления из центра 106' }, people: { he: 'רקפת וינגרט · שלומית עמרני', en: 'Rakefet Weingart · Shlomit Amrani', ru: 'Ракефет Вайнгарт · Шломит Амрани' } },
  { title: { he: 'צוות מתנדבים וקהילה', en: 'Volunteers & Community Team', ru: 'Группа волонтёров и сообщества' }, desc: { he: 'הפעלת חמ"ל לוגיסטיקה\nרישום וניהול מתנדבים', en: 'Operating logistics HQ\nRegistering & managing volunteers', ru: 'Управление логистическим штабом\nРегистрация и управление волонтёрами' }, people: { he: 'אפרת ברוך · מלי גניש', en: 'Efrat Baruch · Mali Ganish', ru: 'Эфрат Барух · Мали Ганиш' } },
  { title: { he: '"מי יציל את המציל"', en: '"Who Saves the Savior"', ru: '«Кто спасёт спасателя»' }, desc: { he: 'ונטילציה ותמיכה לצוותי החירום\nלכל אנשי השטח והמקצוע', en: 'Debriefing & support for emergency teams\nFor all field and professional staff', ru: 'Дебрифинг и поддержка команд ЧС\nДля всех полевых и профессиональных сотрудников' }, people: { he: 'סיגל קני פז · מירב מור', en: 'Sigal Kni Paz · Merav Mor', ru: 'Сигаль Кни Паз · Мерав Мор' } },
  { title: { he: 'מטה מכלול אוכלוסייה', en: 'Population Division HQ', ru: 'Штаб отдела населения' }, desc: { he: 'ריכוז תמונת מצב\nתיאום והקצאת משימות\nעדכונים בהערכת מצב', en: 'Situation overview\nCoordination & task allocation\nStatus assessment updates', ru: 'Обзор ситуации\nКоординация и распределение задач\nОбновления оценки обстановки' }, people: { he: 'רותי גור · לימור איצקוביץ', en: 'Ruti Gur · Limor Itzkovitz', ru: 'Рути Гур · Лимор Ицкович' } },
];

export const homeEmergencyPhones = [
  { label: { he: 'מוקד עירוני 106', en: 'City center 106', ru: 'Городской центр 106' } },
  { label: { he: 'משטרה 100', en: 'Police 100', ru: 'Полиция 100' } },
  { label: { he: 'מד"א 101', en: 'MDA 101', ru: 'МДА 101' } },
  { label: { he: 'כיבוי 102', en: 'Fire 102', ru: 'Пожарные 102' } },
  { label: { he: 'פיקוד העורף 104', en: 'Home Front 104', ru: 'Тыловое ком. 104' } },
  { label: { he: 'ער"ן 1201', en: 'ERAN 1201', ru: 'ЭРАН 1201' } },
];

// ===== MASHE PAGE =====
export const mashe: Record<string, T> = {
  title: { he: 'מודל מעש״ה', en: 'MASHE Model', ru: 'Модель МАШЕ' },
  subtitle: { he: 'עזרה ראשונה נפשית – פותח ע״י ד״ר משה פרחי', en: 'Psychological First Aid – Developed by Dr. Moshe Farchi', ru: 'Психологическая первая помощь – разработано д-ром Моше Фархи' },
  whatTitle: { he: 'מהו מודל מעש״ה?', en: 'What is the MASHE Model?', ru: 'Что такое модель МАШЕ?' },
  whatDesc: { he: 'מודל מעש״ה הוא כלי לאומי מובנה לעזרה ראשונה נפשית (עשר״נ), פותח על ידי ד״ר משה פרחי. המודל מבוסס על עקרונות נוירו-פסיכולוגיים שמטרתם מעבר מחשיבה רגשית לחשיבה קוגניטיבית-תפקודית, תוך דקה-שתיים בלבד.', en: 'The MASHE Model is a national structured tool for psychological first aid (PFA), developed by Dr. Moshe Farchi. The model is based on neuro-psychological principles aimed at transitioning from emotional thinking to cognitive-functional thinking, within just one to two minutes.', ru: 'Модель МАШЕ — это национальный структурированный инструмент психологической первой помощи (ППП), разработанный д-ром Моше Фархи. Модель основана на нейропсихологических принципах перехода от эмоционального к когнитивно-функциональному мышлению за одну-две минуты.' },
  goalTitle: { he: 'מטרת המודל', en: 'Model Goal', ru: 'Цель модели' },
  goalDesc: { he: 'העברת הנפגע ממצב פסיבי-רגשי למצב פעיל-תפקודי – מ"למה?" (רגש) ל"מה?" (עובדה/תפקוד).', en: 'Moving the affected person from a passive-emotional state to an active-functional state – from "why?" (emotion) to "what?" (fact/function).', ru: 'Перевод пострадавшего из пассивно-эмоционального состояния в активно-функциональное — от «почему?» (эмоция) к «что?» (факт/функция).' },
  whoTitle: { he: 'מי יכול להשתמש?', en: 'Who can use it?', ru: 'Кто может использовать?' },
  whoDesc: { he: 'מתאים לכל אדם – ללא צורך בידע מקצועי מוקדם בבריאות הנפש. הוכח כיעיל להפחתת קשיים פסיכולוגיים בעתיד.', en: 'Suitable for everyone – no prior mental health expertise required. Proven effective at reducing future psychological difficulties.', ru: 'Подходит для всех – без необходимости специальных знаний в области психического здоровья. Доказана эффективность снижения будущих психологических трудностей.' },
  acronymLabel: { he: 'ראשי תיבות:', en: 'Acronym:', ru: 'Аббревиатура:' },
  acronymFull: { he: 'מחויבות · עידוד לפעולה · שאלות קוגניטיביות · הבניה', en: 'Commitment · Encouragement · Questions · Structure', ru: 'Обязательство · Поощрение · Вопросы · Структурирование' },
  coreTitle: { he: 'עקרונות הליבה – לפי סדר הפעולות', en: 'Core Principles – In Order of Action', ru: 'Основные принципы — в порядке действий' },
  step: { he: 'שלב', en: 'Step', ru: 'Шаг' },
  exampleLabel: { he: 'דוגמה לשימוש', en: 'Example', ru: 'Пример' },
  mistakesTitle: { he: 'טעויות נפוצות וכיצד להימנע', en: 'Common Mistakes & How to Avoid Them', ru: 'Распространённые ошибки и как их избежать' },
  dontDo: { he: 'לא לעשות', en: 'Don\'t', ru: 'Нельзя' },
  instead: { he: 'במקום', en: 'Instead', ru: 'Вместо этого' },
  videoTitle: { he: 'סרטון הדרכה – ד״ר משה פרחי', en: 'Training Video – Dr. Moshe Farchi', ru: 'Обучающее видео – д-р Моше Фархи' },
  videoDesc: { he: 'ד״ר משה פרחי, ראש החוג לעבודה סוציאלית ומפתח מודל מעש״ה, מציג את המודל להגשת עזרה ראשונה נפשית.', en: 'Dr. Moshe Farchi, Head of Social Work Department and MASHE model developer, presents the psychological first aid model.', ru: 'Д-р Моше Фархи, заведующий кафедрой социальной работы и разработчик модели МАШЕ, представляет модель психологической первой помощи.' },
  videoPlaceholder: { he: 'סרטון ההדרכה יתווסף בקרוב', en: 'Training video coming soon', ru: 'Обучающее видео скоро появится' },
  remindersTitle: { he: 'תזכורות מהירות לשטח', en: 'Quick Field Reminders', ru: 'Быстрые напоминания для полевой работы' },
  contactsTitle: { he: 'אנשי קשר – מטה רגשי וצוותי התערבות', en: 'Contacts – Emotional HQ & Intervention Teams', ru: 'Контакты – Эмоциональный штаб и группы вмешательства' },
};

export const masheSteps = [
  {
    letter: { he: 'מ', en: 'C', ru: 'О' },
    title: { he: 'מחויבות', en: 'Commitment', ru: 'Обязательство' },
    english: { he: 'Commitment', en: 'Commitment', ru: 'Commitment' },
    description: { he: 'יצירת קשר עם הנפגע ללא הבטחות שווא. הבטחה להיות איתו: "אני איתך, אתה לא לבד". המטרה – תחושת שייכות ואי-בדידות ברגע הקשה.', en: 'Connecting with the affected person without false promises. Promising to be there: "I\'m with you, you\'re not alone." The goal – creating a sense of belonging and not being alone in a difficult moment.', ru: 'Установление контакта с пострадавшим без ложных обещаний. Обещание быть рядом: «Я с вами, вы не одиноки». Цель – создать ощущение принадлежности и присутствия в трудный момент.' },
    example: { he: '"שמי ___, אני מצוות העירייה. אני איתך עכשיו. אתה לא לבד."', en: '"My name is ___, I\'m from the city team. I\'m with you now. You\'re not alone."', ru: '«Меня зовут ___, я из городской команды. Я сейчас с вами. Вы не одиноки.»' },
  },
  {
    letter: { he: 'ע', en: 'E', ru: 'П' },
    title: { he: 'עידוד לפעולה', en: 'Encouragement to Action', ru: 'Поощрение к действию' },
    english: { he: 'Encouragement to Action', en: 'Encouragement to Action', ru: 'Encouragement to Action' },
    description: { he: 'החזרת האדם ממצב פסיבי לאקטיבי על ידי מתן הנחיות פשוטות לביצוע. המטרה – להוציא את האדם מקיפאון ולהחזיר לו תחושת מסוגלות ושליטה.', en: 'Returning the person from passive to active state by giving simple instructions. The goal – getting them out of freeze and restoring a sense of capability and control.', ru: 'Возвращение человека из пассивного в активное состояние путём простых инструкций. Цель – вывести из оцепенения и вернуть чувство способности и контроля.' },
    example: { he: '"תעזור לי לאסוף את הציוד", "אסוף מספר טלפון", "חלק מים לתושבים"', en: '"Help me gather the equipment", "Collect a phone number", "Distribute water to residents"', ru: '«Помогите мне собрать оборудование», «Запишите номер телефона», «Раздайте воду жителям»' },
  },
  {
    letter: { he: 'ש', en: 'Q', ru: 'В' },
    title: { he: 'שאלות קוגניטיביות', en: 'Cognitive Questions', ru: 'Когнитивные вопросы' },
    english: { he: 'Cognitive Questions', en: 'Cognitive Questions', ru: 'Cognitive Questions' },
    description: { he: 'שאילת שאלות הדורשות חשיבה רציונלית – לא רגשית. המטרה: להפעיל את הקורטקס הפרה-פרונטלי ולהוציא את המוח ממצב חרדה.', en: 'Asking questions that require rational – not emotional – thinking. Goal: activate the prefrontal cortex and move the brain from an anxiety state.', ru: 'Задавание вопросов, требующих рационального, а не эмоционального мышления. Цель: активировать префронтальную кору и вывести мозг из состояния тревоги.' },
    example: { he: '"כמה קומות יש בבניין?" / "באיזו שעה בערך זה קרה?" / "כמה אנשים גרים בדירה?"', en: '"How many floors does the building have?" / "Around what time did it happen?" / "How many people live in the apartment?"', ru: '«Сколько этажей в здании?» / «Примерно в какое время это произошло?» / «Сколько человек живёт в квартире?»' },
  },
  {
    letter: { he: 'ה', en: 'S', ru: 'С' },
    title: { he: 'הבניה', en: 'Structure', ru: 'Структурирование' },
    english: { he: 'Structure', en: 'Structure', ru: 'Structure' },
    description: { he: 'הבנייה של רצף האירועים – יצירת סדר בבלבול על ידי תיאור עובדתי וקצר של האירוע, והדגשה שהסכנה חלפה. המטרה: החזרת תחושת סדר ושליטה לאחר הכאוס.', en: 'Structuring the sequence of events – creating order from chaos through a brief factual description, emphasizing that the danger has passed. Goal: restoring a sense of order and control after chaos.', ru: 'Структурирование последовательности событий – создание порядка из хаоса через краткое фактическое описание, подчёркивая, что опасность миновала. Цель: восстановление ощущения порядка и контроля после хаоса.' },
    example: { he: '"הייתה אזעקה, נכנסנו לממ"ד, עכשיו האיום חלף ואנחנו בטוחים."', en: '"There was a siren, we entered the safe room, the threat has passed and we\'re safe now."', ru: '«Была сирена, мы укрылись в безопасной комнате, угроза миновала и мы в безопасности.»' },
  },
];

export const masheMistakes = [
  { wrong: { he: 'לומר \'תירגע\' או \'יהיה בסדר\'', en: 'Saying "calm down" or "it\'ll be fine"', ru: 'Говорить «успокойтесь» или «всё будет хорошо»' }, right: { he: '\'אני כאן איתך. בוא נסתכל יחד על העובדות.\'', en: '"I\'m here with you. Let\'s look at the facts together."', ru: '«Я здесь с вами. Давайте вместе посмотрим на факты.»' } },
  { wrong: { he: 'להגיב רגשית: \'אוי, איזה אסון!\'', en: 'Reacting emotionally: "Oh, what a disaster!"', ru: 'Эмоциональная реакция: «О, какая катастрофа!»' }, right: { he: '\'הבית נפגע. כרגע אתם בטוחים.\' (עובדות בלבד)', en: '"The house was hit. Right now you\'re safe." (facts only)', ru: '«Дом пострадал. Сейчас вы в безопасности.» (только факты)' } },
  { wrong: { he: 'להפעיל לחץ לדבר על הרגשות', en: 'Pressuring to talk about feelings', ru: 'Давление обсуждать чувства' }, right: { he: 'שאלות קוגניטיביות שמחזירות לתפקוד', en: 'Cognitive questions that restore functioning', ru: 'Когнитивные вопросы, восстанавливающие функциональность' } },
  { wrong: { he: 'להבטיח תוצאות (\'ימצאו את כולם\')', en: 'Promising outcomes ("they\'ll find everyone")', ru: 'Обещать результаты («всех найдут»)' }, right: { he: '\'אנחנו פועלים עכשיו. אני איתך.\'', en: '"We\'re working on it now. I\'m with you."', ru: '«Мы работаем над этим. Я с вами.»' } },
  { wrong: { he: 'להשאיר את האדם פסיבי ובמצוקה', en: 'Leaving the person passive and distressed', ru: 'Оставлять человека пассивным и в стрессе' }, right: { he: 'הנעה לפעולה קטנה ומיידית שמחזירה תחושת שליטה', en: 'Motivating a small, immediate action that restores control', ru: 'Мотивация к небольшому немедленному действию, восстанавливающему контроль' } },
];

export const masheReminders = [
  { title: { he: 'לפני שניגשים לאדם במצוקה', en: 'Before approaching a distressed person', ru: 'Перед подходом к человеку в стрессе' }, items: [{ he: 'נשום עמוק', en: 'Take a deep breath', ru: 'Глубокий вдох' }, { he: 'זהה את עצמך', en: 'Identify yourself', ru: 'Представьтесь' }, { he: 'שמור על קשר עין', en: 'Maintain eye contact', ru: 'Зрительный контакт' }, { he: 'דבר בטון רגוע ואיטי', en: 'Speak calmly and slowly', ru: 'Спокойная и медленная речь' }] },
  { title: { he: 'הסדר הנכון של הפעולות', en: 'Correct order of actions', ru: 'Правильный порядок действий' }, items: [{ he: 'מחויבות', en: 'Commitment', ru: 'Обязательство' }, { he: 'עידוד לפעולה', en: 'Encouragement to Action', ru: 'Поощрение к действию' }, { he: 'שאלות קוגניטיביות', en: 'Cognitive Questions', ru: 'Когнитивные вопросы' }, { he: 'הבניה', en: 'Structure', ru: 'Структурирование' }] },
  { title: { he: 'בסיום המפגש', en: 'At the end of the session', ru: 'В конце встречи' }, items: [{ he: 'ודא שהאדם יודע לאן לפנות', en: 'Make sure person knows where to go', ru: 'Убедитесь, что человек знает, куда обратиться' }, { he: 'השאר פרטים ליצירת קשר', en: 'Leave contact details', ru: 'Оставьте контактные данные' }, { he: 'דווח למטה', en: 'Report to HQ', ru: 'Доложите в штаб' }] },
  { title: { he: 'דאגה לעצמכם', en: 'Self-care', ru: 'Забота о себе' }, items: [{ he: 'ונטילציה עם עמיתים', en: 'Debriefing with colleagues', ru: 'Дебрифинг с коллегами' }, { he: 'שתייה ואוכל', en: 'Drink and eat', ru: 'Еда и питьё' }, { he: 'זמן מנוחה בין התערבויות', en: 'Rest between interventions', ru: 'Отдых между вмешательствами' }] },
];

// ===== TEAMS PAGE =====
export const teamsPage: Record<string, T> = {
  title: { he: 'צוותי החירום', en: 'Emergency Teams', ru: 'Команды ЧС' },
  subtitle: { he: 'בחרו צוות לצפייה בתוכנית ההפעלה המלאה', en: 'Select a team to view its full activation plan', ru: 'Выберите команду для просмотра полного плана активации' },
  yachadLink: { he: 'כניסה למערכת יחד – לחץ כאן', en: 'Enter YACHAD System – Click here', ru: 'Вход в систему ЯХАД – нажмите' },
  mainTasks: { he: 'משימות עיקריות', en: 'Main Tasks', ru: 'Основные задачи' },
  keyPoints: { he: 'נקודות מפתח', en: 'Key Points', ru: 'Ключевые моменты' },
  contactsTitle: { he: 'אנשי קשר מרכזיים', en: 'Key Contacts', ru: 'Ключевые контакты' },
};

// ===== SCRIPTS PAGE =====
export const scriptsPage: Record<string, T> = {
  title: { he: 'תסריטי שיחה', en: 'Conversation Scripts', ru: 'Сценарии бесед' },
  subtitle: { he: 'בחרו תסריט כדי לראות את ההנחיות המלאות', en: 'Select a script to view full guidelines', ru: 'Выберите сценарий для полных рекомендаций' },
  yachadLink: { he: 'כניסה למערכת יחד – לחץ כאן', en: 'Enter YACHAD System – Click here', ru: 'Вход в систему ЯХАД – нажмите' },
  scenario: { he: 'תרחיש', en: 'Scenario', ru: 'Сценарий' },
  doSay: { he: 'כן לומר ✓', en: 'Do say ✓', ru: 'Говорить ✓' },
  dontSay: { he: 'לא לומר ✗', en: 'Don\'t say ✗', ru: 'Не говорить ✗' },
  stepsTitle: { he: 'שלבי הטיפול', en: 'Treatment Steps', ru: 'Этапы помощи' },
  contactsTitle: { he: 'אנשי קשר – קו פתוח והתערבות', en: 'Contacts – Hotline & Intervention', ru: 'Контакты – Горячая линия и вмешательство' },
};

// ===== FAQ PAGE =====
export const faqPage: Record<string, T> = {
  title: { he: 'שאלות ותשובות', en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы' },
  subtitle: { he: 'מידע על מערכת יחד ותהליכי חירום', en: 'Information about YACHAD system and emergency processes', ru: 'Информация о системе ЯХАД и аварийных процессах' },
  yachadLink: { he: 'כניסה למערכת יחד – לחץ כאן', en: 'Enter YACHAD System – Click here', ru: 'Вход в систему ЯХАД – нажмите' },
  contactsTitle: { he: 'אנשי קשר – מערכות מידע ופרסום', en: 'Contacts – Information Systems & Media', ru: 'Контакты – Инф. системы и публикации' },
};

// ===== CONTACTS PAGE =====
export const contactsPage: Record<string, T> = {
  title: { he: 'ספר טלפונים', en: 'Phone Book', ru: 'Телефонный справочник' },
  subtitle: { he: 'מבנה ארגוני מכלול אוכלוסייה – עיריית נתניה · מעודכן אפריל 2026', en: 'Population Division Org Chart – Netanya Municipality · Updated April 2026', ru: 'Организационная структура отдела населения – Нетания · Обновлено апрель 2026' },
  yachadLink: { he: 'כניסה למערכת יחד – לחץ כאן', en: 'Enter YACHAD System – Click here', ru: 'Вход в систему ЯХАД – нажмите' },
  searchPlaceholder: { he: 'חיפוש לפי שם, תפקיד או מספר...', en: 'Search by name, role or number...', ru: 'Поиск по имени, должности или номеру...' },
  allCategories: { he: 'הכל', en: 'All', ru: 'Все' },
  copySuccess: { he: 'הועתק', en: 'Copied', ru: 'Скопировано' },
};

// ===== ORGCHART PAGE =====
export const orgchartPage: Record<string, T> = {
  title: { he: 'מבנה ארגוני', en: 'Organizational Chart', ru: 'Организационная структура' },
  subtitle: { he: 'תרשים מכלול אוכלוסייה – עיריית נתניה · מעודכן אפריל 2026', en: 'Population Division Chart – Netanya Municipality · Updated April 2026', ru: 'Схема отдела населения – Нетания · Обновлено апрель 2026' },
  instructions: { he: 'לחצו על כל יחידה כדי לפתוח/לסגור · לחצו על מספר טלפון כדי לחייג', en: 'Click any unit to expand/collapse · Click a phone number to dial', ru: 'Нажмите на подразделение чтобы открыть/закрыть · Нажмите на номер для звонка' },
  supportTitle: { he: 'צוותי תמיכה ומטה', en: 'Support & HQ Staff', ru: 'Группы поддержки и штаб' },
};

// ===== ACCESSIBILITY PAGE =====
export const accessibilityPage: Record<string, T> = {
  title: { he: 'הצהרת נגישות', en: 'Accessibility Statement', ru: 'Заявление о доступности' },
  updated: { he: 'עודכן לאחרונה: אפריל 2026', en: 'Last updated: April 2026', ru: 'Последнее обновление: апрель 2026' },
  disclaimer: { he: 'שימו לב: אתר זה הוא יוזמה פרטית של אלעד סעדון, עובד מנהל השירותים החברתיים בעיריית נתניה, ונועד לסייע לצוותי החירום בעת אירוע. האתר אינו אתר רשמי של עיריית נתניה. התכנים באתר נועדו לריענון ותרגול בלבד ואין להסתמך עליהם כתחליף לנהלים רשמיים.', en: 'Note: This website is a private initiative by Elad Saadon, an employee of the Social Services Administration at Netanya Municipality, designed to assist emergency teams during events. This is not an official Netanya Municipality website. Content is for training purposes only and should not substitute official procedures.', ru: 'Внимание: Этот сайт является частной инициативой Элада Саадона, сотрудника управления социальных служб муниципалитета Нетании, предназначен для помощи группам ЧС. Это не официальный сайт муниципалитета. Содержание предназначено только для обучения.' },
  commitmentTitle: { he: 'מחויבות לנגישות', en: 'Commitment to Accessibility', ru: 'Обязательство доступности' },
  featuresTitle: { he: 'התאמות נגישות שבוצעו', en: 'Accessibility Features Implemented', ru: 'Реализованные функции доступности' },
  inProgressTitle: { he: 'תחומים בתהליך הנגשה', en: 'Areas in Progress', ru: 'Области в процессе' },
  legalTitle: { he: 'בסיס חוקי', en: 'Legal Basis', ru: 'Правовая основа' },
  contactTitle: { he: 'יצירת קשר', en: 'Contact', ru: 'Контакт' },
  browsersTitle: { he: 'דפדפנים ומכשירים נתמכים', en: 'Supported Browsers & Devices', ru: 'Поддерживаемые браузеры и устройства' },
};

// ===== PRIVACY PAGE =====
export const privacyPage: Record<string, T> = {
  title: { he: 'מדיניות פרטיות', en: 'Privacy Policy', ru: 'Политика конфиденциальности' },
  updated: { he: 'עודכן לאחרונה: אפריל 2026', en: 'Last updated: April 2026', ru: 'Последнее обновление: апрель 2026' },
  disclaimer: { he: 'שימו לב: אתר זה הוא יוזמה פרטית ואינו אתר רשמי של עיריית נתניה. האחריות על האתר ותכניו היא של מפעיל האתר בלבד.', en: 'Note: This website is a private initiative and not an official Netanya Municipality website. Responsibility for the site and its content lies solely with the site operator.', ru: 'Внимание: Этот сайт является частной инициативой, а не официальным сайтом муниципалитета Нетании. Ответственность за сайт лежит на операторе.' },
  questionsLabel: { he: 'שאלות בנוגע למדיניות הפרטיות?', en: 'Questions about the privacy policy?', ru: 'Вопросы о политике конфиденциальности?' },
  updateNotice: { he: 'מפעיל האתר שומר לעצמו את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר.', en: 'The site operator reserves the right to update this policy from time to time. Material changes will be published on the site.', ru: 'Оператор сайта оставляет за собой право обновлять эту политику. Существенные изменения будут опубликованы на сайте.' },
};
