import StatCard from '@/app/ui/dashboard/overview/stat-card'
import { MdPeople } from 'react-icons/md'
import { RiBox3Fill } from 'react-icons/ri'
import { TfiStatsUp } from 'react-icons/tfi'

const stats = [
  {
    title: 'Total Students',
    icon: <MdPeople className="text-sm text-[#2758C1] md:text-xl" />,
    value: 513,
    percentage: 8.5,
    past: 'yesterday',
  },
  {
    title: 'Total Certified Students ',
    icon: <RiBox3Fill className="text-sm text-[#791229] md:text-xl" />,
    value: 489,
    percentage: 8.5,
    past: 'yesterday',
  },
  {
    title: 'Average Certification Score',
    icon: <TfiStatsUp className="text-sm text-[#4AD991] md:text-xl" />,
    value: 84.62,
    percentage: 8.5,
    past: 'yesterday',
  },
]

export default function Stat() {
  return (
    <div className="grid grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-1 md:gap-9">
      {stats.map((stat) => {
        return (
          <StatCard
            key={stat.title}
            title={stat.title}
            icon={stat.icon}
            value={stat.value}
            percentage={stat.percentage}
            past={stat.past}
          />
        )
      })}
    </div>
  )
}
