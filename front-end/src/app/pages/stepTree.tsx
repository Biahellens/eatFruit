import Image from 'next/image'
import iconImage from '../../../public/assets/icon-eat-fruit.svg'

export default function StepTwo() {
  const tableFound = true
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
              <div>
              {tableFound ? (
                <>
                  <div className="flex flex-col text-3xl font-semibold text-orange-600 text-center items-center">
                    <label>Mesa encontrada!</label>
                  </div>

                  <div className="flex flex-col mt-4 text-lg font-medium leading-6">
                    <label>Mesa para 2 pessoas</label>
                    <label>Dia 12/04 às 12:30</label>
                  </div>
                  <div className="flex justify-center mt-8">
                    <button type="submit" className="w-48 h-12 rounded-md bg-orange-600 hover:bg-orange-200">
                      <label className="text-lg font-medium leading-6 text-white">Reservar</label>
                    </button>
                  </div>
                </>
              ) :
                <>
                  <div className="flex flex-col text-3xl font-semibold text-orange-600 text-center items-center">
                    <label>Nenhuma mesa encontrada!</label>
                  </div>
                  <div className="flex justify-center mt-8">
                    <button type="submit" className="w-48 h-12 rounded-md bg-orange-600 hover:bg-orange-200">
                      <label className="text-lg font-medium leading-6 text-white">Procurar Novamente</label>
                    </button>
                  </div>
                </>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
