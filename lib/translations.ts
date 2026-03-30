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
  line1: { he: 'יוזמה פרטית לסיוע לצוותי חירום · מנהל רווחה - עיריית נתניה', en: 'Private initiative to assist emergency teams · Welfare Administration - Netanya Municipality', ru: 'Частная инициатива для помощи группам ЧС · Управление соцобеспечения - Нетания' },
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
  msrFormsTitle: { he: 'טפסי מס״ר ידניים להורדה', en: 'Manual MSR Forms for Download', ru: 'Ручные формы МСР для скачивания' },
  msrFormsDesc: { he: 'לשימוש כאשר מערכת יחד אינה זמינה', en: 'For use when YACHAD system is unavailable', ru: 'Для использования когда система ЯХАД недоступна' },
  msrForm1: { he: 'טופס רישום תושבים בזירת אירוע', en: 'Resident Registration at Event Site', ru: 'Регистрация жителей на месте события' },
  msrForm2: { he: 'נספח א׳ – התחייבות ניזוק (מלון / דיור חלופי)', en: 'Appendix A – Victim Commitment (Hotel / Alt. Housing)', ru: 'Прил. А – Обязательство пострадавшего (отель / жильё)' },
  msrForm3: { he: 'נספח ה׳ – שובר הפניה לבית מלון', en: 'Appendix E – Hotel Referral Voucher', ru: 'Прил. Е – Направление в отель' },
  yachadSystem: { he: 'מערכת יחד', en: 'YACHAD System', ru: 'Система ЯХАД' },
  yachadDesc: { he: 'מערכת לאומית לניהול אירועי חירום ברשויות מקומיות', en: 'National system for managing emergencies in local authorities', ru: 'Национальная система управления ЧС в местных органах власти' },
  intakeForm: { he: 'טופס קליטה עירוני', en: 'Municipal Intake Form', ru: 'Городская форма приёма' },
  intakeFormDesc: { he: 'לשימוש רק במידה ומערכת יחד אינה פעילה', en: 'For use only when YACHAD system is not active', ru: 'Использовать только когда система ЯХАД не активна' },
  msrFormsInlineExplain: { he: 'במידה ויש קשיים בחיבור למערכת יחד', en: 'In case of difficulties connecting to YACHAD system', ru: 'При проблемах с подключением к системе ЯХАД' },
  populationApp: { he: 'אפליקציית מודיעין אוכלוסיה', en: 'Population Intelligence App', ru: 'Приложение учёта населения' },
  populationAppDesc: { he: 'אפליקציה לזיהוי ראשוני של התושבים בזירת האירוע', en: 'App for initial identification of residents at the event scene', ru: 'Приложение для первичной идентификации жителей на месте события' },
  populationAppExplain: { he: 'האפליקציה מסייעת לזהות מי מהתושבים נמצא ומי טרם זוהה – הדבר מסייע לאיתור נעדרים.', en: 'Helps identify which residents have been found and who hasn\'t been identified yet, assisting in locating missing persons.', ru: 'Помогает определить, кто из жителей найден и кто ещё не идентифицирован, что помогает в поиске пропавших.' },
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
      { he: 'זיהוי תושב באפליקציית מודיעין אוכלוסיה', en: 'Identifying residents via population intelligence app', ru: 'Идентификация жителей через приложение учёта населения' },
      { he: 'הפנייה למס"ר', en: 'Referral to MSR (Primary Assistance Center)', ru: 'Направление в МСР (центр первичной помощи)' },
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
  { title: { he: 'צוות קליטה בבתי מלון', en: 'Hotel Intake Team', ru: 'Группа размещения в отелях' }, desc: { he: 'ליווי משפחות בתהליך הקליטה בבית מלון\nאיסוף צרכים והעברת נתונים למטה', en: 'Accompanying families during hotel intake\nCollecting needs & reporting to HQ', ru: 'Сопровождение семей при размещении в отеле\nСбор потребностей и передача данных в штаб' }, people: { he: 'אתי עמיאל · הדר שחר פז', en: 'Eti Amiel · Hadar Shachar Paz', ru: 'Эти Амиэль · Хадар Шахар Паз' } },
  { title: { he: 'צוות בשורה מרה', en: 'Death Notification Team', ru: 'Группа печальных известий' }, desc: { he: 'מסירת הודעה על הרוג\nלעולם לא בשטח האירוע', en: 'Delivering death notifications\nNever at the event site', ru: 'Доставка уведомлений о гибели\nНикогда на месте события' }, people: { he: 'נילי חומן · יעל שחר · גאולה דרורי', en: 'Nili Homan · Yael Shachar · Geula Drori', ru: 'Нили Хоман · Яэль Шахар · Геула Дрори' } },
  { title: { he: 'צוות תל"ם', en: 'TALEM Team', ru: 'Группа ТАЛЕМ' }, desc: { he: 'קשר יזום עם אוכלוסיות פגיעות\nמופעל שעות לאחר שיא האירוע', en: 'Proactive contact with vulnerable populations\nActivated hours after peak event', ru: 'Инициативный контакт с уязвимым населением\nАктивируется через часы после пика события' }, people: { he: 'מיכל גרינברג · יעל רכס', en: 'Michal Greenberg · Yael Reches', ru: 'Михаль Гринберг · Яэль Рехес' } },
  { title: { he: 'צוות קו פתוח', en: 'Open Line Team', ru: 'Группа горячей линии' }, desc: { he: 'מענה טלפוני לתושבים במצוקה רגשית\nהפניות ממוקד 106', en: 'Phone support for emotionally distressed residents\nReferrals from 106 center', ru: 'Телефонная поддержка жителям в стрессе\nНаправления из центра 106' }, people: { he: 'רקפת וינגרט · שלומית עמרני', en: 'Rakefet Weingart · Shlomit Amrani', ru: 'Ракефет Вайнгарт · Шломит Амрани' } },
  { title: { he: 'צוות מתנדבים וקהילה', en: 'Volunteers & Community Team', ru: 'Группа волонтёров и сообщества' }, desc: { he: 'פתיחת חמ"ל לוגיסטיקה למענה לצרכים חומריים\nרישום וניהול מתנדבים', en: 'Opening logistics HQ for material needs\nRegistering & managing volunteers', ru: 'Открытие логистического штаба для материальных нужд\nРегистрация и управление волонтёрами' }, people: { he: 'אפרת ברוך · מלי גניש · ענת עשור · אתי יוזף', en: 'Efrat Baruch · Mali Ganish · Anat Ashur · Eti Yosef', ru: 'Эфрат Барух · Мали Ганиш · Анат Ашур · Эти Йосеф' } },
  { title: { he: '"מי יציל את המציל"', en: '"Who Saves the Savior"', ru: '«Кто спасёт спасателя»' }, desc: { he: 'ונטילציה ותמיכה לצוותי החירום\nלכל אנשי השטח והמקצוע', en: 'Debriefing & support for emergency teams\nFor all field and professional staff', ru: 'Дебрифинг и поддержка команд ЧС\nДля всех полевых и профессиональных сотрудников' }, people: { he: 'סיגל קני פז · מירב מור', en: 'Sigal Kni Paz · Merav Mor', ru: 'Сигаль Кни Паз · Мерав Мор' } },
  { title: { he: 'מטה מכלול אוכלוסייה', en: 'Population Division HQ', ru: 'Штаб отдела населения' }, desc: { he: 'ריכוז תמונת מצב\nתיאום והקצאת משימות\nעדכונים בהערכת מצב', en: 'Situation overview\nCoordination & task allocation\nStatus assessment updates', ru: 'Обзор ситуации\nКоординация и распределение задач\nОбновления оценки обстановки' }, people: { he: 'רותי גור · לימור איצקוביץ · דבי סבטוי · עדי פוליטי', en: 'Ruti Gur · Limor Itzkovitz · Debi Savetoi · Adi Politi', ru: 'Рути Гур · Лимор Ицкович · Деби Саветой · Ади Полити' } },
  { title: { he: 'צוות מל"מ', en: 'MALAM Team', ru: 'Группа МАЛАМ' }, desc: { he: 'ניהול מידע', en: 'Information management', ru: 'Управление информацией' }, people: { he: 'בני שכטר · שני רשף · ציפי כרמלי · חגית אביב', en: 'Beni Shechter · Shani Reshef · Tzipi Carmeli · Hagit Aviv', ru: 'Бени Шехтер · Шани Решеф · Ципи Кармели · Хагит Авив' } },
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
  disclaimer: { he: 'שימו לב: אתר זה הוא יוזמה פרטית של אלעד סעדון, עובד מנהל רווחה - עיריית נתניה, ונועד לסייע לצוותי החירום בעת אירוע. האתר אינו אתר רשמי של עיריית נתניה. התכנים באתר נועדו לריענון ותרגול בלבד ואין להסתמך עליהם כתחליף לנהלים רשמיים.', en: 'Note: This website is a private initiative by Elad Saadon, an employee of the Welfare Administration at Netanya Municipality, designed to assist emergency teams during events. This is not an official Netanya Municipality website. Content is for training purposes only and should not substitute official procedures.', ru: 'Внимание: Этот сайт является частной инициативой Элада Саадона, сотрудника управления социальных служб муниципалитета Нетании, предназначен для помощи группам ЧС. Это не официальный сайт муниципалитета. Содержание предназначено только для обучения.' },
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
  intro: { he: 'מדיניות פרטיות זו מפרטת את אופן האיסוף, השימוש והשמירה על מידע אישי באתר צוותי חירום, יוזמה פרטית של אלעד סעדון לסיוע לצוותי חירום של מנהל רווחה - עיריית נתניה. המדיניות פועלת ברוח חוק הגנת הפרטיות, תשמ"א-1981, תיקון 13 לחוק, חוק הגנת הצרכן, וחוק התקשורת (בזק ושידורים) (תיקון מס\' 40), תשס"ח-2008 ("חוק הספאם").', en: 'This privacy policy details how personal information is collected, used and stored on the Emergency Teams website, a private initiative by Elad Saadon to assist the emergency teams of the Welfare Administration at Netanya Municipality. The policy operates in the spirit of the Privacy Protection Law 1981, Amendment 13, the Consumer Protection Law, and the Communications Law (Telecommunications and Broadcasting) (Amendment No. 40), 2008.', ru: 'Данная политика конфиденциальности описывает порядок сбора, использования и хранения личной информации на сайте команд ЧС — частной инициативе Элада Саадона для помощи командам ЧС Управления соцобеспечения муниципалитета Нетании. Политика действует в духе Закона о защите частной жизни 1981, Поправки 13, Закона о защите потребителей и Закона о связи 2008.' },
};

