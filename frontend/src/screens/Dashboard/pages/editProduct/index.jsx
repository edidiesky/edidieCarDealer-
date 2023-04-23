import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Links, Header, Alert } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProductImages from "./EditProductImages";
import OtherInfo from "./OtherInfo";
import ProductInfo from "./ProductInfo";
import LoaderIndex from "../../../../components/loaders/index";
import {
  getSingleProductDetails,
  adminUpdateProduct,
  clearProductAlert,
  CreateSingleProductDetails,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";

export default function EditProductIndex() {
  // initailizing parameters
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    productDetails,
    isLoading,
    isError,
    alertText,
    alertType,
    isSuccess,
    showAlert,
  } = useSelector((store) => store.product);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    dispatch(clearProductAlert());
    dispatch(getSingleProductDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    // clear the alert message
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearProductAlert());
      }, 4000);
    }
  }, [showAlert, dispatch]);

  const [formdata1, setFormData1] = useState({
    price: "",
    price2: "",
    countInStock: "",
    colors: "",
    percentage: 0,
    capacity: 0,
  });
  const [formdata2, setFormData2] = useState({
    title: "",
    brand: "",
    description: "",
  });

  const onChange1 = (e) => {
    setFormData1({ ...formdata1, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setFormData2({ ...formdata2, [e.target.name]: e.target.value });
  };
  const [uploadimage, setUploadImage] = useState([]);
  const [uploading, setUploading] = useState(false);

  const productData = { ...formdata1, ...formdata2, image: uploadimage };
  console.log(productData);
  const handleAdminProduct = (e) => {
    e.preventDefault();
    if (productDetails) {
      dispatch(adminUpdateProduct(productData));
    } else {
      dispatch(CreateSingleProductDetails(productData));
    }
  };

  return (
    <>
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      />
      <Header
        text={"My Products"}
        subtext={"Here is what is happening with your products today"}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}
      <EditProductContainer>
        <div className="EditProductWrapper">
          <div className="EditProductWrapperTop">
            {/* <div className="EditProductWrapperTopLeft">
              <h3>
                {productDetails
                  ? `Edit ${productDetails?.title}`
                  : "Add New Product"}
              </h3>
              <Links
                step1
                step2={"product"}
                title2={"Product"}
                step3={`${id}`}
                title3={"Edit Product"}
              />
            </div> */}

            <div className="btnWrapper">
              <button className="editBtn" onClick={handleAdminProduct}>
                {productDetails ? "Edit Product" : "Create your Product"}
              </button>
            </div>
          </div>
          <EditProductImages
            uploadimage={uploadimage}
            uploading={uploading}
            setUploadImage={setUploadImage}
            setUploading={setUploading}
          />

          <div className="EditProductWrapperBottom">
            <ProductInfo
              onChange2={onChange2}
              formdata2={formdata2}
              setFormData2={setFormData2}
            />
            <OtherInfo
              onChange1={onChange1}
              formdata1={formdata1}
              setFormData1={setFormData1}
            />
          </div>
        </div>
      </EditProductContainer>
    </>
  );
}

const EditProductContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .EditProductWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    .EditProductWrapperTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .btnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
      }

      .EditProductWrapperTopLeft {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        h3 {
          font-size: 2rem;
          color: var(--text-color);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
    }

    .EditProductWrapperBottom {
      display: grid;
      grid-template-columns: 1fr 25vw;
      grid-gap: 1.6rem;
      width: 100%;
      place-items: start;
    }
  }
`;
