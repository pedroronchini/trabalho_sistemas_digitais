const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Cria uma janela do navegador
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Habilita o uso de NodeJs no ambiente
    }
  });

  // Carrega o arquivo HTML do seu aplicativo
  win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);
