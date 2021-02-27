import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import reactDom from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { lighTheme, darkTheme, GlobalStyles } from "./themes/themes";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lighTheme : darkTheme}>
      <GlobalStyles />
      <div className='App'>
        <Router>
          <Container>
          <button onClick={()=>themeToggler()}>Change Theme</button>
            <Header />
            <Main>
              <Sidebar />
              <Switch>
                <Route path='/room'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Login />
                </Route>
              </Switch>
            </Main>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  /* background: white; */
  display: grid;
  grid-template-columns: 260px auto;
`;
