import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Main() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-dark-black py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold text-background md:text-5xl lg:text-6xl">
                Unlock Your Team's Potential with Quixore Productivity
              </h1>
              <p className="mt-4 text-lg text-background-foreground md:text-xl">
                Streamline your workflows, boost collaboration, and drive innovation with our comprehensive workplace
                productivity platform.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Button>Get Started</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Elevate Your Productivity with Our Powerful Features</h2>
              <p className="mt-4 text-slate-200 md:text-xl">
                Discover how our platform can transform the way your team works.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <ClapperboardIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Collaborative Whiteboard</h3>
                <p className="mt-2 text-slate-200">
                  Bring your team together with a live, interactive whiteboard for planning, brainstorming, and task
                  management.
                </p>
              </div>
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <KanbanIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Visual Reporting</h3>
                <p className="mt-2 text-slate-200">
                  Gain insights into your team's progress with Kanban boards, Gantt charts, and other visual reporting
                  tools.
                </p>
              </div>
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <TimerIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Performance Tracking</h3>
                <p className="mt-2 text-slate-200">
                  Monitor your team's productivity and efficiency with advanced time tracking and performance analytics.
                </p>
              </div>
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <MailIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Email Reporting</h3>
                <p className="mt-2 text-slate-200">
                  Gain insights into your team's email activity and communication patterns to optimize workflows.
                </p>
              </div>
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <WebcamIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Live Chat</h3>
                <p className="mt-2 text-slate-200">
                  Foster real-time collaboration and communication with a built-in live chat application for your team.
                </p>
              </div>
              <div className="rounded-lg  bg-cover border border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-green p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full -foreground">
                  <MergeIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Seamless Integrations</h3>
                <p className="mt-2 text-slate-200">
                  Streamline your workflows by connecting Quixore Productivity with your favorite tools and services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-cover py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Flexible Pricing to Fit Your Needs</h2>
              <p className="mt-4 text-slate-200 md:text-xl">
                Choose the plan that works best for your team and budget.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-lg bg-dark-black p-6 shadow-md">
                <CardHeader>
                  <CardTitle className="text-dark-white">Starter</CardTitle>
                  <CardDescription className="text-slate-200">Perfect for small teams and individuals.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center text-white">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="ml-1 text-slate-200">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-slate-200">
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Up to 5 users
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      5 GB storage
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Basic features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-lg bg-dark-black p-6 shadow-md">
                <CardHeader>
                  <CardTitle className="text-dark-white">Pro</CardTitle>
                  <CardDescription className="text-slate-200">Ideal for growing teams and small businesses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center text-white">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="ml-1 text-slate-200">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-slate-200">
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Up to 20 users
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      20 GB storage
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Advanced features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-lg bg-dark-black p-6 shadow-md">
                <CardHeader>
                  <CardTitle className="text-dark-white">Enterprise</CardTitle>
                  <CardDescription className="text-slate-200">Tailored for large teams and organizations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-center text-white">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="ml-1 text-slate-200">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-slate-200">
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Unlimited users
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Unlimited storage
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-dark-green mr-2 h-4 w-4 " />
                      Enterprise-grade features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold md:text-4xl">About Quixore Productivity</h2>
              <p className="mt-4 text-slate-200 md:text-xl">
                Quixore Productivity is a comprehensive workplace productivity platform designed to help teams of all sizes
                streamline their workflows, boost collaboration, and drive innovation. Our mission is to empower
                businesses with the tools and technologies they need to thrive in the modern work environment.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-dark-black p-6 rder border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-greenmd">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cover bo -foreground">
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Collaborative Culture</h3>
                  <p className="mt-2 text-slate-200">
                    We believe in the power of teamwork and collaboration. Our platform is designed to foster open
                    communication, shared understanding, and collective problem-solving.
                  </p>
                </div>
                <div className="rounded-lg bg-dark-black p-6 rder border-dark-green hover:shadow-2xl hover:shadow-dark-green transition-all duration-300 ease-in-out text-dark-greenmd">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cover bo -foreground">
                    <InfoIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Innovative Solutions</h3>
                  <p className="mt-2 text-slate-200">
                    We are constantly exploring new technologies and methodologies to help our clients stay ahead of the
                    curve. Our platform is designed to be flexible, scalable, and future-proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
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


function GroupIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function InfoIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function KanbanIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 5v11" />
      <path d="M12 5v6" />
      <path d="M18 5v14" />
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


function MergeIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
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


function TimerIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}


function WebcamIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}