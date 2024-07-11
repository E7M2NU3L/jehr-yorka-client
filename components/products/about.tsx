import { SVGProps } from "react"

export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <main className="w-full justify-around items-center flex-col md:flex-row flex py-[3.5rem] gap-y-[2.5rem] md:gap-y-0">
          <div className="flex justify-around items-center gap-y-[2.5rem] flex-col md:w-[50%] px-[1rem] md:px-0 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{
                fontFamily : "Oswald, sans-serif"
              }}>About <span className="text-dark-green">Jehr Tech Solutions</span></h2>
              <p className="text-dark-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{
                fontFamily : "Anta, sans-serif"
              }}>
                Jehr Tech Solutions is a leading provider of innovative products and services that empower businesses to
                thrive in the digital age. Our mission is to deliver cutting-edge technology solutions that drive
                efficiency, productivity, and growth for our clients.
              </p>
            </div>
            <div className="space-y-4 px-[1rem] md:px-[1.2rem]">
              <h3 className="text-xl font-semibold" style={{
                fontFamily: "Oswald, sans-serif"
              }}>Our Core Values</h3>
              <ul className="grid gap-2 text-dark-white/80">
                <li className="flex items-center gap-2" style={{
                    fontFamily: "Lato, sans-serif"
                }}>
                  <CheckIcon className="w-4 h-4 text-subtle-green" />
                  Innovation: We constantly seek new ways to outreach via tech
                </li>
                <li className="flex items-center gap-2" style={{
                    fontFamily: "Lato, sans-serif"
                }}>
                  <CheckIcon className="w-4 h-4 text-subtle-green" />
                  Integrity: We are committed to the highest standards of ethics.
                </li>
                <li className="flex items-center gap-2" style={{
                    fontFamily: "Lato, sans-serif"
                }}>
                  <CheckIcon className="w-4 h-4 text-subtle-green" />
                  Customer-Centricity: Our clients' success is at the heart of everything we do.
                </li>
                <li className="flex items-center gap-2" style={{
                    fontFamily: "Lato, sans-serif"
                }}>
                  <CheckIcon className="w-4 h-4 text-subtle-green" />
                  Collaboration: We believe in the power of teamwork
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[50%] px-[1rem] md:px-0">
            <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241225.jpg?t=st=1719827793~exp=1719831393~hmac=ab25c3e22578ebf1ea79e0521749459ed2b079e17e34da57ad1f902c61217637&w=996" className="" alt="placeholder" />
          </div>
          </main>
        </div>
      </section>
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