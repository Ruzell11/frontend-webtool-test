import { Button, Form, Input } from "antd";
import { useBookingHubStore } from "../store";
import { getSingleBookingHub, updateSingleBookingHub } from "../service";
import { useMutation, useQuery } from "react-query";
import { useEffect } from "react";

const BookingHubUpdateForm = ({formBookingHubUpdate}) => {
 const {value} = useBookingHubStore()
 const {singleBookingHubId, setIsShowingModalUpdate, getTheLatestBookingHubList} = value
 const {mutate} = useMutation(updateSingleBookingHub)

  const onSubmit = (values) => {
    const params = {
      booking_hub_id: singleBookingHubId,
      ...values
    }

    const handleSuccessActions = () => {
      setIsShowingModalUpdate(false)
      getTheLatestBookingHubList()
      alert(`Booking hub updated successfully`)
    }

    mutate(params, {
      onSuccess:() => {
        handleSuccessActions()
      },
      onError:() =>{ 
        alert('Something went wrong')
      }
    })
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["booking_hub_single" , singleBookingHubId],
    queryFn: () => getSingleBookingHub(singleBookingHubId),
  });

  useEffect(() => {
    if (data && data.data) {
      formBookingHubUpdate.setFieldsValue({
        display_name: data.data.display_name,
        location: data.data.location,
        longitude: data.data.longitude,
        latitude: data.data.latitude,
      });
    }
  }, [data, formBookingHubUpdate]);

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>
  }


  return (
    <Form form={formBookingHubUpdate} onFinish={onSubmit}>
      <Form.Item label="Display Name" name="display_name" >
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="location" >
        <Input />
      </Form.Item>
      <Form.Item label="Longitude" name="longitude" >
        <Input />
      </Form.Item>
      <Form.Item label="Latitude" name="latitude" >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default BookingHubUpdateForm;
