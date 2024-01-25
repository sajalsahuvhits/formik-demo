import React from "react";
import "./EmployeeForm.css";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import {
  currentRole,
  registerEmployeeSchema,
} from "../../../validation/Validation";

const initialValues = {
  name: "",
  email: "",
  contact: "",
  age: "",
  gender: "",
  role: "",
  address: "",
  checkbox: [],
};
const EmployeeForm = () => {
  //   const { values, handleChange, handleSubmit, errors, getFieldProps } =
  //     useFormik({
  //       initialValues: {
  //         name: "",
  //         email: "",
  //         contact: "",
  //         age: "",
  //         gender: "",
  //         role: "",
  //         address: "",
  //         checkbox: []
  //       },
  //       validationSchema: registerEmployeeSchema,
  //       onSubmit: submitHandler,
  //     });
  function submitHandler(values) {
    console.log({ values });
  }
  return (
    <div className="container">
      {/* <header className="header">
        <h1 id="title" className="text-center">
          Survey Form
        </h1>
        <p id="description" className="text-center">
          Thank you htmlFor taking the time to help us improve the platform
        </p>
      </header> */}
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={registerEmployeeSchema}
      >
        {({ handleChange, handleSubmit, errors, getFieldProps, values }) => (
          <div className="form-wrap">
            {/* <form id="survey-form" onSubmit={handleSubmit}> */}
            {console.log(errors)}
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="form-control"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                        // {...getFieldProps("name")}
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    //   {...getFieldProps("email")}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="number-label" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      type="number"
                      id="contact"
                      className="form-control"
                      placeholder="Contact"
                      name="contact"
                      value={values.contact}
                      onChange={handleChange}
                    //   {...getFieldProps("contact")}
                    />
                    {errors.contact && (
                      <small className="text-danger">{errors.contact}</small>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="number-label" htmlFor="age">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="form-control"
                      placeholder="Age"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                    //   {...getFieldProps("age")}
                    />
                    {errors.age && (
                      <small className="text-danger">{errors.age}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <span className="custom-control custom-radio custom-control-inline pe-4">
                      <input
                        type="radio"
                        id="male"
                        className="custom-control-input me-2"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        // {...getFieldProps("gender")}
                      />
                      <label className="custom-control-label" htmlFor="male">
                        Male
                      </label>
                    </span>
                    <span className="custom-control custom-radio custom-control-inline pe-4">
                      <input
                        type="radio"
                        id="female"
                        className="custom-control-input me-2"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        // {...getFieldProps("gender")}
                      />
                      <label className="custom-control-label" htmlFor="female">
                        Female
                      </label>
                    </span>
                    <span className="custom-control custom-radio custom-control-inline pe-4">
                      <input
                        type="radio"
                        id="other"
                        className="custom-control-input me-2"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                        // {...getFieldProps("gender")}
                      />
                      <label className="custom-control-label" htmlFor="other">
                        Other
                      </label>
                    </span>
                    {errors.gender && (
                      <div>
                        <small className="text-danger">{errors.gender}</small>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Current Role</label>
                    <select
                      id="dropdown"
                      className="form-control"
                      name="role"
                      onChange={handleChange}
                    //   {...getFieldProps("role")}
                    >
                      <option disabled value="">
                        Select
                      </option>
                      {currentRole?.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <small className="text-danger">{errors.role}</small>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Checkbox</label>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        type="checkbox"
                        id="one"
                        className="custom-control-input"
                        name="checkbox"
                        value="One"
                        onChange={handleChange}
                      />
                      <label className="custom-control-label" htmlFor="one">
                        One
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        type="checkbox"
                        id="two"
                        className="custom-control-input"
                        name="checkbox"
                        value="Two"
                        onChange={handleChange}
                      />
                      <label className="custom-control-label" htmlFor="two">
                        Two
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        type="checkbox"
                        id="three"
                        className="custom-control-input"
                        name="checkbox"
                        value="Three"
                        onChange={handleChange}
                      />
                      <label className="custom-control-label" htmlFor="three">
                        Three
                      </label>
                    </div>
                    {errors.checkbox && (
                      <small className="text-danger">{errors.checkbox}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      id="address"
                      className="form-control"
                      placeholder="Enter your address here..."
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    //   {...getFieldProps("address")}
                    />
                    {errors.address && (
                      <small className="text-danger">{errors.address}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <button
                    type="submit"
                    id="submit"
                    className="btn btn-primary btn-block"
                  >
                    Submit Survey
                  </button>
                </div>
              </div>
              </Form>
            {/* </form> */}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EmployeeForm;
