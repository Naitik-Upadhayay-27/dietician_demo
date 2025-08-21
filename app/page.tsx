import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import MealIdeas from '../components/MealIdeas'
import NewYearResolution from '../components/NewYearResolution'
import MotivationalMarquee from '../components/MotivationalMarquee'
import FourEasySteps from '../components/FourEasySteps'
import ServicesCarousel from '../components/ServicesCarousel'
import HealthAdviser from '../components/HealthAdviser'
import SuccessStories from '../components/SuccessStories'
import AppointmentFAQ from '@/components/AppointmentFAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <MealIdeas />
      <MotivationalMarquee />
      <NewYearResolution />
      <ServicesCarousel />
      <FourEasySteps />
      <HealthAdviser />
      <SuccessStories />
      <AppointmentFAQ/>
      <Footer />
    </main>
  )
}
