import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'CSS', percentage: 80 },
  { name: 'C++', percentage: 70 },
  { name: 'Tailwind CSS', percentage: 86 },
  { name: 'MySQL', percentage: 60 },
  { name: 'Java', percentage: 65 },
  { name: 'React', percentage: 70 },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress.map((p, i) => (p < skills[i].percentage ? p + 1 : skills[i].percentage))
        );
      }, 20);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={progress[index]}
                  text={`${progress[index]}%`}
                  styles={buildStyles({
                    textColor: '#10B981',
                    pathColor: '#10F999',
                    trailColor: '#1F2937',
                  })}
                />
              </div>
              <p className="text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
