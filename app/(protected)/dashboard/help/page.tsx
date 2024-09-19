import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function Help() {
  return (
    <div className="flex h-[92vh] overflow-y-scroll scroll-smooth scrollbar-hide w-full pb-8 text-white">
      <div className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold">Getting Started</h1>
          <div className="grid gap-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Welcome to our Productivity App</h2>
              <p className="mb-4 text-slate-300">
                Our app is designed to help you streamline your workflow and boost your productivity. In this guide,
                we'll walk you through the basics of getting started.
              </p>
              <div className="grid gap-4">
                <div className="rounded-lg border bg-black p-4">
                  <h3 className="mb-2 text-lg font-semibold">1. Create your account</h3>
                  <p className="text-slate-300">
                    Sign up for a new account on our website. You can do this by clicking the "Sign Up" button in the
                    top right corner.
                  </p>
                </div>
                <div className="rounded-lg border bg-black p-4">
                  <h3 className="mb-2 text-lg font-semibold">2. Download the app</h3>
                  <p className="text-slate-300">
                    Once you've created your account, you can download our app on your desktop or mobile device. You can
                    find the download links on our website.
                  </p>
                </div>
                <div className="rounded-lg border bg-black p-4">
                  <h3 className="mb-2 text-lg font-semibold">3. Customize your settings</h3>
                  <p className="text-slate-300">
                    Take some time to customize your settings and preferences to fit your workflow. You can adjust
                    things like notifications, task management, and more.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
              <div className="grid gap-4">
                <Collapsible className="rounded-lg border bg-black p-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-semibold">How do I create a new task?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-slate-300">
                      To create a new task, click the "+" button in the top right corner of the app. You can then fill
                      out the task details, set a due date, and assign it to a project or team member.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="rounded-lg border bg-black p-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-semibold">How do I share a document with my team?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-slate-300">
                      To share a document with your team, open the document in the app and click the "Share" button. You
                      can then select the team members you want to share the document with and set their permissions.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="rounded-lg border bg-black p-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-semibold">How do I track my team's progress?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-slate-300">
                      To track your team's progress, go to the "Dashboard" section of the app. Here, you'll see an
                      overview of all your team's tasks, including their status, due dates, and assigned team members.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
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


function CompassIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
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


function MailIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}