import React from 'react'
import { ArrowUpRight, ArrowDownRight, Cpu } from 'lucide-react'

const insights = [
  {
    title: 'Market Sentiment',
    description: 'AI analysis of social media, news, and financial reports.',
    trend: 'positive',
    value: '78%',
  },
  {
    title: 'Volatility Index',
    description: 'Predicted market volatility based on AI models.',
    trend: 'neutral',
    value: '32',
  },
  {
    title: 'Sector Performance',
    description: 'AI-driven evaluation of various market sectors.',
    trend: 'negative',
    value: '-2.3%',
  },
]

const AIInsights = () => {
  return (
    <section id="ai-insights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Real-Time AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{insight.title}</h3>
                {insight.trend === 'positive' && <ArrowUpRight className="h-6 w-6 text-green-500" />}
                {insight.trend === 'negative' && <ArrowDownRight className="h-6 w-6 text-red-500" />}
                {insight.trend === 'neutral' && <Cpu className="h-6 w-6 text-yellow-500" />}
              </div>
              <p className="text-3xl font-bold mb-2">{insight.value}</p>
              <p className="text-gray-400">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIInsights