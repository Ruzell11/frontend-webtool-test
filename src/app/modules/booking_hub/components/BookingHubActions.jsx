import { Button } from "antd"
import { useBookingHubStore } from "../store"

const BookingHubActions = () => {
    const {value} = useBookingHubStore();
    const {setIsShowingModalCreate} = value

    const handleShowModal = () => {
        setIsShowingModalCreate(true)
    }

    return(
        <div className="flex space-x-2">
            <Button type="primary" className="bg-blue-500" onClick={handleShowModal}>Create</Button>
        </div>
    )
}

export default BookingHubActions