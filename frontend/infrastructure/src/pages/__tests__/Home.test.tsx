import React from 'react'
import useSWR, { MutatorOptions, SWRHook } from 'swr';
import { expect, vi } from 'vitest';
import { render } from '../../test-utils';
import Home from '../Home';

vi.mock('swr');

describe('<Home />', () => {
  const mockedUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;

  const setupHome = (customSwr?: Partial<SWRHook>) => {
    mockedUseSWR.mockReturnValue({
      data: { message: 'test' },
      ...customSwr,
      mutate: function (data?: unknown, opts?: boolean | MutatorOptions<unknown> | undefined): Promise<unknown> {
        throw new Error('Function not implemented.');
      },
      isValidating: false
    });

    const { queryByText } = render(<Home />);

    const messageEl = queryByText(/test/i);
    const loadingEl = queryByText(/loading/i);
    const errorEl = queryByText(/failed to load/i);

    return {
      messageEl,
      loadingEl,
      errorEl
    }
  };

  afterEach(() => {
    vi.clearAllMocks();
  })

  it('should render the message if request is successful', () => {
    const { messageEl } = setupHome();

    expect(messageEl).toBeInTheDocument();
  })

  it('should render loading if no error and no response', () => {
    const { messageEl, loadingEl } = setupHome({ data: null, error: null });

    expect(loadingEl).toBeInTheDocument();
    expect(messageEl).not.toBeInTheDocument();
  })
  
  it('should render error if error in request', () => {
    const { messageEl, loadingEl, errorEl } = setupHome({ error: true });

    expect(errorEl).toBeInTheDocument();
    expect(loadingEl).not.toBeInTheDocument();
    expect(messageEl).not.toBeInTheDocument();
  })
});