import { Form, Input } from "antd";
import { useBookingHubStore } from "../store";
import { useMutation, useQueryClient } from "react-query";
import { addBookingHub } from "../service";

const BookingHubCreateForm = ({formBookingHubCreate}) => {
  const { value } = useBookingHubStore();
  const {setIsShowingModalCreate , getTheLatestBookingHubList } = value;
  const { mutate } = useMutation(addBookingHub);



  const handleSuccessActions = () => {
    setIsShowingModalCreate(false)
    formBookingHubCreate.resetFields()
    alert('Booking hub created successfully')
    getTheLatestBookingHubList();
  };

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: () => {
        handleSuccessActions();
      },
      onError: () => {
        alert("Something went wrong");
      },
    });
  };

  return (
    <Form form={formBookingHubCreate} onFinish={onSubmit}>
      <Form.Item label="Display Name" name="display_name">
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="location">
        <Input />
      </Form.Item>
      <Form.Item label="Longitude" name="longitude">
        <Input />
      </Form.Item>
      <Form.Item label="Latitude" name="latitude">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default BookingHubCreateForm;
