export const journalDetails = {
  title: "Taj Journal of Religion and Psychology (TJRP)",
  shortTitle: "TJRP",
  subtitle: "An International, Peer-Reviewed, Multidisciplinary Research Journal",
  tagline: "Advancing Scholarship at the Intersection of Religion, Psychology, and Human Well-being",
  publisher: "Taj Islamic Research Center (TIRC)",
  institution: "Taj Islamic Research Center (TIRC)",
  university: "Taj Islamic Research Center (TIRC)",
  location: "Gujranwala, Pakistan",
  issnPrint: "In Process",
  issnOnline: "In Process",
  hecCategory: "In Process (HEC Recognition Applied For)",
  indexing: ["DOAJ (In Process)", "HEC Recognition (In Process)", "Google Scholar (In Process)", "Crossref (In Process)", "Tehqeeqat (In Process)", "BASE (In Process)"],
  publicationFrequency: "Bi-Annual (June & December)",
  editorInChief: "Dr. Amjad Hayat",
  managingEditor: "Dr. Shad Muhammad",
  researchAssistant: "Dr. Muhammad Usman",
  areaOfPublication: "Religion, Islamic Studies, Psychology & Interdisciplinary Studies",
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
    title: "In Process",
    accountNo: "In Process",
    bankName: "In Process",
    branch: "In Process",
    iban: "In Process"
  }
};

// ─────────────────────────────────────────────────────────────
// RESEARCH PUBLICATIONS
// Source: CV of Dr. Hafiz Muhammad Waseem Abbas
// (Director Research & Publication, Taj Islamic Research Center).
// These papers were published in other HEC-recognized journals;
// "journal", "volume" and "issue" record where each one appeared,
// and "url" links to the original article.
// ─────────────────────────────────────────────────────────────

export const leadAuthor = {
  name: "Dr. Hafiz Muhammad Waseem Abbas",
  citeName: "Abbas, H. M. W.",
  citeNameFull: "Abbas, Hafiz Muhammad Waseem",
  affiliation: "Department of Islamic Studies, GIFT University, Gujranwala"
};

const paper = (fields) => ({
  authors: [{ name: leadAuthor.name, affiliation: leadAuthor.affiliation }],
  ...fields
});

