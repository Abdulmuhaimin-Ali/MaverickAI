import React from 'react'
import { Brain, TrendingUp, Zap, Bell } from 'lucide-react'

const features = [
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: 'AI-Driven Analysis',
    description: 'Our advanced AI algorithms analyze vast amounts of market data to provide actionable insights.',
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: 'Predictive Modeling',
    description: 'Leverage machine learning models to forecast market trends and potential opportunities.',
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: 'Real-Time Insights',
    description: 'Get instant AI-powered analysis and alerts on market movements as they happen.',
  },
  {
    icon: <Bell className="h-12 w-12 text-primary" />,
    title: 'Custom Alerts',
    description: 'Set up personalized alerts based on AI predictions and market conditions.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Maverick AI Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

