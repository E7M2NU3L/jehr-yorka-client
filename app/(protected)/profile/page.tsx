"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { JSX, ClassAttributes, HTMLAttributes, useState, useEffect } from "react"
import { GetUser } from "@/actions/get-user"
import { toast } from "@/components/ui/use-toast"


interface UserDataProps {
  email: string | null | undefined;
  image: string | null | undefined;
  name: string | null | undefined;
}


export default function Component() {
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  const getUserClient = async () => {
    try {
      const promise = await GetUser();
      if (promise?.user) {
        setUserData({
          email: promise.user.email || '',
          image: promise.user.image || '',
          name: promise.user.name || ''
        });
      }
      
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: error.name,
          description: error.message
        })
      }
      else {
        toast({
          variant: 'destructive',
          title: 'Unknown Error',
          description: 'Internal Server Error'
        })
      }
    }
  }

  useEffect(() => {
    getUserClient();
  }, []);

  return (
    <div className="flex flex-col w-full mx-auto min-h-[100dvh]">
      <header className="px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto flex items-center justify-between">
         {userData ? (
          <>
           <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={userData?.image || ""} alt="@shadcn" />
              <AvatarFallback>{userData?.name?.toString().charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="text-lg text-white font-semibold">{userData?.name}</div>
              <div className="text-sm text-slate-200">{userData?.email}</div>
            </div>
          </div>
          </>
         ) : (
          <>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>UK</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="text-lg text-slate-400 font-semibold">Loading...</div>
              <div className="text-sm text-slate-500">Loading...</div>
            </div>
          </div>
          </>
         )}
          <Button variant="secondary">Edit Profile</Button>
        </div>
      </header>
      <main className="container mx-auto py-8 md:py-12">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-dark-green bg-dark-black text-dark-white">
            <CardHeader>
              <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-slate-200">Teams</div>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-2xl font-bold">325</div>
                  <div className="text-sm text-slate-200">Tasks Completed</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-slate-200">Productivity</div>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-slate-200">Meetings Attended</div>
                </div>
              </div>
              <LinechartChart className="max-w-sm" />
            </CardContent>
          </Card>
          <Card className="border border-dark-green bg-dark-black text-dark-white">
            <CardHeader>
              <CardTitle>Pricing Plan</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="grid gap-0.5">
                  <div className="text-lg font-semibold">Pro</div>
                  <div className="text-sm text-slate-200">$19/month</div>
                </div>
                <Button variant="secondary">Upgrade</Button>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Storage</div>
                  <div className="text-sm">100GB</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Collaborators</div>
                  <div className="text-sm">10</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Projects</div>
                  <div className="text-sm">Unlimited</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-dark-green bg-dark-black text-dark-white">
            <CardHeader>
              <CardTitle>Billing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="grid gap-0.5">
                  <div className="text-lg font-semibold">Visa *1234</div>
                  <div className="text-sm text-slate-200">Expires 06/25</div>
                </div>
                <Button variant="secondary">Update</Button>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Subscription Status</div>
                  <div className="text-sm text-green-500">Active</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Next Billing Date</div>
                  <div className="text-sm">June 15, 2024</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Total Spent</div>
                  <div className="text-sm">$228.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-8 md:mt-12">
          <Card className="border border-dark-green bg-dark-black text-dark-white">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <BellIcon className="h-5 w-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">New Feature Release</div>
                    <div className="text-sm text-slate-200">Check out the latest updates to our platform.</div>
                    <div className="text-xs text-slate-200">May 15, 2023</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary p-2 text-secondary-foreground">
                    <XIcon className="h-5 w-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Billing Reminder</div>
                    <div className="text-sm text-slate-200">Your subscription will renew on June 15, 2024.</div>
                    <div className="text-xs text-slate-200">May 1, 2023</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-500 p-2 text-green-500-foreground">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Task Completed</div>
                    <div className="text-sm text-slate-200">
                      You completed the "Prepare quarterly report" task.
                    </div>
                    <div className="text-xs text-slate-200">April 30, 2023</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-8 md:mt-12">
          <Card className="border border-dark-green bg-dark-black text-dark-white">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <div className="text-sm font-medium">Dark Mode</div>
                  <Switch />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div className="text-sm font-medium">Email Notifications</div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div className="text-sm font-medium">Productivity Tracking</div>
                  <Switch />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div className="text-sm font-medium">Team Collaboration</div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
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


function LinechartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value : any) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="#1fd655" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function XIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}