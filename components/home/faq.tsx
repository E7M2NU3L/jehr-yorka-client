import React from 'react'

const faqData = [
  {
    question: 'What features does your platform offer?',
    answer: 'Our platform includes a collaborative whiteboard, advanced task tracking, performance and time tracking, team communication, and team management, all at an affordable price.',
  },
  {
    question: 'How does the live whiteboard work?',
    answer: 'Our live whiteboard allows team members to brainstorm and plan in real-time, ensuring everyone is on the same page.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free trial so you can experience all the features before committing.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We prioritize your data security with robust encryption and secure cloud storage.',
  },
]

const Faq = () => {
  return (
    <div className="py-16 bg-cover">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-dark-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-200">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
