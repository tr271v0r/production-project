import { render } from "react-dom";
import { Counter } from "./components/Counter";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./styles/theme/ThemeProvider";


 render(
  <ThemeProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </ThemeProvider>,
   document.getElementById('root')
 )