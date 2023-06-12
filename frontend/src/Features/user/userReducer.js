import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

const Registerurl = "/auth/register";
const Loginurl = "/auth/login";

export const registerCustomer = createAsyncThunk(
  "registerUser",
  async (registerData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(Registerurl, registerData);
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

export const loginCustomer = createAsyncThunk(
  "loginCustomer",
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(Loginurl, loginData, {
        withCredentials: true,
      });
      localStorage.setItem("customer", JSON.stringify(data.user));
      // localStorage.setItem("customertoken", data.token);
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

// get all user for the admin
export const getAllCustomer = createAsyncThunk(
  "getAllCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { userpage } = state.user;

      const { data } = await axiosInstance.get(`/auth?page=${userpage}`);
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

// get all user for the admin
export const getUserStats = createAsyncThunk(
  "getStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(`/auth/stats`);
      return data.usersStats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// get a single user for the admin
export const getSingleCustomer = createAsyncThunk(
  "getSingleCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(`/auth/admin/profile/${name}`);
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

// Update a single user for the admin
export const adminUpdateCustomer = createAsyncThunk(
  "adminUpdateCustomer",
  async (Userformdata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.user.userDetails;
      const { data } = await axiosInstance.put(
        `/auth/admin/profile/${_id}`,
        Userformdata
      );
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

// Update a single user for the admin
export const UpdateProfile = createAsyncThunk(
  "UpdateProfile",
  async (profiledata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.user.userInfo;
      const { data } = await axiosInstance.put(
        `/auth/profile/${_id}`,
        profiledata
      );
      localStorage.setItem("customer", JSON.stringify(data.updatedUser));
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

// Delete a single user for the admin
export const adminDeleteCustomer = createAsyncThunk(
  "adminDeleteCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.delete(`/auth/admin/profile/${name}`);
      return name;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const handleTokenKey = createAsyncThunk(
  "/api/config/token",
  async (orderItems, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get("/api/config/token");
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
