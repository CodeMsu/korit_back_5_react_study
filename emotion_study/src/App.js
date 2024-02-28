import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import DownBar from './components/DownBar/DownBar';
import RootLayout from './components/RootLayout/RootLayout';
import Mypage from './pages/Mypage/Mypage';
import { MENUS } from './constants/menu';

function App() {
  return (
   <>
    <Reset />
    <SideBar/>
    <DownBar/>
    <RootLayout>
      <Routes>
        {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
      </Routes>
    </RootLayout>
   </>
  );
}

export default App;
