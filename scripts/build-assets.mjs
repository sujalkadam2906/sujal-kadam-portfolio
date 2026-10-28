import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';

const SOURCE_DOCS_DIR = 'D:/Sujal Kadam/My Doc/My Portfolio Docs';
const CERTS_SRC_DIR = path.join(SOURCE_DOCS_DIR, 'Certificates');
const PAPERS_SRC_DIR = path.join(SOURCE_DOCS_DIR, 'Research Papers');
const RESUME_SRC = path.join(SOURCE_DOCS_DIR, 'Sujal_Kadam_Resume.pdf');

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const CERTS_OUT_DIR = path.join(PUBLIC_DIR, 'certificates');
const CERTS_ORIG_DIR = path.join(CERTS_OUT_DIR, 'original');
const CERTS_THUMB_DIR = path.join(CERTS_OUT_DIR, 'thumbs');
const CERTS_PREV_DIR = path.join(CERTS_OUT_DIR, 'previews');
const SOURCE_ASSETS_DIR = path.join(ROOT_DIR, 'source-assets');
const IMAGES_OUT_DIR = path.join(PUBLIC_DIR, 'images');
const PROJECTS_OUT_DIR = path.join(PUBLIC_DIR, 'projects');
const RESEARCH_OUT_DIR = path.join(PUBLIC_DIR, 'research');
const TEMP_DIR = path.join(ROOT_DIR, '.temp_asset_build');

