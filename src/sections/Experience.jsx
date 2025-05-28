import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../sections/styles";
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { experiences } from '../constants';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[80%] h-[80%] object-contain' />
      </div>
    }
  >
    <div >
      <div className='flex items-center gap-1 mt-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

      <h3 className='text-white lg:text-[18px] text-[15px] font-bold'>{experience.title}</h3>
      </div>
      <div className='flex items-center gap-1 mt-1 text-[#afb0b6]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
        <p className='text-secondary lg:text-[15px] text-[10px]  font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>

      </div>
      <div className='flex items-center gap-1 mt-1 text-[#afb0b6]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p className='text-secondary lg:text-[15px] text-[10px] font-semibold' style={{ margin: 0 }}>{experience.location}</p>
      </div>

    </div>
    <ul className='mt-5 list-disc ml-2 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 lg:text-[12px] text-[10px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center gap-2`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work") //HOC for Experience
