/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <section sx={{ variant: "form" }}>
      <Field
        name="address"
        type="text"
        placeholder="Type address, city, zip code or landmark name"
        onChange={onChangeText}
        sx={{
          variant: "form.children",
        }}
      />
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
    </section>
  );
};

export default Form;
