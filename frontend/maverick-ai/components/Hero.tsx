'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Button from './Button'

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
  { name: 'Aug', value: 6500 },
  { name: 'Sep', value: 8000 },
  { name: 'Oct', value: 7500 },
  { name: 'Nov', value: 9000 },
  { name: 'Dec', value: 8500 },
]

const Hero = () => {
  return (
    <section className="py-10 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Market Analysis
            </h1>
            <p className="text-xl mb-8">
              Harness the power of artificial intelligence for real-time insights and predictive analytics.
            </p>
            <Button size="lg">
              Start Your Free Trial
            </Button>
          </div>
          <div className="w-full md:w-1/2 h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
                <XAxis dataKey="name" stroke="#ecf0f1" />
                <YAxis stroke="#ecf0f1" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#34495e', border: 'none' }}
                  itemStyle={{ color: '#ecf0f1' }}
                />
                <Line type="monotone" dataKey="value" stroke="#3498db" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
