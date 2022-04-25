import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kalit: "",
    };
  }
  seachdaMalumotOl = (data) => {
    console.log(data);
    this.setState({
      kalit: data,
    });
  };
  getData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID GIJFH4JI3Sk8rguMQmcE7aRQei5H3L5SxzzcvmwnLQ4",
      },
    });
    console.log(data.data.results);
  };

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.seachdaMalumotOl} />
        <ImageList />
      </div>
    );
  }
}
