import React from "react";

class welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2 className="Welcome">Welcome {this.props.name}</h2>;
  }
}

export default welcome;
