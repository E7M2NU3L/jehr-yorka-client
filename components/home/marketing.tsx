import React from 'react'
import { LineChart, Group, Users, DollarSign } from 'lucide-react'

const marketingPoints = [
  {
    icon: <LineChart className="text-dark-green" />,
    title: 'Boost Productivity',
    description: 'Improve your team’s efficiency with tools designed to streamline workflow and increase productivity.',
  },
  {
    icon: <Group className="text-dark-green" />,
    title: 'Collaborative Environment',
    description: 'Enhance collaboration with live whiteboards, shared tasks, and real-time communication.',
  },
  {
    icon: <Users className="text-dark-green" />,
    title: 'Effortless Management',
    description: 'Manage your team with ease, from assigning tasks to tracking performance and time.',
  },
  {
    icon: <DollarSign className="text-dark-green" />,
    title: 'Cost-Effective',
    description: 'Get all the features you need at a price that works for your budget, without compromising quality.',
  },
]

const Marketing = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">How We Help Your Team Excel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-200">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marketing
