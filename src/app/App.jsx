import { Routes, Route } from "react-router-dom";
import { WordProvider } from "../context/WordProvider";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Pages/Table/Table";
import Game from "../Pages/Game/Game";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

import "../app/app.scss";

function App() {
  return (
    <WordProvider>
      <div className="container">
        <Header />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<Table />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WordProvider>
  );
}

export default App;
