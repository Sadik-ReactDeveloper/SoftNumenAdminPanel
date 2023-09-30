// import React, { Component, useDebugValue } from "react";
import React, { useEffect, useState } from "react";

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
const selectItem1 = [];
const selectstate2 = [];

const AllunSelectedCity = [];
const Selectedarray = [];

const AddProduct = () => {
  // const [Address, setAddress] = useState("");
  const [Viewpermisson, setViewpermisson] = useState(null);
  const [Editpermisson, setEditpermisson] = useState(null);
  const [Createpermisson, setCreatepermisson] = useState(null);
  const [Deletepermisson, setDeletepermisson] = useState(null);
  const [fullname, setfullname] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [StateList, setStateList] = useState([]);
  const [CityList, setCityList] = useState([]);
  const [SelectedSCity, setSelectedSCity] = useState([]);
  const [SelectedState, setSelectedState] = useState([]);
  const [B_City, setB_City] = useState("");
  const [checkbox, setcheckbox] = useState("");
  const [S_City, setS_City] = useState("");
  const [Mobile_no, setMobile_no] = useState("");
  const [B_Country, setB_Country] = useState("");
  const [S_Country, setS_Country] = useState("");
  const [Phone_no, setPhone_no] = useState("");
  const [Place_of_Supply, setPlace_of_Supply] = useState("");
  const [B_State, setB_State] = useState("");
  const [S_State, setS_State] = useState("");
  const [B_Street, setB_Street] = useState("");
  const [S_Street, setS_Street] = useState("");
  const [B_PinCode, setB_PinCode] = useState("");
  const [S_PinCode, setS_PinCode] = useState("");
  const [setuserList, setsetuserList] = useState(false);
  const [multiSelect, setmultiSelect] = useState([]);
  const [selectedOptions, setselectedOptions] = useState([]);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [status, setstatus] = useState("");
  const [AssignRole, setAssignRole] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Companytype, setCompanytype] = useState("");
  const [Selectuser, setSelectuser] = useState("");
  const [UserName, setUserName] = useState("");
  const [productName, setproductName] = useState([]);
  const [City, setCity] = useState("");
  const [formValues, setFormValues] = useState([
    { partname: "", partseriel: "", quantity: "" },
  ]);
  useEffect(() => {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      value => value?.pageName === "Create Account"
    );
    setViewpermisson(newparmisson?.permission.includes("View"));
    setCreatepermisson(newparmisson?.permission.includes("Create"));
    setEditpermisson(newparmisson?.permission.includes("Edit"));

    setDeletepermisson(newparmisson?.permission.includes("Delete"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let uniqueChars = [...new Set(selectItem1)];
    let selectedOption = [...new Set(selectedOptions)];

    const formdata = new FormData();

    formdata.append("created_by", pageparmission?.Userinfo?.id);
    formdata.append("password", password);
    formdata.append("full_name", fullname);
    formdata.append("gstin_no", GSTIN);
    formdata.append("username", UserName);
    formdata.append("city", B_City);
    formdata.append("mobile", Mobile_no);
    formdata.append("email", email);
    formdata.append("status", status);
    formdata.append("role", AssignRole);
    formdata.append("company_name", CompanyName);
    formdata.append("company_type", Companytype);
    formdata.append("place_supply", Place_of_Supply);
    formdata.append("billing_street", B_Street);
    formdata.append("billing_city", B_City);
    formdata.append("billing_state", B_State);
    formdata.append("billing_country", B_Country);
    formdata.append("billing_pincode", B_PinCode);
    formdata.append("shipping_street", S_Street);
    formdata.append("shipping_city", S_City);
    formdata.append("shipping_state", S_State);
    formdata.append("shipping_country", S_Country);
    formdata.append("shipping_pincode", S_PinCode);
    formdata.append("phone_no", Phone_no);
    if (selectedOption.length > 0) {
      formdata.append("state_id", multiSelect.toString());
    } else {
      formdata.append("state_id", SelectedState);
    }

    formdata.append("city_id", uniqueChars);

    axiosConfig
      .post("/createuser", formdata)
      .then(response => {
        if (response.data?.success) {
          swal("Success!", "Submitted SuccessFull!", "success");
          setAssignRole("");
          setstatus("");
          setemail("");
          setCity("");
          setPhone_no("");
          setUserName("");
          setfullname("");
          setpassword("");
          setS_Country("");
          setS_State("");
          setS_City("");
          setS_Street("");
          setS_PinCode("");
        }
        // this.props.history.push("/app/softNumen/order/placeorder");
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleMatchaddress = (e, value) => {
    setcheckbox(value);
    if (value) {
      setS_Country(B_Country);
      setS_State(B_State);
      setS_City(B_City);
      setS_Street(B_Street);
      setS_PinCode(B_PinCode);
    } else {
      setS_Country("");
      setS_State("");
      setS_City("");
      setS_Street("");
      setS_PinCode("");
    }
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

    let arr = selectedList.map(ele => ele.id);
    setmultiSelect(arr);
    // console.log(multiSelect);

    let uniqueChars = [...new Set(selectedOptions)];

    if (uniqueChars.length === 1) {
      let value = uniqueChars[0];
      const formdata = new FormData();
      formdata.append("state_id", value);
      axiosConfig
        .post(`/getcity`, formdata)
        .then(res => {
          setCityList(res?.data?.cities);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setCityList([]);
    }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Scheduler Time</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" sm="12">
                  <FormGroup>
                    <Label>Start Date</Label>
                    <Input
                      required
                      type="date"
                      //   placeholder="Enter Your Name"
                      name="date"
                      value={fullname}
                      onChange={e => setfullname(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="12">
                  <FormGroup>
                    <Label>Start Time </Label>
                    <Input
                      required
                      type="time"
                      //   placeholder="Enter Your Name"
                      //   name="fullname"
                      //   value={fullname}
                      //   onChange={e => setfullname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Input
                      required
                      type="radio"
                      //   placeholder="Enter Your Name"
                      name="Pattern"
                      //   value={UserName}
                      //   onChange={e => setUserName(e.target.value)}
                    />
                  </FormGroup>
                </Col> */}

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Recurrence Pattern</Label>
                  <div
                    className="form-label-group mt-2"
                    onChange={e => {
                      setstatus(e.target.value), console.log(e.target.value);
                    }}
                  >
                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Minuts"
                      />
                      <span style={{ marginRight: "20px" }}>Minuts</span>
                    </div>

                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Hourly"
                      />
                      <span style={{ marginRight: "3px" }}>Hourly</span>
                    </div>

                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Daily"
                      />
                      <span style={{ marginRight: "3px" }}>Daily</span>
                    </div>
                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Weekly"
                      />
                      <span style={{ marginRight: "3px" }}>Weekly</span>
                    </div>
                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Monthly"
                      />
                      <span style={{ marginRight: "3px" }}>Monthly</span>
                    </div>
                    <div>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Yearly"
                      />
                      <span style={{ marginRight: "3px" }}>Yearly</span>
                    </div>
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div>
                    <Label>If you want to Repeated Time</Label>
                  </div>
                  <FormGroup className="d-flex">
                    <div>
                      <Input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Pattern"
                        value="Yearly"
                      />
                      <span style={{ marginRight: "3px" }}>Every</span>
                    </div>
                    <div>
                      <Input
                        className="every"
                        style={{ marginRight: "3px", width: "80px" }}
                        type="text"
                        placeholder="Hours"
                        name="name"
                        value=""
                      />
                      {/* <Label>Hours</Label> */}
                    </div>
                  </FormGroup>
                </Col>
                <hr />
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label className="my-1">Range Of Recurrence </Label>
                    <div className="ml-2 ">
                      <Input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="Range"
                        value="Range"
                      />
                      <span style={{ marginRight: "3px" }}>No End Date</span>
                    </div>
                    <div className="ml-2 ">
                      <Input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="end"
                        value="end"
                      />
                      <span style={{ marginRight: "3px" }}>End After</span>
                    </div>
                  </FormGroup>
                  <div className="d-flex">
                    <div
                      className="OccurrencesStyle"
                      style={{ marginTop: "-5px" }}
                    >
                      <Input
                        style={{
                          marginRight: "3px",
                          width: "100px",
                          marginBottom: "2px",
                        }}
                        type="text"
                        name="Pattern"
                        placeholder="Occurrences Time"
                        //   value="Yearly"
                      />
                    </div>
                    <div>
                      <span style={{ marginLeft: "10px" }}>
                        <b>Occurrences</b>
                      </span>
                    </div>
                  </div>
                  <div className="ml-2 my-2">
                    <Input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="by"
                      value="by"
                    />
                    <span style={{ marginRight: "3px" }}>End by</span>
                    <Input
                      //   style={{ marginRight: "3px", width: "100px" }}
                      type="date"
                      name="date"
                      //   value="Yearly"
                    />
                  </div>
                </Col>
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      required
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={password}
                      onChange={e => setpassword(e.target.value)}
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
                      onChange={e => setCompanyName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number </Label>
                    <Input
                      required
                      type="number"
                      onKeyDown={e =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      maxLength={12}
                      size={10}
                      placeholder="0123456789"
                      name="Phone_no"
                      value={Phone_no}
                      onChange={e => setPhone_no(e.target.value)}
                    />
                  </FormGroup>
                </Col> */}
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Company Type</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Companytype"
                      name="Companytype"
                      value={Companytype}
                      onChange={e => setCompanytype(e.target.value)}
                    />
                  </FormGroup>
                </Col> */}
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>GSTIN</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter GSTIN No."
                      name="GSTIN"
                      value={GSTIN}
                      onChange={e => setGSTIN(e.target.value)}
                    />
                  </FormGroup>
                </Col> */}
              </Row>

              {/* <Row className="mt-2">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div
                    className="form-label-group"
                    onChange={e => setstatus(e.target.value)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
                
              </Row> */}
              {/* )} */}

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
export default AddProduct;
