import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

// import "./shared/config/i18n/i18n"; //Влияет на размер бандла

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
);
