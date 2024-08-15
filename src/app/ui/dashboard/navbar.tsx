import Profile from '@/app/ui/dashboard/profile'

export default function Navbar() {
  return (
    <div className="flex h-fit w-full flex-row justify-end bg-white px-3 py-4 md:px-4">
      <Profile name="Thomas Anree" role="admin" src="/profile pic.png" />
    </div>
  )
}
