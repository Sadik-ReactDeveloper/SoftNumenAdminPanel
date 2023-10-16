import React, { useEffect, useState, useContext } from "react";
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
  PolicyViewData,
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";
import { CloudLightning } from "react-feather";

const CreatePolicy = () => {
  const [CreatePolicyView, setCreatePolicyView] = useState({});
  const [Countries, setCountry] = useState({});
  const [States, setState] = useState({});
  const [Cities, setCities] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  const [formValues, setFormValues] = useState([
    {
      attachment: null,
      comment: "",
      notification: "",
    },
  ]);
  const createUserXmlView = useContext(UserContext);

  const handleInputChange = (e, type, i) => {
    console.log(e.target.value);
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
  useEffect(() => {}, [formData]);
  useEffect(() => {
    PolicyViewData()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData).Policy);
        setCreatePolicyView(JSON.parse(jsonData));
        let value = JSON.parse(jsonData)?.MyDropdown?.CheckBox?.input;
        value?.map(ele => {
          formData[ele?.name._text] = false;
        });

        setdropdownValue(JSON.parse(jsonData));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { comment: "", attachment: null, notification: "" },
    ]);
  };

  let removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const submitHandler = e => {
    e.preventDefault();
    // if (error) {
    //   swal("Error occured while Entering Details");
    // } else {
    //   CreateAccountSave(formData)
    //     .then(res => {
    //       setFormData({});
    //       if (res.status) {
    //         window.location.reload();
    //         swal("Acccont Created Successfully");
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Policy</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownRole?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownRole?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownRole?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Role---</option>
                      {dropdownValue?.Policy?.DropdownRole?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownPolicy?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownPolicy?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownPolicy?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Warranty---</option>
                      {dropdownValue?.Policy?.DropdownPolicy?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownPartner?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownPartner?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownPartner?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Partner Code---</option>
                      {dropdownValue?.Policy?.DropdownPartner?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownProduct?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownProduct?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownProduct?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Product ---</option>
                      {dropdownValue?.Policy?.DropdownProduct?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownModel?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownModel?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownModel?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Model ---</option>
                      {dropdownValue?.Policy?.DropdownModel?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownVariant?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownVariant?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownVariant?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Variant ---</option>
                      {dropdownValue?.Policy?.DropdownVariant?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownUnit?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownUnit?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownUnit?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Unit ---</option>
                      {dropdownValue?.Policy?.DropdownUnit?.dropdown?.option.map(
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.Policy?.DropdownYear?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.Policy?.DropdownYear?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.Policy?.DropdownYear?.dropdown?.name
                            ?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Year ---</option>
                      {dropdownValue?.Policy?.DropdownYear?.dropdown?.option.map(
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
                {CreatePolicyView &&
                  CreatePolicyView?.Policy?.input?.map((ele, i) => {
                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <PhoneInput
                                inputClass="myphoneinput"
                                country={"us"}
                                onKeyDown={e => {
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
                                onChange={phone => {
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
                                getOptionLabel={options => {
                                  return options["name"];
                                }}
                                getOptionValue={options => {
                                  return options["name"];
                                }}
                                value={Countries}
                                onChange={country => {
                                  setCountry(country);
                                  setFormData({
                                    ...formData,
                                    ["Country"]: country?.name,
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
                                  Countries?.isoCode
                                )}
                                getOptionLabel={options => {
                                  return options["name"];
                                }}
                                getOptionValue={options => {
                                  return options["name"];
                                }}
                                value={States}
                                onChange={State => {
                                  setState(State);
                                  setFormData({
                                    ...formData,
                                    ["State"]: State?.name,
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
                                  States?.countryCode,
                                  States?.isoCode
                                )}
                                getOptionLabel={options => {
                                  return options["name"];
                                }}
                                getOptionValue={options => {
                                  return options["name"];
                                }}
                                value={Cities}
                                onChange={City => {
                                  setCities(City);
                                  setFormData({
                                    ...formData,
                                    ["City"]: City?.name,
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
                      } else {
                        return (
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup key={i}>
                              <Label>{ele?.label?._text}</Label>

                              <Input
                                onKeyDown={e => {
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
                                onChange={e =>
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
                        );
                      }
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup key={i}>
                              <Label>{ele?.label?._text}</Label>

                              <Input
                                onKeyDown={e => {
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
                                onChange={e =>
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
                      );
                    }
                  })}

                {/* <div className="container">
                  <Label className="py-1">Notification</Label>
                  <div>
                    {CreatePolicyView &&
                      CreatePolicyView?.CreateAccount?.CheckBox?.input?.map(
                        (ele, i) => {
                          return (
                            <>
                              <span key={i} className="mx-2">
                                <Input
                                  style={{ marginRight: "3px" }}
                                  type={ele?.type?._attributes?.type}
                                  name={ele?.name?._text}
                                  onChange={e =>
                                    handleInputChange(e, "checkbox")
                                  }
                                />
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
                </div> */}
              </Row>

              {formValues.map((element, index) => (
                <Row key={index} className="my-2">
                  {/* <Col lg="4">
                      <Label>Notification</Label>
                      <Input
                        style={{ marginRight: "3px" }}
                        type="checkbox"
                        name="notification"
                        onChange={e => handleInputChange(e, "checkbox")}
                      />
                      <span
                        className="mt-1 mx-1"
                        style={{ marginRight: "40px" }}
                      >
                        <BsWhatsapp
                          className="mx-1"
                          color="#59CE72"
                          size={25}
                        />
                      </span>
                      <Input
                        style={{ marginRight: "3px" }}
                        type="checkbox"
                        name="notification"
                        onChange={e => handleInputChange(e, "checkbox")}
                      />
                      <span
                        className="mt-1 mx-1"
                        style={{ marginRight: "40px" }}
                      >
                        <FcPhoneAndroid size={30} />
                      </span>
                      <Input
                        style={{ marginRight: "3px" }}
                        type="checkbox"
                        name="notification"
                        onChange={e => handleInputChange(e, "checkbox")}
                      />
                      <span
                        className="mt-1 mx-1"
                        style={{ marginRight: "40px" }}
                      >
                        <BiEnvelope className="" size={30} />
                      </span> */}
                  {/* <Input
                        type="text"
                        name="notification"
                        value={element.notification || ""}
                        placeholder="notify"
                        onChange={e => handleChange(index, e)}
                      /> */}
                  {/* </Col> */}
                  <Col lg="6" md="6" sm="12">
                    <Label>Comment</Label>
                    <Input
                      type="textarea"
                      name="comment"
                      placeholder="Comment"
                      value={element.comment || ""}
                      onChange={e => handleChange(index, e)}
                    />
                  </Col>
                  <Col lg="3" md="3" sm="12">
                    <Label>Attachment</Label>
                    <Input
                      type="file"
                      name="attachment"
                      onChange={e => handleChange(index, e)}
                    />
                  </Col>
                  <Col className="d-flex" lg="3" md="3" sm="12">
                    <div>
                      {index ? (
                        <Button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFormFields(index)}
                        >
                          Remove
                        </Button>
                      ) : null}
                    </div>

                    <div>
                      <Button
                        className="ml-1"
                        type="button"
                        onClick={() => addFormFields()}
                      >
                        Add More
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}

              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatePolicyView &&
                      CreatePolicyView?.Policy?.Radiobutton?.input?.map(
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
export default CreatePolicy;
