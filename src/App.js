import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Login/Register";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AddItem from "./components/Lock/AddItem";
import Blogs from "./components/Lock/Blogs";
import Inventoris from "./components/Lock/Inventoris";
import MyItem from "./components/Lock/MyItem";
import RequierAuth from "./components/Lock/RequierAuth";
import Services from "./components/Lock/Services";
import Notfound from "./components/notfound/Notfound";
import Update from "./components/update/Update";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventoris"
          element={
            <RequierAuth>
              <Inventoris></Inventoris>
            </RequierAuth>
          }
        ></Route>
        <Route path="/servics" element={<Services></Services>}></Route>
        <Route
          path="/additem"
          element={
            <RequierAuth>
              <AddItem></AddItem>
            </RequierAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequierAuth>
              <MyItem></MyItem>
            </RequierAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <RequierAuth>
              <Update></Update>
            </RequierAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
