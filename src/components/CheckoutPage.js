import {
  Box,
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import { Formik, Form } from "formik";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import CheckoutSuccess from "./CheckoutSuccess";

const steps = ["Shipping Address", " Payment Details", "Review your order"];
const { formId, formField } = checkoutFormModel;

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
};

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = validationSchema[activeStep];

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async function submitForm(values, actions) {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box m={5}>
      <Typography component="h1" variant="h4" align="center" mb={2}>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ marginTop: "24px", marginLeft: "16px" }}
                    >
                      Back
                    </Button>
                  )}

                  <Box>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "24px", marginLeft: "16px" }}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && <CircularProgress size={24} />}
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Box>
    </Box>
  );
};

export default CheckoutPage;
