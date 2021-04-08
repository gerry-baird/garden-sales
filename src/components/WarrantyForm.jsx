import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DateFnsUtils from "@date-io/date-fns";

import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";

import { useDispatch } from "react-redux";
import { addWarranty } from "../redux/WarrantySlice";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  installerID: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postcode: "",
  demonstrated: "",
  category: "N",
  date: new Date(),
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  installerID: Yup.string().matches(/^\d{3}-\d{4}$/, "Format must be ###-####"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  postcode: Yup.string().required("Required"),
  category: Yup.mixed().notOneOf(["N"], "Please Select"),
});

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonArea: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
  },
}));

const WarrantyForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.formWrapper}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(
            addWarranty({
              id: values.installerID,
              firstName: values.firstName,
            })
          );
          console.log(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ dirty, isValid, handleReset }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Installation Details</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="installerID"
                    label="Installer ID"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={DatePicker}
                    name="date"
                    label="Installation Date"
                    variant="inline"
                    inputVariant="outlined"
                    fullWidth
                    format="dd/MM/yyyy"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Customer Details</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="firstName"
                    label="First Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="addressLine1"
                    label="Address Line 1"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="addressLine2"
                    label="Address Line 2"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="city"
                    label="Town or City"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="postcode"
                    label="Postcode"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    name="phone"
                    label="Mobile Number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Installation Details</Typography>
                </Grid>

                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <Field
                      component={TextField}
                      type="text"
                      label="Product Type"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="category"
                      select
                      variant="outlined"
                      inputProps={{
                        id: "category",
                      }}
                    >
                      <MenuItem value="N">None Selected</MenuItem>
                      <MenuItem value="P">Pizza Oven</MenuItem>
                      <MenuItem value="H">Hot Tub</MenuItem>
                      <MenuItem value="F">Furniture</MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    component={CheckboxWithLabel}
                    type="checkbox"
                    name="demonstrated"
                    Label={{ label: "Demonstrated" }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.buttonArea}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!dirty || !isValid}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Grid>
            </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </Grid>
  );
};

export default WarrantyForm;
