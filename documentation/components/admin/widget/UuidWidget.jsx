import * as React from "react";
import { v4 as uuid } from "@lukeed/uuid";

// (!) We can't use functional components to define a NetlifyCMS ControlComponent!
// If functional it throws `Uncaught TypeError: this.wrappedControlValid is not a function.`!
class UuidControlComponent extends React.Component {
  componentDidMount() {
    const { value, onChange } = this.props;
    if (!value) {
      onChange(uuid());
    }
  }

  render() {
    const { value, forID } = this.props;
    return (
      <span id={forID} style={{ marginLeft: "8px" }}>
        {value}
      </span>
    );
  }
}

export const UuidWidget = (opts = {}) => {
  return {
    name: "uuid",
    controlComponent: UuidControlComponent,
    previewComponent: "",
    ...opts,
  };
};
