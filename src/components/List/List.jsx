import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import { checked } from "../../redux/variants/variantsSlice";
import { selectVariants } from "../../redux/selectors";

const List = () => {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const variants = useSelector(selectVariants);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    dispatch(checked(value));
  };

  const handleSwitch = () => {
    setOpen(!open);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        onOpen={handleSwitch}
        onClose={handleSwitch}
        displayEmpty
        multiple
        value={variants}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return open ? "Вибрати значення" : "Виберіть значення";
          }

          return `Варіант ${selected.join("-")}`;
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={variants.indexOf(name) > -1} />
            <ListItemText primary={`Варіант ${name}`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default List;
