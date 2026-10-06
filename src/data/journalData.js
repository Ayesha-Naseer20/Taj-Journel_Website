export const journalDetails = {
  title: "Al-Basirah",
  subtitle: "Bi-Annual International Peer-Reviewed Research Journal",
  institution: "Department of Islamic Thought and Culture",
  university: "National University of Modern Languages (NUML)",
  location: "Islamabad, Pakistan",
  issnPrint: "2222-4548",
  issnOnline: "2520-7334",
  hecCategory: "Y Category (Recognized by Higher Education Commission Pakistan)",
  indexing: ["DOAJ", "HEC Recognized", "Google Scholar", "Crossref", "Tehqeeqat", "BASE"],
  publicationFrequency: "Bi-Annual (June & December)",
  editorInChief: "Dr. Amjad Hayat",
  managingEditor: "Dr. Shad Muhammad",
  researchAssistant: "Dr. Muhammad Usman",
  areaOfPublication: "Islamic Thought, Civilizations, Islamic Jurisprudence & Contemporary Studies",
  languages: ["English", "Arabic", "Urdu"],
  feeStructure: {
    inland: {
      total: 12000,
      stage1: 7000, // Processing & Initial Peer Review
      stage2: 5000  // Final Publication & DOI Assignment
    },
    foreign: {
      total: 150, // USD
      stage1: 100,
      stage2: 50
    },
    policyNote: "Fee paid at any stage is strictly non-refundable and covers blind peer review, formatting, DOI registration, and digital archiving."
  },
  bankAccount: {
    title: "Account Officer Administration, NUML",
    accountNo: "00551400000275",
    bankName: "Askari Bank",
    branch: "H-9 Branch, Islamabad, Pakistan",
    iban: "PK36ASCB000551400000275"
  }
};

export const currentIssue = {
  volume: 13,
  number: 1,
  year: 2024,
  period: "January to June 2024",
  publishedDate: "2024-06-30",
  coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
  description: "Volume 13, Issue 1 features high-impact research papers covering contemporary Islamic emotional intelligence, comparative literature, Quranic rhetorical observations, and modern legal perspectives."
};

