import API_CONFIG from "../utils/config";
import $ from "jquery";

const API_URL = API_CONFIG.baseUrl;

export class Behance {
  getProjectsByUser() {
    try {
      const response = $.ajax({
        url: `${API_URL}${API_CONFIG.entryPoint.user}/${API_CONFIG.userName}${API_CONFIG.entryPoint.project}?${API_CONFIG.apiKey}`,
        method: "GET",
        dataType: "jsonp",
      });
      return response;
    } catch (error) {
      return { error: { ...error } };
    }
  }

  getProjectsById(id) {
    try {
      const response = $.ajax({
        url: `${API_URL}${API_CONFIG.entryPoint.project}/${id}?${API_CONFIG.apiKey}`,
        method: "GET",
        dataType: "jsonp",
      });
      return response;
    } catch (error) {
      return { error: { ...error } };
    }
  }
}
