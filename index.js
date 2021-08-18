const wallpaper = require('wallpaper');
const { default: axios } = require('axios');
const path = require('path');
const os = require('os');
const fs = require('fs');
const dialog = require('dialog');

async function getBackground() {
  const response = await axios.get('https://picsum.photos/1920/1080', 
    { responseType: 'arraybuffer' }
  );
  setAsBackground(response.data);
}

function setAsBackground(base64Image){
  const now = (new Date()).getTime();
  let picturePath = path.join(os.homedir(), "/Pictures/Wallpapers", `wallpaper-${now}.jpg`);
  picturePath = path.normalize(picturePath);
  fs.writeFile(picturePath, base64Image, 'base64', (err) => {
    wallpaper.set(picturePath, {scale: "stretch"})
    .then(() => {
      dialog.info('Wallpaper changed, check it out!', 'Wallpaper');
    });
  });
}

getBackground();
