import { Form, Input, Button, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";

interface FieldTypes {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
}

function EventRegistrationForm() {
  return (
    <>
      <div className="mx-20 my-2.5 bg-white">
        <div id="header" className="bg-gray-700 p-2.5 rounded-t-2xl">
          <p className=" text-white font-medium text-2xl">Event Registration</p>
        </div>
        <div id="form" className="mt-5 p-1.5">
          <Form>
            <div className="flex w-full gap-x-2.5">
              <div className="grow">
                <p>First Name:</p>
                <Form.Item<FieldTypes>>
                  <Input placeholder="Enter your First Name" />
                </Form.Item>
              </div>
              <div className="grow">
                <p>Last Name:</p>
                <Form.Item<FieldTypes>>
                  <Input placeholder="Enter your Last Name" />
                </Form.Item>
              </div>
            </div>
            <div className="flex w-full gap-x-2.5">
              <div className="grow">
                <p>Email:</p>
                <Form.Item<FieldTypes>>
                  <Input placeholder="Ex: example@gamil.com" />
                </Form.Item>
              </div>
              <div className="grow">
                <p>Mobile Number:</p>
                <Form.Item<FieldTypes>>
                  <InputNumber
                    placeholder="Ex : 7848596974"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </div>
            </div>
            <div id="sumbitButton" className="flex justify-center">
              <Form.Item label={null}>
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
