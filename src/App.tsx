import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./pages/home";
import { Footer } from "./components/footer/footer";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Account } from "./pages/account";

function App() {
  return (
    <Router>
      <div className="bg-zinc-100 app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
      </div>
    </Router> 
  )
}

export default App;
