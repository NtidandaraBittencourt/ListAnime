import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import App from './App';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

jest.mock('./views/HomeView/Home', () => {
  const MockHome = () => <div>Home Component</div>;
  MockHome.displayName = 'MockHome';
  return MockHome;
});

const MockHeaderSearch = ({ isDarkMode, toggleTheme }) => (
  <div>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <div>Header (Dark Mode: {isDarkMode ? 'Dark' : 'Light'})</div>
  </div>
);

MockHeaderSearch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

jest.mock('./components/Header/HeaderSearch', () => MockHeaderSearch);

jest.mock('./components/Footer/FooterSearch', () => {
  const MockFooterSearch = () => <div>Footer Component</div>;
  MockFooterSearch.displayName = 'MockFooterSearch';
  return MockFooterSearch;
});

describe('App', () => {
  // it('deve renderizar o componente App corretamente', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <App />
  //     </QueryClientProvider>
  //   );
    
  //   expect(screen.getByText('Footer Component')).toBeInTheDocument();
  // });

  // it('deve alternar entre o tema claro e escuro', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <App />
  //     </QueryClientProvider>
  //   );

  //   const toggleButton = screen.getByText('Toggle Theme');
  //   fireEvent.click(toggleButton);
  //   expect(screen.getByText('Header (Dark Mode: On)')).toBeInTheDocument();

  //   fireEvent.click(toggleButton);
  //   expect(screen.getByText('Header (Dark Mode: Off)')).toBeInTheDocument();
  // });
})
