import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useWorkspacePreferncesModal } from "@/hooks/context/useWorkspacePreferncesModal";

import { TrashIcon } from "lucide-react";

export const WorkspacePreferencesModal = () => {
    const { initialValue, openPreferences, setOpenPreferences } = useWorkspacePreferncesModal();

    function handleClose() {
        setOpenPreferences(false);
    }

    return (
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-black">
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div
                                className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-sm">
                                        Workspace Name
                                    </p>
                                    <p className="text-sm font-semibold hover:underline">
                                        Edit
                                    </p>
                                </div>
                                <p className="text-sm">
                                    {initialValue}
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Rename Workspace
                                </DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4">
                                <Input
                                    required
                                    autoFocus
                                    minLength={3}
                                    maxLength={50}
                                    placeholder="Workspace Name e.g. Design Team"
                                />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit">
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <button
                        className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50"
                    >
                        <TrashIcon className="size-5" />
                        <p className="text-sm font-semibold">
                            Delete Workspace
                        </p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
