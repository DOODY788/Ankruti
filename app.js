const { app, BrowserWindow, ipcRenderer } = require('electron')
const path = require('path')
const Boot = require('./app/branch/bootloader.js')
function createWindow () {
  const win = new BrowserWindow({
    width: 1500,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    // frame:false,
    autoHideMenuBar:true,
    titleBarStyle:"hidden",
    titleBarOverlay:true
  })

  win.loadFile('./app/index.html')
  win.setWindowButtonVisibility(false)
}

app.whenReady().then(() => {
  const bt = new Boot();
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})