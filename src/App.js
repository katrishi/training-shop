import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { LayoutComponent } from "./components";
import { MainPage } from "./pages";

const App = () => (
    <div className="app" data-test-id="app">
        <LayoutComponent>
            <Router>
                <Route path="/" component={MainPage} />
            </Router>
        </LayoutComponent>
    </div>

)

export default App;
