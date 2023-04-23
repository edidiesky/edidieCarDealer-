export const  inputData = [
    {
      id: 1,
      name: "firstname",
      placeholder: "John",
      type: "text",
      text: "First name",
      errorMessage:
        "firstname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Doe",
      type: "text",
      text: "Last name",
      errorMessage:
        "lastname should be 3-16 characters and should not contain any special Characters",
      required: true,
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
    },
    {
      id: 3,
      name: "company",
      placeholder: "company name",
      type: "text",
      text: "Company Name",
      errorMessage:
        "lastname should be 3-16 characters and should not contain any special Character",
      required: false,
    },
    {
      id: 4,
      name: "country",
      placeholder: "Country name",
      type: "text",
      text: "Country Name",
      errorMessage:
        "country should be 3-16 characters and should not contain any special Character",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 5,
      name: "address",
      placeholder: "Address",
      type: "text",
      text: "Address",
      errorMessage:
        "address should be 3-16 characters and should not contain any special Character",
      required: true,
    },
    {
      id: 6,
      name: "city",
      placeholder: "Town Address",
      type: "text",
      text: "Town Address",
      errorMessage:
        "City should be 3-16 characters and should not contain any special Character",
      required: true,
      pattern: "^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$",
    },
    {
      id: 7,
      name: "phone",
      placeholder: "phone details",
      type: "text",
      text: "phone",
      errorMessage:
        "phone should be 3-16 characters and should not contain any special Character",
      required: true,
    },
    {
      id: 8,
      name: "postalCode",
      placeholder: "postal Code",
      type: "text",
      text: "postal Code",
      errorMessage:
        "postal Code should be 3-16 characters and should not contain any special Character",
      required: true,
    },
    {
      id: 9,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
  ]