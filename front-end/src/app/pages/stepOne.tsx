import Image from 'next/image'
import iconImage from '../../../public/assets/icon-eat-fruit.svg'
import { Calendar, SelectedUnit, SelectedPeoples, SelectedTime } from '../components'

export default function StepOne() {
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
                Reservar Mesa
              </div>
              <div className="text-xs	text-slate-800">
                Passo 1 de 3
              </div>
            </div>
          </div>
          <div className="h-fit bg-lime-100 p-10">
            <div className="flex flex-col">
              <div>
                <div className="flex flex-col">
                  <SelectedUnit />
                </div>

                <div className="flex flex-col mt-2">
                  <SelectedPeoples />
                </div>

                <div className="flex flex-col mt-2">
                  <SelectedTime />
                </div>
                <div className="flex flex-col mt-2">
                  <Calendar />
                </div>
                <div className="flex justify-center mt-8">
                  <button className="w-48 h-12 rounded-md bg-orange-600">
                    <label className="text-lg font-medium leading-6 text-white">Encontrar Mesas</label>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
