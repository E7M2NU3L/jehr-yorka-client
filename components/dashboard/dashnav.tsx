"use client";

import DashProxy from '@/proxy/dash';
import Image from 'next/image';
import React from 'react';
import { useSnapshot } from 'valtio';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { MdNotificationImportant } from 'react-icons/md';
import { Notify } from '@/utils/notifications/notify';

const Dashnav: React.FC = () => {
  const snap = useSnapshot(DashProxy);
  console.log(snap);

  const conditionalRender = () => {
    if (snap.Mailer) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Mailer</h1>
    }
    else if (snap.chat) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Chat</h1>
    }
    else if (snap.dashboard) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Dashboard</h1>
    }
    else if(snap.help) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Help</h1>
    } 
    else if (snap.settings) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Settings</h1>
    }
    else if (snap.tasks) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Tasks</h1>
    }
    else if (snap.videoCall) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Video Call</h1>
    }
    else if (snap.whiteboard) {
      return <h1 className='text-dark-white text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>WhiteBoard</h1>
    }
    else {
      return <h1 className='text-dark-white/70 text-4xl font-bold' style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>Loading...</h1>
    }
  }
  return (
    <div className='min-h-[8vh] w-full flex justify-between items-center px-[2rem] bg-dark-gray'>
      <section>
          {conditionalRender()}
      </section>
      <main className='flex items-center justify-around gap-[1.2rem]'>
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <section className='relative cursor-pointer'>
              <MdNotificationImportant className='text-dark-white/70 font-bold text-3xl' />
              <div className='absolute w-[12px] h-[12px] rounded-full bg-dark-red inset-1 text-dark-white flex justify-center items-center'>
                <h1 className='text-[8px]'>
                  5 
                </h1>
              </div>
            </section>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Notify />
          </DropdownMenuContent>
        </DropdownMenu>

        <section className='relative cursor-pointer'>
              <Link href={"/profile"}>
                <img src="/profile.png" alt='profile-pic' className='object-contain w-[34px] h-[34px] rounded-full border-dark-green border relative' />
                <div className='absolute w-[6px] h-[6px] rounded-full bg-dark-green inset-1'></div>
              </Link>
        </section>
      </main>
    </div>
  );
}

export default Dashnav;
