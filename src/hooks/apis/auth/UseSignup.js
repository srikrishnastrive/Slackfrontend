import { useMutation } from "@tanstack/react-query";
import { signInRequest, signUpRequest } from "@/apis/auth";


export const useSignup = () => {
    const {isPending,isSuccess,error,mutateAsync:signupMutation} = useMutation({
        mutationFn:signUpRequest,
        onSuccess : (data) => {
            console.log('successfully signed up',data);
        },
        onError:(error)=>{
            console.error('Failed to sugnup',error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
}

export const useSignin = () => {
    const {isPending,isSuccess,error,mutateAsync:signinMutation} = useMutation({
        mutationFn:signInRequest,
        onSuccess:(data) => {
            console.log('successfully signin',data);

        },
        onError:(error)=>{
            console.log('Failed to signin',error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    }
}
