import NavLinks from '@/app/ui/dashboard/nav-links'
import SagaraLogo from '@/app/ui/sagara-logo'
import Link from 'next/link'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-[#1C1C1C] px-3 py-4 text-[#9E9E9E] md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          <SagaraLogo />
        </div>
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  )
}
