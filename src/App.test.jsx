import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
    
  jest.mock('./views/Home', () => {
    const MockHome = () => <div>Home Component</div>;
    MockHome.displayName = 'MockHome';
    return MockHome;
  });

  const MockHeaderSearch = ({ isDarkMode, toggleTheme }) => (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Header (Dark Mode: {isDarkMode ? 'On' : 'Off'})</div>
    </div>
  );
    
  jest.mock('./components/HeaderSearch', () => MockHeaderSearch);
    
  jest.mock('./components/FooterSearch', () => {
    const MockFooterSearch = () => <div>Footer Component</div>;
    MockFooterSearch.displayName = 'MockFooterSearch';
    return MockFooterSearch;
  });
    
  describe('App Component', () => {
    it('deve renderizar o componente App corretamente', () => {
      render(<App />);
      
      expect(screen.getByText('Home Component')).toBeInTheDocument();
      expect(screen.getByText('Footer Component')).toBeInTheDocument();
      expect(screen.getByText('Header (Dark Mode: Off)')).toBeInTheDocument();
    });
  
    it('deve alternar entre o tema claro e escuro', () => {
      render(<App />);
  
      const toggleButton = screen.getByText('Toggle Theme');
      fireEvent.click(toggleButton);
      expect(screen.getByText('Header (Dark Mode: On)')).toBeInTheDocument();
  
      fireEvent.click(toggleButton);
      expect(screen.getByText('Header (Dark Mode: Off)')).toBeInTheDocument();
    });
  });
