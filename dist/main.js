"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_2 = require("electron");
let mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadFile("index.html");
    mainWindow?.on("closed", () => {
        mainWindow = null;
    });
}
electron_2.app.on("ready", createWindow);
electron_2.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_2.app.quit();
    }
});
electron_2.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map