export const articles = [
  // ARABIC SECTION
  {
    id: "art-ar-1",
    section: "Arabic",
    title: "دراسة تحليلية لمعاملات المال العام وتطبيقه في الفقه الإسلامي المعاصر",
    titleEnglish: "An Analytical Study of Public Money Transactions and its Application in Contemporary Islamic Jurisprudence",
    authors: [
      { name: "د. عبدالحميد بن محمد", affiliation: "جامعة نمل، إسلام آباد" }
    ],
    pages: "1-17",
    doi: "10.5281/zenodo.albasirah.2024.01.01",
    publishDate: "2024-06-30",
    language: "Arabic",
    abstract: "تناول هذه الدراسة موضوع إداراة المال العام والتصرفات المالية في الشريعة الإسلامية مع المقارنة بين الفقه القديم والأنظمة المالية الحديثة، مع التركيز على مبادئ الشفافية والمسؤولية في الاقتصاد الإسلامي.",
    keywords: ["الفقه الإسلامي", "المال العام", "الاقتصاد المعاصر", "الشفافية"],
    views: 1420,
    downloads: 485,
    pdfUrl: "#"
  },
  {
    id: "art-ar-2",
    section: "Arabic",
    title: "منهج الإمام الطبري في الاستنباط الفقهي من خلال تفسيره جامع البيان",
    titleEnglish: "Imam Al-Tabari's Methodology of Juristic Deduction in his Exegesis Jami' al-Bayan",
    authors: [
      { name: "د. طارق محمود الزهراني", affiliation: "جامعة الملك سعود" }
    ],
    pages: "18-34",
    doi: "10.5281/zenodo.albasirah.2024.01.02",
    publishDate: "2024-06-30",
    language: "Arabic",
    abstract: "يبحث هذا المقال في الركائز الأصولية والفقهية التي اعتمد عليها الإمام الطبري في استخراج الأحكام الشرعية من آيات التنزيل.",
    keywords: ["التفسير", "الطبري", "الاستنباط الفقهي", "أصول الفقه"],
    views: 980,
    downloads: 310,
    pdfUrl: "#"
  },

  // ENGLISH SECTION
  {
    id: "art-en-1",
    section: "English",
    title: "Beyond Secular Emotional Intelligence: An Islamic Model of Self-Awareness",
    authors: [
      { name: "Prof. Dr. Syed Ziaul Haq", affiliation: "International Islamic University, Islamabad" },
      { name: "Dr. Javaid Naeem", affiliation: "Department of Islamic Thought, NUML" }
    ],
    pages: "35-52",
    doi: "10.5281/zenodo.albasirah.2024.01.03",
    publishDate: "2024-06-30",
    language: "English",
    abstract: "Emotional Intelligence (EI) has gained global prominence in psychological and organizational studies. However, secular models often neglect the spiritual and metaphysical dimensions of human selfhood. This study proposes an integrative Islamic Model of Self-Awareness based on the concepts of Tazkiyah (purification of soul), Muhasabah (self-reckoning), and Muraqabah (mindful introspection). By examining classical classical treatises of Al-Ghazali and Al-Muhasibi, we formulate an ontological framework that links emotional regulation to divine accountability and moral integrity.",
    keywords: ["Emotional Intelligence", "Islamic Psychology", "Tazkiyah", "Self-Awareness", "Al-Ghazali"],
    views: 2840,
    downloads: 1120,
    pdfUrl: "#"
  },
  {
    id: "art-en-2",
    section: "English",
    title: "The Role of Islamic Literature in Shaping Social Justice",
    authors: [
      { name: "Dr. Zeeshan Ali Muhammad Basharat", affiliation: "NUML Islamabad" }
    ],
    pages: "53-70",
    doi: "10.5281/zenodo.albasirah.2024.01.04",
    publishDate: "2024-06-30",
    language: "English",
    abstract: "Islamic literary traditions have historically functioned as catalysts for social transformation and advocacy of egalitarian values. This paper analyzes key literary discourses from classical and modern Muslim thinkers that addressed economic disparity, human dignity, and communal equity. Through thematic analysis, the study demonstrates how ethical imperatives embedded in Islamic literature provide sustainable frameworks for modern socio-economic reforms.",
    keywords: ["Islamic Literature", "Social Justice", "Egalitarianism", "Ethics", "Modern Thought"],
    views: 1950,
    downloads: 740,
    pdfUrl: "#"
  },
  {
    id: "art-en-3",
    section: "English",
    title: "Logical, Thematic and Rhetorical Observations of the Repetitive Quranic Text of Ayat-Al-Ahkam: A Case Study of Surat-Al-Rahman",
    authors: [
      { name: "Dr. Inam Ur Rehman", affiliation: "Department of Arabic & Islamic Studies, GCU Lahore" }
    ],
    pages: "71-92",
    doi: "10.5281/zenodo.albasirah.2024.01.05",
    publishDate: "2024-06-30",
    language: "English",
    abstract: "Repetition in Quranic discourse serves profound rhetorical, psychological, and legal functions rather than simple emphasis. Focusing on Surat Al-Rahman and selected Ayat-Al-Ahkam (legal verses), this paper investigates the structural harmony and thematic progression achieved through repeated refrains. The analysis highlights how stylistic repetition reinforces human gratitude, divine omnipotence, and legal obligations.",
    keywords: ["Quranic Rhetoric", "Ayat al-Ahkam", "Surat Al-Rahman", "Textual Structure", "Linguistics"],
    views: 2110,
    downloads: 890,
    pdfUrl: "#"
  },

  // URDU SECTION
  {
    id: "art-ur-1",
    section: "Urdu",
    title: "خواتین کے بنیادی حقوق کا اسلامی اور جدید قانون: ایک تقابلی جائزہ",
    titleEnglish: "Fundamental Rights of Women: A Comparative Study of Islamic and Modern Law",
    authors: [
      { name: "محمد نبیل نیازی", affiliation: "شعبہ علوم اسلامیہ، نمل اسلام آباد" },
      { name: "ڈاکٹر احمد ناصر النور", affiliation: "جامعة الرشيد، كراتشي" }
    ],
    pages: "93-110",
    doi: "10.5281/zenodo.albasirah.2024.01.06",
    publishDate: "2024-06-30",
    language: "Urdu",
    abstract: "اس مقالے میں خواتین کے معاشرتی، معاشی اور قانونی حقوق کا شریعت اسلامیہ اور جدید بین الاقوامی انسانی حقوق کے قوانین کی روشنی میں تقابلی جائزہ پیش کیا گیا ہے۔ مقالے کا بنیادی مقصد یہ واضح کرنا ہے کہ اسلام نے چودہ سو سال قبل خواتین کو جو ترکے، ملکیت اور آزادیِ رائے کے حقوق عطا کیے، وہ جدید دور کے فلاحی ریاست کے اصولوں سے ہم آہنگ ہیں۔",
    keywords: ["حقوق نسواں", "قانون اسلام", "تقابلی جائزہ", "معاشرتی عدل"],
    views: 3410,
    downloads: 1450,
    pdfUrl: "#"
  },
  {
    id: "art-ur-2",
    section: "Urdu",
    title: "پاکستان میں سائبر فنانس اور فکشنل کریپٹو کرنسیز کا شرعی حکم: عصر حاضر کا تناظر",
    titleEnglish: "Islamic Legal Status of Cyber Finance and Crypto Assets in Pakistan",
    authors: [
      { name: "ڈاکٹر سجاد المظہری", affiliation: "جامعہ کراچی" }
    ],
    pages: "111-128",
    doi: "10.5281/zenodo.albasirah.2024.01.07",
    publishDate: "2024-06-30",
    language: "Urdu",
    abstract: "جدید ٹیکنالوجی کے تلاطم خیز دور میں فنانشل ٹیکنالوجی اور ڈیجیٹل کرنسیوں نے عالمی معیشت پر گہرے اثرات مرتب کیے ہیں۔ یہ مقالہ مالیت، غرر، اور قمار کے شرعی اصولوں کی کسوٹی پر جدید کرپٹو بلاک چین اثاثوں کا شرعی تجزیہ کرتا ہے۔",
    keywords: ["کرپٹو کرنسی", "سائبر فنانس", "فقہ المعاملات", "غرر"],
    views: 1870,
    downloads: 620,
    pdfUrl: "#"
  },
  {
    id: "art-ur-3",
    section: "Urdu",
    title: "امت مسلمہ کو درپیش جدید فکری چیلنجز اور سیرتِ طیبہ کی روشنی میں حل",
    titleEnglish: "Contemporary Intellectual Challenges Facing the Muslim Ummah and Solutions in Seerah",
    authors: [
      { name: "ڈاکٹر صفيہ طاہر", affiliation: "نمل اسلام آباد" }
    ],
    pages: "129-145",
    doi: "10.5281/zenodo.albasirah.2024.01.08",
    publishDate: "2024-06-30",
    language: "Urdu",
    abstract: "عصر حاضر میں مسلمانوں کو جن فکری و نظریاتی بحرانات کا سامنا ہے، ان میں الحاد، تشکیک اور فکری تشتت سرِفہرست ہیں۔ اس تحریر میں سیرت نبوی ﷺ کے دعوتی و مناظرانہ اسلوب سے رہنمائی حاصل کرتے ہوئے فکری اعتدال کے اصول مرتب کیے گئے ہیں۔",
    keywords: ["سیرت طیبہ", "فکری چیلنجز", "دعوت و ارشاد", "الحاد کی تر دید"],
    views: 2290,
    downloads: 910,
    pdfUrl: "#"
  }
];

