import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Tasks() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 h-[92vh] overflow-y-scroll scroll-smooth scrollbar-hide">
      <div className="md:col-span-8 space-y-6">
        <Card className="border border-dark-green  bg-subtle-black text-white">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription className="text-slate-400">
              View all tasks, their status, assigned team members, and time tracking information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time Tracked</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Redesign website homepage</div>
                    <div className="text-slate-300 text-sm">Update the homepage design</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>John Doe</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border border-dark-gold text-dark-gold">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">12h 45m</div>
                  </TableCell>
                  <TableCell>
                    <div>2023-06-30</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveVerticalIcon className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Start Timer</DropdownMenuItem>
                        <DropdownMenuItem>Edit Task</DropdownMenuItem>
                        <DropdownMenuItem>Delete Task</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {/* Other TableRows... */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border border-dark-green  bg-subtle-black text-white">
          <CardHeader>
            <CardTitle>Create Task</CardTitle>
            <CardDescription className="text-slate-400">Add a new task to your team's workflow.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  className="text-dark-green placeholder:text-dark-green/30 border border-dark-green outline-none bg-black"
                  id="title"
                  placeholder="Enter task title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  className="text-dark-green placeholder:text-dark-green/30 border border-dark-green outline-none bg-black"
                  placeholder="Enter task description"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  className="text-dark-green placeholder:text-dark-green/30 border border-dark-green outline-none bg-black"
                  id="dueDate"
                  type="date"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="assignee">Assign To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assignee" className="text-dark-black placeholder:text-slate-800" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-doe">John Doe</SelectItem>
                    <SelectItem value="sarah-miller">Sarah Miller</SelectItem>
                    <SelectItem value="lisa-johnson">Lisa Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant={"secondary"}>Create Task</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-4 space-y-6">
        <Card className="border border-dark-green  bg-subtle-black text-white">
          <CardHeader>
            <CardTitle>Time Tracking</CardTitle>
            <CardDescription className="text-slate-400">Track the time spent on each task.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Time Tracking Rows... */}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-dark-green  bg-subtle-black text-white">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription className="text-slate-400">View your upcoming tasks and schedule your time accordingly.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Upcoming Tasks Rows... */}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-dark-green  bg-subtle-black text-white">
          <CardHeader>
            <CardTitle>Team Collaboration</CardTitle>
            <CardDescription className="text-slate-400">Collaborate with your team on tasks.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Team Collaboration Rows... */}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function FilePenIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function HandHelpingIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  )
}


function MoveVerticalIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}


function PaperclipIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PlayIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function ReplyIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function SettingsIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}