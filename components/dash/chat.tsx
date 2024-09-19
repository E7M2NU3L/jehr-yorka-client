import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Paperclip } from "lucide-react"
import { GrEmoji } from "react-icons/gr"

export default function Chat() {
  return (
      <div className="flex flex-1 h-[92vh] overflow-scroll scroll-smooth scrollbar-hide">
        <div className="border-r bg-subtle-black p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Team</h2>
            <Button variant="secondary" size="icon" className="rounded-full">
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">New chat</span>
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-green hover:text-dark-green active:bg-dark-green active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Engineering Team</p>
                <p className="text-xs text-muted-foreground">Discussing the new product roadmap</p>
              </div>
              <div className="text-xs text-muted-foreground">2h</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-green hover:text-dark-green active:bg-dark-green active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Design Team</p>
                <p className="text-xs text-muted-foreground">Reviewing the new UI designs</p>
              </div>
              <div className="text-xs text-muted-foreground">4h</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-green hover:text-dark-green active:bg-dark-green active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Marketing Team</p>
                <p className="text-xs text-muted-foreground">Discussing the new campaign strategy</p>
              </div>
              <div className="text-xs text-muted-foreground">1d</div>
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex h-full flex-col">
            <div className="border-b /20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Engineering Team</p>
                    <p className="text-xs text-muted-foreground">Active 2h ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <PhoneIcon className="h-5 w-5" />
                    <span className="sr-only">Call</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid gap-4">
                <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-2xl bg-dark-black border-green-500 border px-4 py-2 text-sm text-dark-white ml-auto">
                  Hey team, let's discuss the new product roadmap.
                </div>
                <div className="flex w-max max-w-[65%] flex-col text-dark-white border-dark-gold border gap-2 rounded-2xl  px-4 py-2 text-sm">
                  Sure, I have some ideas to share. Let's start with the timeline.
                </div>
                <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-xl overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Image"
                    width={200}
                    height={150}
                    className="object-cover"
                    style={{ aspectRatio: "200/150", objectFit: "cover" }}
                  />
                </div>
                <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-2xl bg-dark-black border-green-500 border px-4 py-2 text-sm text-dark-white ml-auto">
                  Great, let's start with the timeline and then move on to the features.
                </div>
                <div className="flex w-max max-w-[65%] flex-col text-dark-white border-dark-gold border gap-2 rounded-2xl  px-4 py-2 text-sm">
                  Sounds good, I'll share my screen.
                </div>
              </div>
            </div>
            <div className="border-t /20 p-4">
              <form className="flex items-center gap-2">
              <Button variant="secondary" size="icon">
                  <Paperclip className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
                <Button variant="secondary" size="icon">
                  <GrEmoji className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
                <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
                <Button type="submit" variant="ghost" size="icon">
                  <SendIcon className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-l bg-subtle-black p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Personal</h2>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">New chat</span>
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-gold hover:text-dark-gold active:bg-dark-gold active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Olivia Martin</p>
                <p className="text-xs text-muted-foreground">Hey, how's it going?</p>
              </div>
              <div className="text-xs text-muted-foreground">2h</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-gold hover:text-dark-gold active:bg-dark-gold active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-xs text-muted-foreground">Just finished a great book!</p>
              </div>
              <div className="text-xs text-muted-foreground">4h</div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md /50 px-3 py-2 transition-colors hover:border-dark-gold hover:text-dark-gold active:bg-dark-gold active:text-dark-white hover:border"
              prefetch={false}
            >
              <Avatar className="border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Maria Gonzalez</p>
                <p className="text-xs text-muted-foreground">Excited for the weekend!</p>
              </div>
              <div className="text-xs text-muted-foreground">1d</div>
            </Link>
          </div>
        </div>
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


function MountainIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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


function SendIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function VideoIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}