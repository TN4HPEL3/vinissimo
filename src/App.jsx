import { Route, Routes } from 'react-router-dom';

import { WinePage } from './pages/Wine/WinePage.jsx';
import { SharedLayout } from './components/templates/SharedLayout/SharedLayout.jsx';
import { WineGlassesTemplate } from './pages/Wine/templates/WineGlassesTemplate/WineGlassesTemplate.jsx';
import { WineBottlesTemplate } from './pages/Wine/templates/WineBottlesTemplate/WineBottlesTemplate.jsx';
import { MenuPageFoodTemplate } from './pages/Menu/templates/MenuPageFoodTemplate/MenuPageFoodTemplate.jsx';
import { MenuPageAlcoholTemplate } from './pages/Menu/templates/MenuPageAlcoholTemplate/MenuPageAlcoholTemplate.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route
          path="/wine/glasses"
          element={<WinePage children={<WineGlassesTemplate />} />}
        />
        <Route path="/wine/bottles" element={<WineBottlesTemplate />} />
        <Route path="/menu/food" element={<MenuPageFoodTemplate />} />
        <Route path="/menu/alcohol" element={<MenuPageAlcoholTemplate />} />
      </Route>
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}

export { App };
