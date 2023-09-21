import React, { useState, useEffect } from "react";
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
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    hub_name: "",
    desc: "",
    email: "",
    phone: "",
    address: "",
    d_zone: "",
    cat: "",
    subcat: "",
    status: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  const submitHandler = e => {
    e.preventDefault();
    console.log("submitHandler", formData);

    axiosConfig
      .post("/admin/addcategory", formData)
      .then(response => {
        console.log(response);
        this.props.history.push("/app/freshlist/order/orderList");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Create Customer
            </h1>
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row className="mb-2">
              <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label>Sold By</Label>
                  <Input
                    type="text"
                    placeholder="Sold By"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>

              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Primary Phone</Label>
                  <Input
                    type="text"
                    placeholder="Primary Phone"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Secondary Phone</Label>
                  <Input
                    type="text"
                    placeholder="Secondary Phone"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Primary Mobile</Label>
                  <Input
                    type="text"
                    placeholder="Primary Mobile"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Secondary Mobile</Label>
                  <Input
                    type="text"
                    placeholder="Secondary Mobile"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    type="textarea"
                    placeholder="Address"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Office/ShowRoom Address</Label>
                  <Input
                    type="textarea"
                    placeholder="Office/ShowRoom Address"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Street Address(1)</Label>
                  <Input
                    type="textarea"
                    placeholder="Street Address"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Street Address(2)</Label>
                  <Input
                    type="textarea"
                    placeholder="Street Address"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Landmark</Label>
                  <Input
                    type="text"
                    placeholder="Enter Landmark"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Country</Label>
                  <Select
                    options={Country.getAllCountries()}
                    getOptionLabel={options => {
                      return options["name"];
                    }}
                    getOptionValue={options => {
                      return options["name"];
                    }}
                    value={selectedCountry}
                    onChange={item => {
                      setSelectedCountry(item);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>State</Label>
                  <Select
                    options={State?.getStatesOfCountry(
                      selectedCountry?.isoCode
                    )}
                    getOptionLabel={options => {
                      return options["name"];
                    }}
                    getOptionValue={options => {
                      return options["name"];
                    }}
                    value={selectedState}
                    onChange={item => {
                      setSelectedState(item);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>City</Label>
                  <Select
                    options={City.getCitiesOfState(
                      selectedState?.countryCode,
                      selectedState?.isoCode
                    )}
                    getOptionLabel={options => {
                      return options["name"];
                    }}
                    getOptionValue={options => {
                      return options["name"];
                    }}
                    value={selectedCity}
                    onChange={item => {
                      setSelectedCity(item);
                    }}
                  />
                </FormGroup>
              </Col>

              <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label>ZipCode/PinCode</Label>
                  <Input
                    required
                    type="number"
                    // onKeyDown={e =>
                    //   ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                    // }
                    // min={0}
                    placeholder="Enter ZipCode/PinCode"
                    // name="B_PinCode"
                    // value={B_PinCode}
                    // onChange={e => setB_PinCode(e.target.value)}
                  />
                </FormGroup>
              </Col>

              {/* <Col lg="6" md="6">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col> */}

              {/* <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                <Label className="mb-1">Status</Label>
                <div className="form-label-group" onChange={changeHandler}>
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
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col> */}
            </Row>

            <Row className="m-2">
              <Button color="primary" type="submit" className="mr-1 mb-1">
                Add Customer
              </Button>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCustomer;
