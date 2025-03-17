const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1040,
        height: 695,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Carrega o conteúdo da aplicação
    mainWindow.loadURL(
        `file://${path.join(__dirname, 'out/index.html')}` // Caminho para o arquivo HTML
    );

    // Abre o DevTools em modo de desenvolvimento
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});