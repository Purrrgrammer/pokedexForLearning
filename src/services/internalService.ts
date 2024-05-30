// import { useToken } from "@/token";
import { USERResponse } from "@/interface";
import { USER_URL } from "@/util/constant";
import { handleResponse } from "@/util/handleResponse";
import axios from "axios";
import notie from "notie";
import { VOTE_SCORE } from "@/util/constant";

export const pokemonUser = {
  // for input type is formValue value
  //this is returned as a promise
  Login: async (input: any): Promise<USERResponse> => {
    try {
      const response = await axios.post(`${USER_URL}login`, input);
      console.log("login service response", response);
      if (response.data.success) {
        notie.alert({
          type: "success", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
          text: "Logging in",
          stay: false, // optional, default = false
          time: 5, // optional, default = 3, minimum = 1,
          position: "top", // optional, default = 'top', enum: ['top', 'bottom']
        });
        // useToken(response.data._token); //call on formlogin
      } else {
        notie.alert({
          type: "error",
          text: "Please Log in Again",
          stay: false,
          time: 1,
          position: "top",
        });
      }
      return handleResponse.success(response);
    } catch (error: any) {
      console.log("error", error);

      return handleResponse.error(error);
    }
  },
  Register: async (input: any): Promise<USERResponse> => {
    try {
      const response = await axios.post(`${USER_URL}register`, input);
      if (response.data.success) {
        notie.alert({
          type: "success", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
          text: "registerd",
          stay: false, // optional, default = false
          time: 1, // optional, default = 3, minimum = 1,
          position: "top", // optional, default = 'top', enum: ['top', 'bottom']
        });
      } else {
        notie.alert({
          type: "error",
          text: "error",
          stay: false,
          time: 1,
          position: "top",
        });
      }

      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
  getVoteScore: async (): Promise<any> => {
    //type fix => need newvote type
    try {
      const response = await axios.get(`${VOTE_SCORE}`, {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        },
      });
      console.log("RESPONSE", response);

      return handleResponse.success(response).data; //return vote
    } catch (error: any) {
      //not the errror from axious only
      return handleResponse.error(error);
    }
  },
};
//add type > beacause to accesss the inner data