export const privacySections = [
  { title: { he: 'איסוף מידע', en: 'Information Collection', ru: 'Сбор информации' }, content: { he: 'האתר אוסף מידע בסיסי הנדרש לצורך תפעולו התקין בלבד. מידע זה עשוי לכלול נתוני גלישה כלליים (כגון כתובת IP, סוג דפדפן, מערכת הפעלה) המשמשים לצורכי אבטחה ושיפור חוויית השימוש. האתר אינו אוסף מידע אישי מזהה (כגון שם, מספר זהות, כתובת) אלא אם כן המשתמש מוסר אותו מרצונו בטפסי יצירת קשר.', en: 'The website collects only basic information necessary for its proper operation. This may include general browsing data (such as IP address, browser type, operating system) used for security and improving user experience. The website does not collect personally identifiable information (such as name, ID number, address) unless voluntarily provided by the user through contact forms.', ru: 'Сайт собирает только базовую информацию, необходимую для его нормальной работы. Это может включать общие данные о просмотре (IP-адрес, тип браузера, ОС), используемые для безопасности и улучшения пользовательского опыта. Сайт не собирает личную идентифицирующую информацию, если пользователь не предоставляет её добровольно.' } },
  { title: { he: 'אבטחת מידע', en: 'Information Security', ru: 'Безопасность информации' }, content: { he: 'מפעיל האתר נוקט באמצעי אבטחת מידע סבירים להגנה על המידע המאוחסן באתר, ברוח חוק הגנת הפרטיות, תשמ"א-1981, ותיקון 13 לחוק. האתר מוגן באמצעות הצפנת SSL/TLS, ומידע המאוחסן במערכות מאובטח בהתאם לסטנדרטים המקובלים.', en: 'The site operator takes reasonable security measures to protect information stored on the website, in the spirit of the Privacy Protection Law 1981 and Amendment 13. The site is protected by SSL/TLS encryption, and stored information is secured according to accepted standards.', ru: 'Оператор сайта принимает разумные меры безопасности для защиты хранимой информации в духе Закона о защите частной жизни 1981 и Поправки 13. Сайт защищён SSL/TLS шифрованием, информация хранится в соответствии с принятыми стандартами.' } },
  { title: { he: 'שימוש במידע', en: 'Use of Information', ru: 'Использование информации' }, content: { he: 'המידע שנאסף באתר ישמש אך ורק למטרות שלשמן נמסר: תפעול האתר, מענה לפניות, שיפור השירות ותחזוקת מערכות. לא יועבר מידע אישי לצד שלישי כלשהו, למעט במקרים הנדרשים על-פי חוק או בצו שיפוטי. לא נעשה שימוש במידע לצרכים שיווקיים או מסחריים.', en: 'Information collected on the website will be used solely for the purposes for which it was provided: site operation, responding to inquiries, service improvement, and system maintenance. No personal information will be transferred to any third party, except as required by law or court order. Information is not used for marketing or commercial purposes.', ru: 'Собранная информация используется исключительно для целей, для которых она была предоставлена: работа сайта, ответы на запросы, улучшение сервиса и обслуживание систем. Личная информация не передаётся третьим лицам, кроме случаев, предусмотренных законом.' } },
  { title: { he: 'עוגיות (Cookies)', en: 'Cookies', ru: 'Файлы Cookie' }, content: { he: 'האתר עשוי להשתמש בעוגיות (Cookies) לצורך שיפור חוויית הגלישה ותפעול תקין של האתר. עוגיות הן קבצי טקסט קטנים הנשמרים במכשיר המשתמש. ניתן להגדיר את הדפדפן כך שידחה עוגיות או יתריע על שליחתן, אולם חלק מפונקציות האתר עשויות שלא לפעול כראוי ללא עוגיות.', en: 'The website may use cookies to improve browsing experience and ensure proper site operation. Cookies are small text files stored on the user\'s device. You can configure your browser to reject cookies or alert you when they are sent, but some site features may not work properly without cookies.', ru: 'Сайт может использовать файлы cookie для улучшения опыта просмотра и обеспечения нормальной работы. Cookie — это небольшие текстовые файлы на устройстве пользователя. Вы можете настроить браузер для отклонения cookie, но некоторые функции сайта могут работать некорректно без них.' } },
  { title: { he: 'זכות עיון, תיקון ומחיקה', en: 'Right of Access, Correction and Deletion', ru: 'Право на доступ, исправление и удаление' }, content: { he: 'בהתאם לחוק הגנת הפרטיות, כל אדם רשאי לעיין במידע אישי המוחזק לגביו, לבקש לתקנו או למחקו. לצורך מימוש זכויות אלו, ניתן לפנות למפעיל האתר בדוא"ל ELAD.SAA@NETANYA.MUNI.IL. אטפל בפנייתכם בהקדם האפשרי.', en: 'Under the Privacy Protection Law, any person may view personal information held about them, request correction or deletion. To exercise these rights, contact the site operator at ELAD.SAA@NETANYA.MUNI.IL. We will handle your inquiry as soon as possible.', ru: 'В соответствии с Законом о защите частной жизни каждый может просмотреть хранимую о нём информацию, запросить исправление или удаление. Для реализации этих прав обратитесь к оператору сайта по адресу ELAD.SAA@NETANYA.MUNI.IL.' } },
];

