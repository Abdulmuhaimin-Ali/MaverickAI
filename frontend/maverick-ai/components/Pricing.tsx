import React from 'react'
import { Check } from 'lucide-react'
import Button from './Button'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      'Real-time market data',
      'Basic AI insights',
      'Limited historical data',
      '5 custom alerts',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    features: [
      'All Basic features',
      'Advanced AI predictions',
      'Full historical data',
      'Unlimited custom alerts',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Dedicated AI resources',
      'Custom model development',
      'On-premise deployment',
      '24/7 premium support',
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your AI Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={index === 1 ? "default" : "outline"} fullWidth>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing