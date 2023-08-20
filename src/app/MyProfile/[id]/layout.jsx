import GuardedPage from '@components/GuardedPage'

function Layout({ children }) {
  return (
    <div className="px-2 md:px-4 py-12 container">
      <GuardedPage>{children}</GuardedPage>
    </div>
  )
}

export default Layout
