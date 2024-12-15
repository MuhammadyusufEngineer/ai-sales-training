'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Sales Training Platform</h1>

        {!showChat ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Practice Scenarios</CardTitle>
                <CardDescription>
                  Train with AI-powered sales scenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setShowChat(true)}>Start Training</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Track your progress and improvements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" onClick={() => window.location.href = '/dashboard'}>
                  View Stats
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={() => setShowChat(false)}
              className="mb-4"
            >
              ← Back to Menu
            </Button>
            <ChatInterface />
          </div>
        )}
      </div>
    </main>
  )
}
