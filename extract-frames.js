const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputGif = path.join(__dirname, 'sequence', 'Whisk_q2ywczyildn5kzny0cmkfwotqwm0qtlkjwmm1im-ezgif.com-video-to-gif-converter.gif');
const outputDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

async function extractFrames() {
    try {
        console.log("Analyzing GIF...");
        const metadata = await sharp(inputGif).metadata();
        const pages = metadata.pages || 1;
        console.log(`Found ${pages} frames in the GIF. Extracting to WebP...`);
        
        for (let i = 0; i < pages; i++) {
            const frameIndex = (i + 1).toString().padStart(4, '0');
            const outputPath = path.join(outputDir, `${frameIndex}.webp`);
            
            await sharp(inputGif, { page: i })
                .toFormat('webp', { quality: 80 })
                .toFile(outputPath);
            
            if (i % 10 === 0) {
                console.log(`Extracted frame ${frameIndex}`);
            }
        }
        
        console.log(`Successfully extracted ${pages} frames to public/sequence/`);
    } catch (err) {
        console.error("Error extracting frames:", err);
    }
}

extractFrames();
