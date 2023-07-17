import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer";
import { createContext } from "react";


function App() {
  const DataContext=createContext();
  const foodlist=[]
  return (
    <div className="App">
      <Navbar />
      <DataContext.Provider state={[foodlist]}>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
         {/* <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>*/}
        </Routes>
        </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
