// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Row,
//   Col,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   Button,
//   CardTitle,
//   CardText,
//   Label,
//   FormGroup,
// } from "reactstrap";
// import axios from "axios";
// import axiosConfig from "../../../../axiosConfig";
// import ReactHtmlParser from "react-html-parser";
// import { ContextLayout } from "../../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import { Eye, Trash2, ChevronDown, Edit, CloudLightning } from "react-feather";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { history } from "../../../../history";
// import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import "../../../../assets/scss/pages/users.scss";
// import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
// import "moment-timezone";
// import { Route } from "react-router-dom";
// import { timers } from "jquery";
// import swal from "sweetalert";
// import { BsFillCartCheckFill } from "react-icons/bs";

// class Placeorder extends React.Component {
//   state = {
//     ProductQuantity: "",
//     product: [],
//     rowData: [],
//     Typelist: [],
//     SelectedProduct: [],
//     Type: "",
//     productlength: "",
//     Addedbtn: false,
//     Viewpermisson: null,
//     Editpermisson: null,
//     Createpermisson: null,
//     Deletepermisson: null,
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       // editable: true,
//       resizable: true,
//       // rowSelection: "multiple",
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "UID",
//         valueGetter: "node.rowIndex + 1",
//         field: "node.rowIndex + 1",
//         // checkboxSelection: true,
//         width: 80,
//         filter: true,
//         // cellRendererFramework: (params) => {
//         //   return (
//         //     <div className="d-flex align-items-center cursor-pointer">
//         //       <div className="">
//         //         <input
//         //           className="addinarray"
//         //           onClick={(e) => {
//         //             console.log(e.target.checked);
//         //             if (e.target.checked) {
//         //               console.log(this.state.SelectedProduct);
//         //               this.setState({
//         //                 SelectedProduct: this.state.SelectedProduct.concat(
//         //                   params?.data
//         //                 ),
//         //               });
//         //             } else {
//         //               let data = this.state.SelectedProduct.filter((ele, i) => {
//         //                 if (ele?.id === params?.data?.id) {
//         //                   this.state.SelectedProduct.splice(i, 1);
//         //                 }
//         //               });
//         //             }
//         //           }}
//         //           type="checkbox"
//         //         />
//         //       </div>
//         //     </div>
//         //   );
//         // },
//       },

//       {
//         headerName: "PRODUCT Image",
//         field: "product",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 {/* <span>{params.data?.title}</span> */}
//                 {params?.data?.product_images ? (
//                   <img
//                     style={{ borderRadius: "12px" }}
//                     width="60px"
//                     height="40px"
//                     src={params?.data?.product_images[0]}
//                     alt="image"
//                   />
//                 ) : (
//                   "No Image "
//                 )}
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "PRODUCT",
//         field: "title",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.title}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "brand_name",
//         field: "brand_name",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.brand_name}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "product_type",
//         field: "product_type",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.product_type}</span>
//               </div>
//             </div>
//           );
//         },
//       },

//       // {
//       //   headerName: "CATEGORY",
//       //   field: "category_name",
//       //   filter: "agSetColumnFilter",
//       //   width: 150,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{params.data?.category_name}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Description",
//       //   field: "description",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{ReactHtmlParser(params.data?.description)}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       {
//         headerName: "Quantity",
//         field: "Quantity",
//         filter: "agSetColumnFilter",
//         width: 260,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="d-flex">
//                 {/* <Button color="primary">-</Button> */}
//                 <input
//                   style={{ position: "relative" }}
//                   // value={this.state.ProductQuantity}
//                   onChange={(e) => {
//                     this.setState({ ProductQuantity: e.target.value });
//                   }}
//                   type="number"
//                   className="form-control"
//                 />

//                 <Button
//                   // disabled={
//                   //   this.state.ProductQuantity && this.state.ProductQuantity > 0
//                   //     ? false
//                   //     : true
//                   // }
//                   onClick={(e) => {
//                     this.handleAddToCart(e, params?.data);
//                   }}
//                   size="sm"
//                   color="primary"
//                   className="mx-1 addbutton"
//                   style={{
//                     position: "absolute",
//                     right: "24px",
//                     padding: "12px",
//                   }}
//                 >
//                   Add {this.state.ProductQuantity && this.state.ProductQuantity}
//                 </Button>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "PRICE",
//         field: "price",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.price}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       // {
//       //   headerName: "DiscountPrice",
//       //   field: "discountprice",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{params.data?.discountprice}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Shipping Fee",
//       //   field: "shipping_fee",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{params.data?.shipping_fee}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Tax Rate",
//       //   field: "tax_rate",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{params.data?.tax_rate}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Tags",
//       //   field: "tags",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{params.data?.tags}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "STOCK",
//       //   field: "stock",

//       //   filter: "agSetColumnFilter",
//       //   width: 150,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{ReactHtmlParser(params.data?.stock)}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Created ",
//       //   field: "created_date",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>
//       //             {ReactHtmlParser(params.data?.created_date?.split(" ")[0])}
//       //           </span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "SALES",
//       //   field: "pisces",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>{ReactHtmlParser(params.data.pisces)}</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Actions",
//       //   field: "transactions",
//       //   width: 150,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="actions cursor-pointer">
//       //         {/* {this.state.Viewpermisson && (
//       //           <Eye
//       //             className="mr-50"
//       //             size="25px"
//       //             color="green"
//       //             onClick={() =>
//       //               history.push(
//       //                 `/app/freshlist/order/viewAll/${params.data.id}`
//       //               )
//       //             }
//       //           />
//       //         )} */}
//       //         {/* {this.state.Editpermisson && (
//       //           <Edit
//       //             className="mr-50"
//       //             size="25px"
//       //             color="blue"
//       //             onClick={() =>
//       //               this.props.history.push({
//       //                 pathname: `/app/freshlist/house/editmyproduct/${params.data?.id}`,
//       //                 state: params.data,
//       //               })
//       //             }
//       //           />
//       //         )} */}
//       //         {/* {this.state.Deletepermisson && (
//       //           <Trash2
//       //             className="mr-50"
//       //             size="25px"
//       //             color="Red"
//       //             onClick={() => {
//       //               let selectedData = this.gridApi.getSelectedRows();

//       //               this.runthisfunction(params.data?.id);
//       //               this.gridApi.updateRowData({ remove: selectedData });
//       //             }}
//       //           />
//       //         )} */}
//       //       </div>
//       //     );
//       //   },
//       // },
//     ],
//   };
//   componentDidUpdate() {
//     console.log(this.state.SelectedProduct);
//   }
//   async componentDidMount() {
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));

//     let newparmisson = pageparmission?.role?.find(
//       (value) => value?.pageName === "Place Order"
//     );

//     this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
//     this.setState({
//       Createpermisson: newparmisson?.permission.includes("Create"),
//     });
//     this.setState({
//       Editpermisson: newparmisson?.permission.includes("Edit"),
//     });
//     this.setState({
//       Deletepermisson: newparmisson?.permission.includes("Delete"),
//     });

//     const formdata = new FormData();
//     formdata.append("user_id", pageparmission?.Userinfo?.id);
//     formdata.append("role", pageparmission?.Userinfo?.role);
//     await axiosConfig
//       .post(`/viewcart`, formdata)
//       .then((res) => {
//         this.setState({ productlength: res?.data?.data?.length });
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//     await axiosConfig
//       // .post("/productlistapi", formdata)
//       .post("/getUserAssignproductList", formdata)
//       .then((response) => {
//         console.log(response?.data.data[0].products);
//         this.setState({ rowData: response?.data.data[0].products });
//         // console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });

//     axiosConfig.post("/producttypelistview", formdata).then((response) => {
//       let Typelist = response.data.data;
//       console.log(response);
//       this.setState({ Typelist });
//     });
//   }
//   handleAddToCart = (e, data) => {
//     e.preventDefault();
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     const formdata = new FormData();
//     formdata.append("qty", this.state.ProductQuantity);
//     formdata.append("user_id", pageparmission?.Userinfo?.id);
//     formdata.append("product_id", data?.id);
//     formdata.append("price", data?.price);
//     if (this.state.ProductQuantity > 0) {
//       axiosConfig
//         .post(`/add_to_cart`, formdata)
//         .then((res) => {
//           this.setState({ ProductQuantity: "" });
//           toast.success(`${this.state.ProductQuantity} Product Added`);
//           // this.componentDidMount();
//           axiosConfig
//             .post(`/viewcart`, formdata)
//             .then((res) => {
//               this.setState({ productlength: res?.data?.data?.length });
//             })
//             .catch((err) => {
//               console.log(err);
//               swal("Something Went wrong with Cart");
//             });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       // swal("Add Quantity first");
//     }
//   };

//   async runthisfunction(id) {
//     console.log(id);
//     let data = new FormData();
//     data.append("id", id);
//     await axiosConfig
//       .post("/deleteproduct", data)
//       .then((resp) => {
//         console.log(resp);
//       })
//       .then((response) => {
//         console.log(response);
//       });
//   }

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     // console.log(params.api);
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };

//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };

//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };
//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       <>
//         <ToastContainer />
//         {/* <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         /> */}

//         <Row className="app-user-list">
//           <Col sm="12">
//             <Card>
//               <Row className="m-2">
//                 <Col>
//                   <h1 col-sm-6 className="float-left">
//                     Place Order
//                   </h1>
//                 </Col>

//                 <Col lg="3">
//                   {this.state.productlength && this.state.productlength > 0 ? (
//                     <>
//                       <Route
//                         render={({ history }) => (
//                           <Button
//                             className="float-right mt-1 mx-2"
//                             color="primary"
//                             // size="sm"
//                             onClick={() => {
//                               // localStorage.setItem(
//                               //   "SelectedProduct",
//                               //   JSON.stringify(this.state.productlength)
//                               // );
//                               history.push(
//                                 "/app/freshlist/order/Selectedorder"
//                               );
//                             }}
//                           >
//                             View Cart
//                             <sup>{this.state.productlength}</sup>
//                           </Button>
//                         )}
//                       />
//                     </>
//                   ) : null}

//                   <Route
//                     render={({ history }) => (
//                       <Button
//                         className="float-right mt-1 "
//                         color="primary"
//                         onClick={() =>
//                           history.push("/app/softNumen/order/placeorder")
//                         }
//                       >
//                         Back
//                       </Button>
//                     )}
//                   />
//                 </Col>
//               </Row>
//               <CardBody>
//                 {this.state.rowData === null ? null : (
//                   <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                     <div className="d-flex flex-wrap justify-content-between align-items-center">
//                       <div className="mb-1">
//                         <UncontrolledDropdown className="p-1 ag-dropdown">
//                           <DropdownToggle tag="div">
//                             {this.gridApi
//                               ? this.state.currenPageSize
//                               : "" * this.state.getPageSize -
//                                 (this.state.getPageSize - 1)}{" "}
//                             -{" "}
//                             {this.state.rowData.length -
//                               this.state.currenPageSize *
//                                 this.state.getPageSize >
//                             0
//                               ? this.state.currenPageSize *
//                                 this.state.getPageSize
//                               : this.state.rowData.length}{" "}
//                             of {this.state.rowData.length}
//                             <ChevronDown className="ml-50" size={15} />
//                           </DropdownToggle>
//                           <DropdownMenu right>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(20)}
//                             >
//                               20
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(50)}
//                             >
//                               50
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(100)}
//                             >
//                               100
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(134)}
//                             >
//                               134
//                             </DropdownItem>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                       <div className="d-flex flex-wrap justify-content-between mb-1">
//                         <div className=" mr-1">
//                           <FormGroup>
//                             <label className=""> Choose Type *</label>
//                           </FormGroup>
//                         </div>
//                         <div className=" mr-1">
//                           <FormGroup>
//                             <select
//                               onChange={(e) => {
//                                 this.setState({ Type: e.target.value });
//                                 this.updateSearchQuery(e.target.value);
//                               }}
//                               className="form-control"
//                               name="Select"
//                               id="Select"
//                             >
//                               <option value="">--Select Type--</option>
//                               {this.state.Typelist &&
//                                 this.state.Typelist?.map((val, i) => (
//                                   <option key={i} value={val?.product_type}>
//                                     {val?.product_type}
//                                   </option>
//                                 ))}
//                             </select>
//                           </FormGroup>
//                         </div>
//                         <div className="table-input mr-1">
//                           <Input
//                             placeholder="search..."
//                             onChange={(e) =>
//                               this.updateSearchQuery(e.target.value)
//                             }
//                             value={this.state.value}
//                           />
//                         </div>
//                         <div className="export-btn">
//                           <Button.Ripple
//                             color="primary"
//                             onClick={() => this.gridApi.exportDataAsCsv()}
//                           >
//                             Export as CSV
//                           </Button.Ripple>
//                         </div>
//                       </div>
//                     </div>
//                     <ContextLayout.Consumer>
//                       {(context) => (
//                         <AgGridReact
//                           gridOptions={{}}
//                           rowSelection="multiple"
//                           defaultColDef={defaultColDef}
//                           columnDefs={columnDefs}
//                           rowData={rowData}
//                           onGridReady={this.onGridReady}
//                           colResizeDefault={"shift"}
//                           animateRows={true}
//                           floatingFilter={false}
//                           pagination={true}
//                           paginationPageSize={this.state.paginationPageSize}
//                           pivotPanelShow="always"
//                           enableRtl={context.state.direction === "rtl"}
//                         />
//                       )}
//                     </ContextLayout.Consumer>
//                   </div>
//                 )}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </>
//     );
//   }
// }
// export default Placeorder;

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
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";

const CreateAccount = () => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  const createUserXmlView = useContext(UserContext);
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
        // const rolePermissions = origionalpermission?.find(
        //   (role) => role._attributes?.name === "SUPERADMIN"
        // );
        // console.log(rolePermissions);
        // setpermissions(rolePermissions);
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
              <h1 className="float-left">Create Order</h1>
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
                      {
                        /* console.log(View, Edit); */
                      }
                    }
                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          {/* {Edit && Edit ? ( */}
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
                          {/* ) : (
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
                          )} */}
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
                          {/* {Edit && Edit ? ( */}
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
                          {/* ) : (
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
                          )} */}
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
