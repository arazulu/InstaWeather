/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button, Radio, Label } from "theme-ui";

const Form = ({ onChangeText, getData }) => {
  return (
    <section sx={{ display: "flex" }}>
      <Field
        type="text"
        placeholder="city name or zip code"
        onChange={onChangeText}
      />
      <Button type="submit" onClick={getData}>
        Submit
      </Button>
      <div>
        <Label>
          <Radio name="Degree" value="true" defaultChecked={true} />
          Celsius
        </Label>
        <Label>
          <Radio name="Degree" value="false" />
          Fahrenheit
        </Label>
      </div>
    </section>
  );
};

export default Form;
