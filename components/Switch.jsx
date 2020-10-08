/** @jsx jsx */
import { jsx } from "theme-ui";
import { Label, Radio } from "theme-ui";

const Switch = ({ onToggle }) => {
  return (
    <div sx={{ variant: "switch" }}>
      <Label
        htmlFor="Degree"
        sx={{ variant: "switch.children", cursor: "pointer" }}
      >
        <Radio
          name="Degree"
          value="celsius"
          defaultChecked={true}
          onChange={onToggle}
        />
        Celsius
        {/* {process.browser && window.innerWidth <= "800px" ? ºC : "Celsius"} */}
      </Label>
      <Label
        htmlFor="Degree"
        sx={{ variant: "switch.children", cursor: "pointer" }}
      >
        <Radio name="Degree" value="fahrenheit" onChange={onToggle} />
        Fahrenheit
      </Label>
    </div>
  );
};

export default Switch;
