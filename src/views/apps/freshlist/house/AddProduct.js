// import React, { Component } from "react";
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
// import { history } from "../../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import { Route } from "react-router-dom";
// import swal from "sweetalert";
// import { CloudLightning } from "react-feather";
// import { ResponsiveContainer } from "recharts";

// export class AddProduct extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category_name: "",
//       Brand: "",
//       P_Title: "",
//       Type: "",
//       Price: "",
//       stock: "",
//       Regularprice: "",
//       formValues: [{ PName: "", price: "" }],
//       DiscountPrice: "",
//       Addmore: false,
//       rowData: [],
//       TypeList: [],
//       description: "",
//       variety: "",
//       shipmentfee: "",
//       Tags: "",
//       taxrate: "",
//       status: "",
//       // selectedFile1: null,
//       // selectedName1: "",
//       // selectedFile2: null,
//       // selectedName2: "",
//       selectedFile3: [],
//       selectedName3: "",
//       // selectedFile4: null,
//       // selectedName4: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   async componentDidMount() {
//     const data = new FormData();
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     data.append("user_id", pageparmission?.Userinfo?.id);
//     data.append("role", pageparmission?.Userinfo?.role);
//     await axiosConfig.post("/getcategory", data).then((response) => {
//       let rowData = response.data.data?.category;
//       console.log(rowData);
//       if (rowData) {
//         this.setState({ rowData });
//       }
//     });
//     const type = new FormData();
//     // let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     type.append("user_id", pageparmission?.Userinfo?.id);
//     type.append("role", pageparmission?.Userinfo?.role);

//     const brand = new FormData();
//     // let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     brand.append("user_id", pageparmission?.Userinfo?.id);
//     brand.append("role", pageparmission?.Userinfo?.role);
//     await axiosConfig.post("/getbrand", brand).then((response) => {
//       let Brandlist = response.data.data?.brands;
//       console.log(response);
//       if (Brandlist) {
//         this.setState({ Brandlist });
//       }
//     });
//     await axiosConfig.post("/producttypelistview", type).then((response) => {
//       let TypeList = response.data.data;
//       console.log(TypeList);
//       if (TypeList) {
//         this.setState({ TypeList });
//       }
//     });
//   }

//   handleChange(i, e) {
//     let formValues = this.state.formValues;
//     formValues[i][e.target.name] = e.target.value;
//     this.setState({ formValues });
//   }

//   addFormFields() {
//     this.setState({
//       formValues: [...this.state.formValues, { PName: "", price: "" }],
//     });
//     this.handleSubmit();
//   }

//   removeFormFields(i) {
//     let formValues = this.state.formValues;
//     formValues.splice(i, 1);
//     this.setState({ formValues });
//   }

//   handleSubmit() {
//     console.log(this.state.formValues);
//   }

//   // onChangeHandler1 = (event) => {
//   //   this.setState({ selectedFile1: event.target.files[0] });
//   //   this.setState({ selectedName1: event.target.files[0].name });
//   //   console.log(event.target.files[0]);
//   // };
//   // onChangeHandler2 = (event) => {
//   //   this.setState({ selectedFile2: event.target.files[0] });
//   //   this.setState({ selectedName2: event.target.files[0].name });
//   //   console.log(event.target.files[0]);
//   // };
//   onChangeHandler3 = (event) => {
//     let selectedName = Array.from(event.target.files);
//     console.log(selectedName);
//     this.setState({ selectedFile3: selectedName });

//     // this.setState({ selectedFile3: event.target.files });
//     // this.setState({ selectedName3: event.target.files[0].name });
//     // console.log(event.target.files);
//   };
//   // onChangeHandler4 = (event) => {
//   //   this.setState({ selectedFile4: event.target.files[0] });
//   //   this.setState({ selectedName4: event.target.files[0].name });
//   //   console.log(event.target.files[0]);
//   // };

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     // console.log(pageparmission?.Userinfo?.id);
//     data.append("user_id", pageparmission?.Userinfo?.id);
//     data.append("brand_id", this.state.Brand);
//     data.append("product_type_id", this.state.Type);
//     data.append("title", this.state.P_Title);
//     if (this.state.formValues.length > 0) {
//       data.append("veriety", JSON.stringify(this.state.formValues));
//     }
//     data.append("category_id", this.state.category_name);
//     // data.append("stock", this.state.stock);
//     data.append("price", this.state.Price);
//     data.append("discountprice", this.state.DiscountPrice);
//     data.append("description", this.state.description);
//     data.append("shipping_fee", this.state.shipmentfee);
//     data.append("tax_rate", this.state.taxrate);
//     data.append("tags", this.state.Tags);
//     data.append("status", "Active");
//     // this.state.selectedFile3.forEach((image, index) => {
//     //   data.append(`image`, image);
//     // });
//     // debugger;
//     for (let i = 0; i < this.state.selectedFile3?.length; i++) {
//       data.append("images[]", this.state.selectedFile3[i]);
//     }
//     // for (const file of this.state.selectedFile3) {
//     //   if (this.state.selectedFile3 !== null) {
//     //     data.append("image_name", file);
//     //   }
//     // }

