const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sequenceDir = path.join(__dirname, 'sequence');
const outputDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Find the first GIF in the sequence directory
const files = fs.readdirSync(sequenceDir);
const gifFile = files.find(file => file.endsWith('.gif'));

if (!gifFile) {
    console.error("No GIF file found in the 'sequence' directory!");
    process.exit(1);
}

const inputGif = path.join(sequenceDir, gifFile);

async function extractFrames() {
    try {
        console.log(`Analyzing GIF: ${gifFile}...`);
        const metadata = await sharp(inputGif).metadata();
        const pages = metadata.pages || 1;
        console.log(`Found ${pages} frames in the GIF. Extracting to WebP...`);
        
        // Clear old frames first to avoid mixing
        const oldFiles = fs.readdirSync(outputDir);
        for (const file of oldFiles) {
            if (file.endsWith('.webp')) {
                fs.unlinkSync(path.join(outputDir, file));
            }
        }

        for (let i = 0; i < pages; i++) {
            const frameIndex = (i + 1).toString().padStart(4, '0');
            const outputPath = path.join(outputDir, `${frameIndex}.webp`);
            
            await sharp(inputGif, { page: i })
                .toFormat('webp', { quality: 80 })
                .toFile(outputPath);
            
            if (i % 10 === 0 || i === pages - 1) {
                console.log(`Extracted frame ${frameIndex} / ${pages.toString().padStart(4, '0')}`);
            }
        }
        
        console.log(`SUCCESS_FRAME_COUNT:${pages}`);
        console.log(`Successfully extracted ${pages} frames to public/sequence/`);
    } catch (err) {
        console.error("Error extracting frames:", err);
    }
}

extractFrames();
