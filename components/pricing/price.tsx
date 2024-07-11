import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import {ImCross} from 'react-icons/im'

export default function Prices() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Pri<span className="text-dark-green">cing</span></h2>
          <p className="mt-4 text-dark-white/80 md:text-xl/relaxed" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            Choose the plan that fits your needs. No hidden fees, ever.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-dark-black shadow-sm shadow-subtle-black/80 outline-none ring-none border-0">
            <CardHeader>
              <CardTitle className="text-5xl text-dark-white font-extrabold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>Starter</CardTitle>
              <CardDescription className="font-medium text-lg text-dark-white/80" style={{
                fontFamily: "Lato, sans-serif"
              }}>Perfect for individuals and small teams.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold text-dark-white" style={{
                fontFamily: "Oswald, sans-serif"
              }}>$9</div>
              <div className="text-dark-white/80" style={{
                fontFamily: "Anta, sans-serif"
              }}>per month</div>
              <ul className="grid gap-2 text-sm">
              <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Analytics and Reporting
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  3 users
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  1 Team
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  File Storage - 75Mb
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Task Managements - 3
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Time Tracking
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Email Integration - limited
                </li>
                <li className="text-dark-white">
                  <ImCross className="mr-2 inline-block h-4 w-4 text-subtle-red" />
                  Real Time Whiteboard and Editors
                </li>
                <li className="text-dark-white">
                <ImCross className="mr-2 inline-block h-4 w-4 text-subtle-red" />
                  Employee Directory
                </li>
                <li className="text-dark-white">
                <ImCross className="mr-2 inline-block h-4 w-4 text-subtle-red" />
                  Knowledge Base
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"secondary"}>Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="bg-dark-black shadow-lg shadow-subtle-green/20 scale-105 outline-none ring-none border-0">
            <CardHeader>
              <CardTitle className="text-5xl text-dark-white font-extrabold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>Pro</CardTitle>
              <CardDescription className="font-medium text-lg text-dark-white/80" style={{
                fontFamily: "Anta, sans-serif"
              }}>Ideal for growing teams and small businesses.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl text-dark-white font-bold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>$29</div>
              <div className="text-dark-white/80" style={{
                fontFamily: "Anta, sans-serif"
              }}>per month</div>
              <ul className="grid gap-2 text-sm">
              <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Analytics and Reporting
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  50 users
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  7 Teams
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  File Storage - 250 Mb
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Task Managements - 20
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Time Tracking
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Email Integration
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Real Time Whiteboard and Editors
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Employee Directory
                </li>
                <li className="text-dark-white">
                <ImCross className="mr-2 inline-block h-4 w-4 text-subtle-red" />
                  Knowledge Base
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"secondary"}>Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="bg-dark-black shadow-2xl shadow-subtle-black/80 outline-none ring-none border-0">
            <CardHeader>
              <CardTitle className="text-5xl text-dark-white font-extrabold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>Enterprise</CardTitle>
              <CardDescription className="font-medium text-lg text-dark-white/80" style={{
                fontFamily: "Anta, sans-serif"
              }}>Tailored for large teams and organizations.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl text-dark-white font-bold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>$99</div>
              <div className="text-dark-white/80" style={{
                fontFamily: "Anta, sans-serif"
              }}>per month</div>
              <ul className="grid gap-2 text-sm">
              <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Analytics and Reporting
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  100 Users
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  20 Teams
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  File Storage - 2 Gb
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Task Managements - 40
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Time Tracking - Enhanced
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                    Email Integration - Enhanced
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Real Time Whiteboard and Editors
                </li>
                <li className="text-dark-white">
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Employee Directory
                </li>
                <li className="text-dark-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-subtle-green" />
                  Knowledge Base
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"secondary"}>Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
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