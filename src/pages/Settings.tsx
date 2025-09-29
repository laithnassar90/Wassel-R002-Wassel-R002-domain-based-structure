import { Bell, Globe, Shield, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-3 shadow-lg border border-gray-200">
            <img
              src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
              alt="Wassel Logo"
              className="w-full h-full object-contain filter contrast-125 brightness-110"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="font-headline font-bold text-3xl wassel-text-gradient">Settings</h1>
              <span className="text-xl arabic font-arabic text-wassel-gray">الإعدادات</span>
            </div>
            <p className="text-muted-foreground">Manage your account preferences and app settings</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-foreground">Email Notifications</Label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All notifications</SelectItem>
                  <SelectItem value="important">Important only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">SMS Notifications</Label>
              <Select defaultValue="important">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All notifications</SelectItem>
                  <SelectItem value="important">Important only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Auto-accept ride requests</Label>
              <Select defaultValue="manual">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Automatic</SelectItem>
                  <SelectItem value="manual">Manual approval</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Globe className="h-5 w-5" />
              App Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-foreground">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية (Arabic)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="aed">AED (د.إ)</SelectItem>
                  <SelectItem value="sar">SAR (ر.س)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Theme</Label>
              <Select defaultValue="light">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-foreground">Profile Visibility</Label>
              <Select defaultValue="public">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="friends">Friends only</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Show phone number</Label>
              <Select defaultValue="verified">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">To all users</SelectItem>
                  <SelectItem value="verified">Verified users only</SelectItem>
                  <SelectItem value="none">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              className="w-full bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-foreground">Push Notifications</Label>
              <Select defaultValue="enabled">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enabled">Enabled</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Trip Updates</Label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All updates</SelectItem>
                  <SelectItem value="important">Important only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Marketing Communications</Label>
              <Select defaultValue="weekly">
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="wassel-button-primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
