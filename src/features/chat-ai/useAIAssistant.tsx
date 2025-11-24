import { useState } from 'react';
import { AIMessage } from '../../core/types/AIAssistant';

export const useAIAssistant = () => {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    // Implementation placeholder
  };

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
