import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/layout';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Addresses from './pages/Addresses';
import CategoryPage from './pages/CategoryPage';
import Basket from './pages/Basket';
import PersonalAccount from './pages/PersonalAccount';
import DetailOfProduct from './pages/DetailOfProduct';

import Plug from './Plug';
import useCheckMobileScreen from "./components/hooks/useCheckMobileScreen";
import ProfileMobile from "./components/myAccountMobile/ProfileMobile";

function App() {
  const isMobile = useCheckMobileScreen();

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Plug />} />

        <Route path='/home' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/category' element={<CategoryPage />} />
        <Route path='/addresses' element={<Addresses />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/my-account/*' element={isMobile ? <ProfileMobile/> : <PersonalAccount />} />
        <Route path={'/product/*'} element={<DetailOfProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