// ===== CONTACTS PAGE: categories =====
export const contactCategories: Record<string, T> = {
  'מטה מכלול': { he: 'מטה מכלול', en: 'Division HQ', ru: 'Штаб отдела' },
  'צוותי התערבות': { he: 'צוותי התערבות', en: 'Intervention Teams', ru: 'Группы вмешательства' },
  'רובעים': { he: 'רובעים', en: 'Districts', ru: 'Районы' },
  'מס"ר': { he: 'מס"ר', en: 'MSR', ru: 'МСР' },
  'מטה מל"מ': { he: 'מטה מל"מ', en: 'MALAM HQ', ru: 'Штаб МАЛАМ' },
  'מטה רגשי': { he: 'מטה רגשי', en: 'Emotional HQ', ru: 'Эмоциональный штаб' },
  'קו פתוח': { he: 'קו פתוח', en: 'Open Line', ru: 'Горячая линия' },
  'קישור בתי חולים': { he: 'קישור בתי חולים', en: 'Hospital Liaison', ru: 'Связь с больницами' },
  'מטה חללים': { he: 'מטה חללים', en: 'Casualties HQ', ru: 'Штаб погибших' },
  'אוכלוסיות מיוחדות': { he: 'אוכלוסיות מיוחדות', en: 'Special Populations', ru: 'Особые группы населения' },
  'קליטת אוכלוסייה': { he: 'קליטת אוכלוסייה', en: 'Population Intake', ru: 'Приём населения' },
  'תפעול ומתנדבים': { he: 'תפעול ומתנדבים', en: 'Operations & Volunteers', ru: 'Операции и волонтёры' },
  'אזרחים ותיקים': { he: 'אזרחים ותיקים', en: 'Senior Citizens', ru: 'Пожилые граждане' },
  'קליטת עלייה': { he: 'קליטת עלייה', en: 'Immigration Absorption', ru: 'Абсорбция репатриантов' },
  'תיירות': { he: 'תיירות', en: 'Tourism', ru: 'Туризм' },
  'בריאות': { he: 'בריאות', en: 'Health', ru: 'Здравоохранение' },
  'ט.ל.י.ה': { he: 'ט.ל.י.ה', en: 'TLYA', ru: 'ТЛИЯ' },
  'גורמי חוץ': { he: 'גורמי חוץ', en: 'External Agencies', ru: 'Внешние организации' },
};

export const contactsUI: Record<string, T> = {
  contacts: { he: 'אנשי קשר', en: 'contacts', ru: 'контакты' },
  notEntered: { he: 'טרם הוזן', en: 'Not entered', ru: 'Не введено' },
  phoneNotEntered: { he: 'מספר טלפון טרם הוזן', en: 'Phone number not entered', ru: 'Номер телефона не введён' },
  noResults: { he: 'לא נמצאו אנשי קשר תואמים', en: 'No matching contacts found', ru: 'Совпадающие контакты не найдены' },
  basedOn: { he: 'מבוסס על תרשים מבנה ארגוני מכלול אוכלוסייה · מעודכן אפריל 2026', en: 'Based on the Population Division organizational chart · Updated April 2026', ru: 'На основе организационной схемы отдела населения · Обновлено апрель 2026' },
  copyNumber: { he: 'העתק מספר', en: 'Copy number', ru: 'Копировать номер' },
};

// ===== FAQ: translated categories =====
export const faqUI: Record<string, T> = {
  questions: { he: 'שאלות', en: 'questions', ru: 'вопросы' },
  q: { he: 'ש:', en: 'Q:', ru: 'В:' },
  a: { he: 'ת:', en: 'A:', ru: 'О:' },
};

