import {createAvatar} from "@dicebear/core";
import {initials , botttsNeutral} from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
    seed: string;
    className?: string;
    variant?: "initials" | "botttsNeutral";
}

export const GeneratedAvatar = ({
    seed,
    className,
    variant = "initials",
}: GeneratedAvatarProps) => {
    let avatar;

    if(variant === "botttsNeutral"){
        avatar = createAvatar(botttsNeutral, {
            seed,
        });
    }else {
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 500,
            fontSize: 42,
        });
    };

    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()} alt="Avatar"/>
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
};