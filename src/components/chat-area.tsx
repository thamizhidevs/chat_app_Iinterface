
import { useEffect, useRef } from "react";
import ChatHeader from "./chat-header";
import ChatMessage from "./chat-message";
import ChatInput from "./chat-input";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  status?: "sent" | "delivered" | "read";
}

interface ChatAreaProps {
  chatId: string | null;
  chatName: string;
  chatAvatar?: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  onBackClick: () => void;
}

const ChatArea = ({
  chatId,
  chatName,
  chatAvatar,
  messages,
  onSendMessage,
  onBackClick,
}: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chatId && isMobile) {
    return null;
  }

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-medium text-gray-600 mb-2">Welcome to Indigo Chat</h2>
          <p className="text-gray-500">
            Select a chat to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50">
      <ChatHeader
        name={chatName}
        avatar={chatAvatar}
        status="Online"
        onBackClick={onBackClick}
      />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            id={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isOutgoing={message.isOutgoing}
            status={message.status}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatArea;
