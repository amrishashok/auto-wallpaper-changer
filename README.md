## Set background random images every hour

It will set wallpaper automatically every hour and it will show a alert dialog when it is changed. I've used the [https://picsum.photos/1920/1080](https://picsum.photos/1920/1080) website to get random images


## To run the project at startup

Install ```pm2``` globally using the following command
```npm install pm2 -g```


1. ```cd``` to the directory and run the project

```bash
pm2 start index.js --name wallpaper-changer
```

2. Save the pm2 command

```bash
pm2 save
```

3. Run the startup command

```bash
pm2 startup
```

4. It will generate some command run the command

```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u user --hp /home/user
```

5. Again run the save command

```bash
pm2 save
```
