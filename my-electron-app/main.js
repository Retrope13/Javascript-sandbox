const {app, BrowserWindow} = require('electron');
const { createHash } = require('node:crypto');

const path = require('node:path')

//*Look into making js functions return the html. Then you can actually use fancy react stuff
function Home() {
    return (
        <body>
            <h1>Hello World!</h1>
            We are using Node.js <span id="node-version"></span>,
            Chromium <span id="chrome-version"></span>,
            and Electron <span id="electron-version"></span>.

            <script src="./renderer.js"></script>
        </body>

    );

}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')

}

//When electron has finished initialization and is ready to create browser windows. Some APIs can only be used after this event occurs
app.whenReady().then(() => {
    createWindow()
    createHash()
    app.on('activate', () => {
        //for macOS this re-creates a window in the app when the dock icon is clicked and there are no other windows open
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})