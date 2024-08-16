import { TfiStatsUp } from 'react-icons/tfi'

type Props = {
  title: string
  icon: React.ReactElement
  value: number
  percentage: number
  past: string
}

export default function StatCard({
  title,
  icon,
  value,
  percentage,
  past,
}: Props) {
  return (
    <div className="rounded bg-white p-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1 md:gap-7">
          <p className="text-xs font-bold text-[#202224] md:text-base">
            {title}
          </p>

          <p className="text-base font-bold md:text-2xl">{value}</p>
          <p className="text-xs md:text-base">
            <span className="text-[#00B69B]">
              <TfiStatsUp className="inline" /> {percentage}%
            </span>{' '}
            Up from {past}
          </p>
        </div>
        {icon}
      </div>
    </div>
  )
}
