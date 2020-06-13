import React from "react";
import PropTypes from "prop-types";

const InputField = props => {
    const { value, type, onChangeInput, name } = props;

    return (
        <input 
            name={name}
            value={value}
            className="inputWrapper form-control"
            type={type}
            onChange={onChangeInput}
            {...props}
        />
    );
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired
};

export default InputField;
