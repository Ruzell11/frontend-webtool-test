import BookingHubCreateForm from "./BookingHubCreateForm";
import BookingHubModal from "./BookingHubModal";
import { useBookingHubStore } from "../store";
import { Form } from "antd";

const BookingHubCreate = () => {
  const { value } = useBookingHubStore();
  const { setIsShowingModalCreate, isShowingModalCreate } = value;
  const [form] = Form.useForm()

 
  return (
    <BookingHubModal
      isOpenModal={isShowingModalCreate}
      setIsOpenModal={setIsShowingModalCreate}
      formBookingHub={form}
    >
      <BookingHubCreateForm formBookingHubCreate={form}/>
    </BookingHubModal>
  );
};

export default BookingHubCreate;
