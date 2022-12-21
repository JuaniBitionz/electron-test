const { app, BrowserWindow, ipcMain, shell } = require("electron");
// const Store = require("electron-store");

let appWin;
// const store = new Store();

createWindow = () => {
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
        frame: true
        
    });
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