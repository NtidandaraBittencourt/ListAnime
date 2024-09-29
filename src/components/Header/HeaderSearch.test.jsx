// HeaderSearch.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderSearch from './HeaderSearch';
import '@testing-library/jest-dom';

describe('HeaderSearch', () => {
  const mockToggleTheme = jest.fn();
  
  it('renderizar a logo corretamente', () => {
    render(<HeaderSearch isDarkMode={false} toggleTheme={mockToggleTheme} />);

    const logo = screen.getByAltText('Logo_Anime');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('test-file-stub'));
  });

  it('exibe o label do modo light', () => {
    render(<HeaderSearch isDarkMode={false} toggleTheme={mockToggleTheme} />);

    const switchLabel = screen.getByLabelText('Light');
    expect(switchLabel).toBeInTheDocument();
  });

  it('exibe o label do modo dark', () => {
    render(<HeaderSearch isDarkMode={true} toggleTheme={mockToggleTheme} />);

    const switchLabel = screen.getByLabelText('Dark');
    expect(switchLabel).toBeInTheDocument();
  });

  it('chama a função do toggleTheme ao clicar no checkbok', () => {
    render(<HeaderSearch isDarkMode={false} toggleTheme={mockToggleTheme} />);

    const switchControl = screen.getByRole('checkbox');
    fireEvent.click(switchControl);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
