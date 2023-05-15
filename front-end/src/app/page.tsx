import Image from 'next/image'
import iconImage from '../../public/assets/icon-eat-fruit.svg'

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="w-2/5 mt-24">
        <div className="flex flex-row h-24 bg-lime-200 p-2">
          <div className="flex">
            <Image
              src={iconImage}
              width={150}
              height={150}
              alt="Eat Fruits - icon"
            />
          </div>
          <div className="flex flex-1 content-around	">
            <div className="flex flex-1 mt-4 text-4xl font-semibold text-white justify-center">
              Reservar Mesa
            </div>
            <div className="text-sm	text-slate-800">
              Passo 1 de 3
            </div>
          </div>
        </div>
        <div className="h-20 bg-lime-100 p-2">
          content
        </div>
      </div>
    </div>
  )
}
