import { useNavigate } from "react-router-dom";
import ChatApp from "@/components/chat-app";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "Logged out successfully",
      variant: "default"
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="w-full max-w-[70%] h-[90vh]">
        <div className="bg-white rounded-lg shadow-xl h-full">
          <ChatApp onLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Index;
