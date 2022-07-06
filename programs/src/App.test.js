import { render, screen, waitFor } from '@testing-library/react';
import * as API from './api';
import App from './App';
import Cards from './components/Cards/Cards';
import userEvent from '@testing-library/user-event';
import { reducer } from './components/Cards/trainingProgramReducer';

const mockData = [{
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
},
...Array(11).fill({
  name: 'test',
  institution: {
    _id: 'test',
    name: 'test',
    id: 'test'
  },
  image: {
    cloudinaryURL: 'https://res.cloudinary.com/wherewego/image/upload/v1650576618/staging-wherewego/pfiggswe2idy3axq5cu3.jpg',
      },
  programType: 'test'
})];

describe('Cards', () => {
  let apiDataMock;

  beforeEach(() => {
    apiDataMock = jest.spyOn(API, 'apiData').mockResolvedValue(mockData);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

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
    const programImage = screen.getAllByAltText(/Program Img/i);
    expect(programName).toBeInTheDocument();
    expect(institutionName).toBeInTheDocument();
    expect(programType).toBeInTheDocument();
    expect(programImage).toHaveLength(12);
  });
  
  test('load more button is clicked', async() => {
    render(<Cards/>);
    // const loadButton  =  screen.findByRole('button',{name: 'Load More'});
    userEvent.click(await screen.findByRole('button',{name: 'Load More'}));
    await waitFor(() => {
      expect(apiDataMock).toHaveBeenCalled();
    })
  });

  test('should update the pageNumber', async() => {
    const initialState = {pageNumber: 1};
    const updateAction = {type: 'updatePage'}
    const updatedState = reducer(initialState, updateAction);
    await waitFor(() => {
      expect(updatedState).toEqual({pageNumber: 2});
    })
  })
});