export const editorialBoard = [
  {
    name: "Dr. Amjad Hayat",
    role: "Editor-in-Chief",
    affiliation: "Department of Islamic Thought & Culture, NUML Islamabad",
    email: "editor.albasirah@numl.edu.pk",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    specialization: "Islamic Jurisprudence, Hermeneutics & Contemporary Ijtihad"
  },
  {
    name: "Dr. Shad Muhammad",
    role: "Managing Editor",
    affiliation: "NUML Islamabad, Pakistan",
    email: "smhammad@numl.edu.pk",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    specialization: "Comparative Religions, Qur'anic Exegesis"
  },
  {
    name: "Prof. Dr. Syed Ziaul Haq",
    role: "Editorial Board Member",
    affiliation: "Director General, Islamic Research Institute (IRI), IIUI",
    email: "ziaulhaq@iiu.edu.pk",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    specialization: "Islamic Law & Legal History"
  },
  {
    name: "Prof. Dr. Muhammad Yasin Mazhar Siddiqui",
    role: "Advisory Board Member (International)",
    affiliation: "Aligarh Muslim University, India",
    email: "yasin.siddiqui@amu.ac.in",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    specialization: "Islamic History & Civilizations"
  },
  {
    name: "Dr. Fatima Al-Zahra",
    role: "Advisory Board Member (International)",
    affiliation: "Al-Azhar University, Cairo, Egypt",
    email: "fatima.azhar@azhar.edu.eg",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    specialization: "Arabic Linguistics & Classical Rhetoric"
  }
];

