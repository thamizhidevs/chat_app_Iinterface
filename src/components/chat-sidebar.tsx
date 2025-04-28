import { useState } from "react";
import { 
  MessageCircle, 
  Users, 
  Phone, 
  Settings, 
  Plus, 
  Search,
  MessageSquare,
  LogOut
} from "lucide-react";
import { Input } from "@/components/ui/input";
import ChatListItem from "./chat-list-item";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  onLogout: () => void;
}

const ChatSidebar = ({ chats, activeChat, onChatSelect, onLogout }: ChatSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewChat = () => {
    toast({
      title: "New Chat",
      description: "Creating a new chat...",
      variant: "default"
    });
    // TODO: Implement new chat creation
  };

  const handleUsers = () => {
    toast({
      title: "Users",
      description: "Opening user management...",
      variant: "default"
    });
    // TODO: Implement user management
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Opening settings panel...",
      variant: "default"
    });
    // TODO: Implement settings panel
  };

  const handleMessageCircle = () => {
    toast({
      title: "Messages",
      description: "Opening message settings...",
      variant: "default"
    });
    // TODO: Implement message settings
  };

  if (isMobile && activeChat) {
    return null;
  }

  return (
    <div className="w-full md:w-96 border-r h-full flex flex-col bg-white">
      <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-white" />
          <h1 className="text-xl font-semibold text-white">Indigo Chat</h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={handleUsers}
          >
            <Users size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Settings size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSettings}>
                <Settings className="mr-2 h-4 w-4" />
                Chat Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettings}>
                <Settings className="mr-2 h-4 w-4" />
                Notification Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettings}>
                <Settings className="mr-2 h-4 w-4" />
                Privacy Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={handleMessageCircle}
          >
            <MessageCircle size={20} />
          </Button>
        </div>
      </div>
      <div className="p-4 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search or start new chat"
            className="pl-9 bg-gray-50 h-10 rounded-full border-0 focus-visible:ring-1"
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
      <div className="p-4 flex justify-end border-t">
        <Button 
          className="rounded-full h-14 w-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
          onClick={handleNewChat}
        >
          <Plus size={24} className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
