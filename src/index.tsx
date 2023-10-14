import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

//import "./shared/config/i18n/i18n"; //Влияет на размер бандла

 render(
  <ThemeProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </ThemeProvider>,
   document.getElementById('root')
 )