export const faqCategories = [
  {
    id: 'general',
    title: { he: 'מטרת מערכת \'יחד\' ומידע כללי', en: 'YACHAD System Purpose & General Info', ru: 'Назначение системы ЯХАД и общая информация' },
    questions: [
      { q: { he: 'מה זו מערכת \'יחד\'?', en: 'What is the YACHAD system?', ru: 'Что такое система ЯХАД?' }, a: { he: 'מערכת \'יחד\' היא מערכת ממוחשבת לאומית לניהול אירועי חירום ברשויות מקומיות. היא מאפשרת רישום תושבים שנפגעו, ניהול צרכים, מעקב אחר פנויים ומשובצים למלונות, ותיאום בין גורמים.', en: 'YACHAD is a national computerized system for managing emergencies in local authorities. It enables registration of affected residents, needs management, tracking of available/placed individuals in hotels, and coordination between agencies.', ru: 'ЯХАД — национальная компьютерная система управления ЧС в местных органах власти. Позволяет регистрировать пострадавших, управлять потребностями, отслеживать размещение в отелях и координировать работу.' } },
      { q: { he: 'מי אחראי על תפעול המערכת?', en: 'Who is responsible for operating the system?', ru: 'Кто отвечает за работу системы?' }, a: { he: 'הרשות המקומית – בדרך כלל דרך מכלול אוכלוסייה ומנהל רווחה - עיריית נתניה. יש גורמי מטה ארציים שמלווים את התהליך.', en: 'The local authority – usually through the Population Division and the Welfare Administration at Netanya Municipality. National HQ staff support the process.', ru: 'Местная администрация — обычно через отдел населения и Управление соцобеспечения Нетании. Национальный штаб сопровождает процесс.' } },
      { q: { he: 'מתי מפעילים את המערכת?', en: 'When is the system activated?', ru: 'Когда активируется система?' }, a: { he: 'בכל אירוע חירום שמצריך פינוי תושבים, שיבוץ למלונות, או מעקב אחר נפגעים – לרבות אירועי ביטחון, שריפות, הצפות ואסונות.', en: 'During any emergency requiring resident evacuation, hotel placement, or casualty tracking – including security events, fires, floods and disasters.', ru: 'При любой ЧС, требующей эвакуации, размещения в отелях или отслеживания пострадавших — включая события безопасности, пожары, наводнения и бедствия.' } },
      { q: { he: 'האם המערכת מחליפה את הטיפול הישיר בתושבים?', en: 'Does the system replace direct care for residents?', ru: 'Заменяет ли система прямую помощь жителям?' }, a: { he: 'לא. המערכת היא כלי עבודה לצוותים – היא לא מחליפה את האינטראקציה האנושית, אלא מסייעת בניהול ותיעוד.', en: 'No. The system is a work tool for teams – it doesn\'t replace human interaction, but assists in management and documentation.', ru: 'Нет. Система — это рабочий инструмент для команд, она не заменяет человеческое взаимодействие, а помогает в управлении и документации.' } },
      { q: { he: 'מה הקשר בין מערכת \'יחד\' למערכת 106?', en: 'What is the connection between YACHAD and the 106 system?', ru: 'Какая связь между системой ЯХАД и системой 106?' }, a: { he: 'מוקד 106 הוא ערוץ הדיווח של התושבים. \'יחד\' היא המערכת הפנימית שבה נרשמות הפניות ומנוהל הטיפול.', en: 'The 106 center is the residents\' reporting channel. YACHAD is the internal system where referrals are recorded and care is managed.', ru: 'Центр 106 — канал обращения жителей. ЯХАД — внутренняя система, где регистрируются обращения и управляется помощь.' } },
    ],
  },
  {
    id: 'data_entry',
    title: { he: 'הזנת נתונים למערכת', en: 'Data Entry into the System', ru: 'Ввод данных в систему' },
    questions: [
      { q: { he: 'מי מוסמך להזין נתונים למערכת?', en: 'Who is authorized to enter data?', ru: 'Кто уполномочен вводить данные?' }, a: { he: 'כל עובד בעל הרשאה שקיבל תדרוך. בדרך כלל – צוותי שולחן קדמי, מס"ר ומטה מכלול.', en: 'Any authorized employee who received a briefing. Usually – front desk teams, MSR and division HQ.', ru: 'Любой уполномоченный сотрудник, прошедший инструктаж. Обычно — команды приёмной, МСР и штаб отдела.' } },
      { q: { he: 'אילו נתונים חובה להזין?', en: 'What data must be entered?', ru: 'Какие данные обязательны?' }, a: { he: 'שם מלא, מספר תעודת זהות, כתובת, מספר טלפון, הרכב משפחה, וצרכים מיוחדים.', en: 'Full name, ID number, address, phone number, family composition, and special needs.', ru: 'ФИО, номер удостоверения, адрес, телефон, состав семьи и особые потребности.' } },
      { q: { he: 'מה עושים אם אין מספר תעודת זהות?', en: 'What to do if there\'s no ID number?', ru: 'Что делать если нет номера удостоверения?' }, a: { he: 'ניתן לרשום עם פרטים חלופיים (שם, טלפון) ולעדכן את תעודת הזהות בהמשך.', en: 'You can register with alternative details (name, phone) and update the ID later.', ru: 'Можно зарегистрировать с альтернативными данными (имя, телефон) и обновить ID позже.' } },
      { q: { he: 'האם ניתן לעדכן נתונים אחרי ההזנה הראשונית?', en: 'Can data be updated after initial entry?', ru: 'Можно ли обновить данные после первоначального ввода?' }, a: { he: 'כן, ניתן לעדכן ולהשלים פרטים בכל שלב.', en: 'Yes, details can be updated and completed at any stage.', ru: 'Да, данные можно обновлять и дополнять на любом этапе.' } },
    ],
  },
  {
    id: 'access',
    title: { he: 'כניסה והרשאות למערכת \'יחד\'', en: 'YACHAD System Access & Permissions', ru: 'Доступ и разрешения системы ЯХАД' },
    questions: [
      { q: { he: 'איך נכנסים למערכת?', en: 'How do you log into the system?', ru: 'Как войти в систему?' }, a: { he: 'דרך ממשק אינטרנט ייעודי עם שם משתמש וסיסמה. ההרשאות ניתנות מראש על ידי מנהל המערכת.', en: 'Through a dedicated web interface with username and password. Permissions are granted in advance by the system administrator.', ru: 'Через специальный веб-интерфейс с логином и паролем. Разрешения предоставляются заранее администратором.' } },
      { q: { he: 'מה עושים אם שכחתי סיסמה?', en: 'What if I forgot my password?', ru: 'Что делать если забыли пароль?' }, a: { he: 'יש לפנות למנהל המערכת ברשות או לתמיכה הטכנית הארצית.', en: 'Contact the system administrator at the authority or the national technical support.', ru: 'Обратитесь к администратору системы или в национальную техподдержку.' } },
      { q: { he: 'האם ניתן להיכנס מטלפון נייד?', en: 'Can you log in from a mobile phone?', ru: 'Можно ли войти с мобильного?' }, a: { he: 'כן, המערכת זמינה גם מדפדפן בטלפון נייד.', en: 'Yes, the system is also available from a mobile browser.', ru: 'Да, система доступна и через мобильный браузер.' } },
      { q: { he: 'כמה רמות הרשאה יש?', en: 'How many permission levels are there?', ru: 'Сколько уровней доступа?' }, a: { he: 'יש מספר רמות – צופה, מזין, מנהל צוות ומנהל מערכת. ההרשאות מוגדרות לפי תפקיד.', en: 'There are several levels – viewer, data entry, team manager and system administrator. Permissions are defined by role.', ru: 'Несколько уровней — наблюдатель, оператор ввода, руководитель группы и администратор. Разрешения определяются по должности.' } },
      { q: { he: 'מי מקבל הרשאות?', en: 'Who receives permissions?', ru: 'Кто получает разрешения?' }, a: { he: 'עובדי מנהל רווחה, מנהלי מכלול, ובעלי תפקידים שהוגדרו מראש בתוכנית ההפעלה.', en: 'Welfare administration employees, division managers, and designated personnel as defined in the activation plan.', ru: 'Сотрудники управления соцобеспечения, руководители отделов и назначенные лица согласно плану активации.' } },
    ],
  },
  {
    id: 'reports',
    title: { he: 'נתונים ודוחות', en: 'Data & Reports', ru: 'Данные и отчёты' },
    questions: [
      { q: { he: 'אילו דוחות ניתן להפיק?', en: 'What reports can be generated?', ru: 'Какие отчёты можно создать?' }, a: { he: 'דוח תושבים מפונים, דוח שיבוצים למלונות, דוח צרכים מיוחדים, דוח נעדרים, ודוח תמונת מצב כללי.', en: 'Evacuated residents report, hotel placement report, special needs report, missing persons report, and general status report.', ru: 'Отчёт об эвакуированных, размещении в отелях, особых потребностях, пропавших и общий отчёт о ситуации.' } },
      { q: { he: 'מי יכול להפיק דוחות?', en: 'Who can generate reports?', ru: 'Кто может создавать отчёты?' }, a: { he: 'כל מי שיש לו הרשאת "מנהל צוות" ומעלה.', en: 'Anyone with "team manager" permission or higher.', ru: 'Любой с разрешением «руководитель группы» или выше.' } },
      { q: { he: 'באיזו תדירות יש לעדכן את תמונת המצב?', en: 'How often should the status be updated?', ru: 'Как часто обновлять ситуацию?' }, a: { he: 'בזמן אירוע פעיל – כל 15-30 דקות. לאחר מכן – לפי הצורך.', en: 'During an active event – every 15-30 minutes. Afterwards – as needed.', ru: 'Во время активного события — каждые 15-30 минут. После — по необходимости.' } },
      { q: { he: 'האם הנתונים מתעדכנים בזמן אמת?', en: 'Is data updated in real time?', ru: 'Обновляются ли данные в реальном времени?' }, a: { he: 'כן, כל הזנה של נתונים מתעדכנת מיידית ונראית לכל בעלי ההרשאות.', en: 'Yes, every data entry is updated immediately and visible to all authorized users.', ru: 'Да, каждый ввод данных обновляется мгновенно и виден всем уполномоченным пользователям.' } },
      { q: { he: 'איך משתפים דוחות עם גורמי חוץ?', en: 'How are reports shared with external agencies?', ru: 'Как делиться отчётами с внешними организациями?' }, a: { he: 'ניתן לייצא דוחות ל-PDF או Excel ולשלוח בצורה מאובטחת.', en: 'Reports can be exported to PDF or Excel and sent securely.', ru: 'Отчёты можно экспортировать в PDF или Excel и отправить безопасно.' } },
      { q: { he: 'מי אחראי על דיוק הנתונים?', en: 'Who is responsible for data accuracy?', ru: 'Кто отвечает за точность данных?' }, a: { he: 'כל גורם מזין אחראי על הנתונים שלו. מנהל המכלול אחראי על בקרה כללית.', en: 'Each data entry person is responsible for their data. The division manager is responsible for overall quality control.', ru: 'Каждый оператор отвечает за свои данные. Руководитель отдела контролирует качество в целом.' } },
    ],
  },
  {
    id: 'evacuation',
    title: { he: 'תהליך הפינוי', en: 'Evacuation Process', ru: 'Процесс эвакуации' },
    questions: [
      { q: { he: 'מי מחליט על פינוי?', en: 'Who decides on evacuation?', ru: 'Кто решает об эвакуации?' }, a: { he: 'פיקוד העורף בתיאום עם הרשות המקומית. ראש העיר מקבל את ההחלטה הסופית ברמה המקומית.', en: 'Home Front Command in coordination with the local authority. The mayor makes the final decision at the local level.', ru: 'Командование тыла в координации с местной администрацией. Мэр принимает окончательное решение на местном уровне.' } },
      { q: { he: 'לאן מפנים תושבים?', en: 'Where are residents evacuated to?', ru: 'Куда эвакуируют жителей?' }, a: { he: 'למלונות, מקלטים ציבוריים, או לרשויות אחרות – בהתאם להנחיות.', en: 'To hotels, public shelters, or other authorities – according to guidelines.', ru: 'В отели, общественные убежища или другие администрации — согласно указаниям.' } },
      { q: { he: 'מה עם תושבים שלא יכולים להתפנות בעצמם?', en: 'What about residents who cannot evacuate on their own?', ru: 'Как быть с теми, кто не может эвакуироваться самостоятельно?' }, a: { he: 'צוותי תל"ם ומד"א אחראים על פינוי אוכלוסיות פגיעות. יש רשימות מוכנות מראש.', en: 'TALEM teams and MDA are responsible for evacuating vulnerable populations. Pre-prepared lists exist.', ru: 'Команды ТАЛЕМ и МДА отвечают за эвакуацию уязвимого населения. Существуют подготовленные списки.' } },
      { q: { he: 'מה קורה עם חיות מחמד?', en: 'What about pets?', ru: 'Что с домашними животными?' }, a: { he: 'יש מלונות שמקבלים חיות מחמד. במקרים אחרים – תיאום עם השירות הווטרינרי העירוני.', en: 'Some hotels accept pets. Otherwise – coordination with the municipal veterinary service.', ru: 'Некоторые отели принимают животных. Иначе — координация с городской ветслужбой.' } },
      { q: { he: 'כמה זמן נמשך פינוי?', en: 'How long does evacuation last?', ru: 'Сколько длится эвакуация?' }, a: { he: 'תלוי בהיקף האירוע. ימים עד שבועות. הכל מנוהל ומתועד במערכת.', en: 'Depends on the event scope. Days to weeks. Everything is managed and documented in the system.', ru: 'Зависит от масштаба события. От дней до недель. Всё управляется и документируется в системе.' } },
    ],
  },
  {
    id: 'forms',
    title: { he: 'מילוי טופס דיווח', en: 'Filling Report Forms', ru: 'Заполнение форм отчётов' },
    questions: [
      { q: { he: 'אילו טפסים צריך למלא באירוע?', en: 'What forms need to be filled during an event?', ru: 'Какие формы нужно заполнять при ЧС?' }, a: { he: 'במידה ומערכת היחד עובדת והתושב מילא את טופס הקליטה אין צורך למלא טפסים ידניים. במידה ומערכת היחד אינה עובדת ולא ניתן למלא את טופס הקליטה הממוחשב אז ניתן להשתמש בטופס הקליטה העירוני. במידה וגם טופס הקליטה העירוני אינו פעיל יש למלא טפסים ידניים: טופס קליטה ידני, טופס שיבוץ לבתי מלון, טופס ניזוק.', en: 'If YACHAD works and the resident filled the intake form, no manual forms are needed. If YACHAD is down, use the municipal intake form. If that\'s also unavailable, fill manual forms: intake form, hotel placement form, damage form.', ru: 'Если ЯХАД работает и житель заполнил форму приёма — ручные формы не нужны. Если ЯХАД не работает, используйте городскую форму. Если и она недоступна — ручные формы: приём, размещение в отеле, ущерб.' } },
      { q: { he: 'היכן נמצאים הטפסים?', en: 'Where are the forms located?', ru: 'Где находятся формы?' }, a: { he: 'בתוך מערכת \'יחד\' או בקישור ישיר שמשותף על ידי המטה. חלק מהטפסים זמינים גם במערכת טפסי מס"ר.', en: 'Within the YACHAD system or via a direct link shared by HQ. Some forms are also available in the MSR forms system.', ru: 'В системе ЯХАД или по прямой ссылке от штаба. Некоторые формы доступны также в системе форм МСР.' } },
      { q: { he: 'אפשר למלא טופס ידני?', en: 'Can forms be filled manually?', ru: 'Можно заполнить форму вручную?' }, a: { he: 'כן, יש גרסאות מודפסות. אבל חובה להעלות למערכת בהקדם האפשרי.', en: 'Yes, printed versions exist. But they must be uploaded to the system ASAP.', ru: 'Да, есть печатные версии. Но их необходимо загрузить в систему как можно скорее.' } },
      { q: { he: 'מה עושים עם טפסים שלא מלאים עד הסוף?', en: 'What to do with incomplete forms?', ru: 'Что делать с незаполненными формами?' }, a: { he: 'מעבירים למנהל הצוות שידאג להשלמה. חשוב לא להשאיר טפסים חלקיים.', en: 'Pass to team manager for completion. It\'s important not to leave partial forms.', ru: 'Передайте руководителю группы для завершения. Важно не оставлять частично заполненные формы.' } },
      { q: { he: 'איך התושב ממלא דיווח על נזק לנכס?', en: 'How does a resident report property damage?', ru: 'Как житель сообщает о повреждении имущества?' }, a: { he: 'דרך טופס רשות המיסים – "דיווח תושבים שביתם ניזוק". הקישור מופיע בדף הבית.', en: 'Through the Tax Authority form – "Report for residents with damaged homes." Link appears on the home page.', ru: 'Через форму налоговой — «Отчёт жителей о повреждённом жилье». Ссылка на главной странице.' } },
    ],
  },
  {
    id: 'municipality',
    title: { he: 'תפקיד הרשות המקומית', en: 'Role of the Local Authority', ru: 'Роль местной администрации' },
    questions: [
      { q: { he: 'מה תפקיד הרשות המקומית באירוע חירום?', en: 'What is the local authority\'s role in an emergency?', ru: 'Какова роль местной администрации при ЧС?' }, a: { he: 'הרשות אחראית על רווחת התושבים – פינוי, קליטה, שיבוץ למלונות, מידע, סיוע רגשי, ותיאום מול גורמי חוץ.', en: 'The authority is responsible for residents\' welfare – evacuation, intake, hotel placement, information, emotional support, and external coordination.', ru: 'Администрация отвечает за благополучие жителей — эвакуация, приём, размещение, информирование, эмоциональная поддержка и координация.' } },
      { q: { he: 'מי מנהל את מכלול אוכלוסייה?', en: 'Who manages the Population Division?', ru: 'Кто управляет отделом населения?' }, a: { he: 'מנהלת מנהל הרווחה.', en: 'The Welfare Administration Director.', ru: 'Директор управления соцобеспечения.' } },
      { q: { he: 'איך הרשות מתממשקת עם צה"ל ופיקוד העורף?', en: 'How does the authority interface with IDF and Home Front Command?', ru: 'Как администрация взаимодействует с ЦАХАЛ и Командованием тыла?' }, a: { he: 'דרך קצין קישור ומטה מכלול אוכלוסייה – בדיווחים, ישיבות מצב ומערכות מידע משותפות.', en: 'Through a liaison officer and Population Division HQ – via reports, situation meetings and shared information systems.', ru: 'Через офицера связи и штаб отдела населения — через отчёты, совещания по обстановке и общие информационные системы.' } },
    ],
  },
  {
    id: 'support',
    title: { he: 'תמיכה וקישורים', en: 'Support & Links', ru: 'Поддержка и ссылки' },
    questions: [
      { q: { he: 'לאן לפנות בבעיה טכנית?', en: 'Where to turn for technical issues?', ru: 'Куда обращаться при технических проблемах?' }, a: { he: 'לתמיכה הטכנית של מערכת \'יחד\' – המספר מופיע במערכת עצמה ובחומרי ההדרכה.', en: 'To YACHAD system technical support – the number appears in the system itself and training materials.', ru: 'В техподдержку системы ЯХАД — номер указан в самой системе и учебных материалах.' } },
      { q: { he: 'איפה אפשר לקרוא עוד על הנהלים?', en: 'Where can I read more about procedures?', ru: 'Где можно прочитать о процедурах?' }, a: { he: 'בפורטל החירום של משרד הרווחה, ובחומרים שמופצים על ידי מנהל המכלול.', en: 'On the Ministry of Welfare emergency portal, and in materials distributed by the division manager.', ru: 'На портале ЧС Министерства соцобеспечения и в материалах руководителя отдела.' } },
      { q: { he: 'יש הדרכות למערכת?', en: 'Are there system training sessions?', ru: 'Есть ли обучение по системе?' }, a: { he: 'כן, יש הדרכות תקופתיות ותרגילי שולחן. מומלץ להשתתף באופן קבוע.', en: 'Yes, there are periodic training sessions and tabletop exercises. Regular participation is recommended.', ru: 'Да, проводятся периодические тренинги и настольные учения. Рекомендуется регулярное участие.' } },
    ],
  },
];

