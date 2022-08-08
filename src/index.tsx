import { createRoot } from "react-dom/client";

const App = () => (
    <h1>Webpack Playground! {" "} {new Date().toLocaleString()}</h1>
);

const appRootElement = document.getElementById("app-root");
if(appRootElement){
    const appRoot = createRoot(appRootElement);
    appRoot.render(<App />);
}