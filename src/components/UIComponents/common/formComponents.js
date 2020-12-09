import { useField } from "formik";

// M-UI compo
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <div className="formGroup">
        <FormControl fullWidth>
          <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
          <Input {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="errMsg">{meta.error}</div>
          ) : null}
        </FormControl>
      </div>
    </>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="checkBoxDiv">
      <label className="checkbox">
        <Checkbox color="primary" type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="errMsg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="selectGroup">
      <FormControl>
        <InputLabel htmlFor={props.id || props.name}> {label} </InputLabel>
        <Select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errMsg">{meta.error}</div>
        ) : null}
      </FormControl>
    </div>
  );
};
