import * as React from "react";

// https://github.com/ai/nanoid
function nanoid(t = 21) {
  return crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (t, e) =>
        (t +=
          (e &= 63) < 36
            ? e.toString(36)
            : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e > 62
            ? "-"
            : "_"),
      ""
    );
}

// (!) We can't use functional components to define a NetlifyCMS ControlComponent!
// If functional it throws `Uncaught TypeError: this.wrappedControlValid is not a function.`!
class UuidControlComponent extends React.Component {
  componentDidMount() {
    const { value, onChange } = this.props;
    if (!value) {
      onChange(nanoid());
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
