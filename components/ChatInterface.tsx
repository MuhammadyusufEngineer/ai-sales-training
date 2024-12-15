'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content: "Hello! I'm your AI sales trainer. Let's practice some sales scenarios. What type of sales situation would you like to practice? For example:\n\n1. Cold calling\n2. Handling objections\n3. Closing techniques\n4. Product demonstrations",
  timestamp: new Date(),
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const newMessage: ChatMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      
      if (!response.ok) throw new Error('Failed to get response');
      
      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="min-h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>AI Sales Training Session</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 mb-4 p-4 border rounded-md">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-4 p-3 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-blue-100 ml-auto max-w-[80%]' 
                  : 'bg-gray-100 max-w-[80%]'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
              <div className="text-xs text-gray-500 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <Button 
            onClick={sendMessage} 
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}