import './header-content.css';
export default function HeaderContent(props){

    return (<div className="home">
    <button className="header-name" onClick={props.openComponent}>{props.name}</button>
    </div>)
}