export const policiesList = [
  {
    id: "transparency",
    title: "Policy of Transparency & Best Practices",
    content: `Al-Basirah adheres strictly to the COPE (Committee on Publication Ethics) Principles of Transparency and Best Practice in Scholarly Publishing. 
    1. Journal Ownership: Published by the Department of Islamic Thought & Culture, NUML Islamabad.
    2. Peer Review Process: All research papers undergo a double-blind peer review by at least two domain experts.
    3. Editorial Independence: Decisions are made purely on academic merit without commercial interference.`
  },
  {
    id: "publishing",
    title: "Publishing Policy",
    content: `Al-Basirah publishes bi-annually in June and December. Submissions are accepted in English, Arabic, and Urdu. Manuscripts must be original, unpublished, and not under consideration elsewhere.`
  },
  {
    id: "plagiarism",
    title: "Plagiarism Policy",
    content: `Al-Basirah maintains zero tolerance for plagiarism. All submitted manuscripts are screened using Turnitin before peer review. 
    - The similarity index must be strictly below 19% overall.
    - Single source similarity must not exceed 5%.
    - Plagiarized manuscripts will be summarily rejected, and author affiliations notified.`
  },
  {
    id: "copyright",
    title: "Copyright & Open Access Policy",
    content: `Al-Basirah is an Open Access journal operating under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).
    - Authors retain copyright and granting the journal first publication rights.
    - Readers may read, download, copy, distribute, print, search, or link to full texts of articles without charge.`
  },
  {
    id: "licensing",
    title: "Licensing Policy",
    content: `All articles are published under CC BY-NC 4.0 license allowing non-commercial reuse, adaptation, and distribution provided original attribution is properly cited.`
  },
  {
    id: "review",
    title: "Peer Review Policy",
    content: `The journal employs a rigorous Double-Blind Peer Review workflow:
    1. Desk Evaluation: Editor checks scope, formatting, and Turnitin similarity (1-3 days).
    2. External Peer Review: Sent to two subject experts (4-6 weeks).
    3. Final Decision: Accept, Minor Revisions, Major Revisions, or Reject based on peer reports.`
  },
  {
    id: "numl-policy",
    title: "NUML Research Journals Policy",
    content: `Guided by the Higher Education Commission (HEC) of Pakistan guidelines for category 'Y' and 'X' journals, adhering to institutional standards of academic excellence and integrity.`
  },
  {
    id: "open-access",
    title: "Open Access Statement",
    content: `Free and immediate digital access to research outputs ensures global dissemination of Islamic scholarship for scholars, institutions, and the general public.`
  },
  {
    id: "repository",
    title: "Repository & Archiving Policy",
    content: `Articles are digitally preserved in PKP Preservation Network (PN), LOCKSS, CLOCKSS, and institutional repositories at NUML Library.`
  },
  {
    id: "ethical",
    title: "Ethical Policy & Human Subject Standards",
    content: `Authors must ensure proper citations, obtain consent where human subjects or survey data are involved, declare conflict of interest, and acknowledge funding sources.`
  },
  {
    id: "publication-fees",
    title: "Publication Fees & Waivers",
    content: `To maintain high-quality editorial infrastructure, DOI registration, and open-access hosting:
    - Inland Authors: Rs. 12,000 (Rs. 7,000 Stage 1 + Rs. 5,000 Stage 2).
    - Foreign Authors: $150 USD.
    - Fee Waiver Policy: Partial/Full waivers available for deserving scholars from low-income developing nations.`
  }
];

export const archivesList = [
  { volume: 13, issue: 1, year: 2024, period: "Jan - Jun 2024", count: 8, pdf: "#" },
  { volume: 12, issue: 2, year: 2023, period: "Jul - Dec 2023", count: 9, pdf: "#" },
  { volume: 12, issue: 1, year: 2023, period: "Jan - Jun 2023", count: 8, pdf: "#" },
  { volume: 11, issue: 2, year: 2022, period: "Jul - Dec 2022", count: 10, pdf: "#" },
  { volume: 11, issue: 1, year: 2022, period: "Jan - Jun 2022", count: 7, pdf: "#" },
  { volume: 10, issue: 2, year: 2021, period: "Jul - Dec 2021", count: 9, pdf: "#" }
];
