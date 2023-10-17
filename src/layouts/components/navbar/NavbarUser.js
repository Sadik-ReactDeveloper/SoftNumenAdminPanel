import React, { useContext } from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge,
  Table,
  Row,
  Col,
} from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axiosConfig from "../../../axiosConfig";
import * as Icon from "react-feather";
import classnames from "classnames";
import ReactCountryFlag from "react-country-flag";
import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent";
//import { useAuth0 } from "../../../authServices/auth0/auth0Service"
import { history } from "../../../history";
import images from "../../assets/img/logo/g.png";
import logo from "../../assets/img/profile/pages/page-01.jpg";
import { IntlContext } from "../../../utility/context/Internationalization";
import { Route, useHistory } from "react-router-dom";
import ToggleMode from "./ToggleMode";
import { BsCartCheckFill } from "react-icons/bs";
import UserContext from "../../../context/Context";
import { MdDelete } from "react-icons/md";
import {
  AddToCartGet,
  DeleteCartItemPartsCatelogue,
} from "../../../ApiEndPoint/ApiCalling";
import swal from "sweetalert";
const total = [];
const handleNavigation = (e) => {
  e.preventDefault();
  history.push("/#/pages/profile/userProfile");
};
const handleSelect = (e) => {
  e.preventDefault();
  history.push("/#/pages/profile/userProfile");
};
const UserDropdown = (props) => {
  // const { logout, isAuthenticated } = useAuth0()
  return (
    <DropdownMenu right>
      {/* <DropdownItem tag="a" href="#" onClick={(e) => handleNavigation(e)}>
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem> */}
      {/* <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/email/inbox")}
      >
        <Icon.Mail size={14} className="mr-50" />
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/todo/all")}
      >
        <Icon.CheckSquare size={14} className="mr-50" />
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/chat")}
      >
        <Icon.MessageSquare size={14} className="mr-50" />
        <span className="align-middle">Chats</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#" onClick={e => handleNavigation(e, "/ecommerce/wishlist")}>
        <Icon.Heart size={14} className="mr-50" />
        <span className="align-middle">WishList</span>
      </DropdownItem> */}
      <DropdownItem divider />
      <Route
        render={({ history }) => (
          <DropdownItem
            tag="a"
            onClick={(e) => {
              e.preventDefault();
              history.push("/pages/profile/userProfile");
            }}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>
        )}
      />
      <Route
        render={({ history }) => (
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => {
              localStorage.clear();
              localStorage.removeItem("userData");
              history.push("/#/pages/login");
              const data = new FormData();
              let pageparmission = JSON.parse(localStorage.getItem("userData"));
              data.append("user_id", pageparmission?.Userinfo?.id);
              data.append("role", pageparmission?.Userinfo?.role);
              axiosConfig
                .post("/apiLogout", data)
                .then((resp) => {
                  console.log(resp);
                  localStorage.clear();
                  localStorage.removeItem("userData");
                  history.push("/#/pages/login");
                })
                .catch((err) => {
                  console.log(err);
                  // swal("Somethig Went Wrong");
                });
              // if (isAuthenticated) {
              //    // return logout({
              //    //   returnTo: window.location.origin + process.env.REACT_APP_PUBLIC_PATH
              //    // })
              // }
              const provider = props.loggedInWith;
              if (provider !== null) {
                if (provider === "jwt") {
                  return props.logoutWithJWT();
                }
                if (provider === "firebase") {
                  return props.logoutWithFirebase();
                }
              } else {
                localStorage.removeItem("userData");
                localStorage.clear();
                history.push("/#/pages/login");
              }
            }}
          >
            <Icon.Power size={14} className="mr-50" />
            <span className="align-middle">Log Out</span>
          </DropdownItem>
        )}
      />
    </DropdownMenu>
  );
};

