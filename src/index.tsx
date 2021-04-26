import React from "react";
import ReactDOM from "react-dom";

import "./styles/app.scss";
import AppRoute from "./routes/AppRoute";

ReactDOM.render(
    <React.StrictMode>
        <AppRoute />
    </React.StrictMode>,
    document.getElementById("root")
);
