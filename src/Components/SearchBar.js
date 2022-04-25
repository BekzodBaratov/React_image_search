import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kalitSuz: "",
    };
  }

  inputMalumotlari(e) {
    this.setState({
      kalitSuz: e,
    });
  }

  onformSubmit = (e) => {
    e.preventDefault();
    this.props.malumotniOl(this.state.kalitSuz);
  };

  render() {
    return (
      <>
        <div
          className="ui search"
          style={{ margin: "30px auto 0", width: "70%" }}
        >
          <form
            onSubmit={this.onformSubmit}
            className="ui icon input container"
            style={{ width: "100%" }}
          >
            <input
              onChange={(e) => this.inputMalumotlari(e.target.value)}
              className="prompt"
              type="text"
              placeholder="Common passwords..."
            />
            <i className="search icon"></i>
          </form>
          <div className="results"></div>
        </div>
      </>
    );
  }
}
