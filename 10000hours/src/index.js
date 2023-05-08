import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";

// 전역 css
import './reset.css'
import './common.css'
import './fonts.css'

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
