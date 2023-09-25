// import React, { Component, useDebugValue } from "react";
import React, { useEffect, useState } from "react";
// import XMLDisplay from "../customer/XMLDisplay";
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

import axiosConfig from "../../../../axiosConfig";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import { CloudLightning } from "react-feather";
import { timers } from "jquery";
import xml2js from "xml2js";
import { CreateAccountView } from "../../../../ApiEndPoint/ApiCalling";
const selectItem1 = [];
const selectstate2 = [];

const AllunSelectedCity = [];
const Selectedarray = [];

const CreateAccount = () => {
  // const [Address, setAddress] = useState("");
  const [CreatAccountView, setCreatAccountView] = useState({});

  const [multiSelect, setmultiSelect] = useState([]);
  const [selectedOptions, setselectedOptions] = useState([]);

  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});

  const handleInputChange = (e) => {
    debugger;
    // Handle input changes and update formData state
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData);
  useEffect(() => {
    CreateAccountView()
      .then((res) => {
        // console.log(res.data);
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData));
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
        // xml2js.parseString(res?.data, (err, result) => {
        //   if (err) {
        //     console.error("Error parsing XML:", err);
        //   } else {
        //     console.log(result);
        //   }
        // });
      })
      .catch((err) => {
        console.log(err);
      });

    // state List
  }, []);
  console.log(formData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // let uniqueChars = [...new Set(selectItem1)];
    // let selectedOption = [...new Set(selectedOptions)];

    const formdata = new FormData();

    axiosConfig
      .post("/createuser", formdata)
      .then((response) => {
        if (response.data?.success) {
        }
        // this.props.history.push("/app/freshlist/order/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);

    if (selectedList.length) {
      for (var i = 0; i < selectedList.length; i++) {
        selectItem1.push(selectedList[i].id);
      }
    }
  };
  const onSelect1 = (selectedList, selectedItem) => {
    if (selectedList.length) {
      for (var i = 0; i < selectedList.length; i++) {
        selectedOptions.push(selectedList[i].id);
      }
    }

    let arr = selectedList.map((ele) => ele.id);
    setmultiSelect(arr);
    // console.log(multiSelect);

    let uniqueChars = [...new Set(selectedOptions)];
  };
  const onRemove1 = (selectedList, removedItem) => {
    // debugger;
    // setselectedOptions("");
    // console.log(selectedList);
    // setmultiSelect(selectedList);

    let arr = selectedList.map((ele) => ele.id);
    // console.log(arr);
    setmultiSelect(arr);
    // console.log(multiSelect);
    // if (selectedList.length) {
    //   for (var i = 0; i < selectedList.length; i++) {
    //     selectedOptions.push(selectedList[i].id);
    //   }
    // }
    // let uniqueChars = [...new Set(selectedOptions)];
    // console.log(uniqueChars);
  };

  // const onRemove = (selectedList, removedItem) => {
  //   console.log(selectedList);
  //   console.log(removedItem);
  // };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Account</h1>
            </Col>
          </Row>
          <div className="container "></div>

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
                    return (
                      <Col key={i} lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>{ele?.label?._text}</Label>
                          <Input
                            required
                            // onKeyDown={(e) => {
                            //   ["e", "E", "+", "-"].includes(e.key) &&
                            //     e.preventDefault();
                            // }}
                            type={ele?.type?._attributes?.type}
                            placeholder={ele?.placeholder?._text}
                            name={ele?.name?._text}
                            value={formData[ele?.name?._text]}
                            onChange={handleInputChange}
                            // value={fullname}
                            // onChange={(e) => setfullname(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    );
                  })}

                {/* <Col lg="6" md="6" sm="12">
                  <FormGroup>
                    <Label>Name *</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="fullname"
                      value={fullname}
                      onChange={(e) => setfullname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Display Code *</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="UserName"
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number *</Label>
                    <Input
                      required
                      type="number"
                      maxLength={12}
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      size={10}
                      min={0}
                      placeholder="0123456789"
                      name="Mobile_no"
                      value={Mobile_no}
                      onChange={(e) => setMobile_no(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email *</Label>
                    <Input
                      required
                      type="email"
                      placeholder="abcd@gmail.com..."
                      name="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      required
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Company Name</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter CompanyName"
                      name="CompanyName"
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number </Label>
                    <Input
                      required
                      type="number"
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      maxLength={12}
                      size={10}
                      placeholder="0123456789"
                      name="Phone_no"
                      value={Phone_no}
                      onChange={(e) => setPhone_no(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Company Type</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Companytype"
                      name="Companytype"
                      value={Companytype}
                      onChange={(e) => setCompanytype(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>GSTIN</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter GSTIN No."
                      name="GSTIN"
                      value={GSTIN}
                      onChange={(e) => setGSTIN(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Row></Row>
                    <Label for="cars"> State *</Label>
                    {AssignRole === "supplier" ? (
                      <>
                        <Multiselect
                          required
                          showCheckbox="true"
                          isObject="false"
                          options={StateList} // Options to display in the dropdown
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={onSelect1} // Function will trigger on select event
                          onRemove={onRemove1} // Function will trigger on remove event
                          displayValue="state_title" // Property name to display in the dropdown options
                        />
                      </>
                    ) : (
                      <>
                        <select
                          required
                          name="SelectedState"
                          value={SelectedState}
                          onChange={(e) => {
                            const formdata = new FormData();
                            setSelectedState(e.target.value);
                            // this.setState({ SelectedState: e.target.value });
                            formdata.append("state_id", e.target.value);
                            axiosConfig
                              .post(`/getcity`, formdata)
                              .then((res) => {
                                setCityList(res?.data?.cities);
                                // this.setState({ CityList: res?.data?.cities });
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                          // onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select State--</option>
                          {StateList &&
                            StateList?.map((ele, i) => (
                              <option key={i} value={ele?.id}>
                                {ele?.state_title}
                              </option>
                            ))}
                        </select>
                      </>
                    )}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <Label for="cars">City * </Label>
                  <Multiselect
                    required
                    options={CityList} // Options to display in the dropdown
                    // selectedValues={selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                  />
                </Col> */}

                {/* {AssignRole === "supplier" ? (
                  <>
                    <Col lg="6" md="6">
                      <FormGroup>
                        <Label>Place of Supply</Label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter Place_of_Supply"
                          name="Place_of_Supply"
                          value={Place_of_Supply}
                          onChange={(e) => setPlace_of_Supply(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </>
                ) : null} */}
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
                          console.log(ele);
                          return (
                            <FormGroup>
                              <Input
                                style={{ marginRight: "3px" }}
                                required
                                // onKeyDown={(e) => {
                                //   ["e", "E", "+", "-"].includes(e.key) &&
                                //     e.preventDefault();
                                // }}
                                onChange={handleInputChange}
                                type={ele?.type?._attributes?.type}
                                // placeholder={ele?.placeholder?._text}
                                name={ele?.name?._text}
                                value={formData[ele?.name?._text]}
                                // value={fullname}
                                // onChange={(e) => setfullname(e.target.value)}
                              />{" "}
                              <span style={{ marginRight: "20px" }}>
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col className="mt-2" lg="6" md="6" sm="12">
                  <h4 className="mt-5 pb-2">Billing Address :</h4>

                  <Col className="" lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose Country</Label>
                      <select
                        placeholder="Enter City"
                        name="B_Country"
                        value={B_Country}
                        onChange={(e) => setB_Country(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select Country--</option>
                        <option value="India">India</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose State</Label>
                      <select
                        name="B_State"
                        value={B_State}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setB_State(e.target.value);
                          const formdata = new FormData();
                          formdata.append("state_id", e.target.value);
                          axiosConfig
                            .post(`/getcity`, formdata)
                            .then((res) => {
                              setCityList(res?.data?.cities);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                        className="form-control"
                      >
                        <option value="volvo">--Select State--</option>
                        {StateList &&
                          StateList?.map((ele, i) => (
                            <option key={i} value={ele?.id}>
                              {ele?.state_title}
                            </option>
                          ))}
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <FormGroup>
                        <Label for="cars">Choose City</Label>
                        <select
                          placeholder="Enter City"
                          name="B_City"
                          value={B_City}
                          onChange={(e) => setB_City(e.target.value)}
                          className="form-control"
                        >
                          <option value="volvo">--Select City--</option>
                          {CityList &&
                            CityList?.map((value, index) => (
                              <option key={index} value={value?.id}>
                                {value?.name}
                              </option>
                            ))}
                        </select>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>Street</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter Street"
                        name="B_Street"
                        value={B_Street}
                        onChange={(e) => setB_Street(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>PinCode</Label>
                      <Input
                        required
                        type="number"
                        onKeyDown={(e) =>
                          ["e", "E", "+", "-"].includes(e.key) &&
                          e.preventDefault()
                        }
                        min={0}
                        placeholder="Enter PinCode"
                        name="B_PinCode"
                        value={B_PinCode}
                        onChange={(e) => setB_PinCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <hr />
                  <Row>
                    <Col className="ml-2" lg="6" md="6" sm="12">
                      <Input
                        name="check"
                        onChange={(e) => {
                          handleMatchaddress(e, e.target.checked);
                        }}
                        style={{
                          height: "15px",
                          width: "20px",
                        }}
                        type="checkbox"
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="ml-3">
                      <h5> Same as Billing Address </h5>
                    </Col>
                  </Row>
                  <h4 className="py-2">Shipping Address :</h4>

                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose Country</Label>
                      <select
                        placeholder="Enter City"
                        name="S_Country"
                        disabled={checkbox ? true : false}
                        value={S_Country}
                        onChange={(e) => setS_Country(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select Country--</option>
                        <option value="India">India</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose State</Label>
                      <select
                        name="S_State"
                        value={S_State}
                        onChange={(e) => {
                          setS_State(e.target.value);
                          const formdata = new FormData();
                          formdata.append("state_id", e.target.value);
                          axiosConfig
                            .post(`/getcity`, formdata)
                            .then((res) => {
                              console.log(res?.data?.cities);
                              setCityList(res?.data?.cities);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                        className="form-control"
                      >
                        <option value="volvo">--Select State--</option>
                        {StateList &&
                          StateList?.map((ele, i) => (
                            <option key={i} value={ele?.id}>
                              {ele?.state_title}
                            </option>
                          ))}
                      </select>
                      
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <Label for="cars">Choose City</Label>

                    <FormGroup>
                      <select
                        placeholder="Enter City"
                        name="S_City"
                        value={S_City}
                        onChange={(e) => setS_City(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select City--</option>
                        {CityList &&
                          CityList?.map((value, index) => (
                            <option key={index} value={value?.id}>
                              {value?.name}
                            </option>
                          ))}
                      </select>
                     
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>Street</Label>
                      <Input
                        required
                        disabled={checkbox ? true : false}
                        type="text"
                        placeholder="Enter Street"
                        name="S_Street"
                        value={S_Street}
                        onChange={(e) => setS_Street(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>PinCode</Label>
                      <Input
                        required
                        disabled={checkbox ? true : false}
                        type="number"
                        placeholder="Enter PinCode"
                        onKeyDown={(e) =>
                          ["e", "E", "+", "-"].includes(e.key) &&
                          e.preventDefault()
                        }
                        min={0}
                        name="S_PinCode"
                        value={S_PinCode}
                        onChange={(e) => setS_PinCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Col>
              </Row> */}

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
