import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './components/templates/SharedLayout/SharedLayout';
import { HomePage } from './pages/Home/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>

      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}

export { App };
