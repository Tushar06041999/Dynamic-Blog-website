import "./home.css";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../sidebar/Sidebar";



const Home = () => {
    return (

     <>
        <Header/>
        <div className="home">
       <Posts/>
       <Sidebar/>
         
            
        </div>

        </>
    );
};

export default Home;