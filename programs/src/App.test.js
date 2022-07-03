import { render, screen } from '@testing-library/react';
import App from './App';
import Cards from './components/Cards/Cards';
jest.mock('./api', () => ({
  apiData: () => Promise.resolve([{
    name: 'Leah\'s Test Program 12',
    institution: {
      _id: '62672b7d526b3f5031892c62',
      name: 'Leah\'s Test Provider',
      id: '62672b7d526b3f5031892c62'
    },
    image: {
      cloudinaryURL: 'https://res.cloudinary.com/wherewego/image/upload/v1650576618/staging-wherewego/pfiggswe2idy3axq5cu3.jpg',
        },
    programType: 'Apprenticeship'
  }])
}));

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn more link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders cards info', async () => {
  render(<Cards />);
  const programName = await screen.findByText(/Program Name: Leah's Test Program 12/i);
  const institutionName = screen.getByText(/Institution Name: Leah's Test Provider/i);
  const programType = screen.getByText(/Program Type: Apprenticeship/i);
  const programImage = screen.getByAltText(/Program Img/i);
  expect(programName).toBeInTheDocument();
  expect(institutionName).toBeInTheDocument();
  expect(programType).toBeInTheDocument();
  expect(programImage).toBeInTheDocument();
});


