import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Main_layout = () => {
    return (
        <div>
          <div className="my-10">
          <Header></Header>
          </div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main_layout;