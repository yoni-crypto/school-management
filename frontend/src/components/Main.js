import DashboardCard from "./DashboardCard";
import Sidebar from "./Sidebar";

const Main = () => {
    return ( 
        <div className="mainContainer">
            <Sidebar/>
            <DashboardCard/>
        </div>
     );
}
 
export default Main;