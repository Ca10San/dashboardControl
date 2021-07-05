import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

const Router: React.FC = () => {
    return(<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </BrowserRouter>);
}

export default Router;