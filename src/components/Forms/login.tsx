import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  Search,
  Form,
  InputSubmit,
  LoginorRegister,
} from "../../styledComponents";
import Logo from "@/components/Logo/Logo";
import { getInitialFormObjects } from "@/functions";
import { pokemonUser } from "@/services/internalService";
import { useTokenValue } from "@/token";

type pageStateprops = {
  setPageState: Dispatch<SetStateAction<"login" | "register">>;
  pageState: string;
};

const LoginForm = ({ setPageState, pageState }: pageStateprops) => {
  const path = "/";
  const formArr = [
    { name: "username", label: "User Name", placeholder: "User Name" },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
  ];
  const formRef = useRef(null);
  const initialForm = getInitialFormObjects(formArr);
  const [formValue, setFormvalue] = useState(initialForm);
  const { token, saveToken } = useTokenValue();

  const submitHandler = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    e.target.reset();
    setFormvalue(initialForm);
    console.log("form login value", formValue);
    console.log("token ", token);
    const response = await pokemonUser.Login(formValue);
    console.log("login token response", response);
    console.log("login token response", response.data._token);

    saveToken(response.data._token);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Logo nav={path} />
      {formArr.map((el, index) => (
        <Search
          type={el.type}
          id={el.name}
          key={index}
          label={el.label}
          placeholder={el.placeholder}
          formValue={formValue}
          setFormvalue={setFormvalue}
          innerRef={formRef}
        />
      ))}
      <InputSubmit value={"login"} />
      <LoginorRegister setPageState={setPageState} pagestate={pageState} />
    </Form>
  );
};

LoginForm.defaultProps = {};

export default LoginForm;
