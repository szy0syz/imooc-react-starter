import React from 'react';

export default class ComponentHeader extends React.Component {
  render() {
    const styleComponetHeader = {
      header: {
        backgroundColor: "#333333",
        color: "red",
        // "padding-top": "15px", // 可以用但不推荐
        "paddingTop": "15px",
        paddingBottom: "15px"
      } // 原来这样写是为了 React-Native打基础。 
    };

    return (
      <header style={styleComponetHeader.header} className="smallFontSize">
        <h1>头部222</h1>
      </header>
    );
  }
}