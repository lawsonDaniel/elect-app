import { Box, Typography } from '@mui/material';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Main.css'; // Create a CSS file for transitions

import Overview from './pages/overview/overView';

import Message from './pages/message/message';
import Article from './pages/article';

function Main({ activePage,user }: any) {
  return (
    <Box>
      <TransitionGroup>
        <CSSTransition key={activePage} classNames="fade" timeout={300}>
          <div>
            {activePage === 'overview' && <Overview  user={user}/>}
           
            {activePage === 'message' && <Message />}
            {activePage === 'article' && <Article />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default Main;