// Ensure directories
[
  CERTS_OUT_DIR,
  CERTS_ORIG_DIR,
  CERTS_THUMB_DIR,
  CERTS_PREV_DIR,
  SOURCE_ASSETS_DIR,
  IMAGES_OUT_DIR,
  PROJECTS_OUT_DIR,
  RESEARCH_OUT_DIR,
  TEMP_DIR,
].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const CERTIFICATES = [
  {
    id: 'complete-java',
    file: 'Complete Java Course.pdf',
    title: 'Complete Java',
    issuer: 'KnowledgeGate',
    category: 'Programming',
    date: '23 Jun 2026',
    detail: 'Score 79%. Verify: https://knowledgegate.in/certificate/8B35D28D',
    verifyUrl: 'https://knowledgegate.in/certificate/8B35D28D',
  },
  {
    id: 'complete-javascript',
    file: 'Complete JAVASCRIPT.pdf',
    title: 'Complete JavaScript',
    issuer: 'KnowledgeGate',
    category: 'Programming',
    date: '21 Oct 2026',
    detail: 'Score 86%. Verify: https://knowledgegate.in/certificate/4BA9855F',
    verifyUrl: 'https://knowledgegate.in/certificate/4BA9855F',
  },
  {
    id: 'sql-micro-course',
    file: 'SQL Certificate.png',
    title: '30 Days SQL Micro Course',
    issuer: 'SkillCourse',
    category: 'Data / SQL',
    date: '3 Oct 2026',
    detail: 'ID SC-0FYP9VSCYE',
    isImage: true,
  },
  {
    id: 'python-bootcamp-2026',
    file: '[English]_Complete_2026_Python_Bootcamp__Learn_Python_from_Scratch_Certificate.pdf',
    title: 'Complete 2026 Python Bootcamp',
    issuer: 'CodeWithHarry',
    category: 'Programming',
    date: '17 Oct 2026',
    detail: 'ID CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-G175703M',
    needsCompression: true,
  },
  {
    id: 'web-development-bootcamp-2026',
    file: '[English]_Ultimate_Web_Development_Course_2026_-_Build_Modern_Websites_Certificate.pdf',
    title: 'Ultimate Web Development Course 2026',
    issuer: 'CodeWithHarry',
    category: 'Web',
    date: '7 May 2026',
    detail: 'ID CWH-THE-ULTIMATE-WEB-DEV-COURSE-G175703M',
    needsCompression: true,
  },
  {
    id: 'python-using-ai-workshop',
    file: 'Python Certification.pdf',
    title: 'Python Using AI Workshop',
    issuer: 'AI For Techies',
    category: 'Programming',
    date: '1 Feb 2026',
    detail: 'Workshop',
  },
  {
    id: 'tata-ready-engineer',
    file: 'TATA Ready Engineer_certificate.pdf',
    title: 'Ready Engineer, Advanced Automobile Design',
    issuer: 'Tata Technologies (CSR)',
    category: 'Academic',
    date: '2024-25',
    detail: 'Certified Ready Engineer (score above 60%), ID TTL/RE/2024-25/18/11760',
  },
  {
    id: 'staaar-paper-presentation',
    file: 'Paper Presentation Certificate.pdf',
    title: 'Paper Presentation, STAAAR-2025',
    issuer: 'VIT Bhopal University',
    category: 'Research',
    date: '17-18 Dec 2025',
    detail: 'Certificate of Appreciation for presenting the bearing paper',
  },
  {
    id: 'mega-project-award',
    file: 'Mega Project Award.pdf',
    title: 'Maurya Excellence Award, Best Final-Year Project 2025-26',
    issuer: "Dept. of Mechanical Engineering, KIT's",
    category: 'Award',
    date: '5 Jun 2026',
    detail: 'Awarded to my bearing condition-monitoring project',
    rotateDegrees: 270, // 270 deg clockwise rotation fixes the portrait scan into landscape
  },
];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function run() {
  console.log('=== Step 1: Copy Resume ===');
  const resumeDest = path.join(PUBLIC_DIR, 'Sujal_Kadam_Resume.pdf');
  fs.copyFileSync(RESUME_SRC, resumeDest);
  console.log(`Copied resume to ${resumeDest} (${formatBytes(fs.statSync(resumeDest).size)})`);

  console.log('\n=== Step 2: Copy Research Papers ===');
  const epjSrc = path.join(PAPERS_SRC_DIR, 'epjconf_staaar2026_01004.pdf');
  const tfgetSrc = path.join(PAPERS_SRC_DIR, 'Paper id 87.pdf');
  const epjDest = path.join(RESEARCH_OUT_DIR, 'epjconf_staaar2026_01004.pdf');
  const tfgetDest = path.join(RESEARCH_OUT_DIR, 'tfget2026_paper_id_87.pdf');
  fs.copyFileSync(epjSrc, epjDest);
  fs.copyFileSync(tfgetSrc, tfgetDest);
  console.log(`EPJ Paper: ${epjDest} (${formatBytes(fs.statSync(epjDest).size)})`);
  console.log(`TFGET Paper: ${tfgetDest} (${formatBytes(fs.statSync(tfgetDest).size)})`);

  console.log('\n=== Step 3: Optimize Profile Photo ===');
  const photoSrc = path.join(ROOT_DIR, 'src/assets/profile.jpg');
  await sharp(photoSrc)
    .resize(480, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_OUT_DIR, 'profile-480.webp'));
  await sharp(photoSrc)
    .resize(480, null, { withoutEnlargement: true })
    .avif({ quality: 80 })
    .toFile(path.join(IMAGES_OUT_DIR, 'profile-480.avif'));
  await sharp(photoSrc)
    .resize(900, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(IMAGES_OUT_DIR, 'profile-900.webp'));
  await sharp(photoSrc)
    .resize(900, null, { withoutEnlargement: true })
    .avif({ quality: 80 })
    .toFile(path.join(IMAGES_OUT_DIR, 'profile-900.avif'));
  console.log('Generated AVIF & WebP photo at 480w and 900w');

  console.log('\n=== Step 4: Process Certificates ===');
  const resultsTable = [];

  for (const cert of CERTIFICATES) {
    const srcPath = path.join(CERTS_SRC_DIR, cert.file);
    const origSize = fs.statSync(srcPath).size;

    let finalPdfName = `${cert.id}.pdf`;
    let origDestName = `${cert.id}${path.extname(cert.file)}`;
    let origDestPath = path.join(CERTS_ORIG_DIR, origDestName);
    fs.copyFileSync(srcPath, origDestPath);

    // Keep original copy in source-assets if compression needed
    if (cert.needsCompression) {
      fs.copyFileSync(srcPath, path.join(SOURCE_ASSETS_DIR, origDestName));
    }

    let renderedPng;

    if (cert.isImage) {
      // It's a JPEG image masquerading as PNG
      const normJpg = path.join(CERTS_OUT_DIR, `${cert.id}.jpg`);
      await sharp(srcPath).jpeg({ quality: 90 }).toFile(normJpg);
      renderedPng = path.join(TEMP_DIR, `${cert.id}.png`);
      await sharp(srcPath).png().toFile(renderedPng);
      finalPdfName = `${cert.id}.jpg`;
    } else {
      // PDF handling
      const outPdfPath = path.join(CERTS_OUT_DIR, finalPdfName);

      if (cert.rotateDegrees) {
        // Rotate PDF using Python pypdf
        const pyScript = `
from pypdf import PdfReader, PdfWriter
r = PdfReader(r'''${srcPath}''')
w = PdfWriter()
page = r.pages[0]
page.rotate(${cert.rotateDegrees})
w.add_page(page)
with open(r'''${outPdfPath}''', 'wb') as f:
    w.write(f)
`;
        fs.writeFileSync(path.join(TEMP_DIR, 'rot.py'), pyScript);
        execSync(`python "${path.join(TEMP_DIR, 'rot.py')}"`);
      } else if (cert.needsCompression) {
        // Compress raw uncompressed RGB bitmap inside CodeWithHarry PDF
        const pyScript = `
from pypdf import PdfReader
from PIL import Image
r = PdfReader(r'''${srcPath}''')
page = r.pages[0]
img = page.images[0].image
img.save(r'''${outPdfPath}''', 'PDF', resolution=150.0, quality=85)
`;
        fs.writeFileSync(path.join(TEMP_DIR, 'compress.py'), pyScript);
        execSync(`python "${path.join(TEMP_DIR, 'compress.py')}"`);
      } else {
        fs.copyFileSync(srcPath, outPdfPath);
      }

      // Render high-res PNG for thumbnail/preview using pdftoppm
      const ppmPrefix = path.join(TEMP_DIR, `ppm_${cert.id}`);
      execSync(`pdftoppm -png -r 150 "${outPdfPath}" "${ppmPrefix}"`);
      renderedPng = `${ppmPrefix}-1.png`;
    }

    // Generate WebP Preview (~1600px wide) and Thumbnail (~640px wide)
    const prevPath = path.join(CERTS_PREV_DIR, `${cert.id}.webp`);
    const thumbPath = path.join(CERTS_THUMB_DIR, `${cert.id}.webp`);

    await sharp(renderedPng)
      .resize(1600, null, { withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(prevPath);

    await sharp(renderedPng)
      .resize(640, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(thumbPath);

    const finalDownloadPath = path.join(CERTS_OUT_DIR, finalPdfName);
    const finalDownloadSize = fs.statSync(finalDownloadPath).size;
    const thumbSize = fs.statSync(thumbPath).size;
    const prevSize = fs.statSync(prevPath).size;

    resultsTable.push({
      id: cert.id,
      title: cert.title,
      category: cert.category,
      originalFile: cert.file,
      origSize: formatBytes(origSize),
      finalDownload: finalPdfName,
      downloadSize: formatBytes(finalDownloadSize),
      thumbSize: formatBytes(thumbSize),
      prevSize: formatBytes(prevSize),
    });
  }

  console.log('\n=== Step 5: Capture Live Project Screenshots ===');
  try {
    const { chromium } = await import('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    console.log('Capturing Opportunity Radar screenshot...');
    await page.goto('https://opportunity-radar-nine-smoky.vercel.app/', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });
    const oppPath = path.join(PROJECTS_OUT_DIR, 'opportunity-radar.webp');
    await page.screenshot({ path: oppPath, type: 'webp', quality: 85 });
    console.log(`Saved ${oppPath} (${formatBytes(fs.statSync(oppPath).size)})`);

    console.log('Capturing Vogue Vault screenshot...');
    await page.goto('https://voguevaultproject.netlify.app/', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });
    const voguePath = path.join(PROJECTS_OUT_DIR, 'vogue-vault.webp');
    await page.screenshot({ path: voguePath, type: 'webp', quality: 85 });
    console.log(`Saved ${voguePath} (${formatBytes(fs.statSync(voguePath).size)})`);

    await browser.close();
  } catch (err) {
    console.warn('Playwright screenshot capture encountered error, falling back:', err.message);
  }

  // Clean temp dir
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });

  console.log('\n================ CERTIFICATE OPTIMIZATION SUMMARY ================');
  console.table(
    resultsTable.map((r) => ({
      Title: r.title,
      Category: r.category,
      'Orig Size': r.origSize,
      'Download Size': r.downloadSize,
      'Thumb (WebP)': r.thumbSize,
      'Preview (WebP)': r.prevSize,
    }))
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
