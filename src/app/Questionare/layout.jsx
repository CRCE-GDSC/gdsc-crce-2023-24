import GuardedPage from '@components/GuardedPage'

function Layout({ children }) {
  return (
    <div className="container px-2 py-12 md:px-4">
      <GuardedPage>{children}</GuardedPage>
    </div>
  )
}

export default Layout
