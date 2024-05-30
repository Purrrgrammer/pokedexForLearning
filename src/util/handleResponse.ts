//handling response for error

import { AxiosError, AxiosResponse } from "axios";

export interface IResponse {
  status: number | undefined;
  error?:
    | AxiosError<AxiosResponse<AxiosResponse<any, any>>>
    | AxiosResponse<any, any>
    | undefined;
  data?: any;
}
export const handleResponse = {
  success: (res: AxiosResponse) => {
    // console.log("success res data ", res.data);
    return {
      status: res.status,
      data: res.data,
    };
  },
  error: (res: AxiosError<AxiosResponse>): IResponse => {
    if (res.message === "Network Error") {
      return {
        status: 500,
        error: res,
      };
    } else {
      return {
        status: res.response?.status,
        error: res.response?.data,
      };
    }
  },
};
