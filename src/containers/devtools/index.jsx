import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-j"
    changePositionKey="ctrl-q"
    defaultPosition="right"
    defaultSize={0.15}
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
