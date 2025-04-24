
import { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-50 p-3 border-t"
    >
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="text-gray-500 hover:text-whatsapp"
      >
        <Paperclip size={20} />
      </Button>
      <div className="flex-1 mx-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="chat-input w-full"
        />
      </div>
      <Button
        type={message.trim() ? "submit" : "button"}
        size="icon"
        variant="ghost"
        className="text-gray-500 hover:text-whatsapp"
      >
        {message.trim() ? <Send size={20} /> : <Mic size={20} />}
      </Button>
    </form>
  );
};

export default ChatInput;
