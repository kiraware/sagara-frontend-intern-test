'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PiStudent } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: RxDashboard },
  { name: 'Students', href: '/dashboard/students', icon: PiStudent },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#A51535] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#A51535] text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 text-xl" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
