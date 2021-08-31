const wallpaper = require('wallpaper');
const { default: axios } = require('axios');
const path = require('path');
const os = require('os');
const fs = require('fs');
const dialog = require('dialog');
const cron = require('node-schedule');
const intervalInHour = 1;

async function getBackground() {
  try {
    const response = await axios.get('https://picsum.photos/1920/1080', 
    { responseType: 'arraybuffer' }
    );
    setAsBackground(response.data);
  } catch (error) {
    setErrorLog(String(error));
  }
}

async function setAsBackground(base64Image){
  const now = (new Date()).getTime();
  let picturePath = path.join(os.homedir(), "/Pictures/Wallpapers", `wallpaper-${now}.jpg`);
  picturePath = path.normalize(picturePath);
  fs.writeFile(picturePath, base64Image, 'base64', async (err) => {
    if (err) {
      setErrorLog(err);
      return err;
    }
    try {
      await wallpaper.set(picturePath, {scale: "stretch"})
      dialog.info('Wallpaper changed, check it out!', 'Wallpaper');
    } catch (error) {
      setErrorLog(error);
    }
  });
}

const setErrorLog = (text) => {
  const errorFilePath = path.join(os.homedir(), '/Projects/auto-wallpaper-changer', 'error.log')
  fs.appendFile(errorFilePath, `\n${new Date()} ${text}`, () => {});
}

cron.scheduleJob(`0 */${intervalInHour} * * *`, function() {
  getBackground();
});
