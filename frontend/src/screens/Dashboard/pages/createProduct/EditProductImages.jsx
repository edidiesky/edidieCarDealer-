import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaFileUpload } from "react-icons/fa";

import Message from "../../../../components/loaders/Message";
import LoaderIndex from "../../../../components/loaders/index";
import { RxCross1 } from "react-icons/rx";

export default function EditProductImage({
  uploadimage,
  setUploadImage,
  setUploading,
  uploading,
}) {
  const handleFileUpload = async (e) => {
    // get the file
    const file = e.target.files;
    setUploading(true);
    // create formdata
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("images", file[i]);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/v1/upload", formData, config);

      setUploadImage(data.files);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeUploadedImage = (id) => {
    const outcome = uploadimage.filter((x, index) => index !== id);
    console.log(outcome);
    setUploadImage(outcome);
  };
  return (
    <EditProductWrapperCenter>
      <h4 className="family1 fs-14 text-bold">Upload Product Image</h4>
      {/*upload image*/}
      {uploadimage.length > 0 ? (
        <div className="EditProductImageList">
          {uploadimage.map((x, index) => {
            return (
              <div
                className="imageContainer flex item-center gap-2 justify-space"
                key={index}
              >
                <img src={x} alt="images" className="img" />
                <div
                  className="icon flex item-center justify-center"
                  onClick={() => removeUploadedImage(index)}
                >
                  <RxCross1 fontSize={"18px"} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="UploadBtnWrapper">
          {uploading && <LoaderIndex type="small" />}
          <label
            className="UploadBtn fs-15 family1 fs-14 flex gap-1 item-center text-light editBtn"
            htmlFor="upload"
          >
            Upload File here <FaFileUpload />
            <input
              type="file"
              id="upload"
              placeholder="Product Image"
              autoComplete="off"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              multiple
            />
          </label>
        </div>
      )}
    </EditProductWrapperCenter>
  );
}

const EditProductWrapperCenter = styled.div`
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  p {
    font-size: 1.1rem;
    color: var(--grey);
    font-weight: 400;
    &.EditProductWrapperCenterPara {
      padding: 1rem 0;
    }
  }
  .UploadBtnWrapper {
    width: 100%;
    padding: 2rem;
    padding-top: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    .UploadBtn {
      padding: 1.6rem 2rem;
      font-weight: 600;
      background: var(--blue-2);
      color: #fff;
      cursor: pointer;
      z-index: 50;
      &:hover {
        background: var(--red);
      }
    }
  }

  .EditProductImageList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 1rem;
    }
    .icon {
      height: 100%;
      width: 3.6rem;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    .imageContainer {
      border: 1px solid rgba(0, 0, 0, 0.2);
      min-height: 7rem;
      padding-left: 1rem;
      position: relative;
      .img {
        width: 8rem;
      }

      .uploadLabel {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        cursor: pointer;
        z-index: 50;
        svg {
          font-size: 2rem;
          color: var(--red);
        }
        span {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
`;