//     axiosConfig
//       .post(`/addproduct`, data, {
//         headers: {
//           "Content-Type": "multipart/form-data; ",
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.data.success) {
//           swal("Success!", "You Data is been Submitted", "success");
//           // this.props.history.push("/app/freshlist/category/categoryList");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Card>
//           <h1 className="p-2 ">Product Upload</h1>
//           <Row className="m-2">
//             <Col>
//               <h2>Basic Information</h2>
//             </Col>
//             {/* <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() =>
//                       history.push("/app/freshlist/category/categoryList")
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col> */}
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row className="mb-2">
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label> Choose Category *</Label>

//                     <select
//                       onChange={(e) =>
//                         this.setState({ category_name: e.target.value })
//                       }
//                       className="form-control"
//                       name="Select"
//                       id="Select"
//                     >
//                       <option value="volvo">--Select Category--</option>
//                       {this.state.rowData &&
//                         this.state.rowData?.map((val, i) => (
//                           <option key={i} value={val?.id}>
//                             {val?.category_name}
//                           </option>
//                         ))}
//                     </select>
//                     {/* <Input
//                       type="text"
//                       placeholder="Title"
//                       name="category_name"
//                       bsSize="lg"
//                       value={this.state.category_name}
//                       onChange={this.changeHandler}
//                     /> */}
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label> Choose Type *</Label>

//                     <select
//                       onChange={(e) => this.setState({ Type: e.target.value })}
//                       className="form-control"
//                       name="Select"
//                       id="Select"
//                     >
//                       <option value="volvo">--Select Type--</option>
//                       {this.state.TypeList &&
//                         this.state.TypeList?.map((val, i) => (
//                           <option key={i} value={val?.id}>
//                             {val?.product_type}
//                           </option>
//                         ))}
//                     </select>
//                     {/* <Input
//                       type="text"
//                       placeholder="Title"
//                       name="category_name"
//                       bsSize="lg"
//                       value={this.state.category_name}
//                       onChange={this.changeHandler}
//                     /> */}
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label> Choose Brand *</Label>

//                     <select
//                       required
//                       onChange={(e) => this.setState({ Brand: e.target.value })}
//                       className="form-control"
//                       name="Select"
//                       id="Select"
//                     >
//                       <option value="volvo">--Select Brand--</option>
//                       {this.state.Brandlist &&
//                         this.state.Brandlist?.map((val, i) => (
//                           <option key={i} value={val?.id}>
//                             {val?.brand_name}
//                           </option>
//                         ))}
//                     </select>
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Title</Label>
//                     <Input
//                       type="text"
//                       placeholder="Title"
//                       name="P_Title"
//                       bsSize="lg"
//                       value={this.state.P_Title}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="12" md="12">
//                   <FormGroup>
//                     <Label>Description</Label>
//                     <textarea
//                       type="text"
//                       rows={5}
//                       className="form-control"
//                       placeholder="Description ..."
//                       name="description"
//                       bsSize="lg"
//                       value={this.state.description}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label> PRICE (₹)</Label>
//                     <Input
//                       onKeyDown={(e) =>
//                         ["e", "E", "+", "-"].includes(e.key) &&
//                         e.preventDefault()
//                       }
//                       min={0}
//                       type="number"
//                       placeholder="Amount In Number"
//                       name="Price"
//                       bsSize="lg"
//                       value={this.state.Price}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <Row>
//                     <Col lg="2" sm="2" md="2">
//                       <div>
//                         <h5 className="mt-2"> OR</h5>
//                       </div>
//                     </Col>
//                     <Col>
//                       <FormGroup>
//                         <Button
//                           style={{ width: "100%" }}
//                           color="primary"
//                           className="button add mt-2"
//                           type="button"
//                           // onClick={() => this.addFormFields()}
//                           onClick={() => this.setState({ Addmore: true })}
//                         >
//                           Add
//                         </Button>

