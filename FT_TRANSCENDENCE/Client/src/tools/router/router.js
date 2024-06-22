import { BrowserRoute } from 'vanilla-routing';

// Define your routes here
const routes = [
	{
		'pathname': '/',
		element: () => document.createElement('div') {/* 👈 Renders at / */ }
  },
  {
    'pathname': '/post',
		element: () => document.createElement('div') {/* 👈 Renders at /post */ }
  },
];

BrowserRoute(routes); // Initialize browser-based routing