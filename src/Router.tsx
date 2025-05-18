import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import NavigationBar from "./component/navigation/NavigationBar";
import Shop from "./screen/Shop";
import Main from "./screen/Main";
import Plus from "./screen/Plus";
import Chat from "./screen/Chat";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.dark}>
        <Routes>
            <Route path="/" element={<Navigate to="/Main" />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Plus" element={<Plus />} />
        </Routes>
        <NavigationBar></NavigationBar>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;