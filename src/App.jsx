import { Outlet, ScrollRestoration } from "react-router-dom";
import CursorEffect from "./components/CursorEffect/CursorEffect.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loading from "./components/Loading/Loading.jsx";
import "./index.css";

function App() {
  return (
    <>
      <CursorEffect />
      <Loading />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
