import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Docs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 py-6 md:px-6 md:py-8">
        <div className="container">
          <h1 className="text-3xl font-bold text-dark-white sm:text-4xl md:text-5xl" style={{
            fontFamily: "Oswald, sans-serif"
          }}>
            How to Use Our Productivity Platform
          </h1>
          <p className="mt-2 text-subtle-white/80 md:text-xl" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            Discover the key features and get the most out of our workplace productivity tools.
          </p>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Getting Started</h2>
              <p className="mt-4 text-dark-white/80 md:text-lg">
                Follow these steps to set up your account and start using our productivity platform.
              </p>
              <ol className="mt-6 space-y-4 text-dark-white/80">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Create an Account</h3>
                    <p className="mt-1">Sign up with your email address and create a password to get started.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Set Up Your Profile</h3>
                    <p className="mt-1">Add your name, job title, and a profile picture to personalize your account.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Create or Join Your Team</h3>
                    <p className="mt-1">Add your colleagues to your workspace and start collaborating.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Present your Progress and Performance</h3>
                    <p className="mt-1">Automate Updation of your progress which you can present or display to the HR</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Key Features</h2>
              <p className="mt-4 text-dark-white/80 md:text-lg">
                Explore the core functionalities of our productivity platform.
              </p>
              <ul className="mt-6 space-y-4 text-dark-white/80">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Task Management and Time Tracking</h3>
                    <p className="mt-1">Create tasks, assign them to team members, and track progress.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Project Collaboration</h3>
                    <p className="mt-1">Work together on projects, share files, and communicate in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Community Forums</h3>
                    <p className="mt-1">
                      Engage with your colleagues, share ideas, and get support in our discussion forums.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-green text-dark-black font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Email Integrations and Analytics</h3>
                    <p className="mt-1">
                      Monitor your email inbox, set reminders, and access analytics to optimize your workflow.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Community Discussions</h2>
            <p className="mt-4 text-dark-black/80 md:text-lg">
              Explore the latest conversations and start new discussions with your team.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Productivity Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">Share your favorite productivity hacks and learn from others.</p>
                </CardContent>
                <CardFooter>
                  <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Remote Work Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Discuss the unique challenges of working remotely and share solutions.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">Explore best practices for effective team collaboration.</p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Share tips and strategies for maintaining a healthy work-life balance.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Feature Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Share your ideas for new features and improvements to our platform.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Onboarding Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Share your experiences and advice for onboarding new team members.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group hover:shadow-2xl hover:shadow-dark-green/40 hover:scale-105 hover:translate-x-1 bg-dark-black border border-subtle-green transition-all ease-in-out cursor-pointer duration-300 text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>
                <CardHeader>
                  <CardTitle>Automation Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Discuss ways to automate your workflows and increase efficiency.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button>
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Start a New Discussion</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}