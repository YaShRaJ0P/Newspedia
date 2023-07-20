import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import React from "react";
import Newscontainer from "./components/Newscontainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 20;

  const apiKey = process.env.REACT_APP_API;

  return (
    <div>
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={"in"}
                category={"business"}
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={"in"}
                category={"health"}
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={"in"}
                category={"science"}
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={"in"}
                category={"sports"}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <Newscontainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
