
import { useState } from "react";
import { 
  MessageCircle, 
  Users, 
  Phone, 
  Settings, 
  Plus, 
  Search 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import ChatListItem from "./chat-list-item";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Chat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  status?: "sent" | "delivered" | "read";
}

interface ChatSidebarProps {
  chats: Chat[];
  activeChat: string | null;
  onChatSelect: (chatId: string) => void;
}

const ChatSidebar = ({ chats, activeChat, onChatSelect }: ChatSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isMobile && activeChat) {
    return null;
  }

  return (
    <div className="w-full md:w-80 border-r h-full flex flex-col bg-white">
      <div className="p-3 bg-gray-50 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-whatsapp">Indigo Chat</h1>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Users size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Settings size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MessageCircle size={20} />
          </Button>
        </div>
      </div>
      <div className="p-3 bg-white">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search or start new chat"
            className="pl-8 bg-gray-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <ChatListItem
            key={chat.id}
            id={chat.id}
            name={chat.name}
            avatar={chat.avatar}
            lastMessage={chat.lastMessage}
            timestamp={chat.timestamp}
            unread={chat.unread}
            isActive={chat.id === activeChat}
            onClick={onChatSelect}
            status={chat.status}
          />
        ))}
      </div>
      <div className="p-3 flex justify-end">
        <Button 
          className="rounded-full h-12 w-12 bg-whatsapp hover:bg-whatsapp-dark"
        >
          <Plus size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