// ===== EMERGENCY PAGE: intake guide modal =====
export const intakeGuide: Record<string, T> = {
  modalTitle: { he: 'מדריך הפעלה: מערכת איתור תושבים בחירום', en: 'Activation Guide: Emergency Resident Tracking System', ru: 'Руководство по активации: Система поиска жителей в ЧС' },
  guideBtn: { he: 'מדריך', en: 'Guide', ru: 'Гид' },
  guideBtnSub: { he: 'למילוי', en: 'to fill', ru: 'для заполнения' },
  guideBtnTitle: { he: 'מדריך למילוי הטופס', en: 'Form filling guide', ru: 'Руководство по заполнению' },
  section1Title: { he: 'התחברות למערכת', en: 'System Login', ru: 'Вход в систему' },
  section1Item1: { he: 'הקלד את הסיסמה האישית שלך', en: 'Enter your personal password', ru: 'Введите свой личный пароль' },
  section1Item2: { he: 'דגש חשוב:', en: 'Important note:', ru: 'Важное примечание:' },
  section1Item2Rest: { he: 'לחץ על "דילוג על ההגדרה" כדי להיכנס מיד ללא אימות דוא"ל', en: 'Click "Skip setup" to enter immediately without email verification', ru: 'Нажмите «Пропустить настройку» для входа без подтверждения email' },
  section2Title: { he: 'גישה לאפליקציה', en: 'Accessing the Application', ru: 'Доступ к приложению' },
  section2Item1: { he: 'בתפריט התחתון, לחץ על סמל', en: 'In the bottom menu, click the', ru: 'В нижнем меню нажмите на значок' },
  section2Item1Bold: { he: 'All apps', en: 'All apps', ru: 'All apps' },
  section2Item1Paren: { he: '(כל האפליקציות)', en: '(all applications)', ru: '(все приложения)' },
  section2Item2: { he: 'מתוך הרשימה, בחר באפליקציית', en: 'From the list, select the', ru: 'Из списка выберите приложение' },
  section2Item2Bold: { he: '"איתור תושבים בחירום"', en: '"Emergency Resident Tracking"', ru: '«Поиск жителей в ЧС»' },
  section3Title: { he: 'ניהול ועדכון סטטוס תושב', en: 'Managing & Updating Resident Status', ru: 'Управление и обновление статуса жителя' },
  section3Gray: { he: 'אפור - טרם החל:', en: 'Gray - Not started:', ru: 'Серый — Не начат:' },
  section3GrayDesc: { he: 'פנייה חדשה או תושב שטרם נוצר עמו קשר', en: 'New referral or resident not yet contacted', ru: 'Новое обращение или житель, с которым ещё не связались' },
  section3Orange: { he: 'כתום - לא אותר:', en: 'Orange - Not found:', ru: 'Оранжевый — Не найден:' },
  section3OrangeDesc: { he: 'תושב שהוגדר כנעדר או שלא ניתן ליצור עמו קשר', en: 'Resident defined as missing or unreachable', ru: 'Житель, определённый как пропавший или недоступный' },
  section3Update: { he: 'לביצוע עדכון:', en: 'To update:', ru: 'Для обновления:' },
  section3UpdateBold: { he: 'לחיצה כפולה', en: 'double-click', ru: 'двойной клик' },
  section3UpdateRest: { he: 'על רשומת תושב תפתח את חלון העדכון המלא', en: 'on a resident record opens the full update window', ru: 'по записи жителя откроет полное окно обновления' },
  section3Fields: { he: 'ניתן לעדכן שם אירוע, כתובת פגיעה, סיבת המצב והוספת מלל חופשי לתיעוד', en: 'You can update event name, damage address, status reason and add free text for documentation', ru: 'Можно обновить название события, адрес повреждения, причину статуса и добавить свободный текст' },
  section3Save: { he: 'חובה:', en: 'Required:', ru: 'Обязательно:' },
  section3SaveRest: { he: 'הקפד ללחוץ על "שמור" בסיום כל עדכון', en: 'Make sure to click "Save" after every update', ru: 'Обязательно нажмите «Сохранить» после каждого обновления' },
  section4Title: { he: 'איתור והוספת תושב חדש', en: 'Finding & Adding a New Resident', ru: 'Поиск и добавление нового жителя' },
  section4Search: { he: 'חיפוש:', en: 'Search:', ru: 'Поиск:' },
  section4SearchRest: { he: 'לחץ על תפריט "3 השורות", עבור ללשונית "פניות" וחפש לפי שם', en: 'Click the "3 lines" menu, go to the "Referrals" tab and search by name', ru: 'Нажмите меню «3 линии», перейдите на вкладку «Обращения» и ищите по имени' },
  section4Add: { he: 'הוספת תושב חסר:', en: 'Adding a missing resident:', ru: 'Добавление отсутствующего жителя:' },
  section4AddRest: { he: 'אם התושב אינו מופיע, פתח את "טופס אינטייק מרכז משפחות"', en: 'If the resident doesn\'t appear, open the "Family Center Intake Form"', ru: 'Если житель не найден, откройте «Форму приёма семейного центра»' },
  section4Details: { he: 'הזן פרטים: שם מלא, תעודת זהות ומספר נייד', en: 'Enter details: full name, ID number and mobile number', ru: 'Введите данные: ФИО, номер удостоверения и мобильный' },
  section4Return: { he: 'לאחר השליחה, חזור לאפליקציה המרכזית להמשך מעקב', en: 'After submitting, return to the main app to continue tracking', ru: 'После отправки вернитесь в основное приложение для продолжения отслеживания' },
  clickHere: { he: '– לחץ כאן', en: '– click here', ru: '– нажмите здесь' },
};

