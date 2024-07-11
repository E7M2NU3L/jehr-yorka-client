import BlogList from '@/components/blogs/blogcard'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

import React from 'react'
import { GrLinkNext } from 'react-icons/gr'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function BlogPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}


const Blogs = () => {
  return (
    <div className='min-h-[90vh]'>
      <section className='pt-[4rem] max-w-6xl mx-auto px-[1rem] md:px-0'>
        <h1 className='text-5xl font-bold text-dark-white' style={{
          fontFamily: "Oswald, sans-serif",
        }}>
          Endure with <span className='text-subtle-gold px-2'>Quixore</span> a product from <span className='text-subtle-green'>JEHR-Tech Solutions</span>
        </h1>

        <h1 className='text-xl font-medium text-dark-white/70 pt-[1.3rem]' style={{
          fontFamily: "Anta, sans-serif"
        }}>
          Regular blogs on Workplace productivity, recent news on Tech and Profession, Informative content and much more, get to know more about the products designed and developed by JEHR
        </h1>

        <section className='flex justify-start items-center gap-x-0 w-full pt-[1.2rem]'>
          <input placeholder='productivity....' className='h-10 px-2 rounded-md font-bold outline-none active:outline-none ring-0 text-dark-black' style={{
            fontFamily: "Anta, sans-serif"
          }} />
          <Button>
            <Search />
          </Button>
        </section>
      </section>

      <section className='py-[5rem] px-4 md:px-[5rem]'>
        <h1 className='text-5xl font-bold text-dark-white pb-5' style={{ fontFamily: "Oswald, sans-serif" }}>
          Recent <span className='text-subtle-gold px-2'>Blogs</span>
        </h1>

        <section className='min-h-[50vh] flex md:flex-row flex-col justify-between gap-x-0 md:gap-x-[2.4rem] gap-y-[2.4rem] md:gap-y-0 items-start'>
          <main className='w-full md:w-[50%] min-h-[50vh] flex flex-col'>
            <img src="https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg" alt='thumbnail' className='object-cover w-full h-[35vh]' />

            <section className='min-h-[20vh]'>
              <main className='text-subtle-white/80 text-sm flex justify-start items-center gap-x-3 font-medium pt-6 pb-3' style={{ fontFamily: "Lato, sans-serif" }}>
                <p>Oliviya Rihya</p>
                <span>.</span>
                <p>20 Jun 2024</p>
              </main>

              <h1 className='text-3xl font-bold text-dark-white truncate' style={{
                fontFamily: "Oswald, sans-serif",
                maxHeight: '3rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}>
                Conversations Patterns in Workplace and With HRs
              </h1>

              <h1 className='text-lg font-medium text-dark-white/80 pt-3'>
                We sat down with Londons fast growing brand and product design studio, Makr & Co. to find out the research and studies based on the Psychology of the HRs
              </h1>

              <main className='w-full justify-between pe-[1rem] flex items-center'>
              <section className='pt-5 flex justify-start items-center gap-x-4'>
                <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                  <h1>Design</h1>
                </div>
                <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                  <h1>Research</h1>
                </div>
                <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                  <h1>Interview</h1>
                </div>
              </section>

                <main className='justify-center flex items-center rounded-lg px-2 py-2 text-dark-white hover:bg-dark-white hover:text-dark-black transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95'>
                  <GrLinkNext className='' />
                </main>
              </main>
            </section>
          </main>

            <main className='w-full md:w-[50%] min-h-[50vh] flex flex-col gap-y-[2rem]'>
              <section className='flex flex-col md:flex-row w-full min-h-[20vh] gap-y-[2rem] md:gap-x-[2rem]'>
                  <section className='md:w-[50%] w-full min-h-[20vh]'>
                    <img src='https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg' alt='placeholder' className='w-full h-full object-cover' style={{ maxHeight: '25vh' }} />
                  </section>
                  <section className='min-h-[20vh] md:w-[50%] w-full'>
                    <main className='text-subtle-white/80 text-sm flex justify-start items-center gap-x-3 font-medium pt-6 pb-3' style={{ fontFamily: "Lato, sans-serif" }}>
                      <p>Oliviya Rihya</p>
                      <span>.</span>
                      <p>20 Jun 2024</p>
                    </main>

                    <h1 className='text-xl font-bold text-dark-white truncate' style={{
                      fontFamily: "Oswald, sans-serif",
                      maxHeight: '3rem',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}>
                      Conversations Patterns in Workplace and With HRs
                    </h1>

                    <h1 className='text-md font-medium text-dark-white/80 pt-3 truncate' style={{
                      fontFamily: "Anta, sans-serif",
                      maxHeight: '2rem',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}>
                      We sat down with Londons fast growing brand and product design studio, Makr & Co. to find out the research and studies based on the Psychology of the HRs
                    </h1>

                    <main className='w-full justify-between flex items-center'>
                    <section className='pt-5 flex justify-start items-center gap-x-4'>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Design</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Research</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Interview</h1>
                      </div>
                    </section>

                      <main className='justify-center flex items-center rounded-lg px-2 py-2 text-dark-white hover:bg-dark-white hover:text-dark-black transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95'>
                        <GrLinkNext className='' />
                      </main>
                    </main>
              </section>
              </section>
              <section className='flex flex-col md:flex-row w-full min-h-[20vh] gap-y-[2rem] md:gap-x-[2rem]'>
                    <section className='md:w-[50%] w-full min-h-[20vh]'>
                      <img src='https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg' alt='placeholder' className='w-full h-full object-cover' style={{ maxHeight: '25vh' }} />
                    </section>
                    <section className='min-h-[20vh] md:w-[50%] w-full'>
                      <main className='text-subtle-white/80 text-sm flex justify-start items-center gap-x-3 font-medium pt-6 pb-3' style={{ fontFamily: "Lato, sans-serif" }}>
                        <p>Oliviya Rihya</p>
                        <span>.</span>
                        <p>20 Jun 2024</p>
                      </main>

                      <h1 className='text-xl font-bold text-dark-white truncate' style={{
                        fontFamily: "Oswald, sans-serif",
                        maxHeight: '3rem',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      }}>
                        Conversations Patterns in Workplace and With HRs
                      </h1>

                      <h1 className='text-md font-medium text-dark-white/80 pt-3 truncate' style={{
                        fontFamily: "Anta, sans-serif",
                        maxHeight: '2rem',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      }}>
                        We sat down with Londons fast growing brand and product design studio, Makr & Co. to find out the research and studies based on the Psychology of the HRs
                      </h1>

                      <main className='w-full justify-between flex items-center'>
                    <section className='pt-5 flex justify-start items-center gap-x-4'>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Design</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Research</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Interview</h1>
                      </div>
                    </section>

                      <main className='justify-center flex items-center rounded-lg px-2 py-2 text-dark-white hover:bg-dark-white hover:text-dark-black transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95'>
                        <GrLinkNext className='' />
                      </main>
                    </main>
                </section>
              </section>
              <section className='flex flex-col md:flex-row w-full min-h-[20vh] gap-y-[2rem] md:gap-x-[2rem]'>
                    <section className='md:w-[50%] w-full min-h-[20vh]'>
                      <img src='https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg' alt='placeholder' className='w-full h-full object-cover' style={{ maxHeight: '25vh' }} />
                    </section>
                    <section className='min-h-[20vh] md:w-[50%] w-full'>
                      <main className='text-subtle-white/80 text-sm flex justify-start items-center gap-x-3 font-medium pt-6 pb-3' style={{ fontFamily: "Lato, sans-serif" }}>
                        <p>Oliviya Rihya</p>
                        <span>.</span>
                        <p>20 Jun 2024</p>
                      </main>

                      <h1 className='text-xl font-bold text-dark-white truncate' style={{
                        fontFamily: "Oswald, sans-serif",
                        maxHeight: '3rem',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      }}>
                        Conversations Patterns in Workplace and With HRs
                      </h1>

                      <h1 className='text-md font-medium text-dark-white/80 pt-3 truncate' style={{
                        fontFamily: "Anta, sans-serif",
                        maxHeight: '2rem',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      }}>
                        We sat down with Londons fast growing brand and product design studio, Makr & Co. to find out the research and studies based on the Psychology of the HRs
                      </h1>

                      <main className='w-full justify-between flex items-center'>
                    <section className='pt-5 flex justify-start items-center gap-x-4'>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Design</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Research</h1>
                      </div>
                      <div className='rounded-lg border border-subtle-white px-4 py-1 font-bold bg-subtle-white/15 text-dark-white' style={{ fontFamily: "Oswald, sans-serif" }}>
                        <h1>Interview</h1>
                      </div>
                    </section>

                      <main className='justify-center flex items-center rounded-lg px-2 py-2 text-dark-white hover:bg-dark-white hover:text-dark-black transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95'>
                        <GrLinkNext className='' />
                      </main>
                    </main>
                </section>
              </section>
          </main>
        </section>
    </section>


      <section className='px-4 md:px-[5rem] py-[5rem]'>
        <main className='flex justify-between items-center w-full'>
        <h1 className='text-5xl font-bold text-dark-white pb-5' style={{ fontFamily: "Oswald, sans-serif" }}>
          All <span className='text-subtle-green px-2'>Blog Posts</span>
        </h1>
        <section className='flex justify-start items-center gap-x-0'>
          <input placeholder='productivity....' className='h-10 px-2 rounded-md font-bold outline-none active:outline-none ring-0 text-dark-black' style={{
            fontFamily: "Anta, sans-serif"
          }} />
          <Button>
            <Search />
          </Button>
        </section>
        </main>
        <BlogList />
      </section>
      <BlogPagination />
    </div>
  )
}

export default Blogs