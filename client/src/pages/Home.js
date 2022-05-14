import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";

const Home = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Listing Query..."
        variant="outlined"
      />
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Grailed" />
        <FormControlLabel
          control={<Switch defaultChecked color="secondary" />}
          label="Ebay"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </FormGroup>
    </div>
  );
};

export default Home;
