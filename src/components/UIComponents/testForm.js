import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// M-UI compo
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

// import form compo
import { MyTextInput } from "../UIComponents/common/formComponents";
import { MySelect } from "../UIComponents/common/formComponents";
import { MyCheckbox } from "../UIComponents/common/formComponents";

// And now we can use these
const TestForm = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <div className="formDiv">
            <h1>Practice Form!</h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                acceptedTerms: false, // added for our checkbox
                jobType: "", // added for our select
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .min(4, "Must be 4 characters or greater")
                  .required("Required"),
                lastName: Yup.string()
                  .min(4, "Must be 4 characters or greater")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                phoneNumber: Yup.number()
                  .required("Required")
                  .test(
                    "len",
                    "Must be exactly 11 characters",
                    (val) => val && val.toString().length === 11
                  ),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values) => {
                console.log("onSubmit------>>", values);
              }}
            >
              <Form>
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                />
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <MyTextInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  placeholder="92322443"
                />
                <MySelect label="Job Type" name="jobType">
                  <MenuItem value="">Select a job type</MenuItem>
                  <MenuItem value="designer">Designer</MenuItem>
                  <MenuItem value="development">Developer</MenuItem>
                  <MenuItem value="product">Product Manager</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </MySelect>
                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>

                <div className="buttonDiv">
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default TestForm;
