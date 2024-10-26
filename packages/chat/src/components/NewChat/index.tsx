import clsx from 'clsx';
import { useRef, useState } from 'react';

import { ClassName } from '@/constants';
import { type TurnProps } from '@/types';

import mockAvatar from '../../assets/blank-image.png';
import { Header, type HeaderProps } from '../Header';
import type { INewFooter } from '../NewFooter';
import { NewFooter } from '../NewFooter';
import { type IWelcomeMessage, WelcomeMessage } from '../WelcomeMessage';
import { chatContainer, dialogContainer } from './NewChat.css';

interface INewChat extends HeaderProps, IWelcomeMessage, INewFooter {
  turns: TurnProps[];
  color?: string;
  children?: React.ReactNode;
}

export const NewChat: React.FC<INewChat> = ({
  buttons,
  showPoweredBy,
  messageInputProps,
  title,
  description,
  avatar,
  privacyURL,
  children,
}) => {
  // const [chatMessages, setChatMessages] = useState(messages ?? []);
  const [newMessage, setNewMessage] = useState('');
  // const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  const scrollableAreaRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (scrollableAreaRef.current) {
  //     scrollableAreaRef.current.scrollTo({
  //       top: scrollableAreaRef.current.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [chatMessages]);

  // const handleScroll = () => {
  //   if (scrollableAreaRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = scrollableAreaRef.current;
  //     const isAboveBottom = scrollTop + clientHeight < scrollHeight - 1;
  //     setShowScrollToBottom(isAboveBottom);
  //   }
  // };

  // useEffect(() => {
  //   const currentRef = scrollableAreaRef.current;
  //   if (currentRef) {
  //     currentRef.addEventListener('scroll', handleScroll);
  //   }
  //   return () => {
  //     if (currentRef) {
  //       currentRef.removeEventListener('scroll', handleScroll);
  //     }
  //   };
  // }, []);

  const handleSubmit = async () => {
    if (newMessage.trim()) {
      // setChatMessages((prevMessages) => [...prevMessages, { from: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && event.metaKey) {
      handleSubmit();
    }
  };

  // Trigger scroll when manually clicking the scroll button
  // const handleScrollToBottom = () => {
  //   if (scrollableAreaRef.current) {
  //     scrollableAreaRef.current.scrollTo({
  //       top: scrollableAreaRef.current.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className={clsx(ClassName.CHAT, chatContainer)} onKeyDown={handleKeyDown}>
      <Header title={title} image={mockAvatar} />
      <div ref={scrollableAreaRef} className={dialogContainer}>
        <WelcomeMessage title={title} description={description} avatar={avatar} />
        {children}
      </div>
      {/* showScrollToBottom && (
        <div className={scrollToButton}>
          <ScrollButton onClick={handleScrollToBottom} />
        </div>
      ) */}
      <NewFooter
        buttons={buttons}
        showPoweredBy={showPoweredBy}
        privacyURL={privacyURL}
        messageInputProps={{ ...messageInputProps }}
      />
    </div>
  );
};
