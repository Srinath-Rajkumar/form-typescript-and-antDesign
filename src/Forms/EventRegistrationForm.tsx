import { Form, Input, Button, type FormProps, message } from "antd";
import { useState } from "react";
interface FieldTypes {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
}

function EventRegistrationForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldTypes>["onFinish"] = (values) => {
    setLoading(true);

    setTimeout(() => {
      console.log("Success:", values);
      messageApi.success("Form successfully submitted");
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <div className="mx-20 rounded-2xl bg-white">
        <div id="header" className="bg-gray-700 p-2.5 rounded-t-2xl">
          <p className=" text-white font-medium text-2xl">Event Registration - AntDesign</p>
        </div>
        <div id="form" className="mt-5 p-1.5">
          <Form onFinish={onFinish} form={form} autoComplete="off">
            <div className="flex w-full gap-x-2.5">
              <div className="w-full">
                <p>First Name:</p>
                <Form.Item<FieldTypes>
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your First Name" />
                </Form.Item>
              </div>
              <div className="w-full">
                <p>Last Name:</p>
                <Form.Item<FieldTypes>
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your second name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Last Name" />
                </Form.Item>
              </div>
            </div>
            <div className="flex w-full gap-x-2.5">
              <div className="w-full">
                <p>Email:</p>
                <Form.Item<FieldTypes>
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Ex: example@gamil.com" />
                </Form.Item>
              </div>
              <div className="w-full">
                <p>Mobile Number:</p>
                <Form.Item<FieldTypes>
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number!",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Mobile number must be 10 digits (numbers only)",
                    },
                  ]}
                >
                  <Input
                    placeholder="Ex : 7848596974"
                    onKeyDown={(event) => {
                      if (
                        !/[0-9]/.test(event.key) &&
                        event.key !== "Backspace"
                      ) {
                        event.preventDefault();
                      }
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div id="sumbitButton" className="flex justify-center">
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Register for Event
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div id="footer" className="bg-gray-700 p-2.5 rounded-b-2xl">
          <p className="p-1.5 text-center font-medium text-white">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}

export default EventRegistrationForm;

//test commit
