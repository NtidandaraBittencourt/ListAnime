import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import App from './App';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Mock do componente Home
jest.mock('./views/Home', () => {
  const MockHome = () => <div>Home Component</div>;
  MockHome.displayName = 'MockHome';
  return MockHome;
});

// Mock do componente HeaderSearch
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

jest.mock('./components/HeaderSearch', () => MockHeaderSearch);

// Mock do componente FooterSearch
jest.mock('./components/FooterSearch', () => {
  const MockFooterSearch = () => <div>Footer Component</div>;
  MockFooterSearch.displayName = 'MockFooterSearch';
  return MockFooterSearch;
});

describe('App', () => {
  it('deve renderizar o componente App corretamente', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    
    // Verifica se os componentes estão no documento
    // expect(screen.getByText('Home Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
    // expect(screen.getByText('Header (isDarkMode: Light )')).toBeInTheDocument();
  });

  it('deve alternar entre o tema claro e escuro', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);
    expect(screen.getByText('Header (Dark Mode: On)')).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText('Header (Dark Mode: Off)')).toBeInTheDocument();
  });
})