export const articles = [
  // ── 2025 ──
  paper({
    id: "pub-2025-tanazur-6-3",
    section: "Urdu", language: "Urdu",
    title: "اسلامی تصوف کا فکری و تاریخی جائزہ: امہاتِ کتبِ تصوف کی روشنی میں",
    titleEnglish: "The Intellectual and Historical Foundations of Islamic Sufism: A Study in Classical Sufi Literature",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 6, issue: 3, year: 2025,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/765"
  }),
  paper({
    id: "pub-2025-tanazur-6-2",
    section: "Urdu", language: "Urdu",
    title: "شریعت میں رخصت کا مفہوم، اقسام اور حکمتیں: ایک تحقیقی مطالعہ",
    titleEnglish: "The Concept, Types, and Wisdom of Concessions (Rukhsah) in Shariah: A Research Study",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 6, issue: 2, year: 2025,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/737"
  }),

  // ── 2024 ──
  paper({
    id: "pub-2024-jet-7-2",
    section: "Urdu", language: "Urdu",
    title: "اسبابِ نزول میں تعددِ روایات کی صورت میں صحیح سببِ نزول کے تعین کے ضابطے",
    titleEnglish: "The Principles for Determining the Authentic Cause of Revelation (Asbāb al-Nuzūl) in Cases of Multiple Narrations",
    journal: "Jahan-e-Tahqeeq", hecCategory: "Y", volume: 7, issue: 2, year: 2024,
    url: "https://jahan-e-tahqeeq.com/index.php/jahan-e-tahqeeq/article/view/1442"
  }),
  paper({
    id: "pub-2024-tanazur-5-2",
    section: "Urdu", language: "Urdu",
    title: "تہواروں کی سماجی، مذہبی، معاشی اور سیاسی اہمیت کا مطالعہ",
    titleEnglish: "A Study of the Social, Religious, Economic, and Political Significance of Festivals",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 5, issue: 2, year: 2024,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/254/495"
  }),
  paper({
    id: "pub-2024-tanazur-5-1",
    section: "Urdu", language: "Urdu",
    title: "تفسیری روایات کی تفہیم میں علامہ ابن کثیر کا اسلوب: تجزیاتی مطالعہ",
    titleEnglish: "Allama Ibn Kathir’s Methodology in Interpreting Tafsiri Narrations: An Analytical Study",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 5, issue: 1, year: 2024,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/659/570"
  }),
  paper({
    id: "pub-2024-irjais-4-1",
    section: "Urdu", language: "Urdu",
    title: "قرآن حکیم کی روشنی میں رحمتِ الٰہی کا تصور",
    titleEnglish: "Concept of Mercy of Allah in the Light of Holy Quran",
    journal: "International Research Journal of Arabic and Islamic Studies", hecCategory: "Y", volume: 4, issue: 1, year: 2024,
    url: "https://irjais.com/index.php/irjais/article/view/222"
  }),

  // ── 2023 ──
  paper({
    id: "pub-2023-tanazur-4-3",
    section: "Urdu", language: "Urdu",
    title: "قرآن و حدیث کی روشنی میں انسانی شعور کے اسالیب",
    titleEnglish: "The Modes of Human Consciousness in the Light of the Qur’an and Hadith",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 4, issue: 3, year: 2023,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/192"
  }),
  paper({
    id: "pub-2023-tanazur-4-2",
    section: "Urdu", language: "Urdu",
    title: "نبی کریم ﷺ کی صفتِ جوامع الکلم اور خطبات کے محاسن: تحقیقی مطالعہ",
    titleEnglish: "The Prophetic Attribute of Jawāmi‘ al-Kalim and the Excellence of His Sermons: A Research Study",
    journal: "Tanazur Research Journal", hecCategory: "Y", volume: 4, issue: 2, year: 2023,
    url: "https://tanazur.com.pk/index.php/tanazur/article/view/166"
  }),
  paper({
    id: "pub-2023-jpsp-7-2",
    section: "English", language: "English",
    title: "Principles of Human Collectivity: Analytical Study of Islamic Teachings",
    journal: "JPSP", hecCategory: "X", volume: 7, issue: 2, year: 2023,
    url: "https://journalppw.com/index.php/jpsp/article/view/15537"
  }),

  // ── 2022 ──
  paper({
    id: "pub-2022-palarch-19-4",
    section: "English", language: "English",
    title: "Dimensions of International Relations: Principles from the Seerah of Holy Prophet (PBUH)",
    journal: "PalArch's Journal", hecCategory: "X", volume: 19, issue: 4, year: 2022,
    url: "https://files.cdn-files-a.com/uploads/9842387/normal_6712490057aa7.pdf"
  }),
  paper({
    id: "pub-2022-alazhar-8-1",
    section: "English", language: "English",
    title: "Historical Orientalist Approaches Towards the Sirah of Prophet Muhammad (PBUH)",
    journal: "Al-Azhar", hecCategory: "Y", volume: 8, issue: 1, year: 2022,
    url: "https://www.al-azhaar.org/index.php/alazhar/article/view/363"
  }),
  paper({
    id: "pub-2022-habibia-6-1",
    section: "Urdu", language: "Urdu",
    title: '"تفسیر مواہب الرحمٰن" میں اسرائیلی روایات پر نقد و جرح کا عمل',
    titleEnglish: "Criticism of Israeli Riwayat in Tafseer Mawahib-ur-Rahman",
    journal: "Habibia Islamicus", hecCategory: "Y", volume: 6, issue: 1, year: 2022,
    url: "https://habibiaislamicus.com/index.php/hirj/article/view/206/276"
  }),

  // ── 2021 ──
  paper({
    id: "pub-2021-habibia-5-4",
    section: "Urdu", language: "Urdu",
    title: "قرآن حکیم میں مذکور لفظِ حق کے مختلف معانی سے متعلق مفسرین کی آراء",
    titleEnglish: "Opinions of the Commentators on the Different Meanings of the Word Truth Mentioned in the Holy Quran",
    journal: "Habibia Islamicus", hecCategory: "Y", volume: 5, issue: 4, year: 2021,
    url: "https://habibiaislamicus.com/index.php/hirj/article/view/123"
  }),
  paper({
    id: "pub-2021-habibia-5-3",
    section: "Urdu", language: "Urdu",
    title: "قرآنی آیات کی روشنی میں علم الوحی کا تعارفی مطالعہ",
    titleEnglish: "An Introductory Study of Ilm al-Wahy in the Light of Qur’anic Verses",
    journal: "Habibia Islamicus", hecCategory: "Y", volume: 5, issue: 3, year: 2021,
    url: "https://habibiaislamicus.com/index.php/hirj/article/view/150"
  }),
  paper({
    id: "pub-2021-habibia-5-2",
    section: "Urdu", language: "Urdu",
    title: "عہد نامہ قدیم کی روشنی میں دیگر مذاہب سے متعلق یہودی نظریات",
    titleEnglish: "Jewish Views on Other Religions in the Light of the Old Testament",
    journal: "Habibia Islamicus", hecCategory: "Y", volume: 5, issue: 2, year: 2021,
    url: "https://habibiaislamicus.com/index.php/hirj/article/view/199"
  }),
  paper({
    id: "pub-2021-mift-1-2",
    section: "Urdu", language: "Urdu",
    title: "بین المذاہب تعلقات کا قرآنی تصور",
    titleEnglish: "The Qur'anic Concept of Interfaith Relations",
    journal: "Mujalla Islami Fikr-o-Tahzeeb (MIFT)", hecCategory: "Y", volume: 1, issue: 2, year: 2021,
    url: "https://journals.umt.edu.pk/index.php/mift/article/view/1510/833"
  }),

  // ── 2020 ──
  paper({
    id: "pub-2020-afkar-4-1",
    section: "Urdu", language: "Urdu",
    title: "بین الاقوامی تعلقات کے اصول و ذرائع: سیرتِ طیبہ کی روشنی میں",
    titleEnglish: "Means & Precepts of International Relations in the Light of Prophet’s Sīrah (peace be upon him)",
    journal: "AFKĀR", hecCategory: "Y", volume: 4, issue: 1, year: 2020,
    url: "https://www.afkar.com.pk/previousissues/Vol_4/Issue_1/article09(urdu).pdf"
  }),

  // ── 2019 ──
  paper({
    id: "pub-2019-afkar-3-2",
    section: "Urdu", language: "Urdu",
    title: "انسانی اجتماعیت میں مذہب کا کردار: تحقیقی مطالعہ",
    titleEnglish: "The Role of Religion in Human Collectivity: A Research Study",
    journal: "AFKĀR", hecCategory: "Y", volume: 3, issue: 2, year: 2019,
    url: "https://www.afkar.com.pk/previousissues/Vol_3/Issue_2/The_Role_of_Religion_in_Human_Collectivity_A_Research_Study.pdf"
  })
];

// Years that have publications, newest first (used for Issues & Archives)
export const publicationYears = [...new Set(articles.map(a => a.year))].sort((a, b) => b - a);

// The "Current Issue" is the most recent year's publications
export const currentYear = publicationYears[0];
export const currentArticles = articles.filter(a => a.year === currentYear);

export const currentIssue = {
  year: currentYear,
  title: `Current Issue (${currentYear})`,
  period: String(currentYear),
  publishedDate: String(currentYear),
  coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
  count: currentArticles.length,
  description: `Latest research papers (${currentYear}) by ${leadAuthor.name}, Director Research & Publication at Taj Islamic Research Center (TIRC), published in HEC-recognized journals. Each paper links to the journal where it was originally published.`
};

export const archivesList = publicationYears.map(year => ({
  year,
  count: articles.filter(a => a.year === year).length,
  articles: articles.filter(a => a.year === year)
}));

export const publicationStats = {
  total: articles.length,
  hecY: articles.filter(a => a.hecCategory === "Y").length,
  journals: new Set(articles.map(a => a.journal)).size,
  years: publicationYears.length
};

export const editorialBoard = [
  {
    name: "Dr. Amjad Hayat",
    role: "Editor-in-Chief",
    affiliation: "Department of Islamic Thought & Culture, NUML Islamabad",
    email: "editor.tjrp@tirc.org.pk",
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
    title: "1. Policy of Transparency & Best Practices",
    content: `Taj Journal of Religion and Psychology (TJRP) is committed to maintaining a transparent, fair, and responsible system of scholarly publishing. The journal considers transparency essential to the credibility of academic research and to the trust of authors, reviewers, readers, and the wider academic community.

Information concerning the journal's ownership, publisher, editorial structure, aims and scope, submission requirements, peer-review process, publication ethics, copyright, licensing, open access, publication charges, and contact information is made available through the journal's official website.

Editorial decisions are made on the basis of the academic merit of a manuscript. Considerations such as nationality, institutional affiliation, gender, ethnicity, religion, or personal background of the authors do not form part of the editorial assessment.

The journal expects all individuals involved in the publication process to act with honesty, fairness, confidentiality, and professional responsibility.

TJRP is committed to:
• maintaining editorial independence;
• applying a fair and consistent peer-review process;
• protecting the confidentiality of submitted manuscripts;
• requiring appropriate disclosure of conflicts of interest;
• maintaining standards of research and publication ethics;
• taking appropriate action in cases of suspected misconduct;
• providing clear information about publication charges and waivers;
• correcting the published record when necessary; and
• maintaining the long-term integrity and accessibility of published research.

The journal periodically reviews its policies and procedures and may revise them when necessary to reflect developments in scholarly publishing and research practice.`
  },
  {
    id: "publishing",
    title: "2. Publishing Policy",
    content: `TJRP publishes original scholarly work within the fields covered by its Aims and Scope. The journal considers research articles and other scholarly contributions that meet its academic, methodological, and ethical requirements.

A manuscript submitted to TJRP must be the original work of the authors and must not be under consideration by another journal at the same time. Submission of a manuscript constitutes an undertaking by the authors that the work has not been published elsewhere in substantially the same form.

All submissions are subject to an initial editorial assessment. Manuscripts that are outside the scope of the journal, do not meet basic academic standards, or fail to comply with essential submission requirements may be declined at this stage.

Manuscripts considered suitable for review are normally sent for external peer review in accordance with the journal's Peer Review Policy.

The journal reserves the right to make editorial decisions concerning the suitability, revision, acceptance, or rejection of manuscripts. Such decisions are based on scholarly considerations and are not determined by commercial interests.

Authors are responsible for the accuracy of the information presented in their manuscripts and for obtaining permission to reproduce copyrighted material where required.

TJRP may publish corrections, retractions, or expressions of concern when circumstances require a formal amendment to the published record.`
  },
  {
    id: "plagiarism",
    title: "3. Plagiarism Policy",
    content: `TJRP regards plagiarism, duplicate publication, fabrication, falsification, and other forms of academic misconduct as serious breaches of scholarly responsibility.

Plagiarism includes the use of another person's words, ideas, arguments, data, images, or other intellectual work without proper acknowledgement. It also includes presenting substantially similar material from one's own previously published work without appropriate disclosure.

Manuscripts submitted to the journal may be examined using appropriate similarity-detection software. A similarity report is treated as an aid to editorial assessment rather than as an automatic determination of plagiarism. The editorial team considers the nature, extent, location, and context of any identified similarity.

Where substantial plagiarism or other academic misconduct is suspected, the journal may request an explanation from the authors. Depending on the circumstances, the manuscript may be rejected or further action may be taken.

If misconduct is established after publication, TJRP may publish a correction, retraction, or other appropriate notice. Where necessary, the journal may also communicate the matter to the author's institution or other relevant authority.

Authors are expected to acknowledge all sources accurately and to distinguish clearly between their own contribution and the work of others.`
  },
  {
    id: "copyright",
    title: "4. Copyright & Open Access Policy",
    content: `TJRP supports the dissemination of scholarly research through an open-access publishing model, subject to the journal's applicable licensing arrangements.

Copyright arrangements are stated clearly in the journal's publication agreement and on the article record. Authors retain the rights permitted under the applicable agreement and license.

Authors may use their published work for legitimate academic and educational purposes in accordance with the journal's licensing terms. Any reuse or redistribution of published material must comply with the applicable copyright and license conditions.

The journal does not permit the unauthorized reproduction or commercial exploitation of published material.

The full licensing terms applicable to an article will be identified on the article's webpage and, where appropriate, within the published version of record.`
  },
  {
    id: "licensing",
    title: "5. Licensing Policy",
    content: `TJRP intends to publish its open-access articles under a Creative Commons Attribution 4.0 International (CC BY 4.0) license, subject to the final publication agreement adopted by the journal.

Under this license, readers may share and adapt the published material, including for commercial purposes, provided that appropriate credit is given to the original author(s), the source is identified, and any changes made to the original work are indicated.

The license does not remove the author's moral rights or any other rights that cannot lawfully be waived.

Proper attribution should include the author's name, article title, journal name, publication details, and a link to the applicable license where practical.

The licensing information for each published article will be displayed clearly on the journal website and in the published article.`
  },
  {
    id: "review",
    title: "6. Peer Review Policy",
    content: `TJRP uses peer review to assess the scholarly quality, originality, relevance, and methodological soundness of submitted manuscripts.

Initial Editorial Assessment
All manuscripts received by the journal are first examined by the editorial team. This assessment considers:
• relevance to the journal's scope;
• originality and academic contribution;
• clarity of research objectives;
• methodological suitability;
• scholarly presentation;
• ethical considerations; and
• compliance with submission requirements.

A manuscript may be declined without external review if it is clearly unsuitable for the journal or does not meet the minimum requirements for scholarly consideration.

External Peer Review
Manuscripts that pass the initial assessment are normally sent to qualified external reviewers.
TJRP generally follows a double-blind peer-review process, whereby the identities of authors and reviewers are not disclosed to one another during the review process.
Reviewers are selected according to their subject expertise and, where possible, their independence from the submitted work.

Review Criteria
Reviewers are normally asked to consider:
• originality of the research;
• significance of the research problem;
• adequacy of the literature review;
• theoretical or conceptual framework;
• appropriateness of methodology;
• quality of analysis and interpretation;
• accuracy and relevance of references;
• clarity of presentation; and
• overall contribution to the field.

Editorial Decision
Following peer review, the editor may decide to:
• accept the manuscript;
• request minor revisions;
• request major revisions;
• invite resubmission; or
• reject the manuscript.

The final editorial decision remains the responsibility of the Editor-in-Chief or an authorized editor.
Peer reviewers are expected to maintain confidentiality and to declare any conflict of interest. They should not use unpublished material obtained through the review process for their own research or personal advantage.`
  },
  {
    id: "research-integrity",
    title: "7. Research Integrity, Standards & Indexing Policy",
    content: `TJRP is committed to maintaining reliable scholarly standards and to developing its publishing practices in accordance with established principles of academic and research integrity.

The journal expects authors to report their research honestly and accurately. Data should not be fabricated, falsified, selectively manipulated, or presented in a misleading manner.

Authors should provide sufficient methodological information to allow readers to understand how the research was conducted and, where appropriate, to assess or reproduce its findings.

The journal expects authors to disclose relevant conflicts of interest, funding sources, and other circumstances that may reasonably be considered relevant to the interpretation of their research.

TJRP seeks inclusion in appropriate national and international abstracting, indexing, and scholarly information services as the journal develops. Information about indexing and abstracting services will be published on the official journal website only after formal confirmation of inclusion.

The journal will not claim indexing, accreditation, ranking, or recognition that has not been officially granted.

Any information concerning the journal's ISSN, indexing status, DOI registration, archival arrangements, or other publishing credentials will be presented accurately and updated when necessary.`
  },
  {
    id: "open-access",
    title: "8. Open Access Statement",
    content: `TJRP is an open-access journal committed to making scholarly research available to readers without subscription barriers.

Published articles are made freely accessible through the journal's official website, subject to the applicable copyright and licensing terms.

The journal considers open access important for the wider circulation of research and for improving access to scholarly knowledge among researchers, students, academic institutions, and the wider community.

Readers may access, read, download, cite, and share published articles in accordance with the license under which each article is published.

Open access does not alter the journal's academic standards. All manuscripts remain subject to the journal's editorial assessment, peer-review requirements, and publication ethics.`
  },
  {
    id: "repository",
    title: "9. Repository & Archiving Policy",
    content: `TJRP recognizes the importance of preserving the scholarly record beyond the life of the journal's current website or publishing platform.

The journal will maintain appropriate arrangements for the long-term preservation and accessibility of its published content.

Published articles may be archived through suitable institutional, subject-based, or digital repositories, subject to the applicable copyright and licensing conditions.

Authors may deposit or share their published work through institutional repositories or personal academic platforms where permitted by the journal's licensing arrangements.

The journal will make reasonable efforts to ensure that bibliographic information, article metadata, and published full-text content remain available to readers over the long term.

Where the journal adopts an external digital preservation service or formal archival system, details of that arrangement will be published on the journal website.`
  },
  {
    id: "ethical",
    title: "10. Ethical Policy & Human Subject Standards",
    content: `TJRP requires research involving human participants to be conducted responsibly and in accordance with applicable ethical and institutional standards.

Authors are responsible for ensuring that their research has received ethical approval where such approval is required by the relevant institution, jurisdiction, discipline, or research design.

Manuscripts involving human participants should provide appropriate information concerning:
• informed consent;
• ethical approval or institutional review, where applicable;
• confidentiality and privacy;
• protection of vulnerable participants;
• management and storage of research data;
• potential risks to participants; and
• consent for publication where personally identifiable information is involved.

Research participants must not be exposed to unnecessary harm, coercion, or unreasonable risk.

Sensitive Research Areas
Given the journal's scope in Religion and Psychology, submissions may involve sensitive subjects such as religious identity, mental health, trauma, personal beliefs, spirituality, family relationships, or social experiences. Authors conducting such research are expected to take particular care to protect participants' privacy and dignity. Personally identifiable information should not be published unless there is a clear ethical and legal basis for doing so and appropriate consent has been obtained.

Psychological and Clinical Research
Research involving psychological assessment, clinical populations, counseling, psychotherapy, mental health interventions, or related areas must follow appropriate professional and ethical standards. Where relevant, authors should identify the ethical or institutional body that approved the research.`
  },
  {
    id: "publication-fees",
    title: "11. Publication Fees & Waivers",
    content: `TJRP believes that publication charges should be communicated clearly and should never be presented to authors after acceptance without prior disclosure.

Any Article Processing Charge (APC), submission fee, or other publication-related charge applicable to a manuscript will be stated clearly on the journal website.
The journal will not introduce an undisclosed mandatory fee during the editorial or publication process.

Waivers
Where a waiver or reduction is available, the eligibility criteria and procedure for requesting it will be stated on the journal website.

Requests for publication-fee waivers will be considered separately from the academic assessment of a manuscript. Financial circumstances will not influence the editorial or peer-review decision.

Editors and reviewers should not use knowledge of an author's fee-waiver request when assessing the academic quality of a manuscript.

The journal will review its fee structure periodically and will communicate any changes before they take effect.`
  },
  {
    id: "ai-policy",
    title: "12. AI and Generative AI Policy",
    content: `Because TJRP publishes research across Religion, Psychology, Digital Religion, Technology, and related fields, the journal recognizes the increasing use of artificial intelligence and generative AI tools in academic research and writing.

The use of AI-assisted tools is not, by itself, considered academic misconduct. However, authors remain fully responsible for the content, accuracy, originality, and integrity of their submissions.

AI tools must not be listed as authors or co-authors because they cannot accept responsibility for the work, disclose conflicts of interest, or take responsibility for the integrity of the research.

Authors who use generative AI tools in preparing a manuscript should disclose their use where it has materially contributed to the research, analysis, generation of content, or preparation of the manuscript. Such disclosure should identify the tool and describe the nature of its use.

Authors remain responsible for:
• verifying all AI-generated information;
• checking references and quotations;
• ensuring that citations are accurate;
• protecting confidential and personal information;
• ensuring originality of the submitted work; and
• complying with copyright and research-ethics requirements.

AI-generated material must not be used to fabricate data, results, references, quotations, participant responses, or research findings.

The journal may request clarification regarding the use of AI tools where questions arise concerning authorship, originality, research integrity, or the accuracy of submitted material.`
  },
  {
    id: "authorship",
    title: "13. Authorship & Contribution Policy",
    content: `Authorship should reflect a genuine and substantial contribution to the research and the manuscript.

Individuals listed as authors should have made meaningful contributions to the conception, design, research, analysis, interpretation, or preparation of the manuscript and should be able to take responsibility for their contribution.

All listed authors should approve the final version of the manuscript and agree to its submission.

Individuals who have contributed to the research but do not meet the criteria for authorship may be acknowledged appropriately.

The corresponding author is responsible for communicating with the journal and for confirming that all authors have approved the submission.

Changes to authorship after submission should be requested formally and must be agreed upon by all affected authors. The journal may require written confirmation before approving any change in authorship.`
  },
  {
    id: "conflict-of-interest",
    title: "14. Conflict of Interest Policy",
    content: `Authors, editors, and reviewers should disclose any relationship or circumstance that could reasonably be perceived as influencing their judgment.

Conflicts of interest may arise from:
• financial relationships;
• employment or institutional affiliations;
• personal relationships;
• academic competition;
• professional relationships;
• funding arrangements; or
• other circumstances that may affect impartiality.

The existence of a conflict does not necessarily prevent publication or participation in peer review. The important requirement is that relevant conflicts are disclosed and managed appropriately.

Editors will take reasonable steps to ensure that conflicts do not compromise the fairness of editorial decisions.

Reviewers who have a significant conflict of interest should decline the review assignment.`
  },
  {
    id: "corrections-retractions",
    title: "15. Corrections, Retractions & Post-Publication Policy",
    content: `TJRP seeks to maintain an accurate and reliable scholarly record. If an error or problem is identified after publication, the journal will assess the matter and take appropriate action.

Corrections
A correction may be published when an error affects the accuracy or clarity of the published article but does not invalidate the principal findings.

Retractions
An article may be retracted when there is substantial evidence that its findings or publication record are unreliable, for example because of serious research misconduct, fabricated or falsified data, substantial plagiarism, or other significant breaches of publication ethics.
A retraction notice will explain the reason for the action and will remain linked to the original publication.

Expressions of Concern
Where serious questions arise but the available evidence is not yet sufficient to justify a correction or retraction, the journal may publish an expression of concern while the matter is investigated.

The journal will seek to handle post-publication matters fairly, confidentially where appropriate, and with due regard for the integrity of the scholarly record.`
  },
  {
    id: "complaints-appeals",
    title: "16. Complaints & Appeals Policy",
    content: `TJRP welcomes legitimate concerns concerning editorial decisions, peer review, publication ethics, authorship, or other aspects of the publication process.

Authors may submit an appeal when they believe that an editorial decision was based on a significant misunderstanding of the manuscript, an important factual error, or an apparent procedural irregularity.

An appeal should provide a clear explanation of the concern and, where relevant, identify specific evidence supporting the request.

Appeals are considered by the Editor-in-Chief or an appropriate senior member of the editorial team. The journal may seek an additional independent assessment where necessary.

An appeal does not guarantee reversal of the original decision.

Complaints concerning publication ethics or research misconduct will be reviewed separately from ordinary editorial appeals. The journal may contact authors, reviewers, institutions, or other relevant parties when necessary to establish the facts.`
  }
];
