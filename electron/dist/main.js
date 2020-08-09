"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL("http://localhost:4200/");
    //wind.webContents.openDevTools();
    win.on('close', function () {
        win = null;
    });
}
electron_1.ipcMain.on('getFiles', function (event, arg) {
    win.webContents.send('getFilesResponse', ["12", "745"]);
});
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map