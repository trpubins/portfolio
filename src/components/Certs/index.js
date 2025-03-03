/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NumberedHeading } from '@common/styles';
import ShowcaseModal from '@components/Common/ShowcaseModal';
import { certifications } from '@config';
import { srConfig } from '@config/sr';
import { StyledBadge, StyledCertsSection } from './styles';

const Certs = () => {
  const revealContainer = useRef(null);
  const [activeBadge, setActiveBadge] = useState(null);

  const handleModalOpen = (badge) => {
    setActiveBadge(badge);
  };

  const handleModalClose = () => {
    setActiveBadge(null);
  };

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <>
      <StyledCertsSection id="certs" ref={revealContainer}>
        <NumberedHeading>Certifications I&apos;ve Earned</NumberedHeading>

        <div className="badges">
          {certifications.map((cert, index) => (
            <Badge key={index} cert={cert} onBadgeClick={() => handleModalOpen(cert)} />
          ))}
        </div>
      </StyledCertsSection>

      {activeBadge && (
        <ShowcaseModal
          isOpen={!!activeBadge}
          onClose={handleModalClose}
          imageSrc={activeBadge.img}
          imageAlt={activeBadge.name}
          title={activeBadge.fullName}
          descriptionHtml={activeBadge.descriptionHtml}
          tags={activeBadge.tags}
          linkText="Verify"
          linkUrl={activeBadge.verifyUrl}
        />
      )}
    </>
  );
};

const Badge = ({ cert, onBadgeClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledBadge
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      onClick={onBadgeClick}
    >
      <img src={cert.img} alt={cert.name} />
      {hovered && (
        <motion.div
          className="badge-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span>{cert.name}</span>
        </motion.div>
      )}
    </StyledBadge>
  );
};

export default Certs;
