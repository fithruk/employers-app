import "../AppItemsList/AppItemsList.css";
import { Component } from "react";
import AppList from "../AppList/AppList";


class AppItemsList extends Component {
    constructor(props) {
        super(props)
    }

    getPromo = (elem) => {
        const {data, getPromotion} = this.props;
        let newData = [...data];
        newData.forEach(item => {
            item.id == elem._reactInternals.key ? item.promotion = elem.state.promotion : item.promotion = item.promotion;
        })
        getPromotion(newData);
    }

    render() {
        const { data, onDelete } = this.props;
        const stuff = data.map(({ name, salary, id, promotion }) => {
            return (
                < AppList key={id}
                    name={name}
                    salary={salary}
                    promotion={promotion}
                    getPromo = {this.getPromo}
                    onDelete={() => onDelete(id)} />
            );
        })
        
        return (
            <div className="items_box">
                <ul className="item_list">
                    {stuff}
                </ul>
            </div>
        );
    }

} 



// const AppItemsList = ({data, onDelete, getPromotion}) => {
    
//     const stuff = data.map(({name, salary, id, promotion}) => {
//         return (
//             < AppList key = {id} 
//             name = {name} 
//             salary = {salary} 
//             promotion = {promotion}
//             getPromotion = {getPromotion}
//             onDelete = {() => onDelete(id)}/>
//         );
//     })
    
//     return (
//         <div className="items_box">
//             <ul className="item_list">
//                 {stuff}
//             </ul>
//         </div>
//     );
// }




export default AppItemsList;