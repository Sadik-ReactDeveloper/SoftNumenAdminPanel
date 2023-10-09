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

import React, { useState } from "react";
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

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy.",
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum.",
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake.",
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll.",
  },
];

function AccordionBorder() {
  const [collapseID, setCollapseID] = useState("");

  const toggleCollapse = (id) => {
    setCollapseID((prevCollapseID) => (prevCollapseID !== id ? id : ""));
  };

  const accordionBorderItems = collapseItems.map((collapseItem) => (
    <Card
      className="collapse-border-item"
      key={collapseItem.id}
      onClick={() => toggleCollapse(collapseItem.id)}
    >
      <CardHeader className="cardheadercustme">
        <CardTitle
          className={`lead collapse-title ${
            collapseItem.id === collapseID ? "" : "collapsed"
          }`}
        >
          {collapseItem.title}
        </CardTitle>
      </CardHeader>
      <Collapse
        isOpen={collapseItem.id === collapseID}
        onEntering={(e) => {
          console.log(e);
        }}
        onEntered={(e) => {
          console.log(e);
        }}
        onExiting={(e) => {
          console.log(e);
        }}
        onExited={(e) => {
          console.log(e);
        }}
      >
        <CardBody>{collapseItem.content}</CardBody>
      </Collapse>
    </Card>
  ));

  return (
    <>
      <Row>
        <Col lg="3" md="3" sm="3" xs="12">
          <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate collapse-border">
            {accordionBorderItems}
          </div>
        </Col>
        <Col lg="5" md="5" sm="5" xs="12">
          {" "}
          <Imagemagnify imageSrc="https://res.cloudinary.com/dc7hzwpbm/image/upload/v1683461876/software_development.jpg" />
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AccordionBorder;
