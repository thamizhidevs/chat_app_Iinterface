
import { ArrowLeft, MoreVertical, Search, Phone, Video } from "lucide-react";
import UserAvatar from "./user-avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChatHeaderProps {
  name: string;
  avatar?: string;
  status?: string;
  onBackClick?: () => void;
}

const ChatHeader = ({ name, avatar, status, onBackClick }: ChatHeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center p-3 bg-white border-b shadow-sm">
      {isMobile && (
        <Button
          onClick={onBackClick}
          variant="ghost"
          size="icon"
          className="mr-2"
        >
          <ArrowLeft size={20} />
        </Button>
      )}
      <UserAvatar src={avatar} name={name} />
      <div className="ml-3 flex-1">
        <h2 className="font-medium">{name}</h2>
        {status && <p className="text-xs text-gray-500">{status}</p>}
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-whatsapp">
          <Video size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-whatsapp">
          <Phone size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Search size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <MoreVertical size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
