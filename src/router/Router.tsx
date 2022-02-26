import { memo, VFC } from "react";
import { Switch,Route } from "react-router-dom";
import { Deliverables } from "../components/pages/Deliverables";
import { Home } from "../components/pages/Home";
import { homeRoutes } from "./HomeRoutes";

export const Router:VFC = memo(() => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/deliverables">
                <Deliverables />
            </Route>
        </Switch>
    )
})
