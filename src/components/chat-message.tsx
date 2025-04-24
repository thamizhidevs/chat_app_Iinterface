
import { format } from "date-fns";
import { CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  id: string;
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  status?: "sent" | "delivered" | "read";
}

const ChatMessage = ({
  id,
  content,
  timestamp,
  isOutgoing,
  status,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex mb-2",
        isOutgoing ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "message-bubble",
          isOutgoing ? "message-outgoing" : "message-incoming"
        )}
      >
        <p className="text-sm">{content}</p>
        <div className="flex items-center justify-end mt-1 gap-1">
          <span className="text-xs text-gray-500">
            {format(timestamp, "HH:mm")}
          </span>
          {isOutgoing && status === "read" && (
            <CheckCheck size={14} className="text-whatsapp" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
