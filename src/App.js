import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { LayoutComponent } from "./components";
import { MainPage, WomenPage } from "./pages";

const App = () => (
    <div className="app" data-test-id="app">
        <LayoutComponent>
            <Router>
                <Route path="/" exact component={MainPage} />
                <Route path="/women" exact component={WomenPage} />
            </Router>
        </LayoutComponent>
    </div>
)

export default App;
