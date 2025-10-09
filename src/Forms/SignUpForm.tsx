import { Button, Col, Divider, Form, Input, Radio, Row, Select } from "antd";
import { useState } from "react";

function SignUpForm() {
  interface SignUpFormData {
    firstName: string;
    surname: string;
    dateOfBirth: {
      day: string;
      month: string;
      year: string;
    };
    gender: "male" | "female" | "others";
    contact: string;
    password: string;
  }

  const [form] = Form.useForm<SignUpFormData>();
  const [formValues, setFormValues] = useState<Partial<SignUpFormData>>({});

  const handleSubmit = (values: SignUpFormData) => {
    console.log("Form values:", values);
  };

  const handleValuesChange = (
    changedValues: any,
    allValues: Partial<SignUpFormData>
  ) => {
    setFormValues(allValues);
  };

  const isFormValid = () => {
    return (
      formValues.firstName &&
      formValues.surname &&
      formValues.dateOfBirth?.day &&
      formValues.dateOfBirth?.month &&
      formValues.dateOfBirth?.year &&
      formValues.gender &&
      formValues.contact &&
      formValues.password
    );
  };

  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const currentYear = new Date().getFullYear();

  const yearOptions = Array.from({ length: 75 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }));

  return (
    <>
      <div
        id="container"
        className="max-w-[500px] bg-white h-auto rounded-lg m-auto mt-5 "
      >
        <div id="title">
          <div className="text-center ">
            <p className="text-3xl font-medium mb-1.5">Create new Account</p>
            <p>It's quick and easy</p>
          </div>
        </div>
        <Divider />
        <div id="form" className="px-2.5">
          <Form
            form={form}
            size="large"
            onFinish={handleSubmit}
            onValuesChange={handleValuesChange}
          >
            <div id="name">
              <Row gutter={10}>
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    className="!mb-5"
                    rules={[{ required: true, message: "First Name required" }]}
                    help={
                      !formValues.firstName &&
                      form.getFieldError("firstName").length === 0 ? (
                        <span className="text-xs">
                          <span className="text-red-500">*</span> Required
                        </span>
                      ) : null
                    }
                  >
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="surname"
                    className="!mb-5"
                    rules={[
                      { required: true, message: "Second name required" },
                    ]}
                    help={
                      !formValues.surname &&
                      form.getFieldError("surname").length === 0 ? (
                        <span className="text-xs">
                          <span className="text-red-500">*</span> Required
                        </span>
                      ) : null
                    }
                  >
                    <Input placeholder="Sure name" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div id="dateOfBirth" className="w-full ">
              <label className="font-semibold">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-1 ">
                <Form.Item
                  name={["dateOfBirth", "day"]}
                  rules={[{ required: true, message: "Day required" }]}
                  className="w-full !mb-0"
                >
                  <Select placeholder="Day" options={dayOptions} />
                </Form.Item>
                <Form.Item
                  name={["dateOfBirth", "month"]}
                  rules={[{ required: true, message: "Month required" }]}
                  className="w-full !mb-0"
                >
                  <Select placeholder="Month" options={monthOptions} />
                </Form.Item>
                <Form.Item
                  name={["dateOfBirth", "year"]}
                  rules={[{ required: true, message: "Year required" }]}
                  className="w-full !mb-0"
                >
                  <Select placeholder="Year" options={yearOptions} />
                </Form.Item>
              </div>
            </div>
            <div id="gender" className="mt-2.5">
              <Form.Item
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender" },
                ]}
              >
                <div>
                  <label className="font-semibold">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="gap-2.5 mt-2.5">
                    <Radio.Group className="!flex">
                      <Radio
                        value="male"
                        className="!p-2 border rounded-sm border-gray-300 flex-1  flex-row-reverse justify-between"
                      >
                        Male
                      </Radio>
                      <Radio
                        value="female"
                        className="!p-2 border rounded-sm border-gray-300 flex-1  flex-row-reverse justify-between  "
                      >
                        Female
                      </Radio>
                      <Radio
                        value="others"
                        className="!p-2 border rounded-sm border-gray-300 flex-1  flex-row-reverse justify-between  "
                      >
                        Others
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
              </Form.Item>
            </div>
            <div id="contact" className="mt-2.5">
              <Form.Item
                name="contact"
                className="!mb-5"
                rules={[
                  {
                    required: true,
                    message: "Phone number or Email is required",
                  },
                ]}
                help={
                  !formValues.contact &&
                  form.getFieldError("contact").length === 0 ? (
                    <span className="text-xs">
                      <span className="text-red-500">*</span> Required
                    </span>
                  ) : null
                }
              >
                <Input placeholder="Phone number or Email Address" />
              </Form.Item>
            </div>
            <div id="password">
              <Form.Item
                name="password"
                className="!mb-5"
                rules={[{ required: true, message: "Password required" }]}
                help={
                  !formValues.password &&
                  form.getFieldError("password").length === 0 ? (
                    <span className="text-xs">
                      <span className="text-red-500">*</span> Required
                    </span>
                  ) : null
                }
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
            </div>
            <div id="button" className="p-3 w-full flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isFormValid()}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