// ===== ACCESSIBILITY PAGE: full content =====
export const accessibilityContent: Record<string, T> = {
  commitmentP1: { he: 'אתר זה פועל להנגשת תכניו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, בהתאם לתקן הישראלי ת"י 5568, הנחיות WCAG 2.1 ברמה AA, וחוק שוויון זכויות לאנשים עם מוגבלות, תשנ"ח-1998, ותקנות הנגישות לשירות (התאמות נגישות לשירות), תשע"ג-2013.', en: 'This website strives to make its content accessible to the entire population, including people with disabilities, in accordance with Israeli Standard SI 5568, WCAG 2.1 Level AA guidelines, the Equal Rights for Persons with Disabilities Law 1998, and the Accessibility Regulations for Services 2013.', ru: 'Этот сайт стремится сделать контент доступным для всего населения, включая людей с ограниченными возможностями, в соответствии с израильским стандартом SI 5568, руководством WCAG 2.1 уровня AA, Законом о равных правах для лиц с инвалидностью 1998 и Правилами доступности услуг 2013.' },
  commitmentP2: { he: 'אני פועל באופן שוטף לשיפור חוויית הגלישה עבור כלל המשתמשים ומשקיע מאמצים ניכרים להבטיח שהאתר יהיה נגיש ושוויוני ככל האפשר.', en: 'I continuously work to improve the browsing experience for all users and invest significant effort to ensure the website is as accessible and equitable as possible.', ru: 'Я постоянно работаю над улучшением опыта просмотра для всех пользователей и прилагаю значительные усилия для обеспечения максимальной доступности и равенства.' },
  inProgressIntro: { he: 'אנו מודעים לכך שחלק מהתכנים באתר טרם הונגשו במלואם. אנו עובדים על הנגשתם:', en: 'We are aware that some content on the site has not yet been fully made accessible. We are working on it:', ru: 'Мы знаем, что часть контента на сайте ещё не полностью доступна. Мы работаем над этим:' },
  contactIntro: { he: 'נתקלתם בבעיית נגישות? צרו קשר עם מפתח האתר. אשתדל לטפל בפנייתכם בהקדם האפשרי.', en: 'Encountered an accessibility issue? Contact the site developer. I will try to address your inquiry as soon as possible.', ru: 'Столкнулись с проблемой доступности? Свяжитесь с разработчиком сайта. Я постараюсь рассмотреть ваш запрос как можно скорее.' },
  contactPerson: { he: 'איש קשר', en: 'Contact person', ru: 'Контактное лицо' },
  email: { he: 'דוא"ל', en: 'Email', ru: 'Эл. почта' },
  legalLaw: { he: 'חוק שוויון זכויות לאנשים עם מוגבלות (תשנ"ח-1998):', en: 'Equal Rights for Persons with Disabilities Law (1998):', ru: 'Закон о равных правах лиц с инвалидностью (1998):' },
  legalLawDesc: { he: 'מחייב גופים ציבוריים להנגיש את שירותיהם המקוונים. תקנה 35 קובעת כי אתר אינטרנט של רשות ציבורית יהיה נגיש בהתאם להנחיות תקן ת"י 5568.', en: 'Requires public bodies to make their online services accessible. Regulation 35 states that a public authority website must be accessible according to SI 5568 guidelines.', ru: 'Обязывает государственные органы обеспечить доступность онлайн-услуг. Правило 35 гласит, что сайт государственного органа должен быть доступен согласно стандарту SI 5568.' },
  legalStandard: { he: 'תקן ישראלי ת"י 5568:', en: 'Israeli Standard SI 5568:', ru: 'Израильский стандарт SI 5568:' },
  legalStandardDesc: { he: 'מבוסס על הנחיות WCAG (Web Content Accessibility Guidelines) של ארגון W3C ברמה AA. התקן מפרט דרישות טכניות להנגשת תוכן מקוון.', en: 'Based on the W3C WCAG (Web Content Accessibility Guidelines) at Level AA. The standard specifies technical requirements for making online content accessible.', ru: 'Основан на руководстве W3C WCAG уровня AA. Стандарт устанавливает технические требования к доступности онлайн-контента.' },
  legalDeclaration: { he: 'תקנה 91 – הצהרת נגישות:', en: 'Regulation 91 – Accessibility Declaration:', ru: 'Правило 91 — Декларация доступности:' },
  legalDeclarationDesc: { he: 'מחייבת פרסום הצהרת נגישות באתר הכוללת פירוט ההתאמות שבוצעו, תחומים שטרם הונגשו, ופרטי יצירת קשר עם רכז הנגישות.', en: 'Requires publishing an accessibility declaration on the site detailing accommodations made, areas not yet accessible, and contact details for the accessibility coordinator.', ru: 'Требует публикации декларации доступности с описанием выполненных адаптаций, ещё недоступных областей и контактных данных координатора.' },
};

export const accessibleFeatures = [
  { he: 'תמיכה בטכנולוגיות מסייעות (קוראי מסך, תצוגה מוגדלת)', en: 'Support for assistive technologies (screen readers, magnified display)', ru: 'Поддержка вспомогательных технологий (экранные чтецы, увеличенный дисплей)' },
  { he: 'ניווט מלא באמצעות מקלדת בלבד', en: 'Full keyboard-only navigation', ru: 'Полная навигация только с клавиатуры' },
  { he: 'ניגודיות צבעים בהתאם לתקן WCAG AA', en: 'Color contrast according to WCAG AA standard', ru: 'Цветовой контраст согласно стандарту WCAG AA' },
  { he: 'טקסט חלופי לכל התמונות והאלמנטים הגרפיים', en: 'Alt text for all images and graphic elements', ru: 'Альтернативный текст для всех изображений и графики' },
  { he: 'מבנה סמנטי תקין עם כותרות היררכיות', en: 'Proper semantic structure with hierarchical headings', ru: 'Правильная семантическая структура с иерархическими заголовками' },
  { he: 'תמיכה בשינוי גודל גופנים ללא פגיעה בפריסה', en: 'Support for font size changes without layout impact', ru: 'Поддержка изменения размера шрифта без нарушения макета' },
  { he: 'ניווט עקבי ואחיד בכל דפי האתר', en: 'Consistent navigation across all site pages', ru: 'Единообразная навигация по всем страницам сайта' },
  { he: 'קישורים בעלי טקסט מתאר ברור', en: 'Links with clear descriptive text', ru: 'Ссылки с чётким описательным текстом' },
  { he: 'טפסים עם תוויות ברורות והנחיות שגיאה', en: 'Forms with clear labels and error guidance', ru: 'Формы с понятными метками и указаниями об ошибках' },
  { he: 'תמיכה מלאה בשפה העברית ובכיוון RTL', en: 'Full support for Hebrew language and RTL direction', ru: 'Полная поддержка иврита и направления RTL' },
];

export const notYetAccessible = [
  { he: 'חלק מקובצי PDF המצורפים עשויים שלא להיות נגישים במלואם', en: 'Some attached PDF files may not be fully accessible', ru: 'Некоторые прикреплённые PDF-файлы могут быть не полностью доступны' },
  { he: 'תוכן וידאו ייתכן ואינו כולל כתוביות בכל המקרים', en: 'Video content may not include subtitles in all cases', ru: 'Видеоконтент может не содержать субтитры во всех случаях' },
  { he: 'מפות אינטראקטיביות עשויות לדרוש התאמות נוספות', en: 'Interactive maps may require additional adjustments', ru: 'Интерактивные карты могут потребовать дополнительных адаптаций' },
];

// ===== ORGCHART PAGE: unit titles and roles =====
export const orgchartUnits: Record<string, T> = {
  'מטה חירום עירוני': { he: 'מטה חירום עירוני', en: 'Municipal Emergency HQ', ru: 'Муниципальный штаб ЧС' },
  'מטה מכלול אוכלוסייה': { he: 'מטה מכלול אוכלוסייה', en: 'Population Division HQ', ru: 'Штаб отдела населения' },
  'מטה צוותי התערבות': { he: 'מטה צוותי התערבות', en: 'Intervention Teams HQ', ru: 'Штаб групп вмешательства' },
  'רובע א׳': { he: 'רובע א׳', en: 'District A', ru: 'Район А' },
  'רובע ב׳': { he: 'רובע ב׳', en: 'District B', ru: 'Район Б' },
  'רובע ג׳': { he: 'רובע ג׳', en: 'District C', ru: 'Район В' },
  'רובע ד׳': { he: 'רובע ד׳', en: 'District D', ru: 'Район Г' },
  'רובע ה׳': { he: 'רובע ה׳', en: 'District E', ru: 'Район Д' },
  'מרכז משפחות (מס"ר)': { he: 'מרכז משפחות (מס"ר)', en: 'Family Center (MSR)', ru: 'Семейный центр (МСР)' },
  'מתחם המתנה': { he: 'מתחם המתנה', en: 'Waiting Area', ru: 'Зона ожидания' },
  'מתחם נעדרים': { he: 'מתחם נעדרים', en: 'Missing Persons Area', ru: 'Зона пропавших' },
  'מתחם קליטה': { he: 'מתחם קליטה', en: 'Intake Area', ru: 'Зона приёма' },
  'מתחם שיבוץ': { he: 'מתחם שיבוץ', en: 'Placement Area', ru: 'Зона размещения' },
  'מטה מל"מ': { he: 'מטה מל"מ', en: 'MALAM HQ', ru: 'Штаб МАЛАМ' },
  'מטה רגשי': { he: 'מטה רגשי', en: 'Emotional Support HQ', ru: 'Штаб эмоциональной поддержки' },
  'צוות קו פתוח ומידע': { he: 'צוות קו פתוח ומידע', en: 'Open Line & Information Team', ru: 'Группа горячей линии и информации' },
  'קישור בית חולים': { he: 'קישור בית חולים', en: 'Hospital Liaison', ru: 'Связь с больницей' },
  'מטה חללים (ליווי מש׳ + תר"ח)': { he: 'מטה חללים (ליווי מש׳ + תר"ח)', en: 'Casualties HQ (Family Escort + Donation)', ru: 'Штаб погибших (сопровождение семей + пожертвования)' },
  'מטה אוכלוסיות מיוחדות': { he: 'מטה אוכלוסיות מיוחדות', en: 'Special Populations HQ', ru: 'Штаб особых групп населения' },
  'מטה קליטת אוכלוסייה': { he: 'מטה קליטת אוכלוסייה', en: 'Population Intake HQ', ru: 'Штаб приёма населения' },
  'מטה תפעול ומתנדבים': { he: 'מטה תפעול ומתנדבים', en: 'Operations & Volunteers HQ', ru: 'Штаб операций и волонтёров' },
  'מטה אזרחים ותיקים': { he: 'מטה אזרחים ותיקים', en: 'Senior Citizens HQ', ru: 'Штаб пожилых граждан' },
  'מטה קליטת עלייה': { he: 'מטה קליטת עלייה', en: 'Immigration Absorption HQ', ru: 'Штаб абсорбции репатриантов' },
  'מטה תיירות': { he: 'מטה תיירות', en: 'Tourism HQ', ru: 'Штаб туризма' },
  'מטה בריאות': { he: 'מטה בריאות', en: 'Health HQ', ru: 'Штаб здравоохранения' },
};

export const orgchartRoles: Record<string, T> = {
  'ראש מטה': { he: 'ראש מטה', en: 'Head of HQ', ru: 'Руководитель штаба' },
  'סגן': { he: 'סגן', en: 'Deputy', ru: 'Заместитель' },
  'רכז חירום': { he: 'רכז חירום', en: 'Emergency Coordinator', ru: 'Координатор ЧС' },
  'שפ"ח': { he: 'שפ"ח', en: 'Psychological Services', ru: 'Психологическая служба' },
  'סגן + לוגיסטיקה': { he: 'סגן + לוגיסטיקה', en: 'Deputy + Logistics', ru: 'Заместитель + логистика' },
  'חמ"ל מתנדבים': { he: 'חמ"ל מתנדבים', en: 'Volunteer Operations Center', ru: 'Центр операций волонтёров' },
  'ראש מטה (א׳)': { he: 'ראש מטה (א׳)', en: 'Head of HQ (A)', ru: 'Руководитель штаба (А)' },
  'סגן (א׳)': { he: 'סגן (א׳)', en: 'Deputy (A)', ru: 'Заместитель (А)' },
  'ראש מטה (ב׳)': { he: 'ראש מטה (ב׳)', en: 'Head of HQ (B)', ru: 'Руководитель штаба (Б)' },
  'סגן (ב׳)': { he: 'סגן (ב׳)', en: 'Deputy (B)', ru: 'Заместитель (Б)' },
};

export const orgchartSupportUnits: Record<string, T> = {
  'מיון פניות': { he: 'מיון פניות', en: 'Referral Sorting', ru: 'Сортировка обращений' },
  'מערכות מידע': { he: 'מערכות מידע', en: 'Information Systems', ru: 'Информационные системы' },
  'פרסום ומידע': { he: 'פרסום ומידע', en: 'Publicity & Information', ru: 'Публикации и информация' },
  'משאבי אנוש': { he: 'משאבי אנוש', en: 'Human Resources', ru: 'Кадровые ресурсы' },
  'מרכז ט.ל.י.ה': { he: 'מרכז ט.ל.י.ה', en: 'TLYA Center', ru: 'Центр ТЛИЯ' },
};
