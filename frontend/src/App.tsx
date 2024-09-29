import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";


function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />}/>
        )}
        <Route path="*" element={<NotFound />}/>
      </Routes>

    </main>
  );
}

export default App;
