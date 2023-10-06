import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import swal from "sweetalert";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountUpdate,
  CreateAccountView,
} from "../../../../ApiEndPoint/ApiCalling";

const CreateAccount = ({ EditOneData }) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const Params = useParams();

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
  // console.log(formData);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(EditOneData);
    setFormData(EditOneData);
    // CreateAccountUpdate(Params.id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    CreateAccountView()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        // console.log(JSON.parse(jsonData));
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, EditOneData?._id);
    CreateAccountUpdate(EditOneData?._id, formData)
      .then((res) => {
        if (res.status) {
          setFormData({});
          // window.location.reload();
          swal("Acccont Updated Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Account Information</h1>
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
                    let View = "";
                    let Edit = "";
                    if (ele?.role) {
                      let roles = ele?.role?.find(
                        (role) => role._attributes?.name === "WARRANTY APPROVER"
                      );
                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
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
                                </span>
                              </span>
                            </>
                          );
                        }
                      )}
                  </div>
                </div>
              </Row>
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
                                className="mt-2"
                                style={{ marginLeft: "20px" }}
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
                  Update
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