//                         {/* <Label>Variety</Label>
//                         <Input
//                           type="text"
//                           placeholder="Variety..."
//                           name="variety"
//                           bsSize="lg"
//                           value={this.state.variety}
//                           onChange={this.changeHandler}
//                         /> */}
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                 </Col>{" "}
//               </Row>
//               {this.state.Addmore ? (
//                 <>
//                   <Row>
//                     <Col lg="12">
//                       {this.state.formValues.map((element, index) => (
//                         <div className="" key={index}>
//                           <Row className="py-1">
//                             <Col lg="4" sm="4">
//                               <label>Product Name</label>
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 name="PName"
//                                 value={element.PName || ""}
//                                 onChange={(e) => this.handleChange(index, e)}
//                               />
//                             </Col>
//                             <Col lg="4" sm="4">
//                               <label>Price</label>
//                               <input
//                                 onKeyDown={(e) =>
//                                   ["e", "E", "+", "-"].includes(e.key) &&
//                                   e.preventDefault()
//                                 }
//                                 min={0}
//                                 className="form-control"
//                                 type="number"
//                                 name="price"
//                                 value={element.price || ""}
//                                 onChange={(e) => this.handleChange(index, e)}
//                               />
//                             </Col>
//                             <Col>
//                               {index ? (
//                                 <Button
//                                   color="primary"
//                                   type="button"
//                                   className="button remove mt-2"
//                                   onClick={() => this.removeFormFields(index)}
//                                 >
//                                   Remove
//                                 </Button>
//                               ) : null}
//                               <Button
//                                 color="primary"
//                                 className="button add mt-2  mx-3"
//                                 type="button"
//                                 onClick={() => this.addFormFields()}
//                               >
//                                 Add
//                               </Button>
//                             </Col>
//                           </Row>
//                         </div>
//                       ))}
//                     </Col>
//                   </Row>
//                 </>
//               ) : null}

