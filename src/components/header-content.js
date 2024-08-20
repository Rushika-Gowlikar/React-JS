import './header-content.css';
import { Link } from 'react-router-dom';
export default function HeaderContent(props) {

    return (<div className="home">
        {/* <button ></button> */}
        <Link className="header-name" to={props.to} >{props.name}</Link>
    </div>)
}