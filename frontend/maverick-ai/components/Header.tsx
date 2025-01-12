'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Bitcoin, BarChart2, Zap, DollarSign } from 'lucide-react'
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-surface py-4 border-b border-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Maverick AI</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#instruments" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <BarChart2 className="h-4 w-4" />
            <span>Markets</span>
          </Link>
          <Link href="#features" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <Zap className="h-4 w-4" />
            <span>Features</span>
          </Link>
          <Link href="#ai-insights" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <Bitcoin className="h-4 w-4" />
            <span>AI Insights</span>
          </Link>
          <Link href="#pricing" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <DollarSign className="h-4 w-4" />
            <span>Pricing</span>
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button variant="outline">Log In</Button>
          <Button>Start Free Trial</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-surface">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#instruments" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <BarChart2 className="h-4 w-4" />
              <span>Markets</span>
            </Link>
            <Link href="#features" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Zap className="h-4 w-4" />
              <span>Features</span>
            </Link>
            <Link href="#ai-insights" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Bitcoin className="h-4 w-4" />
              <span>AI Insights</span>
            </Link>
            <Link href="#pricing" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </Link>
          </nav>
          <div className="flex flex-col space-y-4 p-4">
            <Button variant="outline" fullWidth>Log In</Button>
            <Button fullWidth>Start Free Trial</Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header