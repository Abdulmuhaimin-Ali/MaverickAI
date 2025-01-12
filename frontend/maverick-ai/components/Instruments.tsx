import React from 'react'
import { TrendingUp, DollarSign, Bitcoin, BarChart2 } from 'lucide-react'

const instruments = [
  { name: 'Stocks', icon: TrendingUp, color: 'text-green-500' },
  { name: 'Forex', icon: DollarSign, color: 'text-blue-500' },
  { name: 'Crypto', icon: Bitcoin, color: 'text-yellow-500' },
  { name: 'Indices', icon: BarChart2, color: 'text-purple-500' },
]

const Instruments = () => {
  return (
    <section id="instruments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Markets We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {instruments.map((instrument, index) => (
            <div key={index} className="flex flex-col items-center">
              <instrument.icon className={`h-16 w-16 ${instrument.color} mb-4`} />
              <h3 className="text-xl font-semibold">{instrument.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instruments
