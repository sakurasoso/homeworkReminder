const { app, BrowserWindow, Menu, BrowserView } = require('electron')

// To Check System is MAC or not
const isMac = process.platform === 'darwin'

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1400,
    height: 850,
    webPreferences: {
      nodeIntegration: true
    },
    title:"Homework Reminder V0.1.0",
  })

  win.loadFile('./html/index.html')

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})



/////////// Init_Top_Menu //////////////////
const top_Menu_Data = [
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  {
    label: 'File',
    submenu: [
      { label: 'import from file' },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startspeaking' },
            { role: 'stopspeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/sakurasoso/homeworkReminder')
        }
      }
    ]
  },
  {
    label: 'DevKit',
    submenu: [
      {
        label: 'Show Test Reminder',
        click: async() =>{
          const {Notification} = require('electron')
          var d = new Date();
          var h = addZero(d.getHours());
          var m = addZero(d.getMinutes());
          var s = addZero(d.getSeconds());
          var text = h + ":" + m + ":" + s;
          const test_Noti  = new Notification({
            title: text,
          });
          test_Noti.show();
        },
      },{
        label: 'new window',
        click: async() =>{
          let popup = new BrowserWindow({height:400,width:600});
          popup.on('closed', () => {
            popup = null
          });
          popup.loadURL('https://github.com');

        }
      },
    ]
  },
]
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const top_Menu = Menu.buildFromTemplate(top_Menu_Data)
Menu.setApplicationMenu(top_Menu)
