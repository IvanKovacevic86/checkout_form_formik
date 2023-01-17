import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = checkoutFormModel;

const value = {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: "",
  [cardNumber.name]: "",
  [expiryDate.name]: "",
  [cvv.name]: "",
};

export default value;
