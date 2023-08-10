import { createContext, useContext, useState } from "react";
import { useQueryClient } from "react-query";

const BookingHubContext = createContext({});

const useBookingHubStore = () => {
  const context = useContext(BookingHubContext);

  if (!context) {
    throw new Error("useBookingHubStore should use within BookingHubProvider");
  }

  return context;
};

const BookingHubProvider = ({ children, formBookingHub }) => {
  const [isShowingModalCreate, setIsShowingModalCreate] = useState(false);
  const [isShowingModalUpdate, setIsShowingModalUpdate] = useState(false);
  const [singleBookingHubId, setSingleBookingHubId] = useState("");
  const queryClient = useQueryClient();


  const getTheLatestBookingHubList = () =>{
    queryClient.invalidateQueries("booking_hub")
  }

  const value = {
    isShowingModalCreate,
    setIsShowingModalCreate,
    isShowingModalUpdate,
    setIsShowingModalUpdate,
    singleBookingHubId,
    setSingleBookingHubId,
    formBookingHub,
    getTheLatestBookingHubList
  };

  return (
    <BookingHubContext.Provider value={{ value }}>
      {children}
    </BookingHubContext.Provider>
  );
};

export { useBookingHubStore };
export default BookingHubProvider;
