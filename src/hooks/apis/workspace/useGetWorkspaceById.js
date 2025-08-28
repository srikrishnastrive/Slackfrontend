import { useQuery } from '@tanstack/react-query';


import { useAuth } from '@/hooks/context/useAuth';
import { fetchWorkspaceDetailsRequest } from '@/apis/workspace';

export const useGetWorkspaceById = (id) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspace } = useQuery({
        queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
        queryKey: [`fetchWorkspaceById-${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    };
};
