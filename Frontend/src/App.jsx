import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import { mainMenu } from "./menus/mainMenu";
import AppFooter from "./components/layout/AppFooter";
import { Suspense } from "react";
import AppLoader from "./components/Elements/loder/AppLoader";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <AppNavbar menu={mainMenu} />
      </Suspense>
      <div className="bg-dark text-white">
        <Suspense fallback={<AppLoader />}>
          <Routes>
            {mainMenu.map((item) => (
              <Route
                key={item.link}
                path={item.link}
                element={item.component}
              />
            ))}
          </Routes>
        </Suspense>
        <Suspense fallback={<AppLoader />}>
          <AppFooter />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
