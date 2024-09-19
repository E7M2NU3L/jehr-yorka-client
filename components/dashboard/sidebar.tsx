"use client"

import { CircuitBoard, HelpCircle, LayoutDashboard, Mail, MessageCircle, Settings, Star, Timer, VideoIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { useSnapshot } from 'valtio';
import DashProxy from '@/proxy/dash';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DashLink = {
  id: keyof typeof DashProxy;
  Icon: JSX.Element;
  label: string;
  link: string;
};

const DashLinks: DashLink[] = [
  {
    id: 'dashboard',
    Icon: <LayoutDashboard />,
    label: 'Dashboard',
    link: '/dashboard'
  },
  {
    id: 'whiteboard',
    Icon: <CircuitBoard />,
    label: 'Whiteboard',
    link: '/room'
  },
  {
    id: 'chat',
    Icon: <MessageCircle />,
    label: 'Chat',
    link: '/dashboard/chat'
  },
  {
    id: 'tasks',
    Icon: <Timer />,
    label: 'Tasks',
    link: '/dashboard/tasks'
  },
  {
    id: 'Mailer',
    Icon: <Mail />,
    label: 'Mailer',
    link: '/dashboard/mailer'
  }
];

const SideFoot: DashLink[] = [
  {
    id: 'settings',
    Icon: <Settings />,
    label: 'Settings',
    link: '/dashboard/settings'
  },
  {
    id: 'help',
    Icon: <HelpCircle />,
    label: 'Help',
    link: '/dashboard/help'
  }
];

const Sidebar: React.FC = () => {
  const dashsnap = useSnapshot(DashProxy);

  const handleClick = (id: keyof typeof DashProxy) => {
    try {
      // Reset all states to false
      for (const key in DashProxy) {
        DashProxy[key as keyof typeof DashProxy] = false;
      }
      // Set the clicked state to true
      DashProxy[id] = true;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message);
      } else {
        console.log("Unknown Error!");
        toast.warning("Unknown Error!");
      }
    }
  };

  return (
    <div className='relative w-[10%] md:w-[5%] min-h-screen'>
      <ToastContainer />
      <section className='py-[1rem] border-[1.2px] border-subtle-gold flex justify-center'>
        <Link href="/">
          <Star className='text-dark-gold' />
        </Link>
      </section>

      <ul className='w-full flex flex-col items-center pt-[1rem]'>
        {DashLinks.map((content) => (
          <Link href={content.link} key={content.id}>
            <Button variant="ghost" onClick={() => handleClick(content.id)}>
              {content.Icon}
            </Button>
          </Link>
        ))}
      </ul>

      <ul className='absolute bottom-0 w-full flex flex-col items-center pt-[1rem]'>
        {SideFoot.map((content) => (
          <Link href={content.link} key={content.id}>
            <Button variant="ghost" onClick={() => handleClick(content.id)}>
              {content.Icon}
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
