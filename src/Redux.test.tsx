import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import HomeComponent from './routes/HomeComponent';

const mockStore = configureStore([]);

describe('HomeComponent', () => {
  let store : any;

  beforeEach(() => {
    store = mockStore({
      news: [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          category: 'cat1',
          subcategory: 'national'
        }
      ],
      catTree: {
        cat1: ['national']
      }
    });
  });

  it('renders with values from the Redux store', () => {
    render(
      <Provider store={store}>
        <HomeComponent />
      </Provider>
    );

    expect(screen.getByText('NATIONAL')).toBeInTheDocument();
    expect(screen.getByText('Cat1')).toBeInTheDocument();
  });
});
