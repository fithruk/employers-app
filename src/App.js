import { Component } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader/header";
import AppSearch from "./components/AppSearch/AppSearch";
import AppItemsList from "./components/AppItemsList/AppItemsList";
import AppAddNewStuff from "./components/AppAddNewStuff/AppAddNewStuff";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Сережа", salary: 800, promotion: false, id: 1 },
        { name: "Вася", salary: 500, promotion: false, id: 2 },
        { name: "Понтелеймон", salary: 800, promotion: false, id: 3 },
        { name: "Адольф", salary: 1200, promotion: false, id: 4 },
        { name: "Джони", salary: 1600, promotion: false, id: 5 },
      ],
      filterName: "",
      searchValue: "",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      let index = data.findIndex((item) => item.id == id);
      let before = data.slice(0, index);
      let after = data.slice(index + 1);

      let newData = [...before, ...after];

      return {
        data: newData,
      };
    });
  };

  createNew = (data) => {
    this.setState({
      data,
    });
  };

  getFilterName = (name) => {
    this.setState(() => ({
      filterName: name,
    }));
  };

  filterData = () => {
    const { data, filterName } = this.state;
    let newArr = [...data];

    function checkData(newArr, filterName, data) {
      if (filterName === "over1000") {
        newArr = newArr.filter((item) => {
          return item.salary > 1000;
        });
        return newArr;
      }
      if (filterName === "promotion") {
        newArr = newArr.filter((item) => {
          return item.promotion === true;
        });
        return newArr;
      } else {
        return data;
      }
    }
    return checkData(newArr, filterName, data);
  };

  getPromotion = (data) => {
    this.setState(() => ({
      data,
    }));
  };

  search = (searchValue) => {
    this.setState({
      searchValue,
    });
  };

  commonFilterData = (searchValue, array) => {
    if (searchValue === "") {
      return array;
    } else {
      return array.filter((item) => {
        return item.name.indexOf(searchValue) > -1;
      });
    }
  };

  render() {
    let n = this.commonFilterData(this.state.searchValue, this.filterData());
    return (
      <div className="App">
        <AppHeader data={this.state.data} />
        <AppSearch
          data={n}
          getFilterName={this.getFilterName}
          search={this.search}
        />
        <AppItemsList
          data={n}
          onDelete={this.onDelete}
          getPromotion={() => this.getPromotion}
        />
        <AppAddNewStuff data={this.state.data} createNew={this.createNew} />
      </div>
    );
  }
}

export default App;