//               <Row>
//                 {/* <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label> Quantity </Label>
//                     <Input
//                       type="number"
//                       placeholder="in Number"
//                       name="stock"
//                       bsSize="lg"
//                       value={this.state.stock}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col> */}
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Discount Price</Label>
//                     <Input
//                       onKeyDown={(e) =>
//                         ["e", "E", "+", "-"].includes(e.key) &&
//                         e.preventDefault()
//                       }
//                       min={0}
//                       type="number"
//                       placeholder="Discount Price"
//                       name="DiscountPrice"
//                       bsSize="lg"
//                       value={this.state.DiscountPrice}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>SHIPPING FEE(₹)</Label>
//                     <Input
//                       onKeyDown={(e) =>
//                         ["e", "E", "+", "-"].includes(e.key) &&
//                         e.preventDefault()
//                       }
//                       min={0}
//                       type="number"
//                       placeholder="Number..."
//                       name="shipmentfee"
//                       bsSize="lg"
//                       value={this.state.shipmentfee}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>TAX RATE (%)</Label>
//                     <Input
//                       onKeyDown={(e) =>
//                         ["e", "E", "+", "-"].includes(e.key) &&
//                         e.preventDefault()
//                       }
//                       min={0}
//                       type="number"
//                       placeholder="Tax in Percentage"
//                       name="taxrate"
//                       bsSize="lg"
//                       value={this.state.taxrate}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>TAGS</Label>
//                     <Input
//                       type="text"
//                       placeholder="Type here..."
//                       name="Tags"
//                       bsSize="lg"
//                       value={this.state.Tags}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" sm="6">
//                   <FormGroup>
//                     <Label>Media & Published (Select multiple files)</Label>
//                     <CustomInput
//                       multiple
//                       style={{ cursor: "pointer" }}
//                       accept="image/png,image/jpeg,image/jpg"
//                       name="image[]"
//                       type="file"
//                       onChange={this.onChangeHandler3}
//                     />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row>
//                 <Button.Ripple
//                   color="primary"
//                   type="submit"
//                   className="mr-1 mb-1"
//                 >
//                   Add Product
//                 </Button.Ripple>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
// export default AddProduct;

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
      (value) => value?.pageName === "Create Account"
    );
    setViewpermisson(newparmisson?.permission.includes("View"));
    setCreatepermisson(newparmisson?.permission.includes("Create"));
    setEditpermisson(newparmisson?.permission.includes("Edit"));

    setDeletepermisson(newparmisson?.permission.includes("Delete"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    axiosConfig.post("/getrolelistdropdown", formdata).then((response) => {
      // console.log(response);
      const propertyNames = Object.values(response.data?.data?.roles);

      // console.log(propertyNames);
      setproductName(propertyNames);
    });
    // state List
    axiosConfig
      .get("/getallstates")
      .then((response) => {
        setStateList(response.data?.states);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

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
        // this.props.history.push("/app/freshlist/order/all");
      })
      .catch((error) => {
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

    let arr = selectedList.map((ele) => ele.id);
    setmultiSelect(arr);
    // console.log(multiSelect);

    let uniqueChars = [...new Set(selectedOptions)];

    if (uniqueChars.length === 1) {
      let value = uniqueChars[0];
      const formdata = new FormData();
      formdata.append("state_id", value);
      axiosConfig
        .post(`/getcity`, formdata)
        .then((res) => {
          setCityList(res?.data?.cities);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCityList([]);
    }
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

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    console.log(removedItem);
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", partseriel: "", quantity: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Add here</h1>
            </Col>
          </Row>
          <div className="container ">
            <form onSubmit={handleSubmit}>
              {formValues.map((element, index) => (
                <div className="form-inline my-2" key={index}>
                  <FormGroup>
                    <Label>Part Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Part Name"
                      value={element.name || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </FormGroup>

                  <Label>Part Serial No.</Label>
                  <Input
                    type="text"
                    name="partseriel"
                    placeholder="Part Seriel"
                    value={element.partseriel || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <Label>Quantity </Label>
                  <Input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={element.quantity || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                  {index ? (
                    <Button
                      className="button remove ml-1"
                      color="primary"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove
                    </Button>
                  ) : null}
                </div>
              ))}
              <div className="button-section">
                <Button
                  onClick={() => addFormFields()}
                  color="primary"
                  className="mr-1 mt-2 mx-2"
                >
                  Add
                </Button>
                <Button
                  color="primary"
                  className="mr-1 mt-2 mx-2 button submit"
                  // className="button submit"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Row></Row>
                    <Label for="cars"> Product Seriel No. *</Label>
                    {/* {AssignRole === "supplier" ? ( */}
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
                    {/* ) : (
                      <>
                        <select
                          required
                          name="SelectedState"
                          value={SelectedState}
                          onChange={e => {
                            const formdata = new FormData();
                            setSelectedState(e.target.value);
                            formdata.append("state_id", e.target.value);
                            axiosConfig
                              .post(`/getcity`, formdata)
                              .then(res => {
                                setCityList(res?.data?.cities);
                              })
                              .catch(err => {
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
                      </>
                    )} */}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Select Role*</Label>
                    <CustomInput
                      required
                      id="AssignRole"
                      type="select"
                      name="AssignRole"
                      value={AssignRole}
                      // onChange={changeHandler}
                      onChange={(e) => setAssignRole(e.target.value)}
                    >
                      <option value="">--Select Role--</option>

                      {productName &&
                        productName?.map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="12">
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
                </Col>

                {AssignRole === "supplier" ? (
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
                ) : null}
              </Row>
              <hr />
              <Row>
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
                          // this.setState({ B_State: e.target.value });
                          const formdata = new FormData();
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
                          // console.log(e.target.value);
                          setS_State(e.target.value);
                          // this.setState({ S_State: e.target.value });
                          const formdata = new FormData();
                          formdata.append("state_id", e.target.value);
                          axiosConfig
                            .post(`/getcity`, formdata)
                            .then((res) => {
                              console.log(res?.data?.cities);
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
                      {/* <select
                        name="S_State"
                        disabled={this.state.checkbox ? true : false}
                        value={this.state.S_State}
                        onChange={this.changeHandler}
                        className="form-control"
                      >
                        <option value="volvo">--Select State--</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Maharastra">Maharastra</option>
                      </select> */}
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
                      {/* <FormGroup>
                        <select
                          disabled={this.state.checkbox ? true : false}
                          placeholder="Enter City"
                          name="S_City"
                          value={this.state.S_City}
                          onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select City--</option>
                          <option value="Indore">Indore</option>
                          <option value="Panvel">Panvel</option>
                          <option value="khandwa">khandwa</option>
                        </select>
                      </FormGroup> */}
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
              </Row>

              {/* {this.state.setuserList && ( */}
              <Row className="mt-2">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => setstatus(e.target.value)}
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
                {/* <Col lg="6" md="6">
                  <Label className="mt-2  mb-2"> Select User</Label>

                  <CustomInput
                    type="select"
                    placeholder=""
                    name="Selectuser"
                    value={this.state.Selectuser}
                    onChange={this.changeHandler}
                  >
                    <option value="user1">user 1</option>
                    <option value="user2">user2</option>
                    <option value="user2">UPI</option>
                    <option value="user2">Other</option>
                  </CustomInput>
                </Col> */}
              </Row>
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
