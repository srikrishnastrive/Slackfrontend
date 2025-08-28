import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton"
import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react"

export const WorkspaceSidebar = () => {
    return (
        <aside className="w-[70px] h-full bg-[#481349]">
             <SidebarButton 
                Icon={HomeIcon}
                label="Home"
            />

            <SidebarButton
                Icon={MessageSquareIcon}
                label="DMs"
            />

            <SidebarButton
                Icon={BellIcon}
                label="Notifications"
            />

            <SidebarButton
                Icon={MoreHorizontalIcon}
                label="More"
            />

            <div className='flex flex-col items-center justify-end mt-auto mb-5 gap-y-1'>
                <UserButton />
            </div>

        </aside>
    )
}
