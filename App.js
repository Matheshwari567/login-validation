// import About from "./About";
// import Home from "./Home";
import { BrowserRouter as  Router, Routes,Route } from "react-router-dom";
// import Storage from "./storage/local,session";
// import Custom from "./Hooks/custom";
// import Table1 from "./table/mdbtable";
// import Carosel from "./carousel/Carousel";
// import Form from "./form";

// import Navigation from "./MDB React/project";

import Login from "./login/login";
// import Table1 from "./table/tablemdb";
import Maintable from "./login/Maintable";
import Time from "./Hooks/Effect";

// import Navigation from "./MDB React/project";



// import { Table } from "tablemdb.js";
// import Table2 from "./table/mdbtable";
// import Table1 from "./table/tablemdb";

// import Call from "./Hooks/callback";
// import Memo from "./Hooks/memo";

// import Reducer from "./Hooks/reducer";

// import Apps from "./Hooks/ref";


// import Time from "./Hooks/Effect";
// import Component1 from "./Hooks/context";

// import State from "./Hooks/state";

// import Object from "./list/object";

// import Onfocuse from "./Events/onfocuse";
// import Onselect from "./Events/onselect";
// import Onsubmit from "./Events/onsubmit";



// import Onblur from "./Events/onblur";
// import Condition from "./conditions/Condition";
// import List from "./list/List";

// import Ans from "./Props";


// import "./Nav.css";
// import Event from "./Events/Event";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<Maintable/>} />
        <Route path="/api" element={<Time/>}/>
      </Routes>
    </Router>

      {/* <Carosel /> */}
      {/* <Ans/> */}
      {/* <Event/> */}
      {/* <Onblur /> */}
      {/* <Onfocuse/> */}
      {/* <Onselect/> */}
      {/* <Onsubmit /> */}
      {/* <Condition/> */}
      {/* <List /> */}
      {/* <Object/> */}
      {/* <State/> */}
      {/* <Time/>     */}
      {/* <Component1/> */}
      {/* <Apps/> */}
      {/* <Reducer /> */}
      {/* <Call/> */}
      {/* <Memo/> */}
      {/* <Custom/> */}
      {/* <Storage/> */}
      {/* <Form /> */}
     {/* <Table2/> */}
      {/* <Table1/> */}
    {/* <Navigation /> */}
    {/* <Maintable /> */}
    </>
  );
}
export default App;