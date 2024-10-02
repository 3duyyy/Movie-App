import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const FormField = ({ control, label, name, Component }) => {
  return (
    <div>
      <p className="mb-1 text-[1.3vw] font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return <Component onChange={onChange} value={value} name={name} control={control} />;
        }}
      />
    </div>
  );
};

FormField.propTypes = {
  control: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  Component: PropTypes.any,
};

export default FormField;
