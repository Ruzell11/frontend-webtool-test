import { Table, Dropdown, Menu, Select } from "antd";
import { deleteSingleBookingHub, getBookingHubList } from "../service";
import { useMutation, useQuery } from "react-query";
import { useBookingHubStore } from "../store";
import { useState } from "react";

const BookingHubTable = () => {
  const { value } = useBookingHubStore();
  const {
    setIsShowingModalUpdate,
    setSingleBookingHubId,
    getTheLatestBookingHubList,
  } = value;
  const [isShowDeleted, setIsShowDeleted] = useState("False");
  const handleShowUpdateModal = (bookingHubDetails) => {
    setSingleBookingHubId(bookingHubDetails.id);
    setIsShowingModalUpdate(true);
  };

  const { mutate } = useMutation(deleteSingleBookingHub);

  const handleDeleteBookingHub = (id) => {
    mutate(
      { booking_hub_id: id },
      {
        onSuccess: () => {
          getTheLatestBookingHubList();
          alert("Booking hub deleted successfully");
        },
        onError: () => {
          alert("Something went wrong");
        },
      }
    );
  };

  const menu = (record) => {
    return (
      <Menu>
        {record.deleted == false ? (
          <>
            <Menu.Item key="id1" onClick={() => handleShowUpdateModal(record)}>
              Update
            </Menu.Item>
            <Menu.Item
              key="id2"
              onClick={() => handleDeleteBookingHub(record.id)}
            >
              Delete
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key="id1" onClick={() => handleShowUpdateModal(record)}>
            Update
          </Menu.Item>
        )}
      </Menu>
    );
  };

  const columns = [
    {
      title: "Display Name",
      dataIndex: "display_name",
      key: "display_name",
    },
    {
      title: "Grouping Id",
      dataIndex: "grouping_id",
      key: "grouping_id",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Dropdown overlay={menu(record)}>
            <span>
              <a>Actions</a>
            </span>
          </Dropdown>
        );
      },
    },
  ];

  const params = {
    page: 1,
    limit: 100,
    show_deleted: isShowDeleted,
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["booking_hub", params],
    queryFn: () => getBookingHubList(params),
  });

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  if (isLoading) {
    return <Table columns={columns} dataSource={[]} loading={true} />;
  }

  const sortedDataSource = [...data.data].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <>
      <div className="flex items-center space-x-2">
        <p>Show Deleted</p>
        <Select
          placeholder="Show Deleted"
          onChange={(e) => setIsShowDeleted(e)}
          defaultValue={isShowDeleted}
        >
          <Select.Option value="True">True</Select.Option>
          <Select.Option value="False">False</Select.Option>
        </Select>
      </div>
      <Table rowKey="Id" columns={columns} dataSource={sortedDataSource} />
    </>
  );
};

export default BookingHubTable;
