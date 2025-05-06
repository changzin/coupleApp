import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import ChatRoom from "./screen/ChatRoom";


const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.dark}>
      <Routes>
          <Route path="/" element={<ChatRoom />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;