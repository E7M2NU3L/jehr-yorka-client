import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Settings() {
  return (
    <div className="flex flex-col w-full h-[92vh] overflow-y-scroll scroll-smooth scrollbar-hide ">
      <main className="flex-1 py-8 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section>
            <h2 className="text-xl font-bold">Account Settings</h2>
            <div className="grid gap-6 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="two-factor">Two-factor Authentication</Label>
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Add an extra layer of security to your account</p>
                  <Switch id="two-factor" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reset-password">Reset Password</Label>
                <Button variant="outline" id="reset-password">
                  Reset Password
                </Button>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="delete-account">Delete Account</Label>
                <Button variant="destructive" id="delete-account">
                  Delete Account
                </Button>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold">Notification Settings</h2>
            <div className="grid gap-6 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Receive notifications on your desktop</p>
                  <Switch id="desktop-notifications" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Receive notifications via email</p>
                  <Switch id="email-notifications" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="in-app-notifications">In-app Notifications</Label>
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Receive notifications within the app</p>
                  <Switch id="in-app-notifications" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold">Appearance Settings</h2>
            <div className="grid gap-6 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="theme">Theme</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme" className="text-black" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold">Privacy Settings</h2>
            <div className="grid gap-6 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="data-sharing">Data Sharing</Label>
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Allow your data to be shared with third-party services</p>
                  <Switch id="data-sharing" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="deactivate-account">Deactivate Account</Label>
                <Button variant="destructive" id="deactivate-account">
                  Deactivate Account
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}