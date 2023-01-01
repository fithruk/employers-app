import { Component } from "react";
import "./AppSearch.css";

class AppSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_value : "",
        }
    }
    
    creteFilteredData = (e, getFilterName, name ) => {
        let buttons = document.querySelectorAll('.search_buttons_box .search_btn_box');
        buttons.forEach(button => {
            button.className = "search_btn_box"
        })
        if ( name === "promotion" ) {
            getFilterName(name);
            e.target.className += " current"
        }
        if ( name === "over1000" ) {
            getFilterName(name);
            e.target.className += " current"
        }
        if ( name === "all" ) {
            getFilterName(name);
            e.target.className += " current"
        }
       
    }

    checkSearchValue = (e) => {
        let {search} = this.props;
        this.setState({
            [e.target.name] : e.target.value
        })
        
        search(e.target.value);
    }

    render () {
        let { getFilterName } = this.props;
        const buttonData = [
            {name : "all", inner : "Все работники", className : "search_btn_box current"},
            {name : "promotion", inner : "Премированные", className : "search_btn_box"},
            {name : "over1000", inner : "Повышенная зарплата", className : "search_btn_box"},
        ]

        let buttonRender = buttonData.map(({name, inner, className}) => {
            return (
                <div key={name} onClick={(e) =>{
                    this.creteFilteredData(e,getFilterName, name);
                    
                }} className={className}>
                    {inner}
                </div>
            )
        })

        return (
            <div className="search_box">
                <input className="search_input"
                    value={this.state.search_value}
                    id="find_name"
                    name="search_value"
                    onChange={this.checkSearchValue}
                    placeholder="Введите имя"
                    type="text" ></input>
                <div className="search_buttons_box" >
                    {buttonRender}
                </div>
            </div>
        );
    }
}


export default AppSearch;
