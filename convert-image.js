const fs = require('fs');
const { exec } = require('child_process');

const imageDir = 'src/images';

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (file.match(/\.(jpg|png)$/)) {
      const webpFile = file.replace(/\.(jpg|png)$/, '.webp');
      exec(`cwebp ${imageDir}/${file} -o ${imageDir}/${webpFile}`, (error) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log(`${file} converted to WebP format`);
      });
    }
  });
});
