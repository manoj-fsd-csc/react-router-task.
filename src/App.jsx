import React from 'react'
import Topbar from './components/Topbar'
import All from './components/All'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



function App() {

  const fsd = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      paragraph:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
       
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      paragraph:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
       
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      paragraph:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
       
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title: "Best Books to Learn Full-Stack Development",
      paragraph:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      paragraph:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      paragraph:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
       
    },
  ];

  const ds = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      paragraph:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      readmore: "READ MORE >>",
      footer: "28 November 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-768x384.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      paragraph:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      readmore: "READ MORE >>",
      footer: "15 November 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      paragraph:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      readmore: "READ MORE >>",
      footer: "10 November 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      paragraph:
        "India has been making some serious waves in the world of data. Just like the",
      readmore: "READ MORE >>",
      footer: "8 November 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      paragraph:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      readmore: "READ MORE >>",
      footer: "28 August 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      paragraph:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      readmore: "READ MORE >>",
      footer: "26 October 2023 . No Comments",
    },
  ];

  const cs = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      paragraph:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      readmore: "READ MORE >>",
      footer: "4 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      paragraph:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      readmore: "READ MORE >>",
      footer: "25 September 2023 . No Comments",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/016/270/671/original/abstract-mesh-hacker-and-shield-cybersecurity-concept-vs-comparison-between-ethical-hacking-ethical-attack-white-hat-hacking-and-system-on-beautiful-blue-background-digital-futuristic-modern-vector.jpg",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      paragraph:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      readmore: "READ MORE >>",
      footer: "27 December 2022 . No Comments",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.4n2CTfPyEssxWTS7ei_B4wAAAA?rs=1&pid=ImgDetMain",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      paragraph:
        "Look around today, you will witness that we are more reliant on technology and devices",
      readmore: "READ MORE >>",
      footer: "20 December 2022 . 1 Comment",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      paragraph:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      readmore: "READ MORE >>",
      footer: "9 November 2022 . 1 Comment",
    },
    {
      image:
        "https://shahrukhathar.info/wp-content/uploads/2021/01/Cybersecurity-Protection-1536x1024-1.jpg",
      title:
        "How Is Cyber Security Important To Our Lives?",
      paragraph:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      readmore: "READ MORE >>",
      footer: "22 June 2022 . No Comments",
    },
  ];

  const career = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      title: "Top 5 Product-Based Companies That Don’t Require Coding",
      paragraph:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      readmore: "READ MORE >>",
      footer: "13 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      paragraph:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      readmore: "READ MORE >>",
      footer: "4 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      paragraph:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      readmore: "READ MORE >>",
      footer: "2 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      paragraph:
        "The world is moving towards automating the testing of products in order to increase work",
      readmore: "READ MORE >>",
      footer: "1 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-768x402.webp",
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      paragraph:
        "The world is moving towards modernization leading to an increase in the popularity of civil",
      readmore: "READ MORE >>",
      footer: "1 December 2023 . No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-768x402.webp",
      title: "9 Best Product-Based Companies for Project Management",
      paragraph:
        "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
      readmore: "READ MORE >>",
      footer: "December 1, 2023 . No Comments",
    },
  ];

  const allcards = [...fsd, ...ds, ...cs, ...career];


  return <>
    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route path='/all' element={<All data1={allcards} />} />
        <Route path='/fullstack' element={<Fullstack data2={fsd} />} />
        <Route path='/dscience' element={<Datascience data3={ds} />} />
        <Route path='/cyber' element={<Cybersecurity data4={cs} />} />
        <Route path='/career' element={<Career data5={career} />} />
        <Route path='/*' element={<Navigate to='/all' />} />
      </Routes>
    </BrowserRouter>
    
  </>
}

export default App