import React from 'react';

export default class ComponentHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isMini: false
    }
  }
  
  switchHeader(){
    this.setState({
      isMini: !this.state.isMini
    });
  }
  
  render() {
    const styleComponetHeader = {
      header: {
        backgroundColor: "#333333",
        color: "red",
        // "padding-top": "15px", // 可以用但不推荐
        "paddingTop": (this.state.isMini) ? "3px" : "18px",
        paddingBottom: (this.state.isMini) ? "3px" : "18px"
      } // 原来这样写是为了 React-Native打基础。 
    };

    return (
      <header style={styleComponetHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
        <h1>头部222</h1>
      </header>
    );
  }
}