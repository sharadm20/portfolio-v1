import { render, screen } from '@testing-library/react';
import { Navigation } from '@/app/components/navigation';
import { Hero } from '@/app/components/Hero';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Navigation Component', () => {
  it('renders navigation links', () => {
    render(<Navigation />);
    
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const skillsLink = screen.getByText('Skills');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('renders brand logo', () => {
    render(<Navigation />);
    
    const brand = screen.getByText('SM');
    expect(brand).toBeInTheDocument();
  });
});

describe('Hero Component', () => {
  it('renders hero content', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { name: /Hi, I'm Sharad/i });
    const subheading = screen.getByRole('heading', { name: /Fullstack Developer & AI Engineer/i });
    
    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });
});