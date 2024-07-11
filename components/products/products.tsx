import Link from 'next/link'
import React from 'react'
import { BarChartIcon, BriefcaseIcon, CloudUploadIcon, CogIcon, PowerIcon, ShieldIcon } from './svgs'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const ProductsSection = () => {
  return (
    <section className="w-full pb-[5rem]">
    <div className="container px-4 md:px-6">
      <div className="space-y-4 pb-3">
        <div className="inline-block rounded-lg px-3 py-1 text-sm bg-subtle-red text-dark-white">Products</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"  style={{
                fontFamily: "Oswald, sans-serif"
            }}>What We Offer</h2>
        <p className="max-w-[700px] text-dark-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"  style={{
                fontFamily: "Anta, sans-serif"
            }}>
          <span className='text-dark-green'>Jehr-Tech Solutions</span> provides a comprehensive suite of products and services designed to help businesses of all sizes
          streamline their operations, increase efficiency, and drive growth.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Content Planner</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            A Social Media automation and real time collaboration tool to boost up your content planning, scheduling events, social media analytics and much more
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <BarChartIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Resume Designer</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            An Automated Resume Designer which automates designing through scraping your info from your social links, it has built in editors, cool templates etc.,
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <CogIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Hr Planning Tool</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            Complete Hr Planning, staffing, Human Resource Management, Task management and analytics, messaging, finance etc.,
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <ShieldIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Property Management Systems</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            User interactive PMS with built in Messaging, billing and Secure Vault for storing Electronic bills, Document etc.,
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <CloudUploadIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>CRM For Lawyers</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            Customer Relationship Management for Law Professionals to manage their workflow and manage reviews from clients
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
        <Card className="space-y-4 bg-dark-black border text-center justify-center pb-4 px-3 border-r-dark-red border-t-dark-red border-b-subtle-red border-l-subtle-red hover:translate-x-1 hover:scale-105 hover:shadow-xl hover:shadow-subtle-red/40 transition-all duration-300 ease-in-out">
          <div className=" rounded-md p-3 flex items-center justify-center">
            <PowerIcon className="w-6 h-6 text-dark-white/80" />
          </div>
          <h3 className="text-xl font-semibold text-subtle-red" style={{
            fontFamily: "Oswald, sans-serif"
          }}>Roadmap Publisher Tool</h3>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta, sans-serif"
          }}>
            A Complete Roadmap Designer with inbuilt Presenter to showcase Project Presentations, Workflow Tracking, Project Management
          </p>
          <Button variant={"secondary"}>
            Learn More
          </Button>
        </Card>
      </div>
    </div>

    <div className='text-center w-full justify-center items-center flex pt-[2.5rem]'>
    <Button variant={"outline"} >
        View More
    </Button>
    </div>
  </section>
  )
}

export default ProductsSection