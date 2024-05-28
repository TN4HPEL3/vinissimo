import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { MenuPage } from './pages/Menu/MenuPage.jsx';
import { WinePage } from './pages/Wine/WinePage.jsx';
import { Page404 } from './pages/Page404/Page404';
import { SharedLayout } from './components/templates/SharedLayout/SharedLayout.jsx';
import { WineGlassesTemplate } from './pages/Wine/templates/WineGlassesTemplate/WineGlassesTemplate.jsx';
import { WineBottlesTemplate } from './pages/Wine/templates/WineBottlesTemplate/WineBottlesTemplate.jsx';
import { MenuPageFoodTemplate } from './pages/Menu/templates/MenuPageFoodTemplate/MenuPageFoodTemplate.jsx';
import { MenuPageAlcoholTemplate } from './pages/Menu/templates/MenuPageAlcoholTemplate/MenuPageAlcoholTemplate.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/wine/glasses"
          element={<WinePage children={<WineGlassesTemplate />} />}
        />
        <Route
          path="/wine/bottles"
          element={<WinePage children={<WineBottlesTemplate />} />}
        />
        <Route
          path="/menu/food"
          element={<MenuPage children={<MenuPageFoodTemplate />} />}
        />
        <Route
          path="/menu/alcohol"
          element={<MenuPage children={<MenuPageAlcoholTemplate />} />}
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export { App };
