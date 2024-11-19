export const FREE_EVALUATION_URL = "https://calendly.com/salahamin911/30min";
export const WHATSAPP_URL = "https://wa.me/201040564352";

export const contactLinks = [
  {
    label: "iwanacademy@yahoo.com",
    icon: "/icons/email.svg",
    url: "mailto:iwanacademy@yahoo.com",
  },
  {
    label: "Iwan Academy",
    icon: "/icons/facebook.svg",
    url: "https://www.facebook.com/Iwanacademy",
  },
  {
    label: "201040564352",
    icon: "/icons/whats-app-blue.svg",
    url: WHATSAPP_URL,
  },
];
export const getNavLinks = (t) => [
  { label: t("home"), route: "/" },
  { label: t("about"), route: "/about" },
  { label: t("courses"), route: "/courses" },
  { label: t("pricing"), route: "/pricing" },
  { label: t("contact"), route: "/contact" },
];

export const getCourses = (t) => [
  {
    id: 1,
    title: t("islamicStuties.title"),
    imgSrc: "/images/islamic-studies.png",
    courseContent: [
      {
        title: t("islamicStuties.aqidah.title"),
        content: Array.from({ length: 4 }, (_, i) =>
          t(`islamicStuties.aqidah.content.${i + 1}`)
        ),
      },
      {
        title: t("islamicStuties.seerah.title"),
        content: Array.from({ length: 4 }, (_, i) =>
          t(`islamicStuties.seerah.content.${i + 1}`)
        ),
      },
      {
        title: t("islamicStuties.tafseer.title"),
        content: Array.from({ length: 14 }, (_, i) =>
          t(`islamicStuties.tafseer.content.${i + 1}`)
        ),
      },
      {
        title: t("islamicStuties.fiqh.title"),
        content: Array.from({ length: 5 }, (_, i) =>
          t(`islamicStuties.fiqh.content.${i + 1}`)
        ),
      },
      {
        title: t("islamicStuties.hadith.title"),
        content: Array.from({ length: 4 }, (_, i) =>
          t(`islamicStuties.hadith.content.${i + 1}`)
        ),
      },
      {
        title: t("islamicStuties.manners.title"),
        content: Array.from({ length: 6 }, (_, i) =>
          t(`islamicStuties.manners.content.${i + 1}`)
        ),
      },
    ],
  },
  {
    id: 2,
    title: t("arabicStudies.title"),
    imgSrc: "/images/arabic-studies.png",
    courseContent: [
      {
        title: t("arabicStudies.grammar.title"),
        content: Array.from({ length: 10 }, (_, i) =>
          t(`arabicStudies.grammar.content.${i + 1}`)
        ),
      },
      {
        title: t("arabicStudies.conversation.title"),
        content: Array.from({ length: 1 }, (_, i) =>
          t(`arabicStudies.conversation.content.${i + 1}`)
        ),
      },
      {
        title: t("arabicStudies.arabicChildren.title"),
        content: Array.from({ length: 1 }, (_, i) =>
          t(`arabicStudies.arabicChildren.content.${i + 1}`)
        ),
      },
      {
        title: t("arabicStudies.arabicModern.title"),
        content: Array.from({ length: 16 }, (_, i) =>
          t(`arabicStudies.arabicModern.content.${i + 1}`)
        ),
      },
      {
        title: t("arabicStudies.alSarf.title"),
        content: Array.from({ length: 4 }, (_, i) =>
          t(`arabicStudies.alSarf.content.${i + 1}`)
        ),
      },
      {
        title: t("arabicStudies.egyptianDialect.title"),
        content: Array.from({ length: 3 }, (_, i) =>
          t(`arabicStudies.egyptianDialect.content.${i + 1}`)
        ),
      },
    ],
  },
  {
    id: 3,
    title: t("quran.title"),
    imgSrc: "/images/quran-course.png",
    courseContent: [
      {
        title: t("quran.quranRecitation.title"),
        content: Array.from({ length: 5 }, (_, i) =>
          t(`quran.quranRecitation.content.${i + 1}`)
        ),
      },
      {
        title: t("quran.quranMemorizing.title"),
        content: Array.from({ length: 7 }, (_, i) =>
          t(`quran.quranMemorizing.content.${i + 1}`)
        ),
      },
      {
        title: t("quran.Tajweed.title"),
        content: Array.from({ length: 2 }, (_, i) =>
          t(`quran.Tajweed.content.${i + 1}`)
        ),
      },
    ],
  },
];

export const getWhyIwanData = (t) => [
  {
    title: t("oneOnOne.title"),
    description: t("oneOnOne.description"),
    imgSrc: "/images/one-on-one.png",
  },
  {
    title: t("professional.title"),
    description: t("professional.description"),
    imgSrc: "/images/professional-tutors.png",
  },
  {
    title: t("fun.title"),
    description: t("fun.description"),
    imgSrc: "/images/learning-fun.png",
  },
  {
    title: t("flexible.title"),
    description: t("flexible.description"),
    imgSrc: "/images/flexible.png",
  },
  {
    title: t("free.title"),
    description: t("free.description"),
    imgSrc: "/images/free.png",
  },
];

export const getHowItWorksData = (t) => [
  {
    stepNumber: t("planning.stepNumber"),
    title: t("planning.title"),
    description: t("planning.description"),
    imgSrc: "/images/planning.png",
  },
  {
    stepNumber: t("scheduling.stepNumber"),
    title: t("scheduling.title"),
    description: t("scheduling.description"),
    imgSrc: "/images/schedule.png",
  },
  {
    stepNumber: t("studying.stepNumber"),
    title: t("studying.title"),
    description: t("studying.description"),
    imgSrc: "/images/studying.png",
  },
];

export const getFaqs = (t) => [
  { question: t("q1.question"), answer: t("q1.answer") },
  { question: t("q2.question"), answer: t("q2.answer") },
  { question: t("q3.question"), answer: t("q3.answer") },
  { question: t("q4.question"), answer: t("q4.answer") },
  { question: t("q5.question"), answer: t("q5.answer") },
  { question: t("q6.question"), answer: t("q6.answer") },
  { question: t("q7.question"), answer: t("q7.answer") },
];
