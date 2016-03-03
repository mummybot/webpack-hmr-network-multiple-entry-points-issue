#Webpack Dev Server HMR not working over network demo

When a single entry point is designated, HMR works fine locally and on networked machines. When multiple named entry points are designated HMR continues to work locally but stops on networked machines.

##Setup instructions

1. Clone this gist
2. ```npm install```
3. ```npm start```
4. Visit http://localhost:9090 and http://localhost:9191 (or http://192.168.x.x:9090/9191) on multiple devices.
5. Edit src/entry.js or src/styles.css and hit save.
6. Watch the page update across all devices on port 9090, but only update locally on 9191.

##Environment
NodeJS: v5.6.0
npm 3.6.0