import { Dispatch, SetStateAction, useState } from "react";
import { Wrapper } from "../../styledComponents";
import { LoginForm, RegisterForm } from "../../components/Forms";

type tokenprops = {
  token?: string;
  setToken?: Dispatch<SetStateAction<string>>;
};

const LoginPage = ({ token, setToken }: tokenprops) => {
  const [pageState, setPageState] = useState<"login" | "register">("login");
  // const [existToken, setExistToken] = useState(token);
  console.log(token);
  console.log(setToken);

  return (
    <Wrapper>
      {pageState === "login" ? (
        <LoginForm setPageState={setPageState} pageState={"login"} />
      ) : (
        <RegisterForm setPageState={setPageState} pageState={"register"} />
      )}
    </Wrapper>
  );
};

export default LoginPage;
