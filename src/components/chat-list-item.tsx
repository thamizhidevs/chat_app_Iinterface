
import { formatDistanceToNow } from "date-fns";
import UserAvatar from "./user-avatar";
import { Check, CheckCheck } from "lucide-react";

interface ChatListItemProps {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  isActive: boolean;
  onClick: (id: string) => void;
  status?: "sent" | "delivered" | "read";
}

const ChatListItem = ({
  id,
  name,
  avatar,
  lastMessage,
  timestamp,
  unread,
  isActive,
  onClick,
  status,
}: ChatListItemProps) => {
  return (
    <div
      className={`flex items-center p-3 cursor-pointer chat-list-item ${
        isActive ? "bg-whatsapp-lighter" : ""
      }`}
      onClick={() => onClick(id)}
    >
      <UserAvatar src={avatar} name={name} />
      <div className="ml-3 flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900 truncate">{name}</h3>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(timestamp, { addSuffix: false })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 truncate flex items-center">
            {status && (
              <span className="mr-1 text-whatsapp">
                {status === "read" ? (
                  <CheckCheck size={14} />
                ) : (
                  <Check size={14} />
                )}
              </span>
            )}
            {lastMessage}
          </p>
          {unread > 0 && (
            <span className="bg-whatsapp text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
