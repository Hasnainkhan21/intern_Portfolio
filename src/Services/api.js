// src/Services/api.js
import axios from 'axios';

const BASE_URL = 'https://interportfolioserver-production.up.railway.app';

export const getPortfolioData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getdata`);


    const { user, projects } = response.data;

    return  {
      profileImage: user.profileImage,
      coverImage: user.coverImage,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      skills: user.skills,
      projects: projects,
    };

  } catch (error) {
    console.error('❌ Error fetching portfolio data:', error);
    throw error;
  }
};

export const postMessage = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/postmessage`, formData);
    return res.data;
  } catch (error) {
    console.error("❌ Error sending message:", error);
    throw error;
  }
};

//get Messages

export const getMessages = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/getmessages`);
    return resp.data; 
  } catch (error) {
    console.log('Error in getMessages:', error.message);
    return []; 
  }
};
