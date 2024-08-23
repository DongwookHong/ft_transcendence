import Login42Button from '../login/Login42Button.js'

function App(root) {
    console.log('App function called');
    
    function init() {
        console.log('Init function called');
        render();
        loadMainScreen();
    }
    
    function render() {
        console.log('Render function called');
        root.innerHTML = `
        <div id="app-container">
        <header>
        <h1>Ping Pong</h1>
        </header>
        <main id="main-content"></main>
        <footer>
        <p>&copy; 2023 Ping Pong</p>
        </footer>
        </div>
        `;
        console.log('HTML content set');
    }
    
    function loadMainScreen() {
        console.log('LoadMainScreen function called');
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            console.log('Main content element found, rendering button');
            Login42Button.render(mainContent);
        } else {
            console.error('Main content element not found');
        }
    }

    init();
    
    return { init };
}

export default App;