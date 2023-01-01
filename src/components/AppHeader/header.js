import "./AppHeader.css";

const AppHeader = (props) => {
    let promo = props.data.filter(item =>{ 
        return item.promotion == true
    })
 return (
    <header className = "header">
        <h1 className = "title" >
            Учет работников компании:
        </h1>
        <h2 className = "sup_title">
            общее количество:{props.data.length}
        </h2>
        <h3 className = "sup_title">
            Премию получат:{promo.length}
        </h3>
    </header>
 );
}

export default AppHeader;