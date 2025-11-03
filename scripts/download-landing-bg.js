import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function downloadImage() {
  const url = 'https://source.unsplash.com/featured/?indoor,plants,garden';
  const imageName = 'landing-bg.jpg';

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const assetsPath = join(__dirname, '..', 'src', 'assets');
    
    try {
      await fs.mkdir(assetsPath, { recursive: true });
    } catch (error) {
      console.error('Error creating directory:', error);
    }

    await fs.writeFile(join(assetsPath, imageName), Buffer.from(buffer));
    console.log(`Downloaded ${imageName}`);
  } catch (error) {
    console.error(`Error downloading ${imageName}:`, error);
  }
}

downloadImage();