class NavbarUser extends React.PureComponent {
  static contextType = UserContext;
  state = {
    // navbarSearch: false,
    langDropdown: false,
    userData: "",
    modal: false,
    myCart: [],
    Total: Number,
    Update_User_details: {},
    Quantity: [],
    LoginData: {},
    shoppingCart: [
      {
        id: 1,
        name: "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
        desc: "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original Apple Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
        price: "$299",
        img: require("../../../assets/img/pages/eCommerce/4.png"),
        width: 75,
      },
      {
        id: 2,
        name: "Apple - Macbook® (Latest Model) - 12' Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage Space Gray",
        desc: "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
        price: "$1599.99",
        img: require("../../../assets/img/pages/eCommerce/dell-inspirion.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50",
      },
      {
        id: 3,
        name: "Sony - PlayStation 4 Pro Console",
        desc: "PS4 Pro Dynamic 4K Gaming & 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
        price: "$399.99",
        img: require("../../../assets/img/pages/eCommerce/7.png"),
        width: 88,
      },
      {
        id: 4,
        name: "Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Wireless On-Ear Headphones - Red",
        desc: "Rock out to your favorite songs with these Beats by Dr. Dre Beats Studio Wireless GS-MH8K2AM/A headphones that feature a Beats Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
        price: "$379.99",
        img: require("../../../assets/img/pages/eCommerce/10.png"),
        width: 75,
      },
      {
        id: 5,
        name: "Sony - 75' Class (74.5' diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black",
        desc: "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
        price: "$4499.99",
        img: require("../../../assets/img/pages/eCommerce/sony-75class-tv.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50",
      },
      {
        id: 6,
        name: "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
        desc: "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
        price: "$4099.99",
        img: require("../../../assets/img/pages/eCommerce/canon-camera.jpg"),
        width: 70,
        imgClass: "mt-1 pl-50",
      },
    ],
    suggestions: [],
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  async componentDidMount() {
    const user = this.context;
    await this.handleShowCart();

    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    this.setState({ LoginData: pageparmission });
    let accessToken = localStorage.getItem("userToken");
    if (accessToken === null || accessToken === undefined) {
      history.push("/pages/login");
    }
    axiosConfig.get("/api/main-search/data").then(({ data }) => {
      this.setState({ suggestions: data.searchResult });
    });
    let data = JSON.parse(localStorage.getItem("userData")); //forgot to close
    this.setState({ userData: data });

    console.log(user);
  }

  handleDeletePartsCate = (e, ele) => {
    e.preventDefault();
    let userdata = JSON.parse(localStorage.getItem("userData"));

    swal("Warning", "Sure You Want to Delete item", {
      buttons: {
        cancel: "Cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          let value = {
            userId: userdata?._id,
            productId: ele?.productId,
          };
          DeleteCartItemPartsCatelogue(value)
            .then((res) => {
              console.log(res);
              this.handleShowCart();
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        default:
      }
    });
  };
  handleShowCart = async () => {
    let userData = JSON.parse(localStorage.getItem("userData")); //forgot to close

    await AddToCartGet(userData?._id)
      .then((res) => {
        console.log(res?.cart);
        const user = this.context;
        let total = res?.cart?.map(
          (val, i) => val?.quantity * val?.product?.Part_Price
        );
        let qty = res?.cart?.map((val, i) => val?.quantity);
        this.setState({ Quantity: qty });
        // console.log(qty);

        console.log(total);
        let findtotal = total?.reduce((a, b) => a + b, 0);
        console.log(findtotal);
        this.setState({ Total: findtotal });
        this.setState({ myCart: res?.cart });
        user?.setPartsCatalougueCart(res?.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // handleNavbarSearch = () => {
  //   this.setState({
  //     navbarSearch: !this.state.navbarSearch
  //   })
  // }

  removeItem = (id) => {
    let cart = this.state.shoppingCart;

    let updatedCart = cart.filter((i) => i.id !== id);

    this.setState({
      shoppingCart: updatedCart,
    });
  };
  handleQuantityChange = (e) => {
    debugger;
    console.log(i);
    console.log(e.target.value);
    console.log(value);
  };
  handleDecreaseCount = (ele, index, e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newQuantities = [...prevState.Quantity];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return { Quantity: newQuantities };
    });
  };
  handleIncreaseCount = (ele, index, e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newQuantities = [...prevState.Quantity];
      newQuantities[index] += 1;
      return { Quantity: newQuantities };
    });
  };

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown });
  render() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const user = this.context;
    const taxAmount = (this.state.Total * 0.18).toFixed(2);
    const Shipping = (this.state.Total * 0.1).toFixed(2);
    const Grand = (
      this.state.Total * 1 +
      Number(taxAmount) +
      Number(Shipping)
    ).toFixed(2);

    const { userData } = this.state;
    const renderCartItems = this.state.shoppingCart.map((item) => {
      return (
        <>
          <div className="cart-item" key={item.id}>
            <Media
              className="p-0"
              onClick={() => history.push("/ecommerce/product-detail")}
            >
              <Media className="text-center pr-0 mr-1" left>
                <img
                  className={`${
                    item.imgClass
                      ? item.imgClass + " cart-item-img"
                      : "cart-item-img"
                  }`}
                  src={item.img}
                  width={item.width}
                  alt="Cart Item"
                />
              </Media>
              <Media className="overflow-hidden pr-1 py-1 pl-0" body>
                <span className="item-title text-truncate text-bold-500 d-block mb-50">
                  {item.name}
                </span>
                <span className="item-desc font-small-2 text-truncate d-block">
                  {item.desc}
                </span>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <span className="align-middle d-block">1 x {item.price}</span>
                  <Icon.X
                    className="danger"
                    size={15}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.removeItem(item.id);
                    }}
                  />
                </div>
              </Media>
            </Media>
          </div>
        </>
      );
    });

    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <IntlContext.Consumer>
          {(context) => {
            let langArr = {
              // "en" : "English",
              // "de" : "German",
              // "fr" : "French",
              // "pt" : "Portuguese"
            };
            return (
              <>
                {/* <ToggleMode /> */}
                <Dropdown
                  tag="li"
                  className="dropdown-language nav-item"
                  isOpen={this.state.langDropdown}
                  toggle={this.handleLangDropdown}
                  data-tour="language"
                >
                  <DropdownToggle tag="a" className="nav-link">
                    <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
                      {langArr[context.state.locale]}
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right></DropdownMenu>
                </Dropdown>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className="modal-dialog modal-xl"
                  // className="modal-dialog modal-lg"
                  size="lg"
                  backdrop={true}
                  fullscreen={true}
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Added To Cart
                  </ModalHeader>
                  <ModalBody className="myproducttable">
                    <Table
                      style={{ height: "300px", overflowY: "scroll" }}
                      bordered
                      hover
                      striped
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Part Name</th>
                          <th>Part Number</th>
                          <th>Type</th>
                          <th>Image </th>
                          <th>Part Quantity</th>
                          <th>Part Price</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user?.PartsCatalougueCart?.map((ele, i) => {
                          {
                            /* {this.state.myCart?.map((ele, i) => { */
                          }
                          return (
                            <tr key={i}>
                              <th scope="row"> {i + 1}</th>

                              <td>{ele?.product?.Part_Name}</td>
                              <td>{ele?.product?.Part_Number}</td>
                              <td>{ele?.product?.Part_Catalogue}</td>
                              <td>
                                <img
                                  width={35}
                                  height={35}
                                  src={
                                    ele?.product?.Part_Image &&
                                    ele?.product?.Part_Image
                                  }
                                />{" "}
                              </td>

                              <td>
                                <span className="d-flex">
                                  <Button
                                    style={{ padding: "7px 8px" }}
                                    className="minusbutton"
                                    color="primary"
                                    size="sm"
                                    onClick={(e) =>
                                      this.handleDecreaseCount(ele, i, e)
                                    }
                                  >
                                    -
                                  </Button>
                                  <div className="inputheading">
                                    <input
                                      style={{ width: "40px" }}
                                      type="number"
                                      name="cart"
                                      min="0"
                                      value={this.state.Quantity[i]}
                                      onChange={(e) =>
                                        this.handleQuantityChange(e, i)
                                      }
                                      onKeyDown={(e) => {
                                        ["e", "E", "+", "-"].includes(e.key) &&
                                          e.preventDefault();
                                      }}
                                      maxlength="4"
                                      size="2"
                                    />
                                  </div>{" "}
                                  <Button
                                    onClick={(e) =>
                                      this.handleIncreaseCount(ele, i, e)
                                    }
                                    style={{ padding: "7px 8px" }}
                                    color="primary"
                                    size="sm"
                                  >
                                    <strong>+</strong>
                                  </Button>
                                  {ele?.quantity}
                                </span>
                              </td>
                              {/* <td>{ele?.quantity}</td> */}
                              <td>{ele?.product?.Part_Price}</td>
                              {/* Part price */}
                              <td>
                                {/* {ele?.product?.Part_Price *
                                  this.state.Quantity[i]} */}
                                {ele?.product?.Part_Price * ele?.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <Row>
                      <Col>
                        <div className="mytotal mynavbaramont">
                          <div className="d-flex justify-content-end p-1">
                            <strong>
                              Total Amount : &nbsp;{this.state.Total}
                            </strong>
                          </div>
                          <div className="d-flex justify-content-end p-1">
                            <strong>Tax Amount : &nbsp;{taxAmount}</strong>
                          </div>
                          <div className="d-flex justify-content-end p-1">
                            <strong>Shipping fee : &nbsp;{Shipping}</strong>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-end p-1">
                            <h5>
                              <b>
                                Grand Total : &nbsp;
                                {Grand}
                              </b>
                            </h5>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Proceed to Payment
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </>
            );
          }}
        </IntlContext.Consumer>

        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            <BsCartCheckFill color="#055761" size={21} />
            <Badge pill color="primary" className="badge-up">
              {user?.PartsCatalougueCart?.length > 0 ? (
                <>{user?.PartsCatalougueCart?.length}</>
              ) : (
                <>{this.state.myCart.length}</>
              )}
              {/* {this.state.myCart.length && this.state.myCart.length} */}
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">Products </h3>
                <span className="notification-title">Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false,
              }}
            >
              {user?.PartsCatalougueCart?.map((ele, i) => {
                {
                  /* console.log(ele); */
                }
                return (
                  <>
                    <div className="d-flex justify-content-between">
                      <Media key={i} className="d-flex align-items-start">
                        <Media left href="#">
                          <Icon.PlusSquare
                            className="font-medium-5 primary"
                            size={21}
                          />
                        </Media>
                        <Media body>
                          <Media
                            heading
                            className="primary media-heading"
                            tag="h6"
                          >
                            <p>
                              {ele?.product?.Part_Name} &nbsp;( Qty:{" "}
                              {ele?.quantity})
                            </p>
                          </Media>
                          {/* <p className="notification-text">
                            Are your going to meet me tonight?
                          </p> */}
                        </Media>
                        <small>
                          <time
                            className="media-meta"
                            dateTime="2015-06-11T18:29:20+08:00"
                          >
                            <MdDelete
                              color="red"
                              size={20}
                              onClick={(e) => {
                                this.handleDeletePartsCate(e, ele);
                              }}
                              style={{ cursor: "pointer" }}
                            />
                          </time>
                        </small>
                      </Media>
                    </div>
                  </>
                );
              })}
            </PerfectScrollbar>
            <li
              onClick={() => {
                this.handleShowCart();
                this.toggleModal();
              }}
              className="dropdown-menu-footer"
            >
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">View all</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* end */}

        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            <Icon.Bell size={21} />
            <Badge pill color="primary" className="badge-up">
              1
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">1 New</h3>
                <span className="notification-title">App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false,
              }}
            >
              <div className="d-flex justify-content-between">
                <Media
                  className="d-flex align-items-start"
                  onClick={() => {
                    history.push("/#/app/softNumen/order/OrderOne");
                    window.location.reload();
                  }}
                >
                  <Media left href="#">
                    <Icon.PlusSquare
                      className="font-medium-5 primary"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="primary media-heading" tag="h6">
                      You have new order!
                    </Media>
                    <p className="notification-text">
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              {/* <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      99% Server load
                    </Media>
                    <p className="notification-text">
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Warning Notification
                    </Media>
                    <p className="notification-text">
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="info media-heading" tag="h6">
                      Complete the task
                    </Media>
                    <p className="notification-text">
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.File className="font-medium-5 warning" size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      Generate monthly report
                    </Media>
                    <p className="notification-text">
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div> */}
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <div className="user-name text-bold-600">
                {pageparmission && pageparmission?.UserName}{" "}
              </div>
              <div>{pageparmission && pageparmission?.Role}</div>
              {/* <span className="user-status">{this.state.userData.name}</span> */}
            </div>
            <span data-tour="user">
              {/* userimage integrated here */}
              {this.state.LoginData?.profileImage ? (
                <>
                  <img
                    src={`http://3.7.55.231:5000/Images/${this.state.LoginData?.profileImage}`}
                    className="round"
                    height="40"
                    width="40"
                    alt="avatar"
                  />
                </>
              ) : (
                <>
                  <img
                    src={`http://3.7.55.231:5000/Images/${this.state.LoginData?.user1?.profileImage}`}
                    className="round"
                    height="40"
                    width="40"
                    alt="avatar"
                  />
                </>
              )}
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    );
  }
}
export default NavbarUser;
