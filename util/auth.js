import axios from "axios";

 
export async function loginUser(email, password) {
    console.log(email);
    console.log(password);
  try {
    const response = await axios.post(
      `https://44501f04ed0b7067f9ffd0445e96b702.serveo.net/api/auth/`,
      {
        "email": email,
        "password": password,
      }
    );

    console.log(response.data);
    console.log(response.status);
    return response ; // You might want to return the data for further processing
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error; // Re-throw the error for the calling code to handle
  };
}; 




// export async function hi(){

// }
