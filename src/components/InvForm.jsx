import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  Radio,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import DatePicker from "./DatePicker";

export default function InvForm() {
  const resetForm = () => {
    setValues(initialFValues);
  };

  const initialFValues = {
    invDate: new Date(),
    invRef: "",
    description: "",
    category: "",
    region: "",
    invValue: 0,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const regionItems = [
    { id: "N", title: "North" },
    { id: "S", title: "South" },
    { id: "M", title: "Midlands" },
  ];

  const categoryItems = [
    { id: "P", title: "Pizza Oven" },
    { id: "H", title: "Hot Tubs" },
    { id: "F", title: "Furniture" },
  ];
  const [values, setValues] = useState(initialFValues);

  const useStyles = makeStyles((theme) => ({
    empForm: {
      "& .MuiFormControl-root": {
        width: "90%",
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.empForm}>
        <Grid item xs={6}>
          <TextField
            name="invRef"
            label="Invoice Ref"
            value={values.invRef}
            onChange={handleInputChange}
            variant="outlined"
          />
          <DatePicker
            name="invDate"
            label="Invoice Date"
            value={values.invDate}
            onChange={handleInputChange}
          />
          <CurrencyTextField
            label="Amount"
            variant="outlined"
            value={values.invValue}
            currencySymbol="£"
            outputFormat="string"
            onChange={(event) => handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Region</FormLabel>
            <RadioGroup
              row
              name="region"
              value={values.region}
              onChange={handleInputChange}
            >
              {regionItems.map((item) => (
                <FormControlLabel
                  key={item.id}
                  value={item.id}
                  control={<Radio />}
                  label={item.title}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              name="category"
              value={values.category}
              onChange={handleInputChange}
            >
              <MenuItem value="">None</MenuItem>
              {categoryItems.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="description"
            label="Description"
            value={values.description}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.empFormWide}>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
