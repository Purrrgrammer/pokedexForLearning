import { ChangeEventHandler, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
type searchprops = {
  id: string;
  label: string;
  placeholder: string;
  type?: string | undefined;
  formValue: any;
  setFormvalue: any;
  onChange?:
    | { target: { value: SetStateAction<string> } }
    | ChangeEventHandler<HTMLInputElement>
    | undefined;
  innerRef?: any;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

export const Button = styled.button<{ $isTrue?: boolean }>`
  background: white;
  border-radius: 3px;
  border: 2px solid #7cb9e8;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.$isTrue &&
    css`
      background: "#BF4F74";
      color: white;
    `};
`;

export const InputSubmit = styled.input.attrs({
  type: "submit",
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

type btnprops = {
  name: string;
  //   value: string;
  //   type: "button" | "submit";
  //   form: string;
  //   onClick?: any;
};
export const StyledButton = ({ name }: btnprops) => {
  // const submitHandler = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   console.log(e);
  // };
  return <InputSubmit value={name} />;
};

export const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  .search-input-wrapper {
    margin-top: 1rem;
    .ant-input {
      font-size: 1rem;
      height: 3rem;
      width: 20rem;
    }
  }
`;
//  Search Child
export const Search = ({
  id,
  label = "SEARCH",
  placeholder,
  type,
  formValue,
  setFormvalue,
  innerRef,
}: //   onChange,
searchprops) => {
  const [_value, setValue] = useState("");
  const onSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);

    setFormvalue({ ...formValue, [id]: e.target.value });
    // console.log(formValue, "this is formValue from styled");
  };
  return (
    <StyledDiv>
      <p>{label}</p>
      <input
        type={type}
        id={id}
        onChange={onSearchChange}
        placeholder={placeholder}
        style={{ padding: "5px" }}
        ref={innerRef}
      />
    </StyledDiv>
  );
};

//
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginorRegister = ({ setPageState, pagestate }: any) => {
  return (
    <div>
      {pagestate === "login" ? (
        <span>you are not with us? </span>
      ) : (
        <span>already a member? </span>
      )}

      <button
        onClick={
          pagestate !== "login"
            ? () => {
                setPageState("login");
              }
            : () => {
                setPageState("register");
              }
        }
      >
        {pagestate === "login" ? <b> REGISTER HERE!</b> : <b> LOGIN HERE!</b>}
      </button>
    </div>
  );
};
