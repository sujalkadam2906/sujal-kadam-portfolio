import https from 'node:https';
import http from 'node:http';
import { URL } from 'node:url';
import { profile } from '../src/data/profile.js';
import { projects } from '../src/data/projects.js';
import { publications } from '../src/data/research.js';
import { certificates } from '../src/data/certifications.js';

const urlsToCheck = new Set();

// Profile
if (profile.github) urlsToCheck.add(profile.github);
if (profile.linkedin) urlsToCheck.add(profile.linkedin);
if (profile.portfolio) urlsToCheck.add(profile.portfolio);

// Projects
projects.forEach((p) => {
  if (p.links.live) urlsToCheck.add(p.links.live);
  if (p.links.github) urlsToCheck.add(p.links.github);
  if (p.links.paper) urlsToCheck.add(p.links.paper);
});

// Research
publications.forEach((pub) => {
  if (pub.doiUrl) urlsToCheck.add(pub.doiUrl);
});

// Certificates
certificates.forEach((c) => {
  if (c.verifyUrl) urlsToCheck.add(c.verifyUrl);
});

console.log(`Checking ${urlsToCheck.size} unique external links...\n`);

function checkUrl(urlStr) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(urlStr);
      const client = parsed.protocol === 'https:' ? https : http;

      const req = client.request(
        parsed,
        {
          method: 'HEAD',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
          },
          timeout: 10000,
        },
        (res) => {
          // If 405 Method Not Allowed on HEAD, retry with GET
          if (res.statusCode === 405) {
            const getReq = client.request(
              parsed,
              {
                method: 'GET',
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                  Range: 'bytes=0-100',
                },
                timeout: 10000,
              },
              (getRes) => {
                resolve({ url: urlStr, status: getRes.statusCode, ok: getRes.statusCode < 400 });
              }
            );
            getReq.on('error', (err) => resolve({ url: urlStr, status: 'ERROR', error: err.message, ok: false }));
            getReq.end();
            return;
          }

          resolve({ url: urlStr, status: res.statusCode, ok: res.statusCode < 400 });
        }
      );

      req.on('error', (err) => {
        resolve({ url: urlStr, status: 'ERROR', error: err.message, ok: false });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ url: urlStr, status: 'TIMEOUT', ok: false });
      });

      req.end();
    } catch (err) {
      resolve({ url: urlStr, status: 'INVALID', error: err.message, ok: false });
    }
  });
}

const results = await Promise.all(Array.from(urlsToCheck).map(checkUrl));

console.table(
  results.map((r) => ({
    URL: r.url,
    Status: r.status,
    Result: r.ok ? 'PASS' : (r.status === 403 || r.status === 429 ? 'PASS (Rate-limited)' : 'FAIL'),
  }))
);

const anyFails = results.filter((r) => !r.ok && r.status !== 403 && r.status !== 429);
if (anyFails.length > 0) {
  console.warn(`\nWarning: ${anyFails.length} links failed check:`);
  anyFails.forEach((f) => console.warn(` - ${f.url} (${f.status})`));
} else {
  console.log('\nAll external links verified successfully!');
}
