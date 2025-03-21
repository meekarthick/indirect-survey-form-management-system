import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ButtonAdmin from "./ButtonAdmin";

const AddQuestionPage = () => {
  const role = ["Student", "Parent", "Alumini", "Employer"];
  const type = [
    "Program Outcomes",
    "Student Survey",
    "Alumni Survey",
    "Employer Survey",
    "Parent Survey",
    "Extra Curricular Survey",
    "CoCurricular Survey",
  ];
  const category = [
    "Engineering knowledge",
    "Problem Analysis",
    "Design/Development of Solutions",
    "Conduct Investigations of Complex Problems",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Individual and Team Work",
    "Communication",
    "Project Management and Finance",
    "Life-long Learning",
  ];

  return (
    <div className="main-addQuestion-container">
      <h1>
        Add the <span>Question</span>
      </h1>
      <div className="form-container">
        <Formik
          initialValues={{
            roleSelect: "",
            typeSelect: "",
            categorySelect: "",
            departmentSpecificSelect: "",
            question: "",
          }}
          validationSchema={Yup.object({
            roleSelect: Yup.string().required("Role is mandatory"),
            typeSelect: Yup.string().required("Type is mandatory"),
            categorySelect: Yup.string().required("Category is mandatory"),
            departmentSpecificSelect: Yup.string().required("Select Yes or No"),
            question: Yup.string().required("Question is mandatory"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Data:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Role Dropdown */}
              <div className="main-form-add">
                <div className="label-container">
                  <label>Role</label>
                </div>
                <div className="form-select-container">
                  <Field className="fields" as="select" name="roleSelect">
                    <option value="">Select a Role</option>
                    {role.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="roleSelect" component="div" className="error" />
                </div>
              </div>

              {/* Type Dropdown */}
              <div className="main-form-add">
                <div className="label-container">
                  <label>Type</label>
                </div>
                <div className="form-select-container">
                  <Field className="fields" as="select" name="typeSelect">
                    <option value="">Select a Type</option>
                    {type.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="typeSelect" component="div" className="error" />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="main-form-add">
                <div className="label-container">
                  <label>Category</label>
                </div>
                <div className="form-select-container">
                  <Field className="fields" as="select" name="categorySelect">
                    <option value="">Select the Category</option>
                    {category.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="categorySelect" component="div" className="error" />
                </div>
              </div>

              {/* Department Specific Dropdown */}
              <div className="main-form-add">
                <div className="label-container">
                  <label>Department Specific</label>
                </div>
                <div className="form-select-container">
                  <Field className="fields" as="select" name="departmentSpecificSelect">
                    <option value="">Select Yes or No</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <ErrorMessage name="departmentSpecificSelect" component="div" className="error" />
                </div>
              </div>

              {/* Question Input */}
              <div className="main-form-add">
                <div className="label-container">
                  <label>Content</label>
                </div>
                <div className="form-select-container">
                  <Field className="fields-input" type="text" name="question" placeholder="Enter the Question" />
                  <ErrorMessage name="question" component="div" className="error" />
                </div>
              </div>

              {/* Submit Button */}
              <ButtonAdmin value={"Add the Question"} disables={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddQuestionPage;
