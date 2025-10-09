import { Button, Col, Divider, Form, Input, Radio, Row, Select } from "antd";
import { useState } from "react";

function SignUpForm() {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

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

  const handleSubmit = (values: SignUpFormData) => {
    console.log("Form values:", values);
  };
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
          <Form form={form} size="large" onFinish={handleSubmit}>
            <div id="name">
              <Row gutter={10}>
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: "First Name required" }]}
                    extra={
                      <span className="text-xs">
                        <span className="text-red-500">*</span> Required
                      </span>
                    }
                  >
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="surename"
                    rules={[
                      { required: true, message: "second name required" },
                    ]}
                    extra={
                      <span className="text-xs">
                        <span className="text-red-500">*</span> Required
                      </span>
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
                <Select
                  defaultValue="Day"
                  // onChange={handleChange}
                  options={[]}
                  className="w-full"
                />
                <Select
                  defaultValue="Month"
                  // onChange={handleChange}
                  options={[]}
                  className="w-full"
                />
                <Select
                  defaultValue="Year"
                  className="w-full"
                  // onChange={handleChange}
                  options={[]}
                />
              </div>
            </div>
            <div id="gender" className="mt-2.5">
              <Form.Item<SignUpFormData>>
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
              </Form.Item>
            </div>
            <div id="contact" className="mt-2.5">
              <Form.Item
                name="contact"
                rules={[
                  {
                    required: true,
                    message: "Phone number or Email is required",
                  },
                ]}
                extra={
                  <span className="text-xs">
                    <span className="text-red-500">*</span> Required
                  </span>
                }
              >
                <Input placeholder="Phone number or Email Address" />
              </Form.Item>
            </div>
            <div id="password">
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Password required" }]}
                extra={
                  <span className="text-xs">
                    <span className="text-red-500">*</span> Required
                  </span>
                }
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
            </div>
            <div id="button" className="p-3.5 w-full flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                disabled={isButtonDisabled}
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
