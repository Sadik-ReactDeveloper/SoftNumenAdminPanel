import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
  CustomInput,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
import { EditUserProfile } from "../../../ApiEndPoint/ApiCalling";
import UserContext from "../../../context/Context";

class UserProfile extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      LoginData: {},
      Update_User_details: {},
      email: "",
      cnfmPassword: "",
      password: "",
      Role: "",
      adminimg: "",
      Date_format: "",
      Date_Time_format: "",
      selectedName: "",
      Locale: "",
      Loading: "Submit",
      T_Zone: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.context);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    console.log(pageparmission);
    this.setState({ LoginData: pageparmission });

    this.setState({
      // data: response.data.data,
      name: pageparmission?.name,
      email: pageparmission?.email,
      mobile: pageparmission?.mobile,
      Role: pageparmission?.Role,
      Date_format: pageparmission.dateFormat,
      Locale: pageparmission?.locale,
      Date_Time_format: pageparmission?.dateTimeFormat,
      T_Zone: pageparmission?.timeZone,
      // cnfmPassword: pageparmission?.Userinfo?.password,
    });
    // console.log(this.context);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ Loading: "Loading..." });
    let userData = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    // data.append("id", userData?._id);
    if (this.state.password) {
      data.append("Password", this.state.password);
    }
    // data.append("cnfmPassword", this.state.cnfmPassword);
    data.append("dateFormat", this.state.Date_format);
    data.append("dateTimeFormat", this.state.Date_Time_format);
    data.append("locale", this.state.Locale);
    data.append("timeZone", this.state.T_Zone);
    if (this.state.selectedFile !== null) {
      data.append("file", this.state.selectedFile);
    }
    if (this.state.password) {
      if (this.state.password == this.state.cnfmPassword) {
        EditUserProfile(userData?.accountId, data)
          .then((response) => {
            console.log(response);
            let userData = { ...response?.updateUser[0], ...response?.user };

            this.context?.setUserInformatio(userData);
            localStorage.setItem("userData", JSON.stringify(userData));

            if (response?.status) {
              swal("Success!", "Updated Successfully", "success");
              this.setState({ Loading: "Submit" });
            }
            window.location.reload("/#/pages/profile");
          })
          .catch((error) => {
            swal("Error!", "Something went Wrong", "error");
            this.setState({ Loading: "Submit" });
            console.log(error.response);
          });
      } else {
        swal("Password Does Not Match");
        this.setState({ Loading: "Submit" });
      }
    } else {
      EditUserProfile(userData?.accountId, data)
        .then((response) => {
          console.log(response);
          let userData = { ...response?.updateUser[0], ...response?.user };

          this.context?.setUserInformatio(userData);
          localStorage.setItem("userData", JSON.stringify(userData));

          if (response?.status) {
            swal("Success!", "Updated Successfully", "success");
            this.setState({ Loading: "Submit" });
          }
          window.location.reload("/#/pages/profile");
        })
        .catch((error) => {
          debugger;
          swal("Error!", "Something went Wrong", "error");
          console.log(error.response);
          this.setState({ Loading: "Submit" });
        });
    }
    // for (var value of data.values()) {
    //   console.log(value);
    // }

    // for (var key of data.keys()) {
    //   console.log(key);
    // }
  };
  render() {
    console.log(this.context?.UserInformatio);
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  {this.state.LoginData?.profileImage ? (
                    <>
                      <img
                        src={`http://3.7.55.231:5000/Images/${this.state.LoginData?.profileImage}`}
                        alt="adminimg"
                        className="img-fluid img-border rounded-circle box-shadow-1 mt-1"
                        width="250px"
                        height="280px"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={`http://3.7.55.231:5000/Images/${this.state.LoginData?.user1?.profileImage}`}
                        alt="adminimg"
                        className="img-fluid img-border rounded-circle box-shadow-1 mt-1"
                        width="210px"
                        height="280px"
                      />
                    </>
                  )}
                  <ul
                    style={{ listStyleType: "none" }}
                    className="lst-1 usrdatlist"
                  >
                    <li className="lst-2 p-1">
                      Name:{" "}
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.name}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Email:{" "}
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.email}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Role:
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.Role}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>

                    <Row className="m-0">
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>UserName</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                      </Col>

                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          name="cnfmPassword"
                          placeholder="Reset password"
                          value={this.state.cnfmPassword}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="profileImage"
                          onChange={this.onChangeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Locale</Label>
                        <CustomInput
                          name="Locale"
                          value={this.state.Locale}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="NA">--Select--</option>
                          <option value="en_US">English (United States)</option>
                          <option value="en_GB">
                            English (United Kingdom)
                          </option>
                          <option value="fr_FR">French (France)</option>
                          <option value="es_ES">es_ES Spanish (Spain)</option>
                          <option value="de_DE">German (Germany)</option>
                          <option value="it_IT">Italian (Italy)</option>
                          <option value="ja_JP">Japanese (Japan)</option>
                          <option value="zh_CN">Chinese ( China)</option>
                          <option value="ru_RU"> Russian (Russia)</option>
                          <option value="ar_SA">Arabic (Saudi Arabia)</option>
                          <option value="pt_BR">Portuguese (Brazil)</option>
                          <option value="ko_KR">Korean (South Korea)</option>

                          <option value="hi_IN">Hindi(India)</option>
                          <option value="tr_TR">Turkish (Turkey)</option>
                          <option value="nl_NL">Dutch (Netherlands)</option>
                          <option value="sv_SE">Swedish (Sweden)</option>
                          <option value="pl_PL">Polish (Poland)</option>
                          <option value="no_NO">Norwegian (Norway)</option>
                          <option value="fi_FI">Finnish (Finland)</option>
                          <option value="da_DK">Danish (Denmark)</option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Time Zone</Label>
                        <CustomInput
                          name="T_Zone"
                          value={this.state.T_Zone}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>
                          <option value="UTC">
                            Coordinated Universal Time (UTC)
                          </option>
                          <option value="GMT">Greenwich Mean Time (GMT)</option>
                          <option value="BST">British Summer Time (BST)</option>
                          <option value="CET">
                            Central European Time (CET)
                          </option>
                          <option value="CEST">
                            Central European Summer Time (CEST)
                          </option>
                          <option value="EST">
                            Eastern Standard Time (EST)
                          </option>
                          <option value="EDT">
                            Eastern Daylight Time (EDT)
                          </option>
                          <option value="PST">
                            Pacific Standard Time (PST)
                          </option>
                          <option value="PDT">
                            Pacific Daylight Time (PDT)
                          </option>
                          <option value="HST">
                            Hawaii Standard Time (HST)
                          </option>
                          <option value="AKST">
                            Alaska Standard Time (AKST)
                          </option>
                          <option value="AKDT">
                            Alaska Daylight Time (AKDT)
                          </option>
                          <option value="AEST">
                            Australian Eastern Standard Time (AEST)
                          </option>
                          <option value="AEDT">
                            Australian Eastern Daylight Time (AEDT)
                          </option>
                          <option value="JST">Japan Standard Time (JST)</option>
                          <option value="KST">Korea Standard Time (KST)</option>
                          <option value="IST">
                            Indian Standard Time (IST)
                          </option>
                          <option value="AST">
                            Arabian Standard Time (AST)
                          </option>
                          <option value="GST">Gulf Standard Time (GST)</option>
                          <option value="SAST">
                            South Africa Standard Time (SAST)
                          </option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Format</Label>
                        <CustomInput
                          name="Date_format"
                          value={this.state.Date_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>

                          <option value="YYYY-MM-DD">
                            YYYY-MM-DD (e.g., 2023-10-16)
                          </option>
                          <option value="MM/DD/YYYY">
                            MM/DD/YYYY (e.g., 10/16/2023)
                          </option>
                          <option value="DD/MM/YYYY">
                            DD/MM/YYYY (e.g., 16/10/2023)
                          </option>
                          <option value="MMM D, YYYY">
                            MMM D, YYYY (e.g., Oct 16, 2023)
                          </option>
                          <option value="D MMM, YYYY">
                            D MMM, YYYY (e.g., 16 Oct, 2023)
                          </option>
                          <option value="MMMM D, YYYY">
                            MMMM D, YYYY (e.g., October 16, 2023)
                          </option>
                          <option value="D of MMMM, YYYY">
                            D of MMMM, YYYY (e.g., 16 of October, 2023)
                          </option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Time-Format</Label>
                        <CustomInput
                          name="Date_Time_format"
                          value={this.state.Date_Time_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>

                          <option value="YYYY-MM-DD HH:mm:ss">
                            YYYY-MM-DD HH:mm:ss (e.g., 2023-10-16 15:30:45)
                          </option>
                          <option value="MM/DD/YYYY h:mm A">
                            MM/DD/YYYY h:mm A (e.g., 10/16/2023 3:30 PM)
                          </option>
                          <option value="DD/MM/YYYY HH:mm">
                            DD/MM/YYYY HH:mm (e.g., 16/10/2023 15:30)
                          </option>
                          <option value="MMM D, YYYY h:mm A">
                            MMM D, YYYY h:mm A (e.g., Oct 16, 2023 3:30 PM)
                          </option>
                          <option value="D MMM, YYYY HH:mm">
                            D MMM, YYYY HH:mm (e.g., 16 Oct, 2023 15:30)
                          </option>
                          <option value="MMMM D, YYYY h:mm A">
                            MMMM D, YYYY h:mm A (e.g., October 16, 2023 3:30 PM)
                          </option>
                          <option value="D of MMMM, YYYY HH:mm">
                            D of MMMM, YYYY HH:mm (e.g., 16 of October, 2023
                            15:30)
                          </option>
                        </CustomInput>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CheckBoxesVuexy
                          color="primary"
                          className="mb-1 mx-1"
                          icon={<Check className="vx-icon" size={16} />}
                          label=" I accept the terms & conditions."
                          defaultChecked={true}
                        />
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                      <Button.Ripple color="primary" type="submit">
                        {this.state.Loading}
                      </Button.Ripple>
                    </div>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;
