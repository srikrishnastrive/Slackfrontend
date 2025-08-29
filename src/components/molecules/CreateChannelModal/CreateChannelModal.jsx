import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddChannelToWorkspace } from "@/hooks/apis/workspace/useAddChannelToWorkspace";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { toast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react"


export const CreateChannelModal = () => {
    const queryClient = useQueryClient();
    const {openCreateChannelModal,setOpenCreateChannelModal} = useCreateChannelModal();
    const [channelName,setChannelName] = useState('');
    const {currentWorkspace} = useCurrentWorkspace();
    const {addChannelToWorkspaceMutation} = useAddChannelToWorkspace();
    function handleClose(){
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId:currentWorkspace._id,
            channelName:channelName
        })
       
        toast({
            type: 'success',
            title: 'Channel created successfully'
        });

        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace._id}`)

        handleClose();
    }
     return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a channel</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder="Channel Name e.g. team-announcements"
                        required
                    />

                    <div className='flex justify-end mt-4'>
                        <Button>
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
            
        </Dialog>
    );
}
