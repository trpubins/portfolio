/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NumberedHeading } from '@common/styles';
import { srConfig } from '@config/sr';
import { StyledCertsSection } from './styles';

const certifications = [
  { name: 'Solutions Architect', img: '/images/aws-sa.png' },
  { name: 'AI Practitioner', img: '/images/aws-aip.png' },
  { name: 'Cloud Practitioner', img: '/images/aws-cp.png' },
];

const Certs = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledCertsSection id="certs" ref={revealContainer}>
      <NumberedHeading>Certifications I&apos;ve Earned</NumberedHeading>
      <div className="flex justify-center items-center min-h-screen bg-gray-900 p-10">
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {certifications.map((cert, index) => (
            <HexCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </StyledCertsSection>
  );
};

const HexCard = ({ cert }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-32 h-36 flex items-center justify-center"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <img
        src={cert.img}
        alt={cert.name}
        width={112}
        height={112}
        className="object-cover rounded-lg z-10"
      />
      {hovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white text-sm font-semibold text-center px-2 clip-hexagon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {cert.name}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certs;
