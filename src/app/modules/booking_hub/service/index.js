import axios from "axios";

const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkZDUzZmM1Yy0xODRhLTQ5ZGUtOWI2Ni04NjJhZDIxMWEzMzUiLCJjbGllbnRfcHJvZmlsZV9pZCI6IjBhODg1YWI4LTY5MTEtNDY0My04NzgyLWM2YWVkYjMzYzI2ZiJ9.qn7fFZF00zh5FmISKCYKTLGLtTYTRR7T7M8ooqo3LmST_kL0u9qv3Gc43V1rZ5biBOWX7j9LYjti6NUbWdObRSsPJPL67TJ29Lq_WjUHfCDGGddcXDCo9bRLJMKjgLL8xEBhCDMzcrcG4NzrTzKKeg_2tZEjhnnchJFqFZ0k3FwJzfgNWZzbNb6B8yv5HWUM6AzQ8qPwvtyGQl2px59sRox-KyD245BAnSTWyTbEn14WZRjLlQ7bWuGApgrhVdk2CCxUk_O3dfEjT77_NyQ0mPXsXrloLhWV4yT2OFNceo4j8Ttl3fAqWIB8AYyGpA1tGeGLDDjnnP7TgQ1K7xn8Cn3-IGrFSVkgZcvEi-0jRjDPx5SLzbX-162zb6Coe99OHr4byzXXg-Nw-Lf-BNHvw0sw7KQNoDvZTDCTASH_YuFYlhQ3eBXIfwqIIEwvdernJi2bkWDJXGIROo_sW0NvUEcVqFaJ-5yER-XOi2UbsXB-bkKlVbGHN1gghas_g6JZUVLQQ0eOyvsYGF9kgP2NTLvA9hwxVycQLlwVd583yeJSzqzEmj8fIXPpJL_3_7lYgrnphGdpGh4RkxcQ1A5ytmBzMU9i3H7lzYGoPriXWjr0ftIZRVuK42A45Wl5t48ZReUS8m_tBrdUVyYIxJVB7qkqhN_WAwu9rON93zMlumY",
  "Client-ID": "daebakadmin",
};

export const getBookingHubList = async (params) => {
  const response = await axios.get("/booking_hub/", {
    headers,
    params,
  });

  return response;
};

export const addBookingHub = async (params) => {
  const response = await axios.post("/booking_hub/create", params, {
    headers,
  });

  return response;
};

export const getSingleBookingHub = async (params) => {
  const response = await axios.get(`/booking_hub/${params}`, {
    headers,
  });

  return response;
};

export const updateSingleBookingHub = async (params) => {
  const response = await axios.put(`/booking_hub/${params.booking_hub_id}`, {
    headers,
  });

  return response
}


export const deleteSingleBookingHub = async (params) => {
  const response = await axios.put(`/booking_hub/delete/${params.booking_hub_id}`, params, {
    headers,
  });

  return response
}
