import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import React from "react"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/courses/">
        <App />
    </BrowserRouter>
)
