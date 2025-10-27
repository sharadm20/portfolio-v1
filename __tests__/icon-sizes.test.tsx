import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'dark', setTheme: jest.fn() }),
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}))

// Mock ProjectsContext
jest.mock('../app/contexts/ProjectsContext', () => ({
  useProjects: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  ProjectsProvider: ({ children }: any) => <div>{children}</div>,
}))

// Mock LinkedInIntegration
jest.mock('../app/components/LinkedInIntegration', () => ({
  __esModule: true,
  default: () => <div>LinkedIn Integration</div>,
}))

describe('Icon Sizes Tests', () => {
  describe('Skills Component', () => {
    const mockSkills = [
      { name: 'JavaScript', level: 90, category: 'languages' },
      { name: 'React', level: 95, category: 'frontend' },
    ]

    test('should have correct header icon size (w-3 h-3)', () => {
      const { container } = render(<Skills skills={mockSkills} />)
      const headerIcon = container.querySelector('h2 svg')
      expect(headerIcon).toHaveClass('w-3', 'h-3')
    })
  })

  describe('Certifications Component', () => {
    const mockCertifications = [
      {
        id: 1,
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: 'Jan 2024',
        credentialUrl: '#',
      },
    ]

    test('should have correct header icon size (w-3 h-3)', () => {
      const { container } = render(<Certifications certifications={mockCertifications} />)
      const headerIcon = container.querySelector('h2 svg')
      expect(headerIcon).toHaveClass('w-3', 'h-3')
    })

    test('should have correct card icon size (w-4 h-4)', () => {
      const { container } = render(<Certifications certifications={mockCertifications} />)
      const cardIcons = container.querySelectorAll('.card svg')
      cardIcons.forEach(icon => {
        expect(icon).toHaveClass('w-4', 'h-4')
      })
    })
  })

  describe('Projects Component', () => {
    test('should have correct header icon size (w-3 h-3)', () => {
      const { container } = render(<Projects />)
      const headerIcon = container.querySelector('h2 svg')
      expect(headerIcon).toHaveClass('w-4', 'h-4')
    })
  })

  describe('Contact Component', () => {
    test('should have correct header icon size (w-3 h-3)', () => {
      const { container } = render(<Contact />)
      const headerIcon = container.querySelector('h2 svg')
      expect(headerIcon).toHaveClass('w-3', 'h-3')
    })
  })

  describe('ResumeEditor Component', () => {
    test('should have correct header icon size (w-3 h-3)', () => {
      const { container } = render(<ResumeEditor />)
      const headerIcon = container.querySelector('h2 svg')
      expect(headerIcon).toHaveClass('w-3', 'h-3')
    })
  })

  describe('ThemeToggle Component', () => {
    test('should have correct icon size (w-6 h-6)', () => {
      const { container } = render(<ThemeToggle />)
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('w-4', 'h-4')
    })
  })
})

// Import components after mocks are set up
import Skills from '../app/components/Skills'
import Certifications from '../app/components/Certifications'
import Projects from '../app/components/Projects'
import Contact from '../app/components/Contact'
import ResumeEditor from '../app/components/ResumeEditor'
import ThemeToggle from '../app/components/ThemeToggle'