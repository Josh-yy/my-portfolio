import { Outlet, ScrollRestoration } from "react-router-dom";
import CursorEffect from "./components/CursorEffect/CursorEffect.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./index.css";

function App() {
  return (
    <>
      <CursorEffect />
      <Loading />
      <Modal />

      <Outlet />

      

      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
