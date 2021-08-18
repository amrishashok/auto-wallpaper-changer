## Set background random images every 3 hours

It will set wallpaper automatically every 3 hours and it will show a alert dialog when it is changed. I've used the [https://picsum.photos/1920/1080](https://picsum.photos/1920/1080) website to get random images



## Cronjob for Ubuntu

   First we need to get into the folder of the project and execute the code

```bash
0 */2 * * * cd /home/amrish/Projects/auto-wallpaper-changer && /usr/bin/node index.js
```