import React, { useState, useEffect } from "react";
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
} from "reactstrap";
import "./Magnify.css";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { PartCatalogueView } from "../../../../ApiEndPoint/ApiCalling";
import { BsCartCheckFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import * as Icon from "react-feather";
import ZoomimageTest from "./ZoomimageTest";
// import { ReactPanZoom } from "./Ra";

function PartCatalougue() {
  const [CollapseIndex, setCollapseIndex] = useState("");
  const [frontSide, setfrontSide] = useState([]);
  const [AllData, setAllData] = useState({});
  const [ListData, setListData] = useState([]);
  const [Fullimage, setFullimage] = useState(false);

  useEffect(() => {
    PartCatalogueView()
      .then((res) => {
        console.log(res?.Parts_Catalogue);
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
            <Col lg="3" md="3" sm="3" xs="12">
              <div className="collapse-bordered collapse-border">
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
                  <th>Add to cart</th>
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
                          <BsCartCheckFill size="25px" fill="#055761" />{" "}
                          <Badge
                            pill
                            color="primary"
                            className="badge-up addcartcatelougue"
                          >
                            1
                          </Badge>
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
