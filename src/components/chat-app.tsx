
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatSidebar from "./chat-sidebar";
import ChatArea from "./chat-area";
import { useToast } from "@/hooks/use-toast";

// Mock data
const initialChats = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    unread: 2,
  },
  {
    id: "2",
    name: "Alice Smith",
    lastMessage: "Can we meet tomorrow?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    unread: 0,
    status: "read" as const,
  },
  {
    id: "3",
    name: "Bob Johnson",
    lastMessage: "I sent you the document",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    unread: 1,
  },
  {
    id: "4",
    name: "Team Indigo",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    unread: 0,
    status: "delivered" as const,
  },
  {
    id: "5",
    name: "Emma Wilson",
    lastMessage: "Thanks for your help!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    unread: 0,
    status: "sent" as const,
  },
];

const initialMessages = {
  "1": [
    {
      id: "m1",
      content: "Hey, how are you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      isOutgoing: false,
    },
    {
      id: "m2",
      content: "I'm good, thanks! How about you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isOutgoing: true,
      status: "read" as const,
    },
  ],
  "2": [
    {
      id: "m3",
      content: "Hi there! Do you have time to meet tomorrow?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isOutgoing: false,
    },
    {
      id: "m4",
      content: "Sure, what time works for you?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isOutgoing: true,
      status: "read" as const,
    },
    {
      id: "m5",
      content: "Can we meet tomorrow?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isOutgoing: false,
    },
  ],
  "3": [
    {
      id: "m6",
      content: "I sent you the document",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      isOutgoing: false,
    },
  ],
  "4": [
    {
      id: "m7",
      content: "Team meeting scheduled for tomorrow",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      isOutgoing: false,
    },
    {
      id: "m8",
      content: "I'll prepare the presentation",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23),
      isOutgoing: true,
      status: "delivered" as const,
    },
    {
      id: "m9",
      content: "Meeting at 3 PM",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
      isOutgoing: false,
    },
  ],
  "5": [
    {
      id: "m10",
      content: "Could you help me with this task?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      isOutgoing: false,
    },
    {
      id: "m11",
      content: "Sure, I'll take a look at it",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2.5),
      isOutgoing: true,
      status: "read" as const,
    },
    {
      id: "m12",
      content: "Thanks for your help!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      isOutgoing: false,
    },
  ]
};

const ChatApp = () => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
    
    // Mark messages as read
    if (chatId) {
      setChats(
        chats.map((chat) =>
          chat.id === chatId ? { ...chat, unread: 0 } : chat
        )
      );
    }
  };

  const handleSendMessage = (message: string) => {
    if (!activeChat) return;
    
    const newMessage = {
      id: uuidv4(),
      content: message,
      timestamp: new Date(),
      isOutgoing: true,
      status: "sent" as const,
    };
    
    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage],
    }));
    
    // Update last message in chat list
    setChats(
      chats.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              lastMessage: message,
              timestamp: new Date(),
              status: "sent" as const,
            }
          : chat
      )
    );
    
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully",
    });
    
    // Simulate reply after 1-3 seconds for demo purposes
    if (activeChat === "1" || activeChat === "2") {
      setTimeout(() => {
        const replyMessages = [
          "Sure, I'll get back to you soon!",
          "Thanks for letting me know.",
          "Got it! 👍",
          "I'll check and let you know.",
          "That sounds great!"
        ];
        const randomReply = replyMessages[Math.floor(Math.random() * replyMessages.length)];
        
        const replyMessage = {
          id: uuidv4(),
          content: randomReply,
          timestamp: new Date(),
          isOutgoing: false,
        };
        
        setMessages((prev) => ({
          ...prev,
          [activeChat]: [...(prev[activeChat] || []), replyMessage],
        }));
        
        setChats(
          chats.map((chat) =>
            chat.id === activeChat
              ? {
                  ...chat,
                  lastMessage: randomReply,
                  timestamp: new Date(),
                  unread: 1,
                }
              : chat
          )
        );
      }, Math.random() * 2000 + 1000);
    }
  };

  const handleBackClick = () => {
    setActiveChat(null);
  };

  const activeChatData = chats.find((chat) => chat.id === activeChat);

  return (
    <div className="flex h-full">
      <ChatSidebar
        chats={chats}
        activeChat={activeChat}
        onChatSelect={handleChatSelect}
      />
      <ChatArea
        chatId={activeChat}
        chatName={activeChatData?.name || ""}
        messages={activeChat ? messages[activeChat] || [] : []}
        onSendMessage={handleSendMessage}
        onBackClick={handleBackClick}
      />
    </div>
  );
};

export default ChatApp;
