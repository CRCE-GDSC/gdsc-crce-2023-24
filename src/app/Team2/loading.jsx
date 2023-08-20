import { Icons } from '../../../components/icons'

export function Loading() {
  return (
    <div className="container flex flex-col gap-4 py-12 px-20 border rounded-xl items-center justify-center min-h-screen">
      <Icons.loader className="animate-spin w-12 h-12" />{' '}
      <span className="text-xl font-semibold">Loading...</span>
    </div>
  )
}

export default Loading
