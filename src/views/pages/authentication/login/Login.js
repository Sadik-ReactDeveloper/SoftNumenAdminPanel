import React from "react";
import {
  Container,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Form,
  TabContent,
  TabPane,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { FaBeer } from "react-icons/fa";
import logo from "../../../../assets/img/logo/paravilogo.png";
import "../../../../assets/scss/pages/authentication.scss";
import { history } from "../../../../history";
import LoginAuth0 from "./LoginAuth0";
import LoginFirebase from "./LoginFirebase";
import LoginJWT from "./LoginJWT";
import { connect } from "react-redux";
// import UserContext from "../../../../context/Context";
import OtpInput from "react-otp-input";
import swal from "sweetalert";
import axiosConfig from "../../../../axiosConfig";
import { UserLogin, UserOTPVerify } from "../../../../ApiEndPoint/ApiCalling";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

class Login extends React.Component {
  // static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Otp: "",
      emailotp: "",
      type: "password",
      whatsappotp: "",
      smsotp: "",
      OtpScreen: false,
      UserCredential: {},
      password: "",
      resetpassword: false,
    };
  }
  componentDidMount() {
    this.preventBackButton();
  }
  preventBackButton() {
    window.history.pushState(null, null, window.location.href);
    this.popstateHandler = function () {
      window.history.go(1);
    };
    window.addEventListener("popstate", this.popstateHandler);
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillUnmount() {
    this.allowBackButton();
  }
  allowBackButton() {
    window.removeEventListener("popstate", this.popstateHandler);
  }
  loginOTPHandler = async (e) => {
    e.preventDefault();
    if (this.state.emailotp?.length == 6) {
      let Opt = { otp: this.state.emailotp, username: this.state.email };
      await UserOTPVerify(Opt)
        .then((response) => {
          if (response?.status) {
            localStorage.setItem("userData", JSON.stringify(response?.user));
            setTimeout(() => {
              this.props.history.push("/dashboard");
            }, 1500);
            swal(
              "Sucessfully login",
              "You are LoggedIn!",

              {
                buttons: {
                  ok: { text: "Ok", value: "ok" },
                },
              }
            ).then((value) => {
              switch (value) {
                case "ok":
                  break;
                default:
              }
            });
          } else {
            swal("Something Went Wrong");
          }
        })
        .catch((err) => {
          console.log(err.response);
          swal(`Error`, `${err.response?.data.message}`);
        });
    } else {
      swal("Please Enter OTP");
      // swal({
      //   title: "Are you sure?",
      //   text: "Are you sure that you want to leave this page?",
      //   icon: "warning",
      //   dangerMode: true,
      // }).then((willDelete) => {
      //   if (willDelete) {
      //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
      //   }
      // });
    }
  };

  loginHandler = async (e) => {
    e.preventDefault();
    let data = { username: this.state.email, password: this.state.password };
    // console.log(data);
    await UserLogin(data)
      .then((res) => {
        if (
          JSON.parse(res?.user?.gmail) ||
          JSON.parse(res?.user?.whatsapp) ||
          JSON.parse(res?.user?.sms)
        ) {
          this.setState({ UserCredential: res?.user });
          if (res?.status) {
            swal("Success", "OTP sent");
            this.setState({ OtpScreen: true });
          } else {
            swal("Something Went Wrong");
          }
        } else {
          localStorage.setItem("userData", JSON.stringify(res?.user));
          this.props.history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.response);
        let Incorrectpassword =
          err.response?.data.message == "Incorrect password";
        let IncorrectEmail = err.response?.data.message == "Incorrect Email";
        if (Incorrectpassword) {
          swal({
            title: "Some Error Occurred",
            text: `Incorrect Password`,
            icon: "warning",
            dangerMode: false,
          });
        }
        if (IncorrectEmail) {
          // swal("Error", "Please Enter Correct Password");
          swal({
            title: "Some Error Occurred",
            text: `Incorrect Email`,
            icon: "warning",
            dangerMode: false,
          });
        }
      });

    // const fromdata = new FormData();
    // fromdata.append("username", this.state.email);
    // fromdata.append("password", this.state.password);
    // axiosConfig
    //   .post("/usersign", fromdata)
    //   .then((response) => {
    //     let msg = response.data?.success;
    //     if (msg) {
    //       localStorage.setItem("userData", JSON.stringify(response.data?.data));
    //       setTimeout(() => {
    //         this.props.history.push("/dashboard");
    //       }, 2000);
    //       swal(
    //         "Sucessfully login",
    //         "You are LoggedIn!",
    //         "Success",

    //         {
    //           buttons: {
    //             ok: { text: "Ok", value: "ok" },
    //           },
    //         }
    //       ).then((value) => {
    //         switch (value) {
    //           case "ok":
    //             break;
    //           default:
    //         }
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     let msg = error.response?.data.success;
    //     if (!msg) {
    //       swal("Error", "Invalid Username or Password");
    //     }
    //   });
  };
  changepassword = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("email", this.state.email);
    formdata.append("base_url", "this.state.password");
    axiosConfig
      .post("/forgetPasswordEmailVerify", formdata)
      .then((res) => {
        console.log(res);
        this.setState({ resetpassword: false });
        swal("Email has been sent to Your Mail id", "Please Check and verify");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // handleChangeOTP = (otp) => {
  //   // console.log(otp);
  //   this.setState({ emailotp: otp });
  // };

  render() {
    const { UserCredential } = this.state;
    return (
      <Container>
        <Row className="m-0 justify-content-center">
          <Col
            sm="5"
            xl="5"
            lg="5"
            md="5"
            className="d-flex justify-content-center"
          >
            <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
              <Row className="m-0">
                <Col lg="12" md="12" className="p-1">
                  <Card className="rounded-0 mb-0 px-2 login-tabs-container">
                    <div className="logo-box text-center p-2">
                      <img
                        src={logo}
                        alt="loginImg"
                        width="90%"
                        height="150px"
                      />
                    </div>

                    {this.state.resetpassword ? (
                      <>
                        <CardHeader className="pb-1">
                          <CardTitle>
                            <h4 className="mb-0">
                              <strong>Email Verification</strong>
                            </h4>
                          </CardTitle>
                        </CardHeader>
                        <p className="px-2 auth-title mb-2">
                          Welcome , Please Enter details.
                        </p>
                        <Form onSubmit={this.changepassword}>
                          <Label>Email</Label>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="text"
                              name="email"
                              placeholder="Username"
                              value={this.state.email}
                              onChange={this.handlechange}
                              // required
                            />
                          </FormGroup>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple color="primary" type="submit">
                              Submit
                            </Button.Ripple>
                          </div>
                        </Form>
                      </>
                    ) : (
                      <>
                        <>
                          {this.state.OtpScreen && this.state.OtpScreen ? (
                            <>
                              <CardHeader className="">
                                <CardTitle>
                                  <h4 className="mb-0">
                                    <strong>Login</strong>
                                  </h4>
                                </CardTitle>
                              </CardHeader>
                              <p className="px-2 auth-title">
                                Welcome , Enter OTP to Login your Account.
                              </p>
                              <Form onSubmit={this.loginOTPHandler}>
                                <FormGroup className="otpscreeen d-flex justify-content-center"></FormGroup>
                                <div className="py-1 d-flex justify-content-center">
                                  {JSON.parse(UserCredential?.gmail) && (
                                    <>
                                      <p className="px-2 auth-title">
                                        Email OTP
                                      </p>
                                      <OtpInput
                                        containerStyle="true inputdata"
                                        inputStyle="true inputdataone"
                                        className="otpinputtype"
                                        value={this.state.emailotp}
                                        name="emailotp"
                                        onChange={(otp) =>
                                          this.setState({ emailotp: otp })
                                        }
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => (
                                          <input
                                            className="inputs"
                                            {...props}
                                          />
                                        )}
                                      />
                                    </>
                                  )}
                                  {JSON.parse(UserCredential?.whatsapp) && (
                                    <>
                                      <p className="px-2 auth-title">
                                        Whatsapp OTP
                                      </p>
                                      <OtpInput
                                        containerStyle="true inputdata"
                                        inputStyle="true inputdataone"
                                        className="otpinputtype"
                                        value={this.state.whatsappotp}
                                        name="whatsappotp"
                                        onChange={(otp) =>
                                          this.setState({ whatsappotp: otp })
                                        }
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => (
                                          <input
                                            className="inputs"
                                            {...props}
                                          />
                                        )}
                                      />
                                    </>
                                  )}
                                  {JSON.parse(UserCredential?.sms) && (
                                    <>
                                      <p className="px-2 auth-title">SMS OTP</p>
                                      <OtpInput
                                        containerStyle="true inputdata"
                                        inputStyle="true inputdataone"
                                        className="otpinputtype"
                                        value={this.state.smsotp}
                                        name="smsotp"
                                        onChange={(otp) =>
                                          this.setState({ smsotp: otp })
                                        }
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => (
                                          <input
                                            className="inputs"
                                            {...props}
                                          />
                                        )}
                                      />
                                    </>
                                  )}
                                </div>

                                <div className="d-flex justify-content-center">
                                  {/* <Button.Ripple
                                    color="primary"
                                    outline
                                    onClick={(e) => {
                                      e.preventDefault();
                                      this.setState({ resetpassword: true });
                                    }}
                                    // onClick={() => {
                                    //   history.push("/pages/reset-password");
                                    // }}
                                  >
                                    Forget Password
                                  </Button.Ripple> */}
                                  <Button.Ripple
                                    width="80%"
                                    color="primary"
                                    type="submit"
                                  >
                                    Login
                                  </Button.Ripple>
                                  <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                      <LoginJWT />
                                    </TabPane>
                                    <TabPane tabId="2">
                                      <LoginFirebase />
                                    </TabPane>
                                  </TabContent>
                                </div>
                              </Form>
                            </>
                          ) : (
                            <>
                              <CardHeader className="pb-1">
                                <CardTitle>
                                  <h4 className="mb-0">
                                    <strong>Login</strong>
                                  </h4>
                                </CardTitle>
                              </CardHeader>
                              <p className="px-2 auth-title mb-2">
                                Welcome back, Please login to your account.
                              </p>
                              <Form onSubmit={this.loginHandler}>
                                {/* <Label>UserName</Label> */}
                                <FormGroup className="form-label-group position-relative has-icon-left">
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      username
                                    </InputGroupAddon>
                                    <Input
                                      type="text"
                                      name="email"
                                      placeholder="User Name"
                                      value={this.state.email}
                                      onChange={this.handlechange}
                                      required
                                    />
                                  </InputGroup>
                                </FormGroup>

                                {/* <Label>Password</Label> */}
                                <FormGroup className="passwordlogin form-label-group position-relative has-icon-left">
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      Password
                                    </InputGroupAddon>
                                    <Input
                                      type={this.state.type}
                                      name="password"
                                      placeholder="Password"
                                      value={this.state.password}
                                      onChange={this.handlechange}
                                      required
                                    />
                                    <span
                                      className="eyeviewpassword"
                                      style={{
                                        position: "absolute",
                                        cursor: "pointer",
                                      }}
                                    >
                                      {this.state.type == "text" ? (
                                        <>
                                          {" "}
                                          <AiFillEyeInvisible
                                            onClick={() =>
                                              this.setState({
                                                type: "password",
                                              })
                                            }
                                            size="25px"
                                            color="blue"
                                          />
                                        </>
                                      ) : (
                                        <>
                                          <AiFillEye
                                            onClick={() =>
                                              this.setState({ type: "text" })
                                            }
                                            size="25px"
                                            color="blue"
                                          />
                                        </>
                                      )}
                                    </span>
                                  </InputGroup>
                                </FormGroup>

                                <div className="d-flex justify-content-between">
                                  <Button.Ripple
                                    color="primary"
                                    outline
                                    onClick={(e) => {
                                      e.preventDefault();
                                      this.setState({ resetpassword: true });
                                    }}
                                    // onClick={() => {
                                    //   history.push("/pages/reset-password");
                                    // }}
                                  >
                                    Forget Password
                                  </Button.Ripple>
                                  <Button.Ripple color="primary" type="submit">
                                    Login
                                  </Button.Ripple>
                                  <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                      <LoginJWT />
                                    </TabPane>
                                    <TabPane tabId="2">
                                      <LoginFirebase />
                                    </TabPane>
                                  </TabContent>
                                </div>
                              </Form>
                            </>
                          )}
                        </>
                      </>
                    )}
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps)(Login);
