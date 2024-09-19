import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  return (
    <div className="flex flex-col h-[92vh] overflow-y-scroll scroll-smooth scrollbar-hide">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <section className="col-span-1 md:col-span-2">
          <Card className="border border-dark-green bg-black text-dark-white">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription className="text-slate-400">Manage your tasks and stay organized.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <FilterIcon className="w-4 h-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by..." className="text-black" />
                      </SelectTrigger>
                      <SelectContent className="text-dark-black">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="inprogress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ListOrderedIcon className="w-4 h-4" />
                      <span className="sr-only">Sort</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <PlusIcon className="w-4 h-4" />
                      <span className="sr-only">Add Task</span>
                    </Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Finalize quarterly report</div>
                        <div className="text-sm text-slate-300">Gather data and create presentation</div>
                      </TableCell>
                      <TableCell>2023-06-30</TableCell>
                      <TableCell>
                        <Badge variant="secondary">High</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">In Progress</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Task actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Prepare for client meeting</div>
                        <div className="text-sm text-slate-300">Review materials and talking points</div>
                      </TableCell>
                      <TableCell>2023-07-15</TableCell>
                      <TableCell>
                        <Badge variant="outline">Medium</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">To Do</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Task actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as In Progress</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Implement new design system</div>
                        <div className="text-sm text-slate-300">Update all components to match new branding</div>
                      </TableCell>
                      <TableCell>2023-08-01</TableCell>
                      <TableCell>
                        <Badge variant="secondary">High</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">In Progress</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Task actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
        <div className="grid gap-6">
          <section>
            <Card className="border border-dark-green bg-black text-dark-white">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription className="text-slate-400">Stay up-to-date with important updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <FilterIcon className="w-4 h-4" />
                        <span className="sr-only">Filter</span>
                      </Button>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Filter by..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="unread">Unread</SelectItem>
                          <SelectItem value="read">Read</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline" size="sm">
                      <BookMarkedIcon className="w-4 h-4" />
                      <span className="sr-only">Mark all as read</span>
                    </Button>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <BellIcon className="h-5 w-5" />
                      </div>
                      <div className="grid gap-1">
                        <div className="font-medium">New task assigned</div>
                        <div className="text-sm text-slate-300">
                          You have a new task to complete by the end of the week.
                        </div>
                        <div className="text-xs text-slate-300">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <MessageCircleIcon className="h-5 w-5" />
                      </div>
                      <div className="grid gap-1">
                        <div className="font-medium">New message from Jane</div>
                        <div className="text-sm text-slate-300">
                          Jane sent you a message about the project update.
                        </div>
                        <div className="text-xs text-slate-300">1 hour ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-slate-300">
                        <CircleAlertIcon className="h-5 w-5" />
                      </div>
                      <div className="grid gap-1">
                        <div className="font-medium">System maintenance</div>
                        <div className="text-sm text-slate-300">
                          The system will be undergoing maintenance for 2 hours on Saturday.
                        </div>
                        <div className="text-xs text-slate-300">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section>
            <Card className="border border-dark-green bg-black text-dark-white">
              <CardHeader>
                <CardTitle>Whiteboards</CardTitle>
                <CardDescription className="text-slate-400">Collaborate on ideas and projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <PlusIcon className="w-4 h-4" />
                        <span className="sr-only">Create Whiteboard</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <SearchIcon className="w-4 h-4" />
                        <span className="sr-only">Search Whiteboards</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <LayoutGridIcon className="w-4 h-4" />
                        <span className="sr-only">Grid View</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ListIcon className="w-4 h-4" />
                        <span className="sr-only">List View</span>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card className="cursor-pointer bg-dark-black text-white transition-colors">
                      <CardContent className="flex flex-col items-center justify-center h-32">
                        <ClapperboardIcon className="w-8 h-8 text-slate-300" />
                        <div className="mt-2 text-sm font-medium">Project Planning</div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer bg-dark-black text-white transition-colors">
                      <CardContent className="flex flex-col items-center justify-center h-32">
                        <ClapperboardIcon className="w-8 h-8 text-slate-300" />
                        <div className="mt-2 text-sm font-medium">Brainstorming</div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer bg-dark-black text-white transition-colors">
                      <CardContent className="flex flex-col items-center justify-center h-32">
                        <ClapperboardIcon className="w-8 h-8 text-slate-300" />
                        <div className="mt-2 text-sm font-medium">Design Review</div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer bg-dark-black text-white transition-colors">
                      <CardContent className="flex flex-col items-center justify-center h-32">
                        <ClapperboardIcon className="w-8 h-8 text-slate-300" />
                        <div className="mt-2 text-sm font-medium">Marketing Strategy</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookMarkedIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <polyline points="10 2 10 10 13 7 16 10 16 2" />
    </svg>
  )
}


function CircleAlertIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function ClapperboardIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  )
}


function FilterIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function LayoutGridIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function ListIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function ListOrderedIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function MessageCircleIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoveHorizontalIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PlusIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}