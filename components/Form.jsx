/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <form sx={{ variant: "header.form" }}>
      <Field
        htmlFor="address"
        name="address"
        type="search"
        ariaHidden="true"
        ariaLabel="input box for search query"
        placeholder="type address, city, zip code or landmark"
        onChange={onChangeText}
        sx={{ variant: "header.form.children", "&::placeholder": {color: 'primary', textAlign: ['left', 'center', 'center'], fontSize: ['15px', '20px', '20px']} }}
      />
      <Button
        ariaLabel="Submit search text"
        ariaHidden="true"
        type="submit"
        onClick={getData}
        sx={{ variant: "header.form.children", cursor: "pointer", alignItems: 'center' }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
