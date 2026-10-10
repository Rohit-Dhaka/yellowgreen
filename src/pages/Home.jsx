import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import WhatWeOffer from '../components/WhatWeOffer'
import GetInvolved from '../components/GetInvolved'
import Experts from '../components/Experts'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <GetInvolved />
      <Experts />
      <Testimonials />
      <Blogs />
      <ContactForm />
    </>
  )
}