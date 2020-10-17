/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <form sx={{ variant: "form" }}>
      <Field
        htmlFor="address"
        name="address"
        type="search"
        ariaHidden="true"
        ariaLabel="input box for search query"
        placeholder="type address, city, zip code or landmark name"
        onChange={onChangeText}
        sx={{ variant: "form.children", "&::placeholder": {color: 'text'} }}
      />
      <Button
        ariaLabel="Submit search text"
        ariaHidden="true"
        type="submit"
        onClick={getData}
        sx={{ variant: "form.children", cursor: "pointer", alignItems: 'center' }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
