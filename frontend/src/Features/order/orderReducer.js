import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

export const createCustomersOrder = createAsyncThunk(
  "/create/order",
  async (orderData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/order", orderData);

      return data.order;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const handleStripeCheckout = createAsyncThunk(
  "/stripe",
  async (orderItems, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.post("/stripe", orderItems);

      return data.url;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const handleStripeKey = createAsyncThunk(
  "/order/stripeKey",
  async (orderItems, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get("/stripekey", orderItems);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const handlePaypalKey = createAsyncThunk(
  "/order/api/paypal",
  async (orderItems, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get("/config/paypal", orderItems);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getCustomerOrderById = createAsyncThunk(
  "/get/order",
  async (orderId, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(`/order/${orderId}`);

      return data.order;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getCustomerOrderStats = createAsyncThunk(
  "/get/stats",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(`/order/stats`);

      return data.totalOrder;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getCustomerOrder = createAsyncThunk(
  "/getall/customer/order",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(`/order/customer/order`);

      return data.order;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getAllCustomersOrder = createAsyncThunk(
  "/get/allorder",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { orderpage } = state.order;
      const { data } = await axiosInstance.get(`/order?page=${orderpage}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const updateCustomersOrderToPaid = createAsyncThunk(
  "/update/order",
  async (details, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.order.order;
      const { data } = await axiosInstance.put(`/order/${_id}/pay`, details);

      return data.updatedOrder;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const updateCustomersOrderToIsDelivered = createAsyncThunk(
  "/update/order/deliver",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.order.order;
      const { data } = await axiosInstance.put(`/order/${_id}/delivered`, name);

      return data.updatedOrder;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
