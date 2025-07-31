import React from 'react'
import ProductGrid from '../components/ProductGrid'
import HeroSection from '../components/homepage/HeroSection'
import FeaturedProducts from '../components/homepage/FeaturedProducts'
import AboutSection from '../components/homepage/AboutSection'
import NewsletterSection from '../components/homepage/NewsletterSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-[#FEF3C7]">
        {/* <ProductGrid /> */}
        <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <NewsletterSection />
    </div>
  )
}
