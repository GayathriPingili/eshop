import "./App.css"
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/login" element={
           <Login />
          }/>
            
            <Route path="/checkout" element={
              <> 
              <Header/> 
               <Checkout/>
              </>
            } />
            <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
