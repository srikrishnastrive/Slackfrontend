import { Avatar } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/context/useAuth"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const UserButton = () => {
    const {auth} = useAuth();

    return (
        <Avatar>
            <AvatarImage src={auth?.user?.avatar} />
            <AvatarFallback>{auth.user.username[0]}</AvatarFallback>
        </Avatar>
    )
}
