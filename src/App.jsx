import { BrowserRouter } from "react-router-dom";
import App_Routes from "./Routes/App_Routes";

function App() {
  return (
    <BrowserRouter>
      <App_Routes />
    </BrowserRouter>
  );
}

export default App;