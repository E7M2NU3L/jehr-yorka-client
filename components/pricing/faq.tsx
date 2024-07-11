import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SVGProps } from "react"

export default function FaQ() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-24">
          <div className="grid gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{
                fontFamily: "Oswald, sans-serif"
              }}>FAQs</h2>
              <p className="text-dark-white/80 md:text-xl/relaxed" style={{
                fontFamily: "Helvetica, sans-serif"
              }}>Answers to common questions.</p>
            </div>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                What is the difference between the plans?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-4 p-4 text-dark-white/80" style={{
                  fontFamily: "Anta, sans-serif"
                }}>
                  <p>
                    The main differences between the plans are the number of features, storage, and user limits. The
                    Starter plan is perfect for individuals and small teams, the Pro plan is ideal for growing teams and
                    businesses, and the Enterprise plan is tailored for large organizations and teams.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Can I cancel my subscription at any time?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-4 p-4 text-dark-white/80" style={{
                  fontFamily: "Anta, sans-serif"
                }}>
                  <p>
                    Yes, you can cancel your subscription at any time. We dont lock you into long-term contracts. If
                    you cancel, your subscription will continue until the end of the current billing period.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Do you offer any discounts or promotions?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-4 p-4 text-dark-white/80" style={{
                  fontFamily: "Anta, sans-serif"
                }}>
                  <p>
                    Yes, we do offer discounts and promotions from time to time. You can check our website or sign up
                    for our newsletter to stay up-to-date on the latest offers.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="mt-12 grid gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Future Updates</h2>
            <p className="text-dark-white/80 md:text-xl/relaxed">Check out whats coming soon.</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Improved Analytics</h3>
              <p className="text-dark-white/80">
                Get more detailed insights into your data with our enhanced analytics tools.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Video Collaboration Features</h3>
              <p className="text-dark-white/80">
                Streamline teamwork with new collaboration features like real-time editing and commenting.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Mobile App</h3>
              <p className="text-dark-white/80">
                Access your data on the go with our new mobile app, available for both iOS and Android.
              </p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}