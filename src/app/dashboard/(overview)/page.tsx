import Stat from '@/app/ui/dashboard/overview/stat'
import StudentBarChart from '@/app/ui/dashboard/overview/student-bar-chart'
import type { Metadata } from 'next'
import { CiCalendar } from 'react-icons/ci'
import { IoChevronDownOutline } from 'react-icons/io5'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Page() {
  return (
    <div className="flex flex-col gap-5 md:gap-11">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 rounded-sm bg-white px-2 py-1 text-sm font-medium text-[#64748B] md:px-4 md:py-2">
          <CiCalendar className="md:text-lg" />
          <p className="text-xs md:text-sm">Dec 29, 2023 - Jan 4, 2024</p>
        </div>
        <div className="flex flex-row items-center gap-2 rounded-sm bg-white px-2 py-1 text-sm font-medium text-[#64748B] md:px-4 md:py-2">
          <p className="text-xs md:text-sm">Daily</p>
          <IoChevronDownOutline className="md:text-lg" />
        </div>
      </div>

      <Stat />

      <div className="h-fit w-full">
        <StudentBarChart />
      </div>
    </div>
  )
}
