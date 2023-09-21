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

const CustomerRegistration = () => {
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
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler", formData);

    axiosConfig
      .post("/admin/addcategory", formData)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/order/orderList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Customer Registration
            </h1>
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row className="mb-2">
              <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label>Registration Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>

              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Product Delivered Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Shipped Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Order Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Invoice Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Registered To</Label>
                  <Input
                    type="text"
                    placeholder="Registered To"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Product Price</Label>
                  <Input
                    type="number"
                    placeholder="Product Price"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label for="exampleSelect">Warranty Applied</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option> Standard Warranty </option>
                    <option> Extended Warranty </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Warranty Start Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Warranty End Date</Label>
                  <Input
                    type="date"
                    name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Industry</Label>
                  <Input
                    type="text"
                    // name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Used as</Label>
                  <Input
                    type="text"
                    // name="customer_name"
                    // value={formData.customer_name}
                    onChange={changeHandler}
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
                Customer Registration
              </Button>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomerRegistration;
