import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { SharedLayout } from './components/templates/SharedLayout/SharedLayout';
import { MenuPageFoodTemplate } from './pages/Menu/templates/MenuPageFoodTemplate/MenuPageFoodTemplate';
import { MenuPageAlcoholTemplate } from './pages/Menu/templates/MenuPageAlcoholTemplate/MenuPageAlcoholTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu/food" element={<MenuPageFoodTemplate />} />
        <Route path="/menu/alcohol" element={<MenuPageAlcoholTemplate />} />
      </Route>
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}

export { App };
