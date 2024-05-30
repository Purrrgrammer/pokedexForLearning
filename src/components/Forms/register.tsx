import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  Search,
  Form,
  LoginorRegister,
  InputSubmit,
} from "../../styledComponents";
import Logo from "@/components/Logo/Logo";
import { getInitialFormObjects } from "@/functions";
import { pokemonUser } from "@/services/internalService";
type stateprops = {
  setPageState: Dispatch<SetStateAction<"login" | "register">>;
  pageState: string;
};

const RegisterForm = ({ setPageState, pageState }: stateprops) => {
  const path = "/";
  const formArr = [
    { name: "firstname", label: "First Name", placeholder: "First Name" },
    { name: "lastname", label: "Last Name", placeholder: "Last Name" },
    { name: "username", label: "User Name", placeholder: "User Name" },
    { name: "password", label: "Password", placeholder: "Password" },
    { name: "email", label: "Email", placeholder: "Your Email" },
  ];
  const formRef = useRef(null);
  const initialForm = getInitialFormObjects(formArr);
  const [formValue, setFormvalue] = useState(initialForm);

  // useEffect(() => {
  //   console.log(formValue, "this is formvalue from register");
  // }, [formValue]);
  const registerHandler = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    const response = await pokemonUser.Register(formValue);
    console.log(response);
    e.target.reset();
    // console.log(formValue);
    setFormvalue(initialForm);
  };

  return (
    <Form onSubmit={registerHandler}>
      <Logo nav={path} />
      {formArr.map((el, index) => (
        <Search
          id={el.name}
          key={index}
          label={el.label}
          placeholder={el.placeholder}
          formValue={formValue}
          setFormvalue={setFormvalue}
          innerRef={formRef}
        />
      ))}
      <InputSubmit value={"register"} />
      <LoginorRegister setPageState={setPageState} pagestate={pageState} />
    </Form>
  );
};

export default RegisterForm;
