import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {

    const {form, name, label, disabled} = props;
    console.log("form", form)
    
    const {formState} = form;
    const {errors} = formState;
    console.log("errors", errors);
    // console.log("formState[name]", formState?.touched[name]);

    let hasError = false;
    if(Object.keys(errors).length === 0) {
      hasError = true;
    }



  return (
    <div>
      <Controller  //*automatically biding value, onChange, onBlủ to TextField
      name={name} 
      fullWidth
      label={label}
      disabled={disabled}

      control={form.control}
      rules={{ required: true }}

      error={!!hasError}
      helperText={errors[name]?.message}
      
      render={({ field }) => (
        <TextField
          helperText={errors[name]?.message}
          {...field}
        />
      )}
      
      />
      
    </div>
  );
}

export default InputField;
