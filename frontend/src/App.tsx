import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage/main";
import { UserCreateAccount } from "./index";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/create" element={<UserCreateAccount />} />
    </Routes>
  );
}
