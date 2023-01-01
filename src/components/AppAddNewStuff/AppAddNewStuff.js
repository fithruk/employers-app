import "../AppAddNewStuff/AppAddNewStuff.css";
import { Component } from "react";


class AppAddNewStuff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            salary : ""
        }
    }

    
    onChangeValue = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    submit = (e) => {
        e.preventDefault();
        
        let { data, createNew } = this.props;
        
        CreateNewStuff (this.state, data, createNew);

        function createId () {
            let id = data.length + 5;
            return id
        }

        function CreateNewStuff (state, data, createNew) {
            
            let newStaff = {"name" : state.name, "salary" : state.salary, "id" : createId (),};
            let dataMod = [...data];
            dataMod.push(newStaff);
            createNew(dataMod);
            
        }

    }

    render () {
        const { name, salary } = this.props

        return (
            <div className="add_stuff_box">
                <h1 className="title">Добавить нового работника</h1>
                <div className="input_box">
                    <form className="form_main" id="form" action="#">
                        <input
                            className="form_input"
                            type="text"
                            name="name"
                            id="add_new_name"
                            onChange={this.onChangeValue}
                            value={name}
                            placeholder="Имя?" />
                        <input
                            className="form_input"
                            type="number"
                            name="salary"
                            id="add_new_salary"
                            onChange={this.onChangeValue}
                            value={salary}
                            placeholder="уровень З/П?" />
                        <button className="form_button" onClick={(e) => this.submit(e)} type="submit">
                            добавить
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


// const AppAddNewStuff = () => {
//     return (
//         <div className="add_stuff_box">
//             <h1 className="title">Добавить новое мясо</h1>
//             <div className="input_box">
//                 <form className ="form_main" id="form" action="#">
//                     <input className = "form_input" type="text" name="name" id="add_new_name" placeholder="Как зовут этого бедолагу?" />
//                     <input className = "form_input" type="number" name="salary" id="add_new_salary" placeholder="Сколько грывень вы хотите ему дать?" />
//                     <button className="form_button" type="submit">
//                         добавить
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

export default AppAddNewStuff;