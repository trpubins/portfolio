/* eslint-disable @next/next/no-img-element */
import React from "react";
import Modal from './Modal';
import { ShowcaseWrapper } from './styles';

interface ShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  linkText?: string;
  linkUrl?: string;
}

const ShowcaseModal: React.FC<ShowcaseModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  linkText,
  linkUrl
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ShowcaseWrapper>
        <div className="showcase-badge">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="showcase-content">
          <h2>{title}</h2>
          <div className="divider" />
          <p>{description}</p>
          <div className="tags">
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {linkText && linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-link"
            >
              {linkText}
            </a>
          )}
        </div>
      </ShowcaseWrapper>
    </Modal>
  );
};

export default ShowcaseModal;
