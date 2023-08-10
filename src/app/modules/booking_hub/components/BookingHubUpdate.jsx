import BookingHubModal from "./BookingHubModal";
import { useBookingHubStore } from "../store";
import BookingHubUpdateForm from "./BookingHubUpdateForm";
import { Form } from "antd";

const BookingHubUpdate = () => {
  const { value } = useBookingHubStore();
  const {isShowingModalUpdate , setIsShowingModalUpdate } = value;
  const [form] = Form.useForm()
 
  return (
    <BookingHubModal
      isOpenModal={isShowingModalUpdate}
      setIsOpenModal={setIsShowingModalUpdate}
      formBookingHub={form}
    >
      <BookingHubUpdateForm formBookingHubUpdate={form}/>
    </BookingHubModal>
  );
};

export default BookingHubUpdate;
