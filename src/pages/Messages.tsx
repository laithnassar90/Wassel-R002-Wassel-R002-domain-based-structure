import { useState } from 'react';
import { Send, Phone, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/stores/appStore';

const mockConversation = [
  {
    id: '1',
    sender: 'Ahmed Al-Rashid',
    message: 'Hi! I see you booked a seat for tomorrow\'s trip to Abu Dhabi.',
    timestamp: '10:30 AM',
    isMe: false,
  },
  {
    id: '2',
    sender: 'Me',
    message: 'Yes, looking forward to it! What time should I be at the pickup point?',
    timestamp: '10:32 AM',
    isMe: true,
  },
  {
    id: '3',
    sender: 'Ahmed Al-Rashid',
    message: 'Please be there by 8:50 AM. I\'ll be driving a white Toyota Camry.',
    timestamp: '10:35 AM',
    isMe: false,
  },
  {
    id: '4',
    sender: 'Me',
    message: 'Perfect! I\'ll be there on time. Should I bring anything specific?',
    timestamp: '10:37 AM',
    isMe: true,
  },
  {
    id: '5',
    sender: 'Ahmed Al-Rashid',
    message: 'Just yourself and maybe some water for the journey. See you tomorrow!',
    timestamp: '10:40 AM',
    isMe: false,
  },
];

export function Messages() {
  const { messages } = useAppStore();
  const [selectedContact, setSelectedContact] = useState(messages[0]?.id || null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedContactData = messages.find(msg => msg.id === selectedContact);

  return (
    <div className="p-6 h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Contacts List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-1.5 shadow-sm border border-gray-100">
                <img 
                  src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" 
                  alt="Wassel Logo" 
                  className="w-full h-full object-contain filter contrast-125"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <span>Messages</span>
              <span className="text-sm arabic font-arabic text-wassel-gray">الرسائل</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 cursor-pointer hover:bg-accent transition-colors ${
                    selectedContact === message.id ? 'bg-accent' : ''
                  }`}
                  onClick={() => setSelectedContact(message.id)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={message.contactAvatar} alt={message.contactName} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {message.contactName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground truncate">{message.contactName}</h4>
                        {message.unread && (
                          <Badge className="bg-wassel-burgundy text-white text-xs">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{message.lastMessage}</p>
                      <p className="text-xs text-muted-foreground">{message.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedContactData ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedContactData.contactAvatar} alt={selectedContactData.contactName} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {selectedContactData.contactName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{selectedContactData.contactName}</h3>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {mockConversation.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.isMe
                            ? 'bg-wassel-teal text-white'
                            : 'bg-wassel-light text-foreground'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.isMe ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 bg-background text-foreground border-border"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="wassel-button-primary px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a contact to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
