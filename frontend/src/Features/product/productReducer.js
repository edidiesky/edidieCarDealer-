import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetching all product
export const getAllProduct = createAsyncThunk(
  '/fetch/allproduct',
  async (name, thunkAPI) => {
    try {
      const { page, category, search, sort, color, limit } = thunkAPI.getState().product
      let productUrl = `/api/v1/product?page=${page}&category=${category}&sort=${sort}&color=${color}&limit=${limit}`
      if (search) {
        productUrl = productUrl + `&search=${search}`
      }
      const { data } = await axios.get(productUrl);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);





// fetching all product category
export const getAllProductCategory = createAsyncThunk(
  '/fetch/allproductcategory',
  async (search, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/v1/product/products');
      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);


// fetching single product based on its id
export const getSingleProductDetails = createAsyncThunk(
  'product/getProductDetails',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/product/${name}`);

      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message
        : error.message);
    }
  }
);


// fetching single product based on its id
export const CreateSingleProductDetails = createAsyncThunk(
  'product/createProduct',
  async (productData, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/product`, productData, config);

      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message
        : error.message);
    }
  }
);


// Update a single Product for the admin
export const adminUpdateProduct = createAsyncThunk(
  '/updateProduct',
  async (productData, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { _id } = state.product.productDetails
      const { data } = await axios.put(`/api/v1/product/admin/${_id}`, productData, config);
      localStorage.setItem('products', JSON.stringify(data.updatedproduct))
      return data.updatedproduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

// Delete a single Product for the admin
export const adminDeleteProduct = createAsyncThunk(
  '/admin/deleteProduct',
  async (productid, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.delete(`/api/v1/product/admin/${productid}`, config);
      return productid;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

// Create a review access point for the user
export const createReviewProduct = createAsyncThunk(
  '/user/reviewProduct/',
  async ({ Reviewdata, id }, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/product/review/${id}`, Reviewdata, config);
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);



// Get al toprated product for the user
export const getTopRatedProduct = createAsyncThunk(
  '/get/topRatedProduct',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/product/rated`, config);
      return data.toprated;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);


// Get al toprated product for the user
export const getProductStats = createAsyncThunk(
  '/get/getProductStats',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/product/stats`, config);
      return data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);



