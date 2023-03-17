/*
 * Heavily based on NetlifyCMS's internal 'select' widget:
 * https://github.com/decaporg/decap-cms/blob/master/packages/netlify-cms-widget-select/src/SelectControl.js
 */
import * as React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { find } from "lodash";
import { fromJS, List, Map } from "immutable";
import { reactSelectStyles } from "netlify-cms-ui-default/dist/esm/styles";
import { validations } from "netlify-cms-lib-widgets/dist/esm/index";
import CreatableSelect from "react-select/creatable";

function optionToString(option) {
  return option && option.value ? option.value : null;
}

function convertToOption(raw) {
  if (typeof raw === "string") {
    return { label: raw, value: raw };
  }
  return Map.isMap(raw) ? raw.toJS() : raw;
}

function getSelectedValue({ value, defaultOptions }) {
  let selectedOptions = [];

  if (List.isList(value)) {
    const currentValue = value.toJS();

    if (!currentValue || !Array.isArray(currentValue)) {
      return selectedOptions;
    }

    selectedOptions = currentValue
      .map((i) =>
        convertToOption(
          defaultOptions.find((o) => o.value === (i.value || i)) || i
        )
      )
      .filter(Boolean);
  } else {
    selectedOptions = convertToOption(
      find(defaultOptions, ["value", value]) || value
    );
  }

  return selectedOptions;
}

function getWindowVariable(fieldName) {
  return window?.[`creatableSelect_${fieldName}`] || [];
}

function appendToWindowVariable(fieldName, optionsToAppend) {
  if (typeof window === "undefined") return;
  const windowVariable = getWindowVariable(fieldName);
  optionsToAppend.forEach((newOption) => {
    const isAlreadyInArray = windowVariable.find(
      (o) => o.value === newOption.value
    );
    if (isAlreadyInArray) return;
    windowVariable.push(newOption);
  });
  window[`creatableSelect_${fieldName}`] = windowVariable;
}

export default class CreatableSelectControlComponent extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    forID: PropTypes.string.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    field: ImmutablePropTypes.contains({
      options: ImmutablePropTypes.listOf(
        PropTypes.oneOfType([
          PropTypes.string,
          ImmutablePropTypes.contains({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
          }),
        ])
      ).isRequired,
    }),
  };

  isValid = () => {
    const { field, value, t } = this.props;
    const min = field.get("min");
    const max = field.get("max");

    if (!field.get("multiple")) {
      return { error: false };
    }

    const error = validations.validateMinMax(
      t,
      field.get("label", field.get("name")),
      value,
      min,
      max
    );

    return error ? { error } : { error: false };
  };

  handleChange = (selectedOption) => {
    const { onChange, field } = this.props;
    const isMultiple = field.get("multiple", false);
    const isEmpty = isMultiple ? !selectedOption?.length : !selectedOption;

    if (field.get("required") && isEmpty && isMultiple) {
      onChange(List());
    } else if (isEmpty) {
      onChange(null);
    } else if (isMultiple) {
      const options = selectedOption.map(optionToString);
      onChange(fromJS(options));
    } else {
      onChange(optionToString(selectedOption));
    }
  };

  componentDidMount() {
    const { field, onChange, value } = this.props;
    if (field.get("required") && field.get("multiple")) {
      if (value && !List.isList(value)) {
        onChange(fromJS([value]));
      } else if (!value) {
        onChange(fromJS([]));
      }
    }
  }

  render() {
    const {
      field,
      value,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;
    const fieldDefaultOptions = field.get("default_options", []);
    const isMultiple = field.get("multiple", false);
    const isClearable = !field.get("required", true) || isMultiple;

    const defaultOptions = [...fieldDefaultOptions.map(convertToOption)];
    const selectedOptions = getSelectedValue({
      defaultOptions,
      value,
    });

    let options = defaultOptions;
    const isPersistOptions = field.get("persist_options", false);
    if (isPersistOptions) {
      const fieldName = field.get("name");
      if (selectedOptions) {
        appendToWindowVariable(fieldName, [
          ...defaultOptions,
          ...(Array.isArray(selectedOptions)
            ? selectedOptions
            : [selectedOptions]),
        ]);
      }
      options = getWindowVariable(fieldName);
    }

    return (
      <CreatableSelect
        inputId={forID}
        value={selectedOptions}
        onChange={this.handleChange}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        options={options}
        styles={reactSelectStyles}
        isMulti={isMultiple}
        isClearable={isClearable}
        placeholder=""
      />
    );
  }
}

export const CreatableSelectWidget = (opts = {}) => {
  return {
    name: "creatableSelect",
    controlComponent: CreatableSelectControlComponent,
    previewComponent: "",
    ...opts,
  };
};
