import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("https://ai-chatbot-backend-s9jb.onrender.com/user/login", { email, password },{
    withCredentials: true,
  });
  if (res.status !== 200)  {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async ( name:string, email: string, password: string) => {
  const res = await axios.post("https://ai-chatbot-backend-s9jb.onrender.com/user/signup", { name, email, password },{
    withCredentials: true,
  });
  if (res.status !== 201)  {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get("https://ai-chatbot-backend-s9jb.onrender.com/user/auth-status",{
      withCredentials: true,
    });
    if (res.status !== 200){
        throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
    
};
//ai add features
export const sendChatRequest = async (message: string , personality: string) => {
  const res = await axios.post("https://ai-chatbot-backend-s9jb.onrender.com/chat/new", {message, personality},{
    withCredentials: true,
  });

  if (res.status !== 200){
      throw new Error("Unable to send chat");
  };
  const data = await res.data;
  return data;
  
};

export const getUserChats = async () => {
  const res = await axios.get("https://ai-chatbot-backend-s9jb.onrender.com/chat/all-chats",{
    withCredentials: true,
  });

  if (res.status !== 200){
      throw new Error("Unable to send chat");
  };
  const data = await res.data;
  return data;
  
};

export const deleteUserChats = async () => {
  const res = await axios.delete("https://ai-chatbot-backend-s9jb.onrender.com/chat/delete",{
    withCredentials: true
  });

  if (res.status !== 200){
      throw new Error("Unable to delete chats");
  };
  const data = await res.data;
  return data;
  
};

export const logoutUser = async () => {
  const res = await axios.get("https://ai-chatbot-backend-s9jb.onrender.com/user/logout",{
    withCredentials: true
  });

  if (res.status !== 200){
      throw new Error("Unable to logout");
  };
  const data = await res.data;
  return data;
  
};