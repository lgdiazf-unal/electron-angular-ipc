import { app, BrowserWindow,ipcMain } from 'electron'
import { IpcRenderer } from 'electron'
import * as path from 'path'
import * as url from 'url'
let win;

function createWindow(){

    win = new BrowserWindow({
        width : 800,height : 600,
 	webPreferences: {
            nodeIntegration: true
        }
	})

    win.loadURL(
        "http://localhost:4200/"
        );
    //wind.webContents.openDevTools();
    win.on('close',function(){
        win = null
    })
}

ipcMain.on('getFiles', (event, arg) => {
  win.webContents.send('getFilesResponse', ["12","745"])
});


app.on('ready',createWindow);
app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
});


app.on('activate',function(){
    if (win === null){
        createWindow()
    }
});



