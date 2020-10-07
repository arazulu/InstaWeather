/** @jsx jsx */
import { jsx } from "theme-ui";
import { Label, Radio } from "theme-ui";

const Switch = ({ onToggle }) => {
  return (
    <div sx={{ variant: "switch" }}>
      <Label sx={{ variant: "switch.children", cursor: "pointer" }}>
        <Radio
          name="Degree"
          value="celsius"
          defaultChecked={true}
          onChange={onToggle}
        />
        Celsius
      </Label>
      <Label sx={{ variant: "switch.children", cursor: "pointer" }}>
        <Radio name="Degree" value="fahrenheit" onChange={onToggle} />
        Fahrenheit
      </Label>
    </div>
  );
};

export default Switch;
