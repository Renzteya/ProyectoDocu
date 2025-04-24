// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'DevTools de Chrome',
      collapsed: false,
      items: [
        'intro',
        {
          type: 'category',
          label: 'Elements',
          collapsed: true,
          items: [
            'elements/overview',
            'elements/html-tree',
            'elements/styles-pane',
            'elements/box-model',
            'elements/event-listeners',
          ], 
        },
        {
          type: 'category',
          label: 'Console',
          collapsed: true,
          items: [
            'console/overview',
            'console/logging',
            'console/shortcuts',
            'console/tips',
          ],
        },
        {
          type: 'category',
          label: 'Sources',
          collapsed: true,
          items: [
            'sources/overview',
            'sources/breakpoints',
            'sources/callstack',
            'sources/editing',
          ],
        },
        {
          type: 'category',
          label: 'Network',
          collapsed: true,
          items: [
            'network/overview',
            'network/request-details',
            'network/filters',
            'network/throttling',
          ],
        },
        {
          type: 'category',
          label: 'Performance',
          collapsed: true,
          items: [
            'performance/overview',
            'performance/recording',
            'performance/frames',
            'performance/main-thread',
            'performance/timings',
          ],
        },
        {
          type: 'category',
          label: 'Memory',
          collapsed: true,
          items: [
            'memory/overview',
            'memory/heap-snapshot',
            'memory/allocation-instrumentation',
            'memory/garbage-collection',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
