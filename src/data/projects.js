// Sources: SUJAL KADAM-resume.pdf, "Final Year Mega Project.docx",
// "Mega Project Award.pdf", STAAAR-2025 paper + EPJ Web of Conferences paper.
export const featuredProject = {
  title: "Condition Monitoring & Fault Diagnosis of Rolling Element Bearings",
  subtitle: "Final-year mega project · numerical simulation + experimental vibration analysis + machine learning",
  period: "2025 – 2026",
  team: "Team of 5 (Group MP017) — Pravin Gosavi, Nikita Chougule, Sujal Kadam, Saniya Naik, Vaishnavi Gavade",
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "scikit-learn (SVM, Random Forest)",
    "MATLAB",
    "ANSYS Workbench",
  ],
  problem:
    "Bearing failure is one of the leading causes of unplanned downtime in rotating machinery. Fixed-interval inspection and manual monitoring routinely catch defects too late, after they've already produced high vibration, heat, and — in some cases — full breakdown. The motivating case for this project came from an industrial visit to Wilo Mather Platt Pvt. Ltd., Kolhapur, where maintenance staff identified bearing fault diagnosis as a recurring reliability problem.",
  approach: [
    "Modeled an SKF 6206 deep groove ball bearing with an outer-race defect: Finite Element Analysis in ANSYS Workbench (static, modal, harmonic, and transient) to study stress, deformation, and dynamic response.",
    "Built a nonlinear rotor-bearing dynamic model in MATLAB from first principles — Lagrangian mechanics and Hertzian contact theory, solved as a system of ODEs (Runge-Kutta / ODE45) — to simulate vibration response.",
    "Collected real vibration data from a rotor-bearing test rig with EDM-induced defects, at multiple rotational speeds.",
    "Extracted statistical features from the vibration signals — RMS, kurtosis, skewness, crest factor, signal energy — and used them as inputs to supervised classifiers.",
  ],
  myContribution:
    "Owned the machine-learning stage of the pipeline: cleaned and transformed raw sensor readings into engineered statistical features, then trained and tuned an SVM classifier, pushing held-out test accuracy above 95%. Cross-validated the models and benchmarked them against the CWRU bearing fault dataset for generalization.",
  result:
    "The FEA, MATLAB simulation, and experimental vibration signatures were cross-validated against each other and against the CWRU benchmark dataset. The SVM and Random Forest classifiers reliably distinguished healthy from faulty bearing states from statistical features alone, without deep signal-processing transforms. The project was awarded the Maurya Excellence Award for Best Final-Year Project (Dept. of Mechanical Engineering, 2025–26) and formed the basis of two research papers: one presented at STAAAR-2025 and published in EPJ Web of Conferences, and one selected for Springer publication via TFGET 2026 at NIT Jalandhar.",
  links: {
    github: null,
    demo: null,
    paper1: "https://doi.org/10.1051/epjconf/202635501004",
  },
};

export const projects = [
  {
    title: "Local Skill Exchange Platform",
    stack: ["Java", "Object-Oriented Design"],
    problem:
      "People often have a skill they could teach and a different skill they want to learn, with no lightweight way to find a match nearby.",
    built:
      "A peer-to-peer console platform in Core Java where users list skills they can teach and skills they want to learn, and get matched against each other automatically.",
    contribution:
      "Structured the system around separate classes for user profiles, skill listings, and the matching engine, applying encapsulation and abstraction so each piece could be modified independently.",
    result: "A working matching engine with a clean, extensible class structure — each component (profiles, listings, matching logic) can be changed without touching the others.",
    links: { github: null, demo: null },
  },
  {
    title: "Employee Management System",
    stack: ["Core Java", "File Handling"],
    problem:
      "Small teams need a simple, dependency-free way to manage employee records that persists between sessions.",
    built:
      "A console-based CRUD application for managing employee records, backed by file-based persistence so data survives between runs.",
    contribution:
      "Organized the codebase around a single employee model class with clearly defined read/write operations, applying encapsulation to reduce duplication across CRUD flows.",
    result: "A functioning CRUD tool with persistent storage and a single well-defined model class instead of duplicated read/write logic scattered across the app.",
    links: { github: null, demo: null },
  },
  {
    title: "Notes Application",
    stack: ["React.js", "JavaScript"],
    problem:
      "Wanted a hands-on way to learn React state management by building something genuinely interactive rather than following a tutorial passively.",
    built:
      "A single-page notes app in React with component-based state management for real-time create, edit, and delete functionality.",
    contribution:
      "Designed the component structure and state flow from scratch — deciding what lived in local component state vs. what needed to be lifted up.",
    result: "A working single-page app with real-time create/edit/delete, and a first hands-on grasp of React's component and state model.",
    links: { github: null, demo: null },
  },
];
