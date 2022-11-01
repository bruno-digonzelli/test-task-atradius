import { cleanup, render } from '@testing-library/react'
import { ThemeProvider } from 'application'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    ...options,
  })

export * from '@testing-library/react'
// override render export
export { customRender as render }