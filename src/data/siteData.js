import {
  Microscope,
  Eye,
  Droplets,
  Glasses,
  ClipboardList,
  Pill,
} from 'lucide-react'

export const site = {
  name: "Dr. Sharma's Eye Care & Lasik Centre",
  phone: '+91 99960-22103',
  email: 'vinrimpansh@gmail.com',
  address: 'Near Bus Stand Modal Town Fatehabad, Haryana',
}


export const services = [
  {
    icon: Microscope,
    title: 'Advanced Machine Testing',
    text: 'Modern diagnostic testing to help assess eye health and support accurate clinical evaluations.',
  },
  {
    icon: Eye,
    title: 'Eyes Checkup & Screening',
    text: 'Comprehensive eye examinations and screening to help detect vision problems early.',
  },
  {
    icon: Droplets,
    title: 'Eye Drop',
    text: 'Guidance on suitable eye drops for dryness, allergies and other eye conditions as advised by your eye-care professional.',
  },
  {
    icon: Glasses,
    title: 'Eye Glasses',
    text: 'Explore prescription glasses, quality frames and lenses selected to suit your vision needs.',
  },
  {
    icon: ClipboardList,
    title: 'Doctor Receipt',
    text: 'Get prescription details and follow-up instructions from your eye-care consultation.',
  },
  {
    icon: Pill,
    title: 'Pharmacy Store',
    text: 'Explore available medicines, eye drops and eye-care products for your treatment needs.',
  },
]


export const experts = [
  { name: 'Dr. Vinod Sharma', role: 'Chief Eye Surgeon', emoji: '👨‍⚕️' },
  { name: 'Dr. Retina Specialist', role: 'Retina Consultant', emoji: '👩‍⚕️' },
  { name: 'Optometry Team', role: 'Vision Testing', emoji: '🧑‍⚕️' },
]


export const testimonials = [
  {
    name: "Ramesh Kumar",
    text: "My cataract surgery was painless and I could see clearly the next day. Thank you, doctor, for your care and support!",
  },
  {
    name: "Sunita Devi",
    text: "The staff was polite and helpful. The clinic was clean, and the doctor explained everything clearly.",
  },
  {
    name: "Amit Verma",
    text: "I had a good experience during my eye checkup. The process was smooth, and all my questions were answered.",
  },
  {
    name: "Pooja Sharma",
    text: "The team made me feel comfortable throughout my visit. I appreciate their kind and professional approach.",
  },
  {
    name: "Rajesh Singh",
    text: "The doctor explained my eye condition in simple language and guided me about the next steps.",
  },
  {
    name: "Neha Gupta",
    text: "The appointment process was convenient, and the staff was supportive. Overall, a pleasant clinic visit.",
  },
  {
    name: "Vikram Yadav",
    text: "I visited for an eye examination and received clear guidance about my vision and eyewear needs.",
  },
  {
    name: "Meena Rani",
    text: "The clinic team was welcoming and attentive. I felt that my concerns were listened to carefully.",
  },
  {
    name: "Deepak Kumar",
    text: "A comfortable experience from check-in to consultation. The instructions provided by the doctor were easy to understand.",
  },
];

export const blogs = [
  {
    slug: 'protect-eyes-from-screen-strain',
    title: '5 Tips to Protect Your Eyes from Screen Strain',
    date: '10 Oct 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    text: 'Follow the 20-20-20 rule, blink often and keep proper lighting to reduce digital eye strain.',
    content: [
      'Long hours on phones, laptops and TVs are one of the most common reasons for tired, dry and burning eyes. The good news is that a few small habits can make a big difference.',
      'Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for at least 20 seconds. This relaxes the focusing muscles of your eyes.',
      'Blink often, keep your screen slightly below eye level, and make sure the room lighting is not too dim or too harsh. Avoid glare by adjusting screen brightness.',
      'If redness, headaches or blurry vision continue even after these changes, please get your eyes checked by a doctor.',
    ],
  },
  {
    slug: 'when-to-consider-cataract-surgery',
    title: 'When Should You Consider Cataract Surgery?',
    date: '02 Oct 2026',
    image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1200&q=80',
    text: 'Blurry vision, glare and faded colours are common signs. Early consultation helps.',
    content: [
      'A cataract is a clouding of the natural lens of the eye. It develops slowly, so many people do not notice it at first.',
      'Common signs include blurry or misty vision, glare around lights at night, colours looking faded, and needing frequent changes in glasses power.',
      'Surgery is advised when the cataract starts affecting your daily life, such as reading, driving or recognising faces. Modern surgery is quick and usually done as a day-care procedure.',
      'An early consultation helps your doctor decide the right time for you. Do not wait until your vision becomes very poor.',
    ],
  },
  {
    slug: 'is-lasik-right-for-you',
    title: 'Is LASIK Right for You?',
    date: '25 Sep 2026',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    text: 'Learn who is a good candidate for LASIK and what to expect before and after.',
    content: [
      'LASIK is a laser procedure that reshapes the front surface of the eye to reduce dependence on glasses or contact lenses.',
      'A good candidate is usually an adult with a stable glasses power, healthy eyes and sufficient corneal thickness. A detailed eye test is needed to confirm this.',
      'The procedure itself takes only a few minutes per eye. Most people notice clearer vision within a day, though eye drops and follow-up visits are important.',
      'Book a consultation to find out whether LASIK suits your eyes. Your doctor will explain the benefits and any risks clearly.',
    ],
  },
]

// Reading time helper (used by Blogs and BlogDetail)
export const readTime = (blog) => {
  const words = [blog.text, ...blog.content].join(' ').split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}