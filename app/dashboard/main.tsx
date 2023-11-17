import { Box, Typography } from '@mui/material';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Main.css'; // Create a CSS file for transitions

import Overview from './pages/overView';
import Chat from './pages/chat';
import Message from './pages/message';

function Main({ sideBarOpen, activePage }: any) {
  return (
    <Box>
      <TransitionGroup>
        <CSSTransition key={activePage} classNames="fade" timeout={300}>
          <div>
            {activePage === 'overview' && <Overview />}
            {activePage === 'chat' && <Chat />}
            {activePage === 'message' && <Message />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default Main;
