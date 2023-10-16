import React, { useState, useEffect, useContext } from "react";
import Imagemagnify from "./Imagemagnify";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Media,
} from "reactstrap";
import "./Magnify.css";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { PartCatalogueView } from "../../../../ApiEndPoint/ApiCalling";
import { BsCartCheckFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import * as Icon from "react-feather";
import ZoomimageTest from "./ZoomimageTest";
// import { ReactPanZoom } from "./Ra";
import UserContext from "../../../../context/Context";
import { MdOutlineDownloadDone } from "react-icons/md";

function PartCatalougue() {
  const [CollapseIndex, setCollapseIndex] = useState("");
  const [frontSide, setfrontSide] = useState([]);
  const [AllData, setAllData] = useState({});
  const [ListData, setListData] = useState([]);
  const [Fullimage, setFullimage] = useState(false);
  const [Cartvalue, setCartvalue] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    ListData.map((product) => ({
      quantity: 0,
      elementData: product, // You can set this to the product data
    }))
  );
  const context = useContext(UserContext);

  useEffect(() => {
    PartCatalogueView()
      .then((res) => {
        // console.log(res?.Parts_Catalogue);
        setAllData(res?.Parts_Catalogue);
        let keys = Object.keys(res?.Parts_Catalogue);
        setCollapseIndex(0);

        setListData(res?.Parts_Catalogue?.backAxleSubassembly);
        setfrontSide(keys);
        // console.log(keys);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const initialQuantities = new Array(ListData.length).fill(0);
    setQuantities(initialQuantities);
  }, [ListData]);

  useEffect(() => {
    console.log(context);
  }, [context]);

  useEffect(() => {
    console.log(cart);

    context?.setPartsCatalougueCart(cart);
  }, [cart]);

  const handleIncreaseCount = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };
  const handleIncreaseCartItemQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
    setTotalItemCount((count) => count + 1);
  };

  const handleDecreaseCartItemQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 0) {
      newCart[index].quantity -= 1;
      setCart(newCart);
      setTotalItemCount((count) => count - 1);
    }
  };
  const handleDecreaseCount = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  // const addToCart = (index) => {
  //   if (quantities[index] > 0) {
  //     setCart((prevCart) => {
  //       const newCart = [...prevCart];
  //       newCart.push({
  //         product: ListData[index],
  //         quantity: quantities[index],
  //       });
  //       return newCart;
  //     });
  //     setQuantities((prevQuantities) => {
  //       const newQuantities = [...prevQuantities];
  //       newQuantities[index] = 0;
  //       return newQuantities;
  //     });
  //   }
  // };
  const handleEditCartItemQuantity = (index, event) => {
    const newCart = [...cart];
    newCart[index].quantity = parseInt(event.target.value, 10);
    setCart(newCart);
    setTotalItemCount((count) => count + parseInt(event.target.value, 10));
  };
  const addToCart = (index) => {
    if (quantities[index] > 0) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        setTotalItemCount((count) => count + quantities[index]);
        const existingIndex = newCart.findIndex(
          (item) => item?.product?._id === ListData[index]._id
        );

        if (existingIndex !== -1) {
          // If the product already exists in the cart, update its quantity
          newCart[existingIndex].quantity += quantities[index];
        } else {
          // If it doesn't exist, add it to the cart
          newCart.push({
            product: ListData[index],
            quantity: quantities[index],
          });
        }
        return newCart;
      });
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = 0;
        return newQuantities;
      });
    }
  };

  const toggleCollapse = (ele, i) => {
    if (ele) {
      setFullimage(true);
    }
    console.log(ele, AllData[ele]);
    setListData(AllData[ele]);
    setCollapseIndex(i);
  };

  return (
    <>
      <Row>
        <Col>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Product</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        {!Fullimage && (
          <>
            <Col className="mb-2" lg="3" md="3" sm="3" xs="12">
              <div className="collapse-bordered collapse-border mb-3">
                {frontSide?.map((ele, i) => {
                  return (
                    <>
                      <Card
                        style={{
                          backgroundColor: `${
                            CollapseIndex === i ? "#055761" : ""
                          }`,
                          color: `${CollapseIndex === i ? "white" : ""}`,
                        }}
                        className="collapse-border-item"
                        key={i}
                        onClick={() => toggleCollapse(ele, i)}
                      >
                        <CardHeader className="cardheadercustme">
                          <CardTitle className={`lead collapse-title `}>
                            <div className="">
                              <Row>
                                <Col>
                                  <div className="arrowdowandup">
                                    <div className="d-flex">
                                      <span
                                        style={{
                                          backgroundColor: `${
                                            CollapseIndex === i ? "#055761" : ""
                                          }`,
                                          color: `${
                                            CollapseIndex === i ? "white" : ""
                                          }`,
                                        }}
                                      >
                                        {ele.substring(0, 15)}
                                      </span>
                                      {CollapseIndex === i ? (
                                        <>
                                          <span className="ml-2">
                                            <AiFillDownCircle className="aiarrow " />
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <span className="ml-2">
                                            <AiFillUpCircle className="aiarrow" />
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </>
                  );
                })}
              </div>
            </Col>
          </>
        )}
        <Col
          lg={Fullimage ? "8" : "5"}
          md={Fullimage ? "8" : "5"}
          sm={Fullimage ? "8" : "5"}
          xs="12"
        >
          <div className="d-flex justify-content-start">
            {Fullimage ? (
              <BsFillArrowRightSquareFill
                style={{ cursor: "pointer" }}
                onClick={() => setFullimage(false)}
                size="25px"
                fill="#055761"
                className=""
              />
            ) : (
              ""
            )}
          </div>
          {ListData && ListData ? (
            <>
              <Imagemagnify imageSrc={ListData[0]?.Part_Image?.text} />
            </>
          ) : (
            <>
              <Imagemagnify imageSrc="https://res.cloudinary.com/dc7hzwpbm/image/upload/v1683461876/software_development.jpg" />
            </>
          )}
        </Col>
        <Col lg="4" md="4" sm="4" xs="12">
          <div
            style={{ height: window.innerHeight - 150 }}
            className="tableheadingmy"
          >
            <Table bordered hover striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Part Name</th>
                  <th>Part Number</th>
                  <th>Qty</th>
                  <th>Add to Cart </th>
                  <th>Part Quantity</th>
                </tr>
              </thead>
              <tbody>
                {ListData &&
                  ListData?.map((val, i) => {
                    return (
                      <tr key={val._id}>
                        <th scope="row">{i + 1}</th>

                        {/* <td>
                              <img src={val.Part_Image?.text} alt="img" />
                            </td> */}
                        <td>{val.Part_Name}</td>
                        <td>{val.Part_Number}</td>
                        <td>
                          <span className="d-flex">
                            <Button
                              style={{ padding: "7px 8px" }}
                              className="minusbutton"
                              color="primary"
                              size="sm"
                              onClick={() => handleDecreaseCount(i)}
                              // onClick={() => {
                              //   // handleDecreaseCount();
                              //   const selectedProduct = val[i];
                              //   const quantity = quantities[i];
                              //   console.log(quantity);
                              //   console.log(selectedProduct);
                              // }}
                            >
                              -
                            </Button>
                            <div className="inputheading">
                              <input
                                style={{ width: "40px" }}
                                type="number"
                                name="cart"
                                min="0"
                                value={quantities[i]}
                                onChange={(e) => {
                                  handleQuantityChange(i, e.target.value);
                                }}
                                // onChange={(e) => {

                                //   const newQuantities = [...quantities];
                                //   newQuantities[i] = e.target.value;
                                //   setQuantities(newQuantities);
                                // }}
                                onKeyDown={(e) => {
                                  ["e", "E", "+", "-"].includes(e.key) &&
                                    e.preventDefault();
                                }}
                                maxlength="4"
                                size="2"
                              />
                            </div>{" "}
                            <Button
                              onClick={() => handleIncreaseCount(i)}
                              // onClick={() => {
                              //   const newQuantities = [...quantities];
                              //   newQuantities[i] = e.target.value;
                              //   setQuantities(newQuantities);
                              // }}
                              style={{ padding: "7px 8px" }}
                              color="primary"
                              size="sm"
                            >
                              +
                            </Button>
                          </span>
                        </td>
                        <td>
                          <>
                            <div
                              style={{ width: "71px" }}
                              className="addtocart d-flex"
                            >
                              {quantities[i] > 0 ? (
                                <>
                                  {/* <Button
                                    onClick={() => addToCart(i)}
                                    style={{ padding: "7px 8px" }}
                                    color="success"
                                    size="sm"
                                  >
                                    +
                                  </Button> */}
                                  <MdOutlineDownloadDone
                                    title="Click to add to Cart"
                                    onClick={() => addToCart(i)}
                                    style={{
                                      // padding: "7px 8px",
                                      cursor: "pointer",
                                    }}
                                    color="green"
                                    size={40}
                                  />
                                </>
                              ) : null}
                              <UncontrolledDropdown
                                // tag="li"
                                className="dropdown-notification nav-item"
                              >
                                <DropdownToggle
                                  tag="a"
                                  className="nav-link nav-link-label"
                                >
                                  <BsCartCheckFill color="#055761" size={25} />
                                  <Badge
                                    style={{
                                      position: "absolute",
                                      top: "-1px",
                                      right: "-2px",
                                    }}
                                    pill
                                    color="primary"
                                    className="badge-up cartbadgecatalougue"
                                  >
                                    {quantities[i]}
                                  </Badge>
                                </DropdownToggle>
                              </UncontrolledDropdown>
                            </div>
                          </>
                        </td>
                        <td>{val.Part_Qty}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <Row>
        {/* <ZoomimageTest /> */}
        {/* <ReactPanZoom
            alt="cool image"
            image="https://drscdn.500px.org/photo/105738331/q%3D80_m%3D2000/v2?webp=true&sig=538a4f76f4966c84acb01426bb4a4a5e4a85b72a2c3bd64973d3a369f9653007"
          /> */}
      </Row>
    </>
  );
}

export default PartCatalougue;
