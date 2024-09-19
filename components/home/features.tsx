import React from 'react'
import { CheckIcon } from 'lucide-react'

const features = [
  {
    title: 'Collaborative Whiteboard',
    description: 'Brainstorm and plan in real-time with your team on an intuitive, live whiteboard.',
    icon: <CheckIcon />,
  },
  {
    title: 'Advanced Task Tracking',
    description: 'Manage tasks visually with Kanban boards, trees, and detailed reports.',
    icon: <CheckIcon />,
  },
  {
    title: 'Performance & Time Tracking',
    description: 'Track team performance and time spent on tasks with detailed analytics.',
    icon: <CheckIcon />,
  },
  {
    title: 'Team Communication',
    description: 'Communicate seamlessly with integrated live chat and email reports.',
    icon: <CheckIcon />,
  },
  {
    title: 'Team Management',
    description: 'Effortlessly manage team members and monitor their progress.',
    icon: <CheckIcon />,
  },
  {
    title: 'Affordable Pricing',
    description: 'Get all these powerful features at a price that fits your budget.',
    icon: <CheckIcon />,
  },
]

const Features = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center border border-dark-green hover:shadow-dark-green hover:shadow-xl hover:translate-x-1 duration-200 ease-in-out transition-all text-green-500 p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-dark-green mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
