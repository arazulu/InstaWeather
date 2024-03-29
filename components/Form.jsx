import { Field, Button } from "theme-ui";

/**
 * Header Content Form - location search field
 */

const Form = ({ onChangeText, getData }) => {
  return (
    <form sx={{ variant: "header.form" }}>
      <Field
        htmlFor="address"
        name="address"
        type="search"
        aria-hidden="true"
        aria-label="input box for search query"
        placeholder="type address, city, zip code or landmark"
        onChange={onChangeText}
        sx={{
          variant: "header.form.children",
          "&::placeholder": {
            color: "primary",
            textAlign: ["left", "center", "center"],
            fontSize: ["15px", "20px", "20px"],
          },
        }}
      />
      <Button
        aria-label="Submit search text"
        aria-hidden="true"
        type="submit"
        onClick={getData}
        sx={{
          variant: "header.form.children",
          cursor: "pointer",
          alignItems: "center",
        }}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
