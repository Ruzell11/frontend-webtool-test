import BookingHubTable from "./components/BookingHubTable";
import BookingHubHeader from "./components/BookingHubHeader";
import BookingHubActions from "./components/BookingHubActions";
import BookingHubProvider from "./store";
import BookingHubCreateForm from "./components/BookingHubCreateForm";
import BookingHubCreate from "./components/BookingHubCreate";
import { Form } from "antd";
import BookingHubUpdate from "./components/BookingHubUpdate";

const BookingHub = () => {
  const [form] = Form.useForm();
  return (
    <BookingHubProvider formBookingHub={form}>
      <section className="flex flex-col justify-center w-100 h-screen mx-5 space-y-2 ">
        <BookingHubHeader />
        <BookingHubActions />
        <BookingHubTable />
        <BookingHubCreate />
        <BookingHubUpdate/>
      </section>
    </BookingHubProvider>
  );
};

export default BookingHub;
