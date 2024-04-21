import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-box">
     {loading && <Spinner />}
     <Form layout="vertical" onFinish={submitHandler}>
    <h2>Register Form</h2>
    <div className="user-box">
      <Form.Item label="Name" name="name">
            <Input placeholder="Name"/>
          </Form.Item>
      <Form.Item label="Email" name="email" >
            <Input type="email" placeholder="Email" />
            
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password"  placeholder="Password" />
          </Form.Item>
        <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Cleck Here to login</Link>
            <button className="btn btn-primary"> 
      <span />
      <span />
      <span />
      <span />
    Register
      </button>
          </div>
      </div>
     
    </Form>
</div>
    </>
  );
};

export default Register;
