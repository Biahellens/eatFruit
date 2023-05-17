import Image from 'next/image'
import iconImage from '../../../public/assets/icon-eat-fruit.svg'

export default function StepTree() {
  return (
    <div className="grid items-center justify-items-center mt-12">
      <div className="items-center justify-items-center">
        <div className="w-80">
          <div className="flex flex-row h-24 bg-lime-200 p-2">
            <div className="flex">
              <Image
                src={iconImage}
                width={60}
                height={60}
                alt="Eat Fruits - icon"
              />
            </div>
            <div className="flex flex-1 content-around">
              <div className="flex flex-1 mt-4 text-2xl font-semibold text-white justify-center">
                <label>Reservar Mesa</label>
              </div>
              <div className="text-xs	text-slate-800">
                <label>Passo 2 de 3</label>
              </div>
            </div>
          </div>
          <div className="h-fit bg-lime-100 p-10">
            <div className="flex flex-col">
              <div className="flex flex-col text-3xl font-semibold text-orange-600 text-center items-center">
                <label>teste</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
