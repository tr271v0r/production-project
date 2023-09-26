import {Suspense, useContext} from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/index.scss'

import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from './styles/theme/ThemeContext';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () =>{
   
    const {theme, toggleTheme} = useTheme();
    const bool = true;
    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Ожидайте...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;