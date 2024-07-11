"use client"

import Chat from '@/components/dash/chat';
import Conference from '@/components/dash/conference';
import Dash from '@/components/dash/dash';
import Help from '@/components/dash/help';
import Mailer from '@/components/dash/mailer';
import Settings from '@/components/dash/settings';
import Tasks from '@/components/dash/tasks';
import WhiteBoard from '@/components/dash/whiteboard';
import React from 'react';
import { useSnapshot } from 'valtio';
import DashProxy from '@/proxy/dash';

const Dashboard: React.FC = () => {
  const dashsnap = useSnapshot(DashProxy);

  return (
    <div className='min-h-[92vh] w-full text-dark-white'>
      {dashsnap.dashboard && <Dash />}
      {dashsnap.whiteboard && <WhiteBoard />}
      {dashsnap.chat && <Chat />}
      {dashsnap.videoCall && <Conference />}
      {dashsnap.tasks && <Tasks />}
      {dashsnap.Mailer && <Mailer />}
      {dashsnap.settings && <Settings />}
      {dashsnap.help && <Help />}
    </div>
  );
}

export default Dashboard;
