import React from 'react';
import { GrLinkNext } from 'react-icons/gr';

const blogs = [
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "Oliviya Rihya",
    date: "20 Jun 2024",
    title: "Conversations Patterns in Workplace and With HRs",
    description: "We sat down with London's fast growing brand and product design studio, Makr & Co. to find out the research and studies based on the Psychology of the HRs",
    tags: ["Design", "Research", "Interview"]
  },
  // Add 5 more blog objects here
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "John Doe",
    date: "18 Jun 2024",
    title: "The Future of Remote Work",
    description: "Exploring how remote work is changing the landscape of our daily lives.",
    tags: ["Remote Work", "Future", "Technology"]
  },
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "Jane Smith",
    date: "15 Jun 2024",
    title: "Effective Team Collaboration",
    description: "How to foster collaboration within your team using the latest tools and strategies.",
    tags: ["Collaboration", "Team", "Productivity"]
  },
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "Alice Johnson",
    date: "12 Jun 2024",
    title: "Advancements in AI Technology",
    description: "A deep dive into the latest advancements in artificial intelligence and what they mean for businesses.",
    tags: ["AI", "Technology", "Innovation"]
  },
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "Michael Brown",
    date: "10 Jun 2024",
    title: "Sustainable Design Practices",
    description: "How to implement sustainable practices in your design process.",
    tags: ["Sustainability", "Design", "Environment"]
  },
  {
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2023/04/13-Job-Interview-Tips-To-Help-You-Land-Your-Dream-Job.jpg",
    author: "Emily Davis",
    date: "08 Jun 2024",
    title: "Leadership in the Modern Workplace",
    description: "Key leadership skills needed to navigate the modern workplace.",
    tags: ["Leadership", "Workplace", "Skills"]
  },
];

interface CardProps {
    img: string;
    author: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
}

const BlogCard = ({ img, author, date, title, description, tags }: CardProps) => (
  <main className='w-[45vh] h-[55vh] m-4'>
    <img src={img} alt='placeholder' className='w-full h-[50%]' />

    <section className='h-[50%] w-full px-3'>
      <main className='flex w-full justify-between items-center'>
        <main className='text-subtle-white/80 text-sm flex justify-start items-center gap-x-3 font-medium pt-6 pb-3' style={{ fontFamily: "Lato, sans-serif" }}>
          <p>{author}</p>
          <span>.</span>
          <p>{date}</p>
        </main>

        <main className='justify-center flex items-center rounded-lg px-2 py-2 text-dark-white hover:bg-dark-white hover:text-dark-black transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95'>
          <GrLinkNext className='' />
        </main>
      </main>

      <h1 className='text-xl font-bold text-dark-white truncate' style={{
        fontFamily: "Oswald, sans-serif",
        maxHeight: '3rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }}>
        {title}
      </h1>

      <h1 className='text-md font-medium text-dark-white/80 pt-3 overflow-hidden' style={{
        fontFamily: "Anta, sans-serif",
        maxHeight: '4rem', // Adjust the maxHeight to fit two lines
        lineHeight: '1.5rem', // Adjust the lineHeight to ensure two lines fit within maxHeight
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}>
        {description}
      </h1>

      <section className='pt-5 flex justify-start items-center gap-x-4'>
        {tags.map(tag => (
          <div key={tag} className='rounded-lg border border-subtle-white px-4 py-1 font-bold truncate bg-subtle-white/15 text-dark-white' style={{
            fontFamily: "Oswald, sans-serif",
            maxHeight: '3rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          }}>
            <h1>{tag}</h1>
          </div>
        ))}
      </section>
    </section>
  </main>
);

const BlogList = () => (
  <section className='flex flex-wrap justify-center'>
    {blogs.map((blog, index) => (
      <BlogCard key={index} {...blog} />
    ))}
  </section>
);

export default BlogList;
