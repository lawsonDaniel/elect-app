import { Box, Typography } from '@mui/material';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Main.css'; // Create a CSS file for transitions

import Overview from './pages/overview/overView';
import Chat from './pages/chat';
import Message from './pages/message/message';
import Article from './pages/article';

function Main({ sideBarOpen, activePage,user }: any) {
  return (
    <Box>
      <TransitionGroup>
        <CSSTransition key={activePage} classNames="fade" timeout={300}>
          <div className="mt-[80px]">
            {activePage === 'overview' && <Overview  user={user}/>}
            {activePage === 'chat' && <Chat />}
            {activePage === 'message' && <Message />}
            {activePage === 'article' && <Article />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default Main;
