import ProjectSideBar from "./project-sideBar";
// import NewProject from "./new-project";
import NoProject from "./no-project";
import './project.css';
export default function ProjectManagement() {


    return (<div className="row">
        <div className="col-lg-3"><ProjectSideBar /></div>
        <div className="col-lg-9"><NoProject /></div>


    </div>)

}