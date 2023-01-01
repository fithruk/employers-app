import "./AppList.css";
import { Component } from 'react';

class AppList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            promotion : this.props.promotion
        }
    }

    givePromotion = () => {
        
        this.setState(({promotion}) => ({
            promotion : !promotion
        }))
        
    }


    render () {
        const { name, salary, onDelete, getPromo} = this.props;
        let classNames = "list_item";         
        if ( this.state.promotion === true) {
            
            classNames += " promotion"
            getPromo(this)
        } else {
            getPromo(this)
        }
        
        return (
            <li className={classNames}>
                <div className="list_item_box">
                    <div className="name-salary">
                        {name}
                    </div>
                    <div className="name-salary">
                        {salary + " грывень"}
                    </div>
                    <div className="li_item_btn_box">
                        <div className="li_btn"  onClick={this.givePromotion}>
                            Приласкать
                        </div>
                        <div className="li_btn" onClick={onDelete}>
                            Удалить
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}


// const AppList = ({name, salary}) => {
//     return (
//         <li className="list_item">
//             <div className="list_item_box">
//                 <div className="name-salary">
//                     {name}
//                 </div>
//                 <div className="name-salary">
//                     {salary + " грывень"}
//                 </div>
//                 <div className="li_item_btn_box">
//                     <div className="li_btn">
//                         Приласкать
//                     </div>
//                     <div className="li_btn">
//                         Удалить
//                     </div>
//                 </div>
//             </div>
//         </li>
//     );
// }



// constructor (props) {
//     super(props)
//     this.state = {
//         promotion : false,
//     }
// }

// givePromotion = () => {
    
//     this.setState(({promotion}) => ({
//         promotion : ! promotion
//     }))

// }


// render () {
//     const { name, salary, onDelete, getPromotion, promotion} = this.props;
//     let classNames = "list_item";         
//     if ( this.state.promotion === true) {
//         classNames += " promotion"
//     }

//     return (
//         <li className={classNames}>
//             <div className="list_item_box">
//                 <div className="name-salary">
//                     {name}
//                 </div>
//                 <div className="name-salary">
//                     {salary + " грывень"}
//                 </div>
//                 <div className="li_item_btn_box">
//                     <div className="li_btn"  onClick={this.givePromotion}>
//                         Приласкать
//                     </div>
//                     <div className="li_btn" onClick={onDelete}>
//                         Удалить
//                     </div>
//                 </div>
//             </div>
//         </li>
//     )
// }




export default AppList;