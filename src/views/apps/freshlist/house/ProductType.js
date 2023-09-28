import React, { useRef } from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Modal,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Form,
  ModalHeader,
  ModalBody,
  CustomInput,
  FormGroup,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import Switch from "@mui/material/Switch";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Eye, Trash2, ChevronDown, Edit, CloudLightning } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import Moment from "react-moment";
import { Route } from "react-router-dom";

import { IoMdRemoveCircleOutline } from "react-icons/io";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFileDownload,
  FaFilter,
  FaLock,
} from "react-icons/fa";
import "moment-timezone";
import swal from "sweetalert";
import {
  CreateAccountList,
  DeleteAccount,
} from "../../../../ApiEndPoint/ApiCalling";
// import * as XLSX from "xlsx";

const SelectedCols = [];

class ProductType extends React.Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    // this.gridApi = null;
    this.state = {
      isOpen: false,
      rowData: [],
      setMySelectedarr: [],
      Viewpermisson: null,
      Editpermisson: null,
      Createpermisson: null,
      Deletepermisson: null,
      paginationPageSize: 20,
      currenPageSize: "",
      getPageSize: "",
      columnDefs: [],
      AllcolumnDefs: [],
      SelectedcolumnDefs: [],
      defaultColDef: {
        sortable: true,
        // editable: true,
        resizable: true,
        suppressMenu: true,
      },
    };
  }

  // ...

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  async componentDidMount() {
    await CreateAccountList()
      .then((res) => {
        let value = res?.CreateAccount;
        let Product = [
          {
            headerName: "Actions",
            field: "sortorder",
            field: "transactions",
            width: 190,
            cellRendererFramework: (params) => {
              return (
                <div className="actions cursor-pointer">
                  {/* <CustomInput
                    className=""
                    type="switch"
                    id="exampleCustomSwitch"
                    Reactstrap
                    Switch
                    Colors
                    name="customSwitch"
                    inline
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  ></CustomInput> */}
                  <Route
                    render={({ history }) => (
                      <Eye
                        className="mr-50"
                        size="25px"
                        color="green"
                        onClick={() =>
                          history.push(
                            `/app/freshlist/order/EditCompletedorders/${params.data?._id}`
                          )
                        }
                      />
                    )}
                  />
                  <Route
                    render={({ history }) => (
                      <Edit
                        className="mr-50"
                        size="25px"
                        color="blue"
                        onClick={() =>
                          history.push(
                            `/app/freshlist/order/editplaceorder/${params.data?._id}`
                          )
                        }
                      />
                    )}
                  />

                  <Route
                    render={() => (
                      <Trash2
                        className="mr-50"
                        size="25px"
                        color="red"
                        onClick={() => {
                          this.runthisfunction(params.data._id);
                        }}
                      />
                    )}
                  />
                </div>
              );
            },
          },
        ];
        for (const [key, value] of Object.entries(res?.CreateAccount[0])) {
          if (key == "_id") {
          } else if (key == "__v") {
          } else {
            Product.push({
              headerName: key, // Use the property name as the column header
              field: key, // Use the property name as the field name
              // width: auto, // Set the desired width
              filter: true,
              sortable: true,
            });
          }
        }

        this.setState({ columnDefs: Product });
        this.setState({ rowData: value });
        this.setState({ AllcolumnDefs: Product });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  toggleDropdown = () => {
    // Toggle the isOpen state when the button is clicked
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  // getUserList = async () => {
  //   const formdata = new FormData();
  //   formdata.append("user_id", pageparmission?.Userinfo?.id);
  //   formdata.append("role", pageparmission?.Userinfo?.role);
  //   await axiosConfig.post("/getuserlist", formdata).then((response) => {
  //     console.log(response);
  //     let rowData = response?.data?.data?.users;
  //     this.setState({ rowData });
  //   });
  // };

  runthisfunction(id) {
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          console.log(id);
          DeleteAccount(id)
            .then((res) => {
              let selectedData = this.gridApi.getSelectedRows();
              this.gridApi.updateRowData({ remove: selectedData });
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        default:
      }
    });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  handleChangeHeader = (e, value, index) => {
    let check = e.target.checked;
    if (check) {
      SelectedCols.push(value);
    } else {
      const delindex = SelectedCols.findIndex(
        (ele) => ele?.headerName === value?.headerName
      );

      SelectedCols?.splice(delindex, 1);
    }
    // this.setState({ setMySelectedarr: [...SelectedCols] });
    // console.log(this.state.setMySelectedarr);
  };
  exportToPDF = () => {
    const doc = new jsPDF("landscape", "mm", "a4", false);
    const contentWidth = doc.internal.pageSize.getWidth();
    const contentHeight = doc.internal.pageSize.getHeight();
    // const tableHeight = this.gridApi.getRowHeight();
    // console.log(tableHeight);
    const tableWidth = contentWidth;
    const tableX = 10;
    const tableY = 10;
    const data = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    const dataa = this.gridApi.getDataAsExcel({
      processCellCallback: this.processCell,
    });
    console.log(data);
    console.log(dataa);

    doc.text("User Data Table", 10, 10);

    // Define columns and rows for the table
    const columns = data[0];
    const rows = data.slice(1);

    // Create the table
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // if (tableHeight < contentHeight) {
    //   doc.autoTable({ html: "#myAgGrid" });
    // } else {
    //   doc.text(
    //     "Table too large for one page, implement pagination or adjust layout.",
    //     20,
    //     20
    //   );
    // }

    doc.save("agGrid.pdf");
  };
  processCell = (params) => {
    // Customize cell content as needed
    return params.value;
  };
  // exportToPDF = () => {
  //   // let id = document.getElementById("myAgGrid");
  //   // const gridApi = this.gridRef.current.api;
  //   // console.log(id);
  //   // console.log(cid);
  //   if (this.gridApi) {
  //     const doc = new jsPDF("landscape", "mm", "a4", false);
  //     doc.autoTable({ html: "#myAgGrid" });
  //     // doc.autoTable({ html: ".ag-root-wrapper ag-layout-auto-height ag-ltr" });

  //     // doc.text("Hello, Landscape PDF!", 10, 10);
  //     doc.save("landscape-pdf.pdf");
  //     // const doc = new jsPDF("landscape", "mm", "a4", false);

  //     // doc.save("mypdf.pdf");
  //   }
  // };
  exportToExcel = () => {
    const params = {
      fileName: "my-exported-data.xlsx", // Set the desired file name
    };

    const exportParams = {
      columnWidth: 100, // Set the column width in Excel (optional)
    };

    this.gridApi.exportDataAsExcel(params, exportParams);
  };

  render() {
    const {
      rowData,
      columnDefs,
      defaultColDef,
      SelectedcolumnDefs,
      isOpen,
      AllcolumnDefs,
    } = this.state;
    return (
      <>
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 className="float-left">User List with Role</h1>
                </Col>
                <Col>
                  <span className="mx-1">
                    <FaFilter
                      style={{ cursor: "pointer" }}
                      title="filter coloumn"
                      size="25px"
                      onClick={(e) => {
                        e.preventDefault();
                        this.toggleModal();
                      }}
                      color="blue"
                      className="float-right"
                    />
                  </span>
                  <span className="mx-1">
                    <div className="dropdown-container float-right">
                      <FaFileDownload
                        style={{ cursor: "pointer" }}
                        title="download file"
                        size="25px"
                        className="dropdown-button "
                        color="blue"
                        onClick={this.toggleDropdown}
                      />
                      {isOpen && (
                        <div
                          style={{
                            position: "absolute",
                            // backgroundColor: "grey",
                            zIndex: "1",
                          }}
                          className="dropdown-content dropdownmy"
                        >
                          <h5
                            onClick={() => this.exportToPDF()}
                            style={{ cursor: "pointer" }}
                            className=" mx-1 myactive mt-1"
                          >
                            PDF
                          </h5>
                          <h5
                            onClick={() => this.gridApi.exportDataAsCsv()}
                            style={{ cursor: "pointer" }}
                            className=" mx-1 myactive"
                          >
                            CSV
                          </h5>
                          <h5
                            onClick={() => this.gridApi.exportDataAsExcel()}
                            style={{ cursor: "pointer" }}
                            className=" mx-1 myactive"
                          >
                            XLS
                          </h5>
                          <h5
                            onClick={() => this.exportToExcel()}
                            style={{ cursor: "pointer" }}
                            className=" mx-1 myactive"
                          >
                            XML
                          </h5>
                        </div>
                      )}
                    </div>
                  </span>
                </Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>

                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer className="ag-theme-alpine">
                      {(context) => (
                        <AgGridReact
                          id="myAgGrid"
                          gridOptions={{
                            domLayout: "autoHeight", // or other layout options
                          }}
                          // gridOptions={this.gridOptions}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                          ref={this.gridRef} // Attach the ref to the grid
                          domLayout="autoHeight" // Adjust layout as needed
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}
        >
          <ModalHeader toggle={this.toggleModal}>Change Fileds</ModalHeader>
          <ModalBody className="modalbodyhead">
            <Row>
              <Col lg="4" md="4" sm="4" xl="4" xs="12">
                <h4>Columns</h4>
                <div className="mainshffling">
                  <div class="ex1">
                    {AllcolumnDefs &&
                      AllcolumnDefs?.map((ele, i) => {
                        let check =
                          SelectedcolumnDefs &&
                          SelectedcolumnDefs?.some((item) => {
                            item?.headerName == ele?.headerName;
                          });

                        return (
                          <>
                            <div
                              onClick={(e) =>
                                this.handleChangeHeader(e, ele, i)
                              }
                              key={i}
                              className="mycustomtag mt-1"
                            >
                              <span className="mt-1">
                                <h4
                                  style={{ cursor: "pointer" }}
                                  className="allfields"
                                >
                                  <input
                                    type="checkbox"
                                    // checked={check && check}
                                    className="mx-1"
                                  />

                                  {ele?.headerName}
                                </h4>
                              </span>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </Col>
              <Col lg="2" md="2" sm="2" xl="2" xs="12" className="colarrowbtn">
                <div className="mainarrowbtn">
                  <div style={{ cursor: "pointer" }}>
                    <FaArrowAltCircleRight
                      onClick={() =>
                        this.setState({
                          SelectedcolumnDefs: SelectedCols,
                        })
                      }
                      className="arrowassign"
                      size="30px"
                    />
                  </div>
                  <div style={{ cursor: "pointer" }} className="my-2">
                    <FaArrowAltCircleLeft
                      onClick={() =>
                        this.setState({
                          SelectedcolumnDefs: SelectedCols,
                        })
                      }
                      className="arrowassign"
                      size="30px"
                    />
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xl="6" xs="12">
                <Row>
                  <Col lg="8" md="8" sm="8" xs="12">
                    <h4>Selected Columns</h4>
                    <div className="mainshffling">
                      <div class="ex1">
                        {SelectedcolumnDefs &&
                          SelectedcolumnDefs?.map((ele, i) => {
                            return (
                              <>
                                <div key={i} className="mycustomtag mt-1">
                                  <span className="mt-1">
                                    <h4
                                      style={{ cursor: "pointer" }}
                                      className="allfields"
                                    >
                                      <IoMdRemoveCircleOutline
                                        onClick={() => {
                                          const delindex =
                                            SelectedCols.findIndex(
                                              (element) =>
                                                element?.headerName ===
                                                ele?.headerName
                                            );

                                          SelectedCols?.splice(delindex, 1);
                                          this.setState({
                                            SelectedcolumnDefs: SelectedCols,
                                          });
                                        }}
                                        style={{ cursor: "pointer" }}
                                        size="25px"
                                        color="red"
                                        className="mr-1"
                                      />

                                      {ele?.headerName}
                                    </h4>
                                  </span>
                                </div>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="12"></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      debugger;
                      console.log(SelectedCols);
                      this.setState({ columnDefs: SelectedcolumnDefs });
                      // this.setState({ columnDefs: SelectedCols });

                      // this.toggleModal();
                    }}
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default ProductType;
