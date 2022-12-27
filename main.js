const { app, BrowserWindow, ipcMain, shell } = require("electron");
var AutoLaunch = require('auto-launch');
// const Store = require("electron-store");

let appWin;
// const store = new Store();

const appPath = app.getAppPath();

createWindow = () => {
  btzAutoLauncher.enable();
  appWin = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "BTZ Launcher",
    resizable: true,
    webPreferences: {
      sandbox: false,
      contextIsolation: false,
      nodeIntegration: true,
    },

    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#141220',
      symbolColor: '#79778f',
      height: 30
    },


  });
  appWin.loadURL(`file://${__dirname}/out/electron-test/index.html`);

  appWin.setMenu(null);

  // appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });
}

var btzAutoLauncher = new AutoLaunch({
  name: 'BTZ Launcher',
  path: 'C:/Users/Bitionz Libre/AppData/Local/Programs/BTZ Launcher/BTZ Launcher.exe',
});

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// ipcMain.on("message", (event) => {event.reply("reply", "pong")})

// ipcMain.on('open-program', () => {
//     shell.openPath("C:/Program Files (x86)/Counter-Strike 1.6/hl.exe");
// })