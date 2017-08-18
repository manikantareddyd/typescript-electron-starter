import * as electron from 'electron';
import * as path from 'path';
import * as url from 'url';

class App {
    public app: Electron.App;
    public mainWindow;
    constructor() {
        this.app = electron.app;
        
        this.app.on('ready', this.createWindow);
    }

    createWindow() {
        this.mainWindow = new electron.BrowserWindow({
            width: 800,
            height: 600
        });
    }
}

export default new App().app;