import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/forms/Input";
import { loginCustomer, clearUserAlertError } from "../Features";
import LoaderIndex from "../components/loaders";
import Message from "../components/loaders/Message";
import { CopyRight, Meta } from "../components/common";

export default function Auth() {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputData = [
    {
      id: 1,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "Minimum 8 Characters",
      type: "password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[#$@!%&*?])[a-zA-Z0-9!#$@!%&*]{8,30}$",
    },
  ];

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // getting the state from the slice
  const dispatch = useDispatch();
  const { isLoading, isSuccess, userInfo, isError, alertText, alertType } =
    useSelector((store) => store.user);

  // performing form submission to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(formdata));
  };

  // navigate if success to the billing page
  useEffect(() => {
    if (isSuccess && userInfo) {
      setTimeout(() => {
        clearUserAlertError();
        navigate(`/car-dealership/billing`);
      }, 3000);
    }
  }, [navigate, isSuccess, userInfo]);

  // clear the state if the request is failed or successfull
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [isSuccess]);

  return (
    <>
      <Meta title="Login" />
      {isLoading && <LoaderIndex loading={isLoading} />}
      <AuthContent>
        <div className="authContentWrapper">
          <div className="authContentForm">
          <Message alertText={alertText} alertType={alertType} />
            <img
              src="/images/dealer1.png"
              alt="dealer-image"
              className="icon"
            />

            <h2 className="family1">
              Let's get to Business
              <span className="userSpan">Signup to get free discount!</span>
            </h2>
            <form className="authContentFormWrapper" onSubmit={handleSubmit}>
              {inputData.map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
              <button className="editBtn family2">SignUp with Avanda</button>
              <p className="family1">
                Not yet a Member? <Link to={"/car-dealership/auth/register"}>Register Now</Link>
              </p>
            </form>
          </div>
        </div>
      </AuthContent>
      <CopyRight />
    </>
  );
}

const AuthContent = styled.div`
  width: 100%;
  .authContentWrapper {
    width: 100%;
    display: flex;
    max-width: 1600px;
    align-items: center;
    position: relative;
    background-color: var(--white);
    .authImage {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
    .authContentForm {
      margin: 1rem auto;
      display: flex;
      width: 70%;
      align-items: center;
      padding: 2rem 5.5rem;
      flex-direction: column;
      gap: 2rem;
      z-index: 400;
      background-color: var(--white);
      @media (max-width: 1090px) {
        width: 50%;
      }
      @media (max-width: 780px) {
        width: 86%;
        padding: 4rem 3rem;
      }
      @media (max-width: 480px) {
        width: 90%;
        padding: 4rem 2rem;
      }
      .icon {
        width: auto;
        height: 8rem;
      }
      h2 {
        font-size: 3rem;
        font-weight: 600;
        color: var(--text-color);
        width: 100%;
        text-align: center;

        .userSpan {
          display: block;
          font-size: 1.6rem;
          font-weight: 400;
          padding-top: 1.2rem;
          color: var(--grey);
        }
      }
      p {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--grey-2);
        width: 100%;
        text-align: center;

        a {
          font-weight: 600;
          color: var(--text-color);
          text-decoration: underline;
        }
      }
      .authContentFormWrapper {
        width: 100%;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;

        .editBtn {
          width: 100%;
          border: none;
          outline: none;
          padding: 2rem 3rem;
          font-size: 1.4rem;
          margin: 1.4rem 0;
          font-weight: 600;
          color: #fff;
          background-color: var(--blue-1);
          border-radius: 45px;
          transition: all 0.5s;
          cursor: pointer;
          &:hover {
            background-color: var(--red);
          }
        }
      }
    }
  }
`;
