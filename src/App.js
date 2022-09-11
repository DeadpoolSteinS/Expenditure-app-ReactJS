import axios from "axios";
import React, { Component } from "react";
import ExpenditureCard from "./components/ExpenditureCard";

class App extends Component {
  state = {
    expenditure: [],
  };

  componentDidMount() {
    axios
      .get("https://expenditure-app-api.herokuapp.com/api/expenditures")
      .then((result) => {
        this.setState({
          expenditure: result.data,
        });
      });
  }

  render() {
    return (
      <div className="container mx-auto w-[500px]">
        {this.state.expenditure.map((exp) => {
          return <ExpenditureCard key={exp._id} exp={exp} />;
        })}
      </div>
    );
  }
}

export default App;
