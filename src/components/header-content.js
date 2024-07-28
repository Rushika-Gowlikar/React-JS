import './header-content.css';
export default function HeaderContent(props){

    return (<div className="home">
    <button className="header-name">{props.name}</button>
    </div>)
}