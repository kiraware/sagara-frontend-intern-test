import Navbar from '@/app/ui/dashboard/navbar'
import SideNav from '@/app/ui/dashboard/sidenav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Sagara Tech',
    default: 'Sagara Tech',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F4] md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  )
}
