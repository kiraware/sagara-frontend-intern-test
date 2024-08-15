import Image from 'next/image'
import { IoChevronDownOutline } from 'react-icons/io5'

type Props = {
  name: string
  role: string
  src: string
}

export default function Profile({ name, role, src }: Props) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-col items-end">
        <div className="text-sm font-bold text-[#212B36]">{name}</div>
        <div className="text-xs font-bold text-[#637381]">{role}</div>
      </div>
      <Image
        src={src}
        alt="Profile Picture"
        width="46"
        height="46"
        className="rounded-full"
      />
      <IoChevronDownOutline />
    </div>
  )
}
