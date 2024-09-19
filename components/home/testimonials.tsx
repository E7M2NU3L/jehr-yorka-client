import React from 'react'

const testimonials = [
  {
    name: 'John Smith',
    title: 'CEO at TechCorp',
    quote: 'This platform has revolutionized the way our team collaborates. We’ve seen a significant boost in productivity.',
    image: '/path/to/john-smith.jpg',
  },
  {
    name: 'Sarah Johnson',
    title: 'Project Manager at Innovatech',
    quote: 'The task tracking and team management features are exactly what we needed to stay on top of our projects.',
    image: '/path/to/sarah-johnson.jpg',
  },
  {
    name: 'David Lee',
    title: 'CTO at Creativio',
    quote: 'The affordable pricing combined with the rich feature set makes this platform unbeatable.',
    image: '/path/to/david-lee.jpg',
  },
]

const Testimonials = () => {
  return (
    <div className="py-16 bg-cover">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-dark-green mb-4">{testimonial.title}</p>
              <p className="text-gray-200">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
