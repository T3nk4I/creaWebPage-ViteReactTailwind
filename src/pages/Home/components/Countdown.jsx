// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react'
import { intervalToDuration } from 'date-fns'

const Countdown = () => {
  const targetDate = new Date('2024-12-04T09:00:00')
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft () {
    const now = new Date()
    const duration = intervalToDuration({
      start: now,
      end: targetDate
    })

    return {
      months: duration.months,
      days: duration.days,
      hours: duration.hours,
      minutes: duration.minutes
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 60000) // Actualiza cada minuto

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className='flex flex-col items-center'>
      <span className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-primary to-bg_purple_light'>{value}</span>
      <span className='text-sm lg:text-base 2xl:text-xl text-white'>{label}</span>
    </div>
  )

  return (
    <div className='text-center p-6 bg-gray-800 rounded shadow-lg inline-block'>
      <h1 className=' text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-6 md:mb-10 xl:mb-14 text-white/50'>Tiempo restante para el evento</h1>
      <div className='flex justify-center space-x-10'>
        <TimeUnit value={timeLeft.months} label='M' />
        <TimeUnit value={timeLeft.days} label='D' />
        <TimeUnit value={timeLeft.hours} label='Hr' />
        <TimeUnit value={timeLeft.minutes} label='Min' />
      </div>
    </div>
  )
}

export default Countdown
