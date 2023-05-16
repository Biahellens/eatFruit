"use client"
import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DesktopDatePicker',
        ]}
      >
        <DemoItem>
          <label className="block text-sm font-medium leading-6 text-slate-800">Data:</label>
          <DesktopDatePicker
            defaultValue={dayjs('2022-04-17')}
            sx={{ width: '240px' }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
