/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <form sx={{ variant: "form" }}>
      <Field
        name="address"
        type="text"
        label="input box for search query"
        placeholder="Type address, city, zip code or landmark name"
        onChange={onChangeText}
        sx={{
          variant: "form.children",
        }}
      />
      <label>
        Submit Query
        <Button
          type="submit"
          onClick={getData}
          sx={{
            variant: "form.children",
            cursor: "pointer",
          }}
        >
          Submit
        </Button>
      </label>
    </form>
  );
};

export default Form;
