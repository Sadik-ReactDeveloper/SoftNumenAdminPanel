import React, { useEffect, useState } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountView,
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";

const CreateAccount = () => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [selectedState, setSelectedState] = useState(null);
  // const [selectedCity, setSelectedCity] = useState(null);

  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
      if (type == "number") {
        if (/^\d{0,10}$/.test(value)) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setError(
            "Please enter a valid number with a maximum length of 10 digits"
          );
        }
      } else {
        if (value.length <= 10) {
          setFormData({
            ...formData,
            [name]: value,
          });
          // console.log(value);
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
          // setError("Input length exceeds the maximum of 10 characters");
        }
      }
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    CreateAccountView()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData));
        let origionalpermission =
          JSON.parse(jsonData)?.CreateAccount?.input[14].permissions?.role;
        const rolePermissions = origionalpermission?.find(
          (role) => role._attributes?.name === "SUPERADMIN"
        );
        // console.log(rolePermissions);
        setpermissions(rolePermissions);
        // console.log(permissions);
        // console.log(rolePermissions?.canCreateUser._text.includes("true"));
        // console.log(rolePermissions?.canEditProfile._text.includes("true"));
        // console.log(rolePermissions?.canCreateUser._text.includes("true"));

        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      CreateAccountSave(formData)
        .then((res) => {
          if (res.status) {
            setFormData({});
            window.location.reload();
            swal("Acccont Created Successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Account</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.CreateAccount?.MyDropdown?.dropdown
                            ?.name?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Role--</option>
                      {dropdownValue?.CreateAccount?.MyDropdown?.dropdown?.option.map(
                        (option, index) => (
                          <option
                            key={index}
                            value={option?._attributes?.value}
                          >
                            {option?._attributes?.value}
                          </option>
                        )
                      )}
                    </CustomInput>
                  </FormGroup>
                </Col>

                {CreatAccountView &&
                  CreatAccountView?.CreateAccount?.input?.map((ele, i) => {
                    debugger;
                    let View = "";
                    let Edit = "";
                    if (ele?.role) {
                      let roles = ele?.role?.find(
                        (role) => role._attributes?.name === "WARRANTY APPROVER"
                      );
                      console.log(roles?.permissions?._text.includes("View"));
                      console.log(roles?.permissions?._text.includes("Edit"));
                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
                      console.log(View, Edit);
                    }
                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          {Edit && Edit ? (
                            <>
                              <Col key={i} lg="6" md="6" sm="12">
                                <FormGroup>
                                  <Label>{ele?.label?._text}</Label>
                                  <PhoneInput
                                    inputClass="myphoneinput"
                                    country={"us"}
                                    onKeyDown={(e) => {
                                      if (
                                        ele?.type?._attributes?.type == "number"
                                      ) {
                                        ["e", "E", "+", "-"].includes(e.key) &&
                                          e.preventDefault();
                                      }
                                    }}
                                    countryCodeEditable={false}
                                    name={ele?.name?._text}
                                    value={formData[ele?.name?._text]}
                                    onChange={(phone) => {
                                      setFormData({
                                        ...formData,
                                        [ele?.name?._text]: phone,
                                      });
                                    }}
                                    // onChange={handleInputChange}
                                  />
                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </>
                          ) : (
                            <>
                              {View && View ? (
                                <>
                                  <Col key={i} lg="6" md="6" sm="12">
                                    <FormGroup>
                                      <Label>{ele?.label?._text}</Label>
                                      <PhoneInput
                                        disabled
                                        inputClass="myphoneinput"
                                        country={"us"}
                                        onKeyDown={(e) => {
                                          if (
                                            ele?.type?._attributes?.type ==
                                            "number"
                                          ) {
                                            ["e", "E", "+", "-"].includes(
                                              e.key
                                            ) && e.preventDefault();
                                          }
                                        }}
                                        countryCodeEditable={false}
                                        name={ele?.name?._text}
                                        value={formData[ele?.name?._text]}
                                        onChange={(phone) => {
                                          setFormData({
                                            ...formData,
                                            [ele?.name?._text]: phone,
                                          });
                                        }}
                                        // onChange={handleInputChange}
                                      />
                                      {index === i ? (
                                        <>
                                          {error && (
                                            <span style={{ color: "red" }}>
                                              {error}
                                            </span>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </FormGroup>
                                  </Col>
                                </>
                              ) : null}
                            </>
                          )}
                        </>
                      );
                    } else if (!!ele?.library) {
                      if (ele?.label._text?.includes("ountry")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                inputClass="countryclass"
                                className="countryclassnw"
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={formData.country}
                                onChange={(country) => {
                                  setFormData({
                                    ...formData,
                                    ["country"]: country,
                                  });
                                }}
                              />
                              {index === i ? (
                                <>
                                  {error && (
                                    <span style={{ color: "red" }}>
                                      {error}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </FormGroup>
                          </Col>
                        );
                      } else if (ele?.label._text?.includes("tate")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                options={State?.getStatesOfCountry(
                                  formData?.country?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={formData.State}
                                onChange={(State) => {
                                  setFormData({
                                    ...formData,
                                    ["State"]: State,
                                  });
                                }}
                              />
                              {index === i ? (
                                <>
                                  {error && (
                                    <span style={{ color: "red" }}>
                                      {error}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </FormGroup>
                          </Col>
                        );
                      } else if (ele?.label._text?.includes("ity")) {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Select
                                options={City?.getCitiesOfState(
                                  formData?.State?.countryCode,
                                  formData?.State?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={formData.City}
                                onChange={(City) => {
                                  setFormData({
                                    ...formData,
                                    ["City"]: City,
                                  });
                                }}
                              />
                              {index === i ? (
                                <>
                                  {error && (
                                    <span style={{ color: "red" }}>
                                      {error}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </FormGroup>
                          </Col>
                        );
                      }
                    } else {
                      return (
                        <>
                          {Edit && Edit ? (
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>

                                <Input
                                  onKeyDown={(e) => {
                                    if (
                                      ele?.type?._attributes?.type == "number"
                                    ) {
                                      ["e", "E", "+", "-"].includes(e.key) &&
                                        e.preventDefault();
                                    }
                                  }}
                                  type={ele?.type?._attributes?.type}
                                  placeholder={ele?.placeholder?._text}
                                  name={ele?.name?._text}
                                  value={formData[ele?.name?._text]}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      ele?.type?._attributes?.type,
                                      i
                                    )
                                  }
                                />
                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          ) : (
                            <>
                              {View && View ? (
                                <>
                                  <Col key={i} lg="6" md="6" sm="12">
                                    <FormGroup>
                                      <Label>{ele?.label?._text}</Label>

                                      <Input
                                        disabled
                                        onKeyDown={(e) => {
                                          if (
                                            ele?.type?._attributes?.type ==
                                            "number"
                                          ) {
                                            ["e", "E", "+", "-"].includes(
                                              e.key
                                            ) && e.preventDefault();
                                          }
                                        }}
                                        type={ele?.type?._attributes?.type}
                                        placeholder={ele?.placeholder?._text}
                                        name={ele?.name?._text}
                                        value={formData[ele?.name?._text]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            e,
                                            ele?.type?._attributes?.type,
                                            i
                                          )
                                        }
                                      />
                                      {index === i ? (
                                        <>
                                          {error && (
                                            <span style={{ color: "red" }}>
                                              {error}
                                            </span>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </FormGroup>
                                  </Col>
                                </>
                              ) : null}
                            </>
                          )}
                        </>
                      );
                    }
                  })}
                {/* <Row>
                  <Col> */}
                <div className="container">
                  <Label className="py-1">Notification</Label>
                  <div>
                    {CreatAccountView &&
                      CreatAccountView?.CreateAccount?.CheckBox?.input?.map(
                        (ele, i) => {
                          return (
                            <>
                              <span key={i} className="mx-2">
                                <Input
                                  style={{ marginRight: "3px" }}
                                  type={ele?.type?._attributes?.type}
                                  name={ele?.name?._text}
                                  onChange={(e) =>
                                    handleInputChange(e, "checkbox")
                                  }
                                />{" "}
                                <span
                                  className="mt-1 mx-1"
                                  style={{ marginRight: "40px" }}
                                >
                                  {ele?.label?._text == "Whatsapp" ? (
                                    <BsWhatsapp
                                      className="mx-1"
                                      color="#59CE72"
                                      size={25}
                                    />
                                  ) : (
                                    <>
                                      {ele.label?._text == "SMS" ? (
                                        <>
                                          <FcPhoneAndroid size={30} />
                                        </>
                                      ) : (
                                        <>
                                          <BiEnvelope className="" size={30} />
                                        </>
                                      )}
                                    </>
                                  )}
                                  {/* <BsWhatsapp
                              className="mx-1"
                              color="#59CE72"
                              size={25}
                            /> */}
                                </span>
                              </span>
                              {/* <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Input
                                type={ele?.type?._attributes?.type}
                                placeholder={ele?.placeholder?._text}
                                name={ele?.name?._text}
                                value={formData[ele?.name?._text]}
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    ele?.type?._attributes?.type,
                                    i
                                  )
                                }
                              />
                            </FormGroup>
                          </Col> */}
                            </>
                          );
                        }
                      )}
                  </div>
                </div>
                {/* </Col>
                </Row> */}
              </Row>
              {/* <div className="mx-1 mb-1">
                <Row>
                  <Col lg="3" md="3" sm="3" xs="6">
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="whatsapp"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <BsWhatsapp className="mx-1" color="#59CE72" size={25} />
                    </span>
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="SMS"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <FcPhoneAndroid size={30} />
                    </span>
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="Mail"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <BiEnvelope className="" size={30} />
                    </span>
                  </Col>
                </Row>
              </div> */}
              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.CreateAccount?.Radiobutton?.input?.map(
                        (ele, i) => {
                          return (
                            <FormGroup key={i}>
                              <Input
                                key={i}
                                style={{ marginRight: "3px" }}
                                required
                                type={ele?.type?._attributes?.type}
                                name={ele?.name?._text}
                                value={`${
                                  ele?.label?._text == "Active"
                                    ? "Active"
                                    : "Deactive"
                                }`}
                                onChange={handleInputChange}
                              />{" "}
                              <span
                                className="mx-1 mt-1"
                                style={{ marginRight: "20px" }}
                              >
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateAccount;

// import React, { useEffect, useState } from "react";
// import xmlJs from "xml-js";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
//   FormGroup,
//   CustomInput,
// } from "reactstrap";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";
// import swal from "sweetalert";
// import {
//   CreateAccountSave,
//   CreateAccountView,
// } from "../../../../ApiEndPoint/ApiCalling";
// import { BiEnvelope } from "react-icons/bi";
// import { FcPhoneAndroid } from "react-icons/fc";
// import { BsWhatsapp } from "react-icons/bs";
// import "../../../../../src/layouts/assets/scss/pages/users.scss";
// import "../../../../assets/scss/pages/users.scss";

// const CreateAccount = () => {
//   const initialState = {
//     CreatAccountView: {},
//     formData: {},
//     dropdownValue: {},
//     index: "",
//     error: "",
//     permissions: {},
//   };

//   const [state, setState] = useState(initialState);

//   const {
//     CreatAccountView,
//     formData,
//     dropdownValue,
//     index,
//     error,
//     permissions,
//   } = state;

//   const handleInputChange = (e, type, i) => {
//     const { name, value, checked } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       index: i,
//       formData: {
//         ...prevState.formData,
//         [name]: type === "checkbox" ? checked : value,
//       },
//       error:
//         type === "number"
//           ? /^\d{0,10}$/.test(value)
//             ? ""
//             : "Please enter a valid number with a maximum length of 10 digits"
//           : "",
//     }));
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   useEffect(() => {
//     CreateAccountView()
//       .then((res) => {
//         const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
//         console.log(JSON.parse(jsonData));
//         let origionalpermission =
//           JSON.parse(jsonData)?.CreateAccount?.input[14]?.permissions?.role;
//         const rolePermissions = origionalpermission?.find(
//           (role) => role._attributes?.name === "SUPERADMIN"
//         );
//         console.log(rolePermissions?.canCreateUser._text.includes("true"));
//         console.log(rolePermissions?.canEditProfile._text.includes("true"));
//         setState((prevState) => ({
//           ...prevState,
//           permissions: rolePermissions,
//           CreatAccountView: JSON.parse(jsonData),
//           dropdownValue: JSON.parse(jsonData),
//         }));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (error) {
//       swal("Error occurred while entering details");
//     } else {
//       CreateAccountSave(formData)
//         .then((res) => {
//           if (res.status) {
//             setState((prevState) => ({
//               ...prevState,
//               formData: {},
//             }));
//             window.location.reload();
//             swal("Account Created Successfully");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div>
//       <Card>
//         <Row className="m-2">
//           <Col>
//             <h1 className="float-left">Create Account</h1>
//           </Col>
//         </Row>

//         <CardBody>
//           <Form className="m-1" onSubmit={submitHandler}>
//             <Row className="mb-2">
//               <Col lg="6" md="6">
//                 <FormGroup>
//                   <Label>
//                     {
//                       dropdownValue.CreateAccount?.MyDropdown?.dropdown?.label
//                         ?._text
//                     }
//                   </Label>
//                   <CustomInput
//                     required
//                     type="select"
//                     name={
//                       dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
//                         ?._text
//                     }
//                     value={
//                       formData[
//                         dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
//                           ?._text
//                       ]
//                     }
//                     onChange={(e) => handleInputChange(e)}
//                   >
//                     <option value="">--Select Role--</option>
//                     {dropdownValue?.CreateAccount?.MyDropdown?.dropdown?.option.map(
//                       (option, index) => (
//                         <option key={index} value={option?._attributes?.value}>
//                           {option?._attributes?.value}
//                         </option>
//                       )
//                     )}
//                   </CustomInput>
//                 </FormGroup>
//               </Col>

//               {CreatAccountView &&
//                 CreatAccountView?.CreateAccount?.input?.map((ele, i) => {
//                   let View = "";
//                   let Edit = "";

//                   if (ele?.role) {
//                     let roles = ele?.role?.find(
//                       (role) => role._attributes?.name === "SUPERADMIN"
//                     );
//                     View = roles?.permissions?._text.includes("View");
//                     Edit = roles?.permissions?._text.includes("Edit");
//                   }

//                   if (!!ele?.phoneinput) {
//                     return (
//                       <Col key={i} lg="6" md="6" sm="12">
//                         <FormGroup>
//                           <Label>{ele?.label?._text}</Label>
//                           <PhoneInput
//                             inputClass="myphoneinput"
//                             country={"us"}
//                             onKeyDown={(e) => {
//                               if (ele?.type?._attributes?.type === "number") {
//                                 ["e", "E", "+", "-"].includes(e.key) &&
//                                   e.preventDefault();
//                               }
//                             }}
//                             countryCodeEditable={false}
//                             name={ele?.name?._text}
//                             value={formData[ele?.name?._text]}
//                             onChange={(phone) => {
//                               setState((prevState) => ({
//                                 ...prevState,
//                                 formData: {
//                                   ...prevState.formData,
//                                   [ele?.name?._text]: phone,
//                                 },
//                               }));
//                             }}
//                           />
//                           {index === i && error && (
//                             <span style={{ color: "red" }}>{error}</span>
//                           )}
//                         </FormGroup>
//                       </Col>
//                     );
//                   } else if (!!ele?.library) {
//                     if (ele?.label._text?.includes("ountry")) {
//                       return (
//                         <Col key={i} lg="6" md="6" sm="12">
//                           <FormGroup>
//                             <Label>{ele?.label?._text}</Label>
//                             <Select
//                               inputClass="countryclass"
//                               className="countryclassnw"
//                               options={Country.getAllCountries()}
//                               getOptionLabel={(options) => options["name"]}
//                               getOptionValue={(options) => options["name"]}
//                               value={formData.country}
//                               onChange={(country) => {
//                                 setState((prevState) => ({
//                                   ...prevState,
//                                   formData: {
//                                     ...prevState.formData,
//                                     ["country"]: country,
//                                   },
//                                 }));
//                               }}
//                             />
//                             {index === i && error && (
//                               <span style={{ color: "red" }}>{error}</span>
//                             )}
//                           </FormGroup>
//                         </Col>
//                       );
//                     } else if (ele?.label._text?.includes("tate")) {
//                       return (
//                         <Col key={i} lg="6" md="6" sm="12">
//                           <FormGroup>
//                             <Label>{ele?.label?._text}</Label>
//                             <Select
//                               options={State?.getStatesOfCountry(
//                                 formData?.country?.isoCode
//                               )}
//                               getOptionLabel={(options) => options["name"]}
//                               getOptionValue={(options) => options["name"]}
//                               value={formData.State}
//                               onChange={(State) => {
//                                 setState((prevState) => ({
//                                   ...prevState,
//                                   formData: {
//                                     ...prevState.formData,
//                                     ["State"]: State,
//                                   },
//                                 }));
//                               }}
//                             />
//                             {index === i && error && (
//                               <span style={{ color: "red" }}>{error}</span>
//                             )}
//                           </FormGroup>
//                         </Col>
//                       );
//                     } else if (ele?.label._text?.includes("ity")) {
//                       return (
//                         <Col key={i} lg="6" md="6" sm="12">
//                           <FormGroup>
//                             <Label>{ele?.label?._text}</Label>
//                             <Select
//                               options={City?.getCitiesOfState(
//                                 formData?.State?.countryCode,
//                                 formData?.State?.isoCode
//                               )}
//                               getOptionLabel={(options) => options["name"]}
//                               getOptionValue={(options) => options["name"]}
//                               value={formData.City}
//                               onChange={(City) => {
//                                 setState((prevState) => ({
//                                   ...prevState,
//                                   formData: {
//                                     ...prevState.formData,
//                                     ["City"]: City,
//                                   },
//                                 }));
//                               }}
//                             />
//                             {index === i && error && (
//                               <span style={{ color: "red" }}>{error}</span>
//                             )}
//                           </FormGroup>
//                         </Col>
//                       );
//                     }
//                   } else {
//                     return (
//                       <>
//                         {Edit && Edit ? (
//                           <Col key={i} lg="6" md="6" sm="12">
//                             <FormGroup>
//                               <Label>{ele?.label?._text}</Label>
//                               <Input
//                                 onKeyDown={(e) => {
//                                   if (
//                                     ele?.type?._attributes?.type === "number"
//                                   ) {
//                                     ["e", "E", "+", "-"].includes(e.key) &&
//                                       e.preventDefault();
//                                   }
//                                 }}
//                                 type={ele?.type?._attributes?.type}
//                                 placeholder={ele?.placeholder?._text}
//                                 name={ele?.name?._text}
//                                 value={formData[ele?.name?._text]}
//                                 onChange={(e) =>
//                                   handleInputChange(
//                                     e,
//                                     ele?.type?._attributes?.type,
//                                     i
//                                   )
//                                 }
//                               />
//                               {index === i && error && (
//                                 <span style={{ color: "red" }}>{error}</span>
//                               )}
//                             </FormGroup>
//                           </Col>
//                         ) : (
//                           <>
//                             {View && View ? (
//                               <Col key={i} lg="6" md="6" sm="12">
//                                 <FormGroup>
//                                   <Label>{ele?.label?._text}</Label>
//                                   <Input
//                                     disabled
//                                     onKeyDown={(e) => {
//                                       if (
//                                         ele?.type?._attributes?.type ===
//                                         "number"
//                                       ) {
//                                         ["e", "E", "+", "-"].includes(e.key) &&
//                                           e.preventDefault();
//                                       }
//                                     }}
//                                     type={ele?.type?._attributes?.type}
//                                     placeholder={ele?.placeholder?._text}
//                                     name={ele?.name?._text}
//                                     value={formData[ele?.name?._text]}
//                                     onChange={(e) =>
//                                       handleInputChange(
//                                         e,
//                                         ele?.type?._attributes?.type,
//                                         i
//                                       )
//                                     }
//                                   />
//                                   {index === i && error && (
//                                     <span style={{ color: "red" }}>
//                                       {error}
//                                     </span>
//                                   )}
//                                 </FormGroup>
//                               </Col>
//                             ) : null}
//                           </>
//                         )}
//                       </>
//                     );
//                   }
//                 })}
//             </Row>
//             <div className="container">
//               {CreatAccountView &&
//                 CreatAccountView?.CreateAccount?.CheckBox?.input?.map(
//                   (ele, i) => (
//                     <>
//                       <span key={i} className="mx-2">
//                         <Input
//                           style={{ marginRight: "3px" }}
//                           type={ele?.type?._attributes?.type}
//                           name={ele?.name?._text}
//                           onChange={(e) => handleInputChange(e, "checkbox")}
//                         />{" "}
//                         <span
//                           className="mt-1 mx-1"
//                           style={{ marginRight: "40px" }}
//                         >
//                           {ele?.label?._text === "Whatsapp" ? (
//                             <BsWhatsapp
//                               className="mx-1"
//                               color="#59CE72"
//                               size={25}
//                             />
//                           ) : (
//                             <>
//                               {ele.label?._text === "SMS" ? (
//                                 <>
//                                   <FcPhoneAndroid size={30} />
//                                 </>
//                               ) : (
//                                 <>
//                                   <BiEnvelope className="" size={30} />
//                                 </>
//                               )}
//                             </>
//                           )}
//                         </span>
//                       </span>
//                     </>
//                   )
//                 )}
//             </div>
//             <hr />
//             <Row className="mt-2 ">
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label className="">
//                   <h4>Status</h4>
//                 </Label>
//                 <div className="form-label-group mx-1">
//                   {CreatAccountView &&
//                     CreatAccountView?.CreateAccount?.Radiobutton?.input?.map(
//                       (ele, i) => (
//                         <FormGroup key={i}>
//                           <Input
//                             key={i}
//                             style={{ marginRight: "3px" }}
//                             required
//                             type={ele?.type?._attributes?.type}
//                             name={ele?.name?._text}
//                             value={`${
//                               ele?.label?._text === "Active"
//                                 ? "Active"
//                                 : "Deactive"
//                             }`}
//                             onChange={handleInputChange}
//                           />{" "}
//                           <span
//                             className="mx-1 mt-1"
//                             style={{ marginRight: "20px" }}
//                           >
//                             {ele?.label?._text}
//                           </span>
//                         </FormGroup>
//                       )
//                     )}
//                 </div>
//               </Col>
//             </Row>
//             <Row>
//               <Button.Ripple
//                 color="primary"
//                 type="submit"
//                 className="mr-1 mt-2 mx-2"
//               >
//                 Submit
//               </Button.Ripple>
//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default CreateAccount;
