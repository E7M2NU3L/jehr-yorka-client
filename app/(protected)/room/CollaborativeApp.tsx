"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useOthers } from "@liveblocks/react/suspense";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return (
    <div className="flex flex-col h-[92vh] bg-dark-black overflow-y-scroll scroll-smooth scrollbar-hide">
    <header className="py-4 px-6 flex items-center justify-end">
      <div className="flex items-center gap-4">
        <Button variant="ghost">
          <UsersIcon className="h-5 w-5" />
          <span className="sr-only">Invite Team</span>
        </Button>
        <Button variant="ghost">
          <SaveIcon className="h-5 w-5" />
          <span className="sr-only">Save Whiteboard</span>
        </Button>
        <Button variant="ghost">
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </header>
    <div className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-6">
      <div className="bg-subtle-black rounded-lg border flex flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>LW</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground">+2 more</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MaximizeIcon className="h-5 w-5" />
              <span className="sr-only">Maximize</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MinimizeIcon className="h-5 w-5" />
              <span className="sr-only">Minimize</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 flex items-center flex-col justify-center">
            <div className="mb-3"><h1 className="text-2xl font-normal text-dark-white">There are totally <span className="text-dark-green">{userCount + 1}</span>  users who are online</h1></div>
            <Button variant="secondary">Start Collaborating</Button>
          </div>
        </div>
        <div className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <PencilIcon className="h-5 w-5" />
              <span className="sr-only">Draw</span>
            </Button>
            <Button variant="ghost" size="icon">
              <TypeIcon className="h-5 w-5" />
              <span className="sr-only">Text</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShapesIcon className="h-5 w-5" />
              <span className="sr-only">Shapes</span>
            </Button>
            <Button variant="ghost" size="icon">
              <StickyNoteIcon className="h-5 w-5" />
              <span className="sr-only">Sticky Note</span>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <LayersIcon className="h-5 w-5" />
              <span className="sr-only">Layers</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LayoutGridIcon className="h-5 w-5" />
              <span className="sr-only">Grid</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LayoutTemplateIcon className="h-5 w-5" />
              <span className="sr-only">Templates</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-subtle-black rounded-lg border flex flex-col">
        <div className="border-b p-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Chat</h2>
          <Button variant="ghost" size="icon">
            <MaximizeIcon className="h-5 w-5" />
            <span className="sr-only">Maximize</span>
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-black border border-dark-green text-dark-green rounded-lg p-4 max-w-[80%]">
              <p className="text-sm">Hey, let's brainstorm some ideas for the new project!</p>
              <div className="text-xs text-dark-green/80 mt-2">
                <span>John Doe</span>
                <span className="mx-2">•</span>
                <span>2 min ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-dark-black border-dark-gold border rounded-lg p-4 max-w-[80%] text-dark-gold">
              <p className="text-sm">
                Great idea! Let's start with a mind map and then we can add some sticky notes.
              </p>
              <div className="text-xs text-dark-gold/80 mt-2">
                <span>Sarah Miller</span>
                <span className="mx-2">•</span>
                <span>1 min ago</span>
              </div>
            </div>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="border-t p-4 items-center flex gap-x-2">
          <Input placeholder="Type your message..." className="w-full placeholder-dark-black text-black" />
          <Button variant={"secondary"} type="submit">
            <Send />
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

function LayersIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
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
  
  
  function LayoutTemplateIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <rect width="18" height="7" x="3" y="3" rx="1" />
        <rect width="9" height="7" x="3" y="14" rx="1" />
        <rect width="5" height="7" x="16" y="14" rx="1" />
      </svg>
    )
  }
  
  
  function LogInIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
    )
  }
  
  
  function MaximizeIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
    )
  }
  
  
  function MinimizeIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M8 3v3a2 2 0 0 1-2 2H3" />
        <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
        <path d="M3 16h3a2 2 0 0 1 2 2v3" />
        <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
      </svg>
    )
  }
  
  
  function PencilIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  
  
  function SaveIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
        <path d="M7 3v4a1 1 0 0 0 1 1h7" />
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
  
  
  function ShapesIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </svg>
    )
  }
  
  
  function StickyNoteIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
        <path d="M15 3v4a2 2 0 0 0 2 2h4" />
      </svg>
    )
  }
  
  
  function TypeIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    )
  }
  
  
  function UsersIcon(props : React.SVGProps<SVGSVGElement>) {
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }