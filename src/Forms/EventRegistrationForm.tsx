import {
  Form,
  Input,
  Button,
  InputNumber,
  type FormProps,
  message,
} from "antd";

interface FieldTypes {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
}

function EventRegistrationForm() {
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldTypes>["onFinish"] = (values) => {
    console.log("Success:", values);
    messageApi.open({
      type: "success",
      content: "From successfully submitted",
    });
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <div className="mx-20 my-2.5 bg-white">
        <div id="header" className="bg-gray-700 p-2.5 rounded-t-2xl">
          <p className=" text-white font-medium text-2xl">Event Registration</p>
        </div>
        <div id="form" className="mt-5 p-1.5">
          <Form onFinish={onFinish} form={form}>
            <div className="flex w-full gap-x-2.5">
              <div className="grow">
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
              <div className="grow">
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
              <div className="grow">
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
              <div className="grow">
                <p>Mobile Number:</p>
                <Form.Item<FieldTypes>
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number!",
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Ex : 7848596974"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </div>
            </div>
            <div id="sumbitButton" className="flex justify-center">
              <Form.Item>
                <Button type="primary" htmlType="submit">
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
