import React from "react";
import Modal from './Modal';
import { VideoWrapper } from './styles';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  srcMp4: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, srcMp4 }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VideoWrapper>
        <video autoPlay controls>
          <source src={srcMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
    </Modal>
  );
};

export default VideoModal;
