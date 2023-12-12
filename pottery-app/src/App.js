import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero/Hero'; 
import AboutSection from './components/about/AboutSection'; 
import './App.css'; 
import CollectionSection from './components/collection/CollectionSection';

import Footer from './components/footer/Footer';
import BlogSection from './components/blog/BlogSection';
import GallerySection from './components/gallery/GallerySection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import FeatureSection from './components/feature/FeatureSection';



const App = () => {
  return (
    <div>
      <Header />
      <main>
        <article>
          <HeroSection />
          <AboutSection />
          <CollectionSection/>
          <FeatureSection/>
          <Footer/>
          <BlogSection/>
          <GallerySection/>
        </article>
      </main>
      <TestimonialsSection/>
    </div>
  );
};

export default App;

