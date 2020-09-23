/** @jsx jsx */
import { jsx } from "theme-ui";
import { Field, Button, Radio, Label } from "theme-ui";

const Form = ({ onChangeText, getData, onToggle }) => {
  return (
    <section sx={{ display: "flex" }}>
      <Field
        name="address"
        type="text"
        placeholder="enter address"
        onChange={onChangeText}
      />
      <Button type="submit" onClick={getData}>
        Submit
      </Button>
      <div>
        <Label>
          <Radio
            name="Degree"
            value="celsius"
            defaultChecked={true}
            onChange={onToggle}
          />
          Celsius
        </Label>
        <Label>
          <Radio name="Degree" value="fahrenheit" onChange={onToggle} />
          Fahrenheit
        </Label>
      </div>
    </section>
  );
};

export default Form;
