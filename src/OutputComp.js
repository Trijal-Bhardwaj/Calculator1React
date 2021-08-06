import React from "react";

class OutputComp extends React.Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default OutputComp;