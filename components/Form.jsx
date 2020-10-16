/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <form sx={{ variant: "form", zIndex: 3 }}>
      <Field
        name="address"
        type="text"
        ariaHidden="true"
        ariaLabel="input box for search query"
        placeholder="type address, city, zip code or landmark name"
        onChange={onChangeText}
        sx={{ variant: "form.children", "&::placeholder": {color: '#fff'} }}
      />
      <Button
        ariaLabel="Submit search text"
        type="submit"
        onClick={getData}
        sx={{ variant: "form.children", cursor: "pointer" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
