import axiosConfig from "@/config/axiosConfig";


export const signUpRequest = async ({email,password,username}) => {
    try {
        const response = await axiosConfig.post('/users/singup',{email,password,username});
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error.response.data;
    }
};

export const signInRequest = async ({email,password}) => {
    try {
        const response = await axiosConfig.post('/users/signin',{email,password});
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error.response.data;
    }
};


