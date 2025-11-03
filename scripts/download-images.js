import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function downloadImages() {
  const images = [
    { name: 'snake-plant.jpg', url: 'https://source.unsplash.com/featured/?snake,plant' },
    { name: 'monstera.jpg', url: 'https://source.unsplash.com/featured/?monstera' },
    { name: 'peace-lily.jpg', url: 'https://source.unsplash.com/featured/?peace,lily' },
    { name: 'fiddle-leaf.jpg', url: 'https://source.unsplash.com/featured/?fiddle,leaf,fig' },
    { name: 'spider-plant.jpg', url: 'https://source.unsplash.com/featured/?spider,plant' },
    { name: 'zz-plant.jpg', url: 'https://source.unsplash.com/featured/?zz,plant' }
  ];

  const assetsPath = join(__dirname, '..', 'src', 'assets');
  
  try {
    await fs.mkdir(assetsPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }

  for (const image of images) {
    try {
      const response = await fetch(image.url);
      const buffer = await response.arrayBuffer();
      await fs.writeFile(join(assetsPath, image.name), Buffer.from(buffer));
      console.log(`Downloaded ${image.name}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error);
    }
  }
}

downloadImages();