import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    const onClickBtn = () => {
      console.log("button bosildi");
    };
    return (
      <div>
        <button onClick={onClickBtn}>Click Me</button>
      </div>
    );
  }
}
