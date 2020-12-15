import http from "./httpServices";
import * as Urls from "./urls.json";

export const uploadImage = (formData) => {
  console.log("uploadImage_Serv_call--->>");
  return http.post(Urls.BASE_URL + Urls.UPLOAD_IMAGE_URL, formData);
};
