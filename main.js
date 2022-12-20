import { app, BrowserWindow, ipcMain, shell } from "electron";
// const Store = require("electron-store");
import { setupTitlebar, attachTitlebarToWindow } from "custom-electron-titlebar/main";

let appWin;
// const store = new Store();

setupTitlebar();

createWindow = () => {
    appWin = new BrowserWindow({
        width: 1366,
        height: 768,
        title: "BTZ Launcher",
        resizable: true,
        webPreferences: {
            sandbox: false,
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false
    });
    attachTitlebarToWindow(appWin);
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);
    // appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}



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