// import React, { Component, useDebugValue } from "react";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Card,
  CardBody,
  Col,
  Row,
  FormGroup,
  CustomInput,
  Button,
  Label,
  Input,
  Form,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
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

const importData = [
  "Product Registration",
  "SpareParts",
  "Orders",
  "PartsCatalogue",
  "Scrutiny / Inspections",
  "Invoices / Billing",
  "Support",
  "Servicing",
  "Warehouse",
  "Distributors",
  "Dealers",
  "Suppliers",
  "Service Centers",
  "Customer Data",
  "Campaigns",
];
const Scheduler = () => {
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
  const [multiSelect, setmultiSelect] = useState([]);
  const [selectedOptions, setselectedOptions] = useState([]);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [status, setstatus] = useState("");
  const [AssignRole, setAssignRole] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Companytype, setCompanytype] = useState("");
  const [UserName, setUserName] = useState("");
  const [productName, setproductName] = useState("");
  const [modal, setModal] = useState(false);
  const [City, setCity] = useState("");
  const toggle = () => setModal(!modal);
  const [Role, setRole] = useState("");
  const [allPart, setAllPart] = useState([]);
  const [formValues, setFormValues] = useState([
    { partname: "", partseriel: "", quantity: "" },
  ]);
  useEffect(() => {
    setAllPart(importData);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Create Account"
    );
    setViewpermisson(newparmisson?.permission.includes("View"));
    setCreatepermisson(newparmisson?.permission.includes("Create"));
    setEditpermisson(newparmisson?.permission.includes("Edit"));

    setDeletepermisson(newparmisson?.permission.includes("Delete"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
  }, []);

  const handleopentoggle = () => {
    toggle();
  };

  const submitHandler = (e) => {
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
      .then((response) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleSelectRole = (val) => {
    setRole(val);
    toggle();
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
                      name="date"
                      value={fullname}
                      onChange={(e) => setfullname(e.target.value)}
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

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Recurrence Pattern</Label>
                  <div
                    className="form-label-group mt-2"
                    onChange={(e) => {
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
                  <Label className="mb-1">If you want to Repeated Time</Label>

                  <FormGroup className="d-flex">
                    <div className="mx-2">
                      <Input type="radio" name="Pattern" value="Yearly" />
                      <span style={{ marginRight: "3px" }}>Every</span>
                    </div>
                    <div>
                      <Input
                        className="every"
                        style={{ marginRight: "3px", width: "80px" }}
                        type="text"
                        placeholder="minute"
                        name="name"
                        value=""
                      />
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
                  </div>
                  <Input
                    //   style={{ marginRight: "3px", width: "100px" }}
                    type="date"
                    name="date"
                    //   value="Yearly"
                  />
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

            <hr />

            <Form>
              <Row className="mt-2">
                <Col>
                  <Label>Import Type</Label>
                  <InputGroup className="maininput">
                    <Input
                      disabled
                      value={Role}
                      onChange={(e) => setRole(e.target.value)}
                      type="text"
                      placeholder="Import Search"
                      className="form-control inputs"
                    />
                    <Button
                      onClick={handleopentoggle}
                      color="primary"
                      className="mybtn primary"
                    >
                      <AiOutlineSearch
                        onClick={(e) => e.preventDefault()}
                        fill="white"
                      />
                    </Button>
                  </InputGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Adhoc Upload</h4>
                  </Label>

                  <input
                    multiple
                    className="form-control"
                    style={{ marginRight: "3px" }}
                    type="file"
                  />
                </Col>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2 d-flex justify-content-center"
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mt-2 mx-2"
                  >
                    Upload
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Modal
          fullscreen="xl"
          size="lg"
          backdrop={false}
          isOpen={modal}
          toggle={toggle}
          // {...args}
        >
          <ModalHeader toggle={toggle}>Import Type List</ModalHeader>
          <ModalBody className="table-body shedulemodalbody">
            <div className="modalheaderaddrol p-1">
              <h3 className="table-item">Import Type</h3>

              <Table
                className="scheduletble_heading"
                bordered
                hover
                responsive
                size="sm"
              >
                <thead className="tableRowStyle">
                  <tr className="tableRowStyle">
                    <th>S.No.</th>
                    <th>Import Type Name</th>
                  </tr>
                </thead>
                <tbody>
                  {allPart.map((ele, i) => {
                    return (
                      <tr
                        className="tableRowStyles"
                        key={i}
                        onClick={(e) => HandleSelectRole(ele)}
                        style={{ cursor: "pointer" }}
                      >
                        <th scope="row" className="tableRowStyles">
                          {i + 1}
                        </th>
                        <td className="tableRowStyles"> {ele}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
export default Scheduler;
