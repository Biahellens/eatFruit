'use client'
import React, { useState } from "react"
import { StepOne, StepTwo, StepThree } from './pages'

export default function Home() {
  const [btn, setBtn] = useState(1)
  return (
    <div>
      <div className="grid items-center justify-items-center mt-12">
        <div className="items-center justify-items-center">
          <div className="flex w-80 h-12 space-x-4">
            <button type="submit" onClick={() => setBtn(btn - 1)} className="w-20 h-8 bg-lime-600 text-white rounded-md items-center justify-items-center text-center">
              Voltar
            </button>
            <div className="w-8 h-8 bg-lime-950 text-white rounded-full items-center justify-items-center text-center">
              <label>
                1
              </label>
            </div>
            <div className="w-8 h-8 bg-lime-950 text-white rounded-full items-center justify-items-center text-center">
              <label>
                2
              </label>
            </div>
            <div className="w-8 h-8 bg-lime-950 text-white rounded-full items-center justify-items-center text-center">
              <label>
                3
              </label>
            </div>
            <button type="submit" onClick={() => setBtn(btn + 1)} className="w-20 h-8 bg-lime-700 text-white rounded-md items-center justify-items-center text-center">
              Próximo
            </button>
          </div>
        </div>
      </div>
      <div>
        {btn == 1 ? (
          <StepOne />
          ) : btn == 2 ? (
            <StepTwo />
          ):
            <StepThree />
        }
      </div>
    </div>
  )
}
