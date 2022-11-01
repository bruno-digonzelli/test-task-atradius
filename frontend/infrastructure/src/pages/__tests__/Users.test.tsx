import React from 'react'
import useSWR, { MutatorOptions, SWRHook } from 'swr';
import { expect, vi } from 'vitest';
import { render, screen } from '../../test-utils';
import Users from '../Users';

vi.mock('swr');
vi.mock('application/UI/Table/Table', () => ({
  default: () => '<Table />'
}))

const MOCK_DATA = {data: {message: {0: {hobby: 'test', address: {'zip code': '1234'}, 'first name': 'test name', 'last name': 'Test last'}}}};

describe('<Users />', () => {
  const mockedUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;

  const setupUsers = (customSwr?: Partial<SWRHook>) => {
    mockedUseSWR.mockReturnValue({
      data: { message: 'test' },
      ...customSwr,
      mutate: function (data?: unknown, opts?: boolean | MutatorOptions<unknown> | undefined): Promise<unknown> {
        throw new Error('Function not implemented.');
      },
      isValidating: false
    });

    const { queryByText } = render(<Users />);

    const loadingEl = queryByText(/loading/i);
    const errorEl = queryByText(/failed to load/i);
    const tableEl = queryByText(/Table/i);

    return {
      loadingEl,
      errorEl,
      tableEl
    }
  };

  afterEach(() => {
    vi.clearAllMocks();
  })
  
  it('should render table component', () => {
    const { tableEl, loadingEl, errorEl } = setupUsers(MOCK_DATA);

    expect(tableEl).toBeInTheDocument();
    expect(loadingEl).not.toBeInTheDocument();
    expect(errorEl).not.toBeInTheDocument();
  });

  it('should render loading if no error and no response', () => {
    const { loadingEl } = setupUsers({ data: null, error: null });

    expect(loadingEl).toBeInTheDocument();
  })
  
  it('should render error if error in request', () => {
    const { loadingEl, errorEl } = setupUsers({ error: true });

    expect(errorEl).toBeInTheDocument();
    expect(loadingEl).not.toBeInTheDocument();
  })
});