import { Label, Radio } from "theme-ui";

/**
 * Switch component for Celsius/Fahrenheit toggle
 */

const Switch = ({ onToggle }) => {
  return (
    <div sx={{ variant: "switch" }}>
      <Label sx={{ variant: "switch.children" }}>
        <Radio
          name="Degree"
          value="celsius"
          defaultChecked={true}
          onChange={onToggle}
        />
        ºC
      </Label>
      <Label sx={{ variant: "switch.children" }}>
        <Radio name="Degree" value="fahrenheit" onChange={onToggle} />
        ºF
      </Label>
    </div>
  );
};

export default Switch;
