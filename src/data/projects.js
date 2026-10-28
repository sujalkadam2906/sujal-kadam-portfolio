// Source of truth: Sujal_Kadam_Resume.pdf (Projects section & embedded hyperlinks)
export const projects = [
  {
    id: "opportunity-radar",
    number: "01",
    title: "Opportunity Radar",
    subtitle: "Freshness-First Job Discovery Application",
    tagline:
      "A fast, responsive job tracking and discovery engine with deterministic skill-fit scoring and offline persistence.",
    filterTags: ["React", "TypeScript", "Frontend"],
    stack: ["React 18", "TypeScript", "Vite", "IndexedDB", "Vitest", "React Testing Library"],
    links: {
      live: "https://opportunity-radar-nine-smoky.vercel.app/",
      github: "https://github.com/sujalkadam2906/opportunity-radar",
      paper: null,
    },
    image: "/projects/opportunity-radar.webp",
    featured: true,
    summary:
      "Engineered a high-performance web interface featuring multi-criteria job filters and deterministic skill-fit scoring. Integrated a complete application tracking board with stage management, interview logs, notes, and CSV data export.",
    problem:
      "Job seekers waste hours scrolling duplicate or stale job boards with opaque matching criteria and lose track of submitted applications.",
    built:
      "A client-side job discovery and tracking web application with instant reactive filtering, skill matching algorithms, and optimistic offline persistence.",
    highlights: [
      "Multi-criteria filtering across role, seniority, freshness, and tech stack.",
      "Deterministic skill-fit scoring algorithm breaking down matched vs. missing skills.",
      "Application tracker with stage updates (Applied, Screening, Interview, Offer), interview dates, notes, and full CSV export.",
      "IndexedDB persistence layer ensuring zero data loss and optimistic UI updates.",
      "Optional Node.js WebSocket stream integration with automatic reconnect and offline fallback.",
      "WCAG 2.2 AA accessibility audit: focus traps in modals, ARIA live regions, and full keyboard navigation.",
      "Unit and component test suite authored in Vitest and React Testing Library.",
    ],
    impact:
      "Zero-latency search and filtering with complete offline resilience and full keyboard operability.",
    myContribution:
      "Designed and implemented the complete React 18 + TypeScript frontend, IndexedDB state management, and automated test suite.",
  },
  {
    id: "vogue-vault",
    number: "02",
    title: "Vogue Vault",
    subtitle: "Fashion E-Commerce Frontend",
    tagline:
      "Modern e-commerce storefront with dynamic price calculation, size-aware cart management, and coupon validation.",
    filterTags: ["JavaScript", "Frontend"],
    stack: ["HTML5", "CSS3", "JavaScript ES6+", "Vite", "localStorage"],
    links: {
      live: "https://voguevaultproject.netlify.app/",
      github: "https://github.com/sujalkadam2906/vogue-vault-project",
      paper: null,
    },
    image: "/projects/vogue-vault.webp",
    featured: true,
    summary:
      "Built a modern fashion e-commerce storefront with real-time product search, category filtering, price sorting, size-aware shopping bag, wishlist, and dynamic coupon discounting.",
    problem:
      "E-commerce prototypes often lack realistic state handling for inventory size variants, cart discounts, and multi-step checkout states.",
    built:
      "A responsive shopping interface with live catalog filtering, persistent cart state across page reloads, and multi-step checkout simulation.",
    highlights: [
      "Instant product catalog search, category filtering, and sorting by price/popularity.",
      "Size-aware cart management and wishlist state synchronized with browser localStorage.",
      "Dynamic discount coupon engine with client-side code verification and price recalculation.",
      "Form validation with real-time feedback across input fields.",
      "Simulated multi-step checkout flow with order confirmation state.",
      "Constructed utilizing a CLI AI coding agent workflow; code reviewed, refactored, and verified personally.",
    ],
    impact:
      "Lightweight, dependency-free vanilla JS architecture loading in milliseconds without third-party frameworks.",
    myContribution:
      "Architected the modular ES6+ component structure, prompt-engineered the workflow via CLI AI tools, and conducted comprehensive manual and edge-case testing.",
  },
  {
    id: "employee-management-rest-api",
    number: "03",
    title: "Employee Management REST API",
    subtitle: "Enterprise CRUD Backend Service",
    tagline:
      "Robust Spring Boot RESTful API with Hibernate ORM, relational MySQL database, and JUnit 5 test coverage.",
    filterTags: ["Java", "Backend"],
    stack: [
      "Java 8",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "JUnit 5",
      "Maven",
    ],
    links: {
      live: null, // No live button per Section 2.3
      github: "https://github.com/sujalkadam2906/employee-management-rest-api",
      paper: null,
    },
    image: null,
    featured: false,
    summary:
      "Architected a production-ready RESTful service supporting full CRUD operations for employee records, department structures, and compensation tiers with strict relational consistency.",
    problem:
      "Internal organizational systems require dependable, structured APIs with strict validation, centralized error responses, and clean database abstraction.",
    built:
      "Layered enterprise backend service adhering to clean architecture patterns: Controller, Service, Repository, and Data Transfer Objects (DTOs).",
    highlights: [
      "Complete REST API endpoints: GET, POST, PUT, DELETE with HTTP status semantics.",
      "Layered separation of concerns: Controller -> Service -> Repository -> Entity mapping.",
      "Spring Data JPA and Hibernate ORM schema binding backed by MySQL.",
      "Relational integrity constraints, primary and foreign keys, cascade configurations.",
      "Global exception handling via @ControllerAdvice and standardized JSON error payloads.",
      "Input validation utilizing Bean Validation annotations (@NotNull, @Email, @Size).",
      "Automated unit test suite utilizing JUnit 5 and Mockito for service and controller verification.",
    ],
    impact:
      "Maintainable, test-covered enterprise backend ready for horizontal scaling or containerized deployment.",
    myContribution:
      "Sole developer: authored domain entities, repository contracts, service business logic, and REST controllers.",
  },
  {
    id: "online-bookstore-sql",
    number: "04",
    title: "Online Bookstore Database Analysis",
    subtitle: "Relational Schema Design & Business Analytics",
    tagline:
      "Normalized 3NF relational schema and complex SQL query suite deriving sales, inventory, and customer insights in PostgreSQL.",
    filterTags: ["SQL", "Databases"],
    stack: ["PostgreSQL", "SQL", "Relational Design", "Analytics", "Database Normalization"],
    links: {
      live: null,
      github: "https://github.com/sujalkadam2906/online-bookstore-sql",
      paper: null,
    },
    image: null,
    featured: false,
    summary:
      "Designed a normalized 3NF database schema for an online bookstore and authored complex analytical SQL queries to evaluate sales performance, customer purchasing trends, and inventory turnover.",
    problem:
      "Translating raw retail transaction data into actionable business metrics requires well-structured database schemas and performant SQL queries.",
    built:
      "Comprehensive PostgreSQL database solution modeling customers, authors, books, orders, order items, and shipping statuses, accompanied by analytical reporting scripts.",
    highlights: [
      "Relational schema normalized to Third Normal Form (3NF) to eliminate data redundancy.",
      "Primary and foreign key constraints enforcing referential integrity.",
      "Analytical queries authored with multi-table INNER/LEFT/RIGHT JOINs.",
      "Aggregation pipelines with GROUP BY, HAVING, and window functions (RANK, DENSE_RANK, SUM OVER).",
      "Business metrics analysis: monthly revenue growth, top-grossing authors, high-value repeat customers, stock reorder thresholds.",
      "Optimized query execution plans and index placement on frequent filter columns.",
    ],
    impact:
      "Demonstrates practical mastery of enterprise relational database modeling and advanced SQL analytics.",
    myContribution:
      "Designed schema DDL, generated representative mock datasets, authored analytical DML queries, and documented query execution insights.",
  },
  {
    id: "bearing-fault-diagnosis-ml",
    number: "05",
    title: "Bearing Fault Diagnosis Using Machine Learning",
    subtitle: "Flagship Research Project & Maurya Excellence Award Winner",
    tagline:
      "Vibration signal condition monitoring pipeline with statistical feature extraction and Support Vector Machine classification achieving >95% accuracy.",
    filterTags: ["ML", "Research"],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn (SVM)",
      "MATLAB",
      "ANSYS Workbench",
    ],
    links: {
      live: null,
      github: null,
      paper: "https://doi.org/10.1051/epjconf/202635501004",
    },
    image: null,
    featured: true,
    summary:
      "Flagship final-year engineering mega project. Built an automated condition monitoring pipeline to detect bearing faults using vibration sensor data, statistical time-domain features, and tuned SVM classification with over 95% accuracy.",
    problem:
      "Unplanned bearing failure in industrial rotating machinery causes costly operational downtime and equipment breakdown. Traditional scheduled maintenance often detects defects too late.",
    built:
      "End-to-end vibration analysis pipeline: experimental sensor data ingestion, signal cleaning, statistical feature engineering, and supervised machine learning classification.",
    highlights: [
      "Analyzed SKF 6206 deep-groove ball bearing vibration signals across healthy and outer-race defect conditions at multiple operating speeds.",
      "Engineered statistical time-domain features: RMS, kurtosis, skewness, crest factor, and peak amplitude.",
      "Trained and hyperparameter-tuned Support Vector Machine (SVM) and classification models.",
      "Achieved >95% classification accuracy on held-out test data without requiring heavy deep-learning computation.",
      "Benchmarked models against the Case Western Reserve University (CWRU) bearing dataset.",
      "Cross-validated with ANSYS finite element simulation and MATLAB nonlinear dynamic ODE models.",
      "Awarded the Maurya Excellence Award for Best Final-Year Mega Project (KIT's Dept. of Mechanical Engineering, 2025–26).",
      "Co-authored two research papers: 1 published in EPJ Web of Conferences (STAAAR 2025) and 1 selected for Springer publication (TFGET 2026).",
    ],
    impact:
      "Delivered a lightweight, highly accurate predictive maintenance classifier suitable for real-time edge deployment on industrial machinery.",
    myContribution:
      "Within a 5-member team, I personally owned the machine-learning pipeline: signal data preprocessing, statistical feature engineering in Pandas/NumPy, and training/tuning the SVM classification models in scikit-learn.",
  },
];

export const featuredProject = projects[4];

