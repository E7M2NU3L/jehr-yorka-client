"use client";
import React from 'react'
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { MdManageAccounts } from 'react-icons/md';

const Chat = () => {
    const [clicked, setClicked] = React.useState(false);
  return (
    <div className='h-[92vh] flex'>
        <section className='w-[20%] h-full overflow-y-hidden'>
            <section className='w-full h-[20%] bg-dark-black'>
                <h1 className='text-lg text-dark-white pb-2' style={{
                            fontFamily: "Oswald, sans-serif",
                            fontWeight: 700
                }}>
                    Recent Updates                    
                </h1>

                <section className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide pt-[1rem] gap-x-[1.2rem]'>
                    <main className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='rounded-full relative hover:shadow-2xl hover:translate-x-1 w-[42px] h-[42px] hover:scale-105 transition-all duration-200 ease-in-out'>
                            <img src='/profile.png' alt='profile' className='object-contain relative z-10 rounded-full border-2 border-t-dark-gold border-b-dark-green border-l-dark-red border-r-dark-white border-dashed' />
                        </div>
                        <main>
                            <h1 className='text-sm line-clamp-3 font-medium text-dark-white/80 pt-2' style={{
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 400
                            }}>
                                Web Teams
                            </h1>
                        </main>
                    </main>
                    <main className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='rounded-full relative hover:shadow-2xl hover:translate-x-1 w-[42px] h-[42px] hover:scale-105 transition-all duration-200 ease-in-out'>
                            <img src='/profile.png' alt='profile' className='object-contain relative z-10 rounded-full border-2 border-t-dark-gold border-b-dark-green border-l-dark-red border-r-dark-white border-dashed' />
                        </div>
                        <main>
                            <h1 className='text-sm line-clamp-3 font-medium text-dark-white/80 pt-2' style={{
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 400
                            }}>
                                Web Teams
                            </h1>
                        </main>
                    </main>
                    <main className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='rounded-full relative hover:shadow-2xl hover:translate-x-1 w-[42px] h-[42px] hover:scale-105 transition-all duration-200 ease-in-out'>
                            <img src='/profile.png' alt='profile' className='object-contain relative z-10 rounded-full border-2 border-t-dark-gold border-b-dark-green border-l-dark-red border-r-dark-white border-dashed' />
                        </div>
                        <main>
                            <h1 className='text-sm line-clamp-3 font-medium text-dark-white/80 pt-2' style={{
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 400
                            }}>
                                Web Teams
                            </h1>
                        </main>
                    </main>
                    <main className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='rounded-full relative hover:shadow-2xl hover:translate-x-1 w-[42px] h-[42px] hover:scale-105 transition-all duration-200 ease-in-out'>
                            <img src='/profile.png' alt='profile' className='object-contain relative z-10 rounded-full border-2 border-t-dark-gold border-b-dark-green border-l-dark-red border-r-dark-white border-dashed' />
                        </div>
                        <main>
                            <h1 className='text-sm line-clamp-3 font-medium text-dark-white/80 pt-2' style={{
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 400
                            }}>
                                Web Teams
                            </h1>
                        </main>
                    </main>
                    <main className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='rounded-full relative hover:shadow-2xl hover:translate-x-1 w-[42px] h-[42px] hover:scale-105 transition-all duration-200 ease-in-out'>
                            <img src='/profile.png' alt='profile' className='object-contain relative z-10 rounded-full border-2 border-t-dark-gold border-b-dark-green border-l-dark-red border-r-dark-white border-dashed' />
                        </div>
                        <main>
                            <h1 className='text-sm line-clamp-3 font-medium text-dark-white/80 pt-2' style={{
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 400
                            }}>
                                Web Teams
                            </h1>
                        </main>
                    </main>
                </section>
            </section>
            <section className='w-full h-[40%] bg-dark-green'></section>
            <section className='w-full h-[40%] bg-dark-red'></section>
        </section>
        <section className='w-[80%] h-[92vh] bg-dark-black'>
            <>
                <div className='h-full w-full flex justify-center items-center'>
                    <section className='flex flex-col max-w-4xl'>
                        <h1 className='text-3xl text-dark-white pb-2' style={{
                            fontFamily: "Oswald, sans-serif",
                            fontWeight: 700
                        }}>
                            Yorka <span className='text-dark-gold'>Chats</span>
                        </h1>
                        <h1 className='text-md font-meduim text-white/70' style={{
                            fontFamily: "Helvetica, sans-serif",
                            fontWeight: 400
                        }}>
                            Chat with your teams, to endure productivity and time management
                        </h1>
                        <section className='flex gap-x-[1.2rem] pt-[1.2rem]'>
                            <Button className='flex justify-center items-center gap-x-3' variant={"secondary"}>
                                <Plus />
                                <h1 className='text-lg font-bold text-dark-white' style={{
                                    fontFamily: "Oswald, sans-serif",
                                    fontWeight: 700
                                }}>
                                    Create Team
                                </h1>
                            </Button>
                            <Button className='flex justify-center items-center gap-x-3' variant={"outline"}>
                                <MdManageAccounts />
                                <h1 className='text-lg font-bold text-dark-white' style={{
                                    fontFamily: "Oswald, sans-serif",
                                    fontWeight: 700
                                }}>
                                    Manage Teams
                                </h1>
                            </Button>
                        </section>
                    </section>
                </div>
            </>

            <>
            
            </>
        </section>
    </div>
  )
}

export default Chat