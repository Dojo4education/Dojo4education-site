const SUPPORTED_LANGS = ['en', 'ru', 'ko'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'dojo4education_lang';

const t = {
  en: {
    meta: {
      indexTitle: 'Dojo4Education — AI tools for education',
      indexDescription: 'AI-powered mini-apps and training tools for academic preparation, oral answers, and skill development.',
      thesisTitle: 'ThesisAudit — AI oral defense trainer',
      thesisDescription: 'ThesisAudit helps students rehearse oral academic defense with AI-generated questions, voice answers, and structured feedback.'
    },
    common: {
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      soon: 'soon',
      thesisAudit: 'ThesisAudit',
      lingvaPulse: 'LingvaPulse',
      footer: '© 2026 Dojo4Education · Powered by AI',
      telegram: 'Telegram community'
    },
    index: {
      eyebrow: 'AI tools for education',
      title: 'Practice skills with <span class="accent">AI-powered trainers</span>',
      subtitle: 'Dojo4Education develops compact AI mini-apps that help learners prepare, explain, answer, and improve practical academic skills.',
      ctaProducts: 'Explore products',
      ctaThesis: 'View ThesisAudit',
      visualTitle: 'Mini-apps and training tools for skill development',
      productsLabel: '// products',
      productsTitle: 'Focused tools instead of generic AI chats',
      thesisDesc: 'AI trainer for thesis defense and oral academic preparation. It generates questions, accepts voice answers, analyzes reasoning, and is available on Google Play.',
      lingvaDesc: 'AI tools for language learning: smart drills, speech analysis, and personalized progress tracking.',
      available: 'available',
      aboutLabel: '// business profile',
      aboutTitle: 'Small software business, focused on education technology',
      aboutText: 'Dojo4Education is a registered software development project in South Korea. The goal is to build practical AI tools for students, learners, and educators — starting with oral preparation and skill training.',
      businessName: '<strong>Business name:</strong> Dojo4Education',
      businessNameKr: '<strong>Registered Korean name:</strong> 도조포에듀케이션',
      businessType: '<strong>Business type:</strong> Software development',
      businessFocus: '<strong>Focus:</strong> AI tools for education and skill development',
      roadmapTitle: 'Roadmap',
      roadmapText: 'The current focus is ThesisAudit. LingvaPulse and additional learning tools are planned as the product line expands.',
      contactLabel: '// contact',
      contactTitle: 'Business inquiries and product updates',
      contactText: 'For business communication, partnership inquiries, or product questions, use email. Community updates are available through Telegram.',
      emailButton: 'Contact by email',
      telegramButton: 'Open Telegram'
    },
    thesis: {
      eyebrow: 'AI oral defense trainer',
      title: 'Knowing is one thing.<br><span class="grad">Explaining it aloud is another.</span>',
      lead: 'ThesisAudit simulates an academic defense: it asks questions based on your document, accepts voice answers, and shows where your reasoning becomes weak before it happens in front of a committee.',
      insight: 'A text may feel clear while reading. But when you try to answer aloud, gaps appear in <strong>logic, terminology, and argumentation</strong>. ThesisAudit helps find them early.',
      download: 'Get it on Google Play',
      androidNote: 'Android app available on Google Play',
      useLabel: '// use cases',
      useTitle: 'One tool for multiple oral formats',
      uc1Name: 'Thesis defense',
      uc1Desc: 'The main scenario. Questions about topic, methodology, conclusions, and practical value — similar to a real committee.',
      uc1Badge: 'main scenario',
      uc2Name: 'Course paper',
      uc2Desc: 'Practice answers about the research topic, structure, conclusions, and source selection.',
      uc3Name: 'Lab report',
      uc3Desc: 'Check whether you can explain not only the practical part, but also the theory behind it.',
      uc4Name: 'Essay or report',
      uc4Desc: 'Rehearse topic explanation, argumentation, and answers to follow-up questions from a teacher.',
      uc5Name: 'Seminars',
      uc5Desc: 'Test readiness to discuss class topics and participate with clear arguments.',
      uc6Name: 'Exams and oral tests',
      uc6Desc: 'Model questions from learning materials and train oral answers under realistic pressure.',
      stepsLabel: '// how it works',
      stepsTitle: 'A structured rehearsal, not just random questions',
      step1Title: 'Upload your material',
      step1Desc: 'Thesis, course paper, report, lecture notes, textbook chapters — any preparation document in .docx format.',
      step2Title: 'Receive questions',
      step2Desc: 'AI analyzes the material and generates questions about the topic, methodology, conclusions, practical value, and key terms.',
      step3Title: 'Answer by voice',
      step3Desc: 'Answer aloud as you would during a real defense. Voice answers are transcribed and analyzed.',
      step4Title: 'Follow-up questions',
      step4Desc: 'Based on your answers, the system asks additional questions to test depth of understanding and argument logic.',
      step5Title: 'Get the final report',
      step5Desc: 'A detailed report with readiness level, strengths, weak points, and specific areas to improve before the real defense.',
      valueLabel: '// value',
      valueTitle: 'A safe space for real rehearsal',
      value1Title: 'Find weak points early',
      value1Text: 'Detect gaps in understanding before the real conversation with a teacher or committee.',
      value2Title: 'Train oral answers',
      value2Text: 'Practice explaining aloud — a different skill than simply knowing the material.',
      value3Title: 'Build argumentation',
      value3Text: 'Improve the logic of explanation, the connection between theory and practice, and the justification of conclusions.',
      value4Title: 'Reduce stress',
      value4Text: 'When you have already rehearsed a similar situation, the real defense feels less unknown.',
      creditsLabel: '// credits and access',
      creditsTitle: 'Start for free',
      credit1Val: '20',
      credit1Text: 'free Dojocoins after authorization',
      credit2Val: '1,000',
      credit2Text: 'words per 1 Dojocoin, rounded up',
      credit3Val: 'Google Play',
      credit3Text: 'Android app distribution channel',
      notice: 'Dojocoins are used to measure document processing volume. The current free start gives 20 Dojocoins, and 1 Dojocoin covers 1,000 words with rounding up.'
    }
  },
  ru: {
    meta: {
      indexTitle: 'Dojo4Education — AI-инструменты для образования',
      indexDescription: 'AI-мини-приложения и тренажёры для академической подготовки, устных ответов и развития навыков.',
      thesisTitle: 'ThesisAudit — AI-тренажёр устной подготовки',
      thesisDescription: 'ThesisAudit помогает репетировать устную защиту с AI-вопросами, голосовыми ответами и структурированной обратной связью.'
    },
    common: {
      products: 'Продукты',
      about: 'О проекте',
      contact: 'Контакты',
      soon: 'скоро',
      thesisAudit: 'ThesisAudit',
      lingvaPulse: 'LingvaPulse',
      footer: '© 2026 Dojo4Education · Powered by AI',
      telegram: 'Telegram-сообщество'
    },
    index: {
      eyebrow: 'AI-инструменты для образования',
      title: 'Развивайте навыки с помощью <span class="accent">AI-тренажёров</span>',
      subtitle: 'Dojo4Education создаёт компактные AI-мини-приложения, которые помогают учиться, готовиться, объяснять вслух и развивать практические академические навыки.',
      ctaProducts: 'Смотреть продукты',
      ctaThesis: 'Открыть ThesisAudit',
      visualTitle: 'Мини-приложения и тренажёры для развития навыков',
      productsLabel: '// продукты',
      productsTitle: 'Фокусные инструменты вместо универсальных AI-чатов',
      thesisDesc: 'AI-тренажёр защиты диплома и устной академической подготовки. Генерирует вопросы, принимает голосовые ответы, анализирует аргументацию и доступен в Google Play.',
      lingvaDesc: 'AI-инструменты для изучения языков: умные тренировки, анализ речи и персональный прогресс.',
      available: 'доступно',
      aboutLabel: '// бизнес-профиль',
      aboutTitle: 'Небольшой software-бизнес с фокусом на EdTech',
      aboutText: 'Dojo4Education — зарегистрированный в Южной Корее проект по разработке программного обеспечения. Цель — создавать практические AI-инструменты для студентов, учащихся и преподавателей, начиная с устной подготовки и тренировки навыков.',
      businessName: '<strong>Название бизнеса:</strong> Dojo4Education',
      businessNameKr: '<strong>Зарегистрированное корейское название:</strong> 도조포에듀케이션',
      businessType: '<strong>Вид деятельности:</strong> разработка программного обеспечения',
      businessFocus: '<strong>Фокус:</strong> AI-инструменты для образования и развития навыков',
      roadmapTitle: 'Дорожная карта',
      roadmapText: 'Текущий фокус — ThesisAudit. LingvaPulse и дополнительные учебные инструменты планируются по мере развития продуктовой линейки.',
      contactLabel: '// контакты',
      contactTitle: 'Деловые запросы и новости продукта',
      contactText: 'Для деловой коммуникации, партнёрских вопросов и вопросов по продукту используйте email. Обновления сообщества доступны через Telegram.',
      emailButton: 'Написать по email',
      telegramButton: 'Открыть Telegram'
    },
    thesis: {
      eyebrow: 'AI-тренажёр устной подготовки',
      title: 'Знать — это одно.<br><span class="grad">Объяснить вслух — другое.</span>',
      lead: 'ThesisAudit моделирует академическую защиту: задаёт вопросы по вашему документу, принимает голосовые ответы и показывает, где аргументация слабеет — до того, как это произойдёт перед комиссией.',
      insight: 'Материал может казаться понятным при чтении. Но при попытке ответить вслух обнаруживаются пробелы в <strong>логике, терминологии и аргументации</strong>. ThesisAudit помогает найти их заранее.',
      download: 'Открыть в Google Play',
      androidNote: 'Android-приложение доступно в Google Play',
      useLabel: '// сценарии использования',
      useTitle: 'Один инструмент для разных устных форматов',
      uc1Name: 'Защита диплома',
      uc1Desc: 'Главный сценарий. Вопросы по теме, методологии, выводам и практической значимости — как от настоящей комиссии.',
      uc1Badge: 'основной сценарий',
      uc2Name: 'Курсовая работа',
      uc2Desc: 'Отработайте ответы по теме исследования, структуре работы, обоснованию выводов и выбранным источникам.',
      uc3Name: 'Лабораторная работа',
      uc3Desc: 'Проверьте, способны ли вы объяснить не только практическую часть, но и лежащую в основе теорию.',
      uc4Name: 'Реферат или доклад',
      uc4Desc: 'Репетиция изложения темы, аргументации и ответов на уточняющие вопросы преподавателя.',
      uc5Name: 'Семинары',
      uc5Desc: 'Проверьте готовность к обсуждению тем и аргументированному участию в занятии.',
      uc6Name: 'Зачёты и экзамены',
      uc6Desc: 'Моделирование вопросов по учебным материалам и тренировка устных ответов в реалистичных условиях.',
      stepsLabel: '// как это работает',
      stepsTitle: 'Структурированная репетиция, а не просто набор вопросов',
      step1Title: 'Загружаете материал',
      step1Desc: 'Диплом, курсовая, реферат, конспекты лекций, главы учебника — любой документ для подготовки в формате .docx.',
      step2Title: 'Получаете вопросы',
      step2Desc: 'AI анализирует материал и формирует вопросы по теме, методологии, выводам, практической значимости и ключевым понятиям.',
      step3Title: 'Отвечаете голосом',
      step3Desc: 'Отвечаете устно — как на реальной защите. Голосовые ответы транскрибируются и анализируются системой.',
      step4Title: 'Уточняющие вопросы',
      step4Desc: 'На основе ваших ответов система задаёт дополнительные вопросы, проверяя глубину понимания и логику аргументации.',
      step5Title: 'Получаете итоговый отчёт',
      step5Desc: 'Детальный отчёт: уровень готовности, сильные и слабые стороны, конкретные зоны для доработки перед реальной защитой.',
      valueLabel: '// ценность',
      valueTitle: 'Безопасная среда для настоящей репетиции',
      value1Title: 'Видите слабые места заранее',
      value1Text: 'Находите пробелы в понимании до реального разговора с преподавателем или комиссией.',
      value2Title: 'Тренируете устный ответ',
      value2Text: 'Учитесь объяснять вслух — это другой навык, чем просто знать материал.',
      value3Title: 'Выстраиваете аргументацию',
      value3Text: 'Прорабатываете логику изложения, связь теории с практикой и обоснование выводов.',
      value4Title: 'Снижаете стресс',
      value4Text: 'Когда вы уже репетировали похожую ситуацию, реальная защита перестаёт быть неизвестностью.',
      creditsLabel: '// кредиты и доступ',
      creditsTitle: 'Начните бесплатно',
      credit1Val: '20',
      credit1Text: 'бесплатных Dojocoins после авторизации',
      credit2Val: '1 000',
      credit2Text: 'слов на 1 Dojocoin, с округлением вверх',
      credit3Val: 'Google Play',
      credit3Text: 'канал распространения Android-приложения',
      notice: 'Dojocoins используются для измерения объёма обработки документов. Сейчас при старте выдаётся 20 Dojocoins, а 1 Dojocoin покрывает 1 000 слов с округлением вверх.'
    }
  },
  ko: {
    meta: {
      indexTitle: 'Dojo4Education — 교육용 AI 도구',
      indexDescription: '학업 준비, 구두 답변, 기술 개발을 위한 AI 기반 미니 앱과 트레이닝 도구입니다.',
      thesisTitle: 'ThesisAudit — AI 구두 발표 훈련 도구',
      thesisDescription: 'ThesisAudit은 AI 질문, 음성 답변, 구조화된 피드백으로 학업 발표와 논문 방어를 연습하도록 돕습니다.'
    },
    common: {
      products: '제품',
      about: '소개',
      contact: '문의',
      soon: '준비 중',
      thesisAudit: 'ThesisAudit',
      lingvaPulse: 'LingvaPulse',
      footer: '© 2026 Dojo4Education · Powered by AI',
      telegram: 'Telegram 커뮤니티'
    },
    index: {
      eyebrow: '교육용 AI 도구',
      title: '<span class="accent">AI 훈련 도구</span>로 학습 역량을 연습하세요',
      subtitle: 'Dojo4Education은 학습자가 준비하고, 설명하고, 답변하며, 실질적인 학업 역량을 발전시킬 수 있도록 돕는 AI 미니 앱을 개발합니다.',
      ctaProducts: '제품 보기',
      ctaThesis: 'ThesisAudit 보기',
      visualTitle: '역량 개발을 위한 미니 앱과 훈련 도구',
      productsLabel: '// 제품',
      productsTitle: '일반 AI 채팅이 아닌 목적 중심 도구',
      thesisDesc: '논문 방어와 구두 학업 준비를 위한 AI 훈련 도구입니다. 질문을 생성하고, 음성 답변을 받으며, 논리 전개를 분석하고 Google Play에서 이용할 수 있습니다.',
      lingvaDesc: '언어 학습을 위한 AI 도구입니다. 스마트 훈련, 발화 분석, 개인별 진행 상황 추적을 제공합니다.',
      available: '사용 가능',
      aboutLabel: '// 비즈니스 프로필',
      aboutTitle: '교육 기술에 집중하는 소규모 소프트웨어 비즈니스',
      aboutText: 'Dojo4Education은 한국에 등록된 소프트웨어 개발 프로젝트입니다. 학생, 학습자, 교육자를 위한 실용적인 AI 도구를 만드는 것을 목표로 하며, 구두 준비와 역량 훈련부터 시작합니다.',
      businessName: '<strong>비즈니스명:</strong> Dojo4Education',
      businessNameKr: '<strong>한국 등록 상호:</strong> 도조포에듀케이션',
      businessType: '<strong>업종:</strong> 소프트웨어 개발',
      businessFocus: '<strong>분야:</strong> 교육 및 역량 개발을 위한 AI 도구',
      roadmapTitle: '로드맵',
      roadmapText: '현재 초점은 ThesisAudit입니다. 제품 라인이 확장되면서 LingvaPulse와 추가 학습 도구가 계획되어 있습니다.',
      contactLabel: '// 문의',
      contactTitle: '비즈니스 문의 및 제품 업데이트',
      contactText: '비즈니스 커뮤니케이션, 파트너십 문의 또는 제품 관련 질문은 이메일을 이용해 주세요. 커뮤니티 업데이트는 Telegram에서 확인할 수 있습니다.',
      emailButton: '이메일 문의',
      telegramButton: 'Telegram 열기'
    },
    thesis: {
      eyebrow: 'AI 구두 발표 훈련 도구',
      title: '아는 것과<br><span class="grad">소리 내어 설명하는 것은 다릅니다.</span>',
      lead: 'ThesisAudit은 학업 발표 상황을 시뮬레이션합니다. 문서를 기반으로 질문을 생성하고, 음성 답변을 받으며, 실제 심사 전에 논리의 약점을 보여줍니다.',
      insight: '글로 읽을 때는 명확해 보이는 내용도, 소리 내어 답하려고 하면 <strong>논리, 용어, 논증</strong>의 빈틈이 드러납니다. ThesisAudit은 이를 미리 찾도록 돕습니다.',
      download: 'Google Play에서 열기',
      androidNote: 'Android 앱은 Google Play에서 이용 가능합니다',
      useLabel: '// 활용 사례',
      useTitle: '여러 구두 평가 형식에 사용할 수 있는 도구',
      uc1Name: '논문 방어',
      uc1Desc: '주요 시나리오입니다. 주제, 방법론, 결론, 실무적 가치에 대한 질문을 실제 위원회처럼 연습합니다.',
      uc1Badge: '주요 시나리오',
      uc2Name: '과제 보고서',
      uc2Desc: '연구 주제, 구성, 결론, 참고 자료 선택에 대한 답변을 연습합니다.',
      uc3Name: '실험 보고서',
      uc3Desc: '실습 내용뿐 아니라 그 기반이 되는 이론까지 설명할 수 있는지 확인합니다.',
      uc4Name: '리포트 또는 발표',
      uc4Desc: '주제 설명, 논증, 교사의 추가 질문에 대한 답변을 연습합니다.',
      uc5Name: '세미나',
      uc5Desc: '수업 주제에 대해 토론하고 명확한 근거로 참여할 준비가 되었는지 확인합니다.',
      uc6Name: '시험 및 구두 평가',
      uc6Desc: '학습 자료 기반 질문을 만들고 실제 상황에 가까운 압박 속에서 구두 답변을 훈련합니다.',
      stepsLabel: '// 작동 방식',
      stepsTitle: '무작위 질문이 아닌 구조화된 리허설',
      step1Title: '자료 업로드',
      step1Desc: '논문, 과제, 보고서, 강의 노트, 교재 장 등 .docx 형식의 준비 자료를 업로드합니다.',
      step2Title: '질문 받기',
      step2Desc: 'AI가 자료를 분석해 주제, 방법론, 결론, 실무적 가치, 핵심 용어에 대한 질문을 생성합니다.',
      step3Title: '음성으로 답변',
      step3Desc: '실제 발표처럼 소리 내어 답변합니다. 음성 답변은 텍스트로 변환되고 분석됩니다.',
      step4Title: '추가 질문',
      step4Desc: '답변을 바탕으로 시스템이 추가 질문을 제시해 이해 깊이와 논리 전개를 점검합니다.',
      step5Title: '최종 보고서 받기',
      step5Desc: '준비 수준, 강점, 약점, 실제 발표 전 개선해야 할 구체적인 영역을 담은 상세 보고서를 받습니다.',
      valueLabel: '// 가치',
      valueTitle: '실전 리허설을 위한 안전한 환경',
      value1Title: '약점을 미리 발견',
      value1Text: '교사나 위원회와의 실제 대화 전에 이해의 빈틈을 찾습니다.',
      value2Title: '구두 답변 훈련',
      value2Text: '소리 내어 설명하는 연습을 합니다. 이는 단순히 아는 것과는 다른 능력입니다.',
      value3Title: '논리 구성 강화',
      value3Text: '설명의 흐름, 이론과 실제의 연결, 결론의 근거를 개선합니다.',
      value4Title: '스트레스 감소',
      value4Text: '비슷한 상황을 이미 연습했다면 실제 발표는 덜 낯설게 느껴집니다.',
      creditsLabel: '// 크레딧 및 이용 조건',
      creditsTitle: '무료로 시작하세요',
      credit1Val: '20',
      credit1Text: '인증 후 무료 Dojocoins',
      credit2Val: '1,000',
      credit2Text: '1 Dojocoin당 단어 수, 올림 처리',
      credit3Val: 'Google Play',
      credit3Text: 'Android 앱 배포 채널',
      notice: 'Dojocoins는 문서 처리량을 측정하는 데 사용됩니다. 현재 시작 시 20 Dojocoins가 무료로 제공되며, 1 Dojocoin은 1,000단어를 올림 처리하여 사용할 수 있습니다.'
    }
  }
};

function getNested(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function normalizeLang(value) {
  if (!value) return DEFAULT_LANG;
  const short = String(value).slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(short) ? short : DEFAULT_LANG;
}

function getInitialLang() {
  const url = new URL(window.location.href);
  const fromQuery = url.searchParams.get('lang');
  if (fromQuery) return normalizeLang(fromQuery);
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return normalizeLang(saved);
  return DEFAULT_LANG;
}

function updateMeta(lang, page) {
  const langPack = t[lang] || t[DEFAULT_LANG];
  const titleKey = page === 'thesis' ? 'thesisTitle' : 'indexTitle';
  const descKey = page === 'thesis' ? 'thesisDescription' : 'indexDescription';
  document.title = langPack.meta[titleKey];
  const description = langPack.meta[descKey];
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute('content', langPack.meta[titleKey]);
  if (ogDescription) ogDescription.setAttribute('content', description);
}

function decorateInternalLinks(lang) {
  document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach((link) => {
    const raw = link.getAttribute('href');
    if (!raw || raw.startsWith('http')) return;
    const [pathPart, hashPart] = raw.split('#');
    const [base] = pathPart.split('?');
    link.setAttribute('href', `${base}?lang=${lang}${hashPart ? `#${hashPart}` : ''}`);
  });
}

function applyLanguage(lang) {
  const safeLang = normalizeLang(lang);
  const page = document.body.dataset.page || 'index';
  const langPack = t[safeLang] || t[DEFAULT_LANG];
  document.documentElement.lang = safeLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getNested(langPack, el.dataset.i18n);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = getNested(langPack, el.dataset.i18nHtml);
    if (typeof value === 'string') el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = getNested(langPack, el.dataset.i18nAria);
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  });

  updateMeta(safeLang, page);
  decorateInternalLinks(safeLang);
  localStorage.setItem(STORAGE_KEY, safeLang);

  const url = new URL(window.location.href);
  url.searchParams.set('lang', safeLang);
  window.history.replaceState({}, '', url.toString());

  const selector = document.querySelector('#lang-select');
  if (selector) selector.value = safeLang;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getInitialLang();
  applyLanguage(lang);
  const selector = document.querySelector('#lang-select');
  if (selector) {
    selector.addEventListener('change', (event) => applyLanguage(event.target.value));
  }
});
