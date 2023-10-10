// import React from "react";
// import { Collapse } from "reactstrap";

// const collapseItems = [
//   {
//     id: 1,
//     title: "Accordion Item 1",
//     content:
//       "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy.",
//   },
//   {
//     id: 2,
//     title: "Accordion Item 2",
//     content:
//       "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum.",
//   },
//   {
//     id: 3,
//     title: "Accordion Item 3",
//     content:
//       "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake.",
//   },
//   {
//     id: 4,
//     title: "Accordion Item 4",
//     content:
//       "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll.",
//   },
// ];

// class AccordionBorder extends React.Component {
//   state = { collapseID: "" };

//   toggleCollapse = (collapseID) => {
//     this.setState((prevState) => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : "",
//     }));
//   };

//   render() {
//     const accordionBorderItems = collapseItems.map((collapseItem) => {
//       return (
//         <Card
//           className="collapse-border-item"
//           key={collapseItem.id}
//           onClick={() => this.toggleCollapse(collapseItem.id)}
//         >
//           <CardHeader>
//             <CardTitle className="lead collapse-title collapsed">
//               {collapseItem.title}
//             </CardTitle>
//           </CardHeader>
//           <Collapse
//             isOpen={collapseItem.id === this.state.collapseID}
//             onEntering={this.onEntering}
//             onEntered={this.onEntered}
//             onExiting={this.onExiting}
//             onExited={this.onExited}
//           >
//             <CardBody>{collapseItem.content}</CardBody>
//           </Collapse>
//         </Card>
//       );
//     });

//     return (
//       <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate collapse-border">
//         {accordionBorderItems}
//       </div>
//     );
//   }
// }
// export default AccordionBorder;

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
} from "reactstrap";
import "./Magnify.css";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { PartCatalogueView } from "../../../../ApiEndPoint/ApiCalling";

function AccordionBorder() {
  const [CollapseIndex, setCollapseIndex] = useState("");
  const [frontSide, setfrontSide] = useState([]);
  const [AllData, setAllData] = useState({});
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    PartCatalogueView()
      .then(res => {
        console.log(res?.Parts_Catalogue);
        setAllData(res?.Parts_Catalogue);
        let keys = Object.keys(res?.Parts_Catalogue);
        setCollapseIndex(0);
        setListData(res?.Parts_Catalogue?.backAxleSubassembly);
        setfrontSide(keys);
        // console.log(keys);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const toggleCollapse = (ele, i) => {
    // debugger;
    console.log(ele, AllData[ele]);
    // console.log("lll", AllData.includes(ele));
    setListData(AllData[ele]);
    setCollapseIndex(i);
  };

  return (
    <>
      <Row>
        <Col lg="3" md="3" sm="3" xs="12">
          <div className="collapse-bordered accordion-icon-rotate collapse-border">
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
                                  <span>{ele.substring(0, 15)}</span>
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
        <Col lg="5" md="5" sm="5" xs="12">
          {ListData && ListData ? (
            <>
              {" "}
              <Imagemagnify imageSrc={ListData[0]?.Part_Image?.text} />
            </>
          ) : (
            <>
              {" "}
              <Imagemagnify imageSrc="https://res.cloudinary.com/dc7hzwpbm/image/upload/v1683461876/software_development.jpg" />
            </>
          )}

          {/* <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate collapse-border">
            {accordionBorderItems}
          </div> */}
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
                  {/* <th>_id</th>
                    <th>Parts_Catalogue</th>
                    <th>Part_Catalogue</th> */}
                  {/* <th>Part Image</th> */}
                  <th>Part Name</th>
                  <th>Part Number</th>
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
                        <td>{val.Part_Qty}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AccordionBorder;
