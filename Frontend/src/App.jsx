import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import { mainMenu } from "./menus/mainMenu";
import AppFooter from "./components/layout/AppFooter";
import { Suspense } from "react";
import AppLoader from "./components/Elements/loder/AppLoader";
import GradiantBox from "./components/Elements/GradiantBox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar menu={mainMenu} />
        <Suspense fallback={<AppLoader />}>
          <GradiantBox className="text-white">
            <Routes>
              {mainMenu.map((item) => (
                <Route
                  key={item.link}
                  path={item.link}
                  element={item.component}
                />
              ))}
            </Routes>
            <AppFooter />
          </GradiantBox>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
