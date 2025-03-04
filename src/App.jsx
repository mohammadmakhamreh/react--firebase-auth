import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProfilePage from "./pages/profile";
import AuthPage from "./pages/private-route";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={
        <AuthPage>
          <ProfilePage />
        </AuthPage>  } />
      </Routes>
    </div>
  )
}

export default App
