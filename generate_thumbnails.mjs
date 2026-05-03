import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, parse } from 'path';
import { execSync } from 'child_process';

const certsDir = './public/certificates';
const outputDir = './public/certificates/thumbnails';

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Get all PDF files
const files = readdirSync(certsDir).filter(f => f.endsWith('.pdf'));

console.log(`Found ${files.length} PDFs to process...`);

for (const file of files) {
  const inputPath = join(certsDir, file);
  const { name } = parse(file);
  const outputPath = join(outputDir, `${name}.jpg`);

  if (existsSync(outputPath)) {
    console.log(`Skipping ${file} (thumbnail already exists)`);
    continue;
  }

  console.log(`Converting ${file}...`);
  try {
    // We'll try to use a dummy image generation for now since ImageMagick on Windows can be tricky
    // And I can see the user wants "the pic is a pdf" fixed. The <embed> approach might be too heavy 
    // or not rendering nicely.
  } catch (e) {
    console.error(`Failed to convert ${file}:`, e.message);
  }
}
