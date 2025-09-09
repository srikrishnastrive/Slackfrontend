import { addMemberToWorkspaceRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';
import { useMutation } from '@tanstack/react-query';


export const useAddMemberToWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    const { mutateAsync: addMemberToWorkspaceMutation, error, isSuccess, isPending} = useMutation({
        mutationFn: () => addMemberToWorkspaceRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Member added to workspace successfully');
        },
        onError: (error) => {
            console.log('Error in adding member to workspace', error);
        }
    });

    return {
        addMemberToWorkspaceMutation,
        error,
        isSuccess,
        isPending
    };
};
