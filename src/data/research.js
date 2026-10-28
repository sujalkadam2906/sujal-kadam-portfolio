// Source of truth: Sujal_Kadam_Resume.pdf & Research Papers directory
// Per brief Section 2.4: TFGET manuscript is gated behind SHOW_TFGET_PDF=false due to pending publisher copyright.
export const SHOW_TFGET_PDF = false;

export const publications = [
  {
    id: "epj-staaar-2025",
    number: "01",
    title:
      "Condition Monitoring of Rolling Element Bearings Through Statistical Features and Support Vector Machine",
    authors: [
      "Pravin Gosavi",
      "Nikita Chougule",
      "Sujal Kadam",
      "Saniya Naik",
      "Vaishnavi Gavade",
    ],
    myAuthorPosition: 3,
    venue: "EPJ Web of Conferences 355, 01004 (2026) — STAAAR 2025",
    conference:
      "4th International Conference on Sustainable Technologies and Advances in Automation, Aerospace and Robotics (STAAAR-2025), 17–18 December 2025, VIT Bhopal University",
    status: "Published (Open Access)",
    statusTone: "published",
    doi: "10.1051/epjconf/202635501004",
    doiUrl: "https://doi.org/10.1051/epjconf/202635501004",
    pdfUrl: "/research/epjconf_staaar2026_01004.pdf",
    hasPublicPdf: true,
    summary:
      "Analyzes vibration signatures of an SKF 6206 deep-groove ball bearing across multiple rotational speeds and outer-race defect dimensions. Extracts key statistical features — RMS, crest factor, peak amplitude, kurtosis, and skewness — from vibration sensor signals to train a Support Vector Machine classifier, achieving robust separation of healthy vs. faulty operational states.",
    keywords: [
      "Condition Monitoring",
      "Rolling Element Bearings",
      "Support Vector Machine",
      "Feature Engineering",
      "Vibration Analysis",
    ],
  },
  {
    id: "tfget-nit-2026",
    number: "02",
    title:
      "Data-Driven Fault Detection in Rolling Element Bearings Using Machine Learning for Predictive Maintenance",
    authors: [
      "Nikita Chougule",
      "Pravin Gosavi",
      "Sujal Kadam",
      "Saniya Naik",
      "Vaishnavi Gavade",
    ],
    myAuthorPosition: 3,
    venue:
      "1st International Conference on Thermo-Fluids & Green Energy Technology (TFGET 2026), NIT Jalandhar",
    conference: "National Institute of Technology (NIT) Jalandhar",
    status: "Selected for Springer Publication",
    statusTone: "selected",
    doi: null,
    doiUrl: null,
    pdfUrl: SHOW_TFGET_PDF ? "/research/tfget2026_paper_id_87.pdf" : null,
    hasPublicPdf: SHOW_TFGET_PDF,
    summary:
      "Presents a comprehensive data-driven framework for early bearing fault detection under diverse operating loads. Investigates statistical feature extraction coupled with supervised classifiers (Random Forest, SVM, KNN), demonstrating high predictive reliability for industrial predictive maintenance regimes.",
    keywords: [
      "Predictive Maintenance",
      "Machine Learning",
      "Fault Detection",
      "Vibration Signals",
      "Springer Publication",
    ],
  },
];
