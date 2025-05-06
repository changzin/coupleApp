import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ChatRoom from "./screen/ChatRoom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;