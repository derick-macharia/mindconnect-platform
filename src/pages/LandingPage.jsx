import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar.jsx';

const supportServices = [
  { title: "Licensed Therapists", description: "Connect with qualified mental health professionals who understand your cultural context." },
  { title: "Peer Counselors", description: "Talk to trained peers who share your experiences and understand your journey." },
  { title: "AI Support", description: "24/7 AI-powered mental health support when human counselors aren't available." },
  { title: "Mental Health Nuggets", description: "Daily bite-sized mental health tips and myth-busting content tailored for you." },
  { title: "Digital Journal", description: "Private space to track your thoughts, emotions, and mental health journey." },
  { title: "Wellness Reminders", description: "Get personalized reminders via SMS, email, or app notifications to maintain healthy habits." }
];

const therapists = [
  { name: "Malcolm Hamilton", specialty: "Anxiety", image: "/images/anxiety-therapist.png" },
  { name: "Dr. Rachel Abbott", specialty: "Depression", image: "/images/depression-therapist.png" },
  { name: "Clare Jenniffer", specialty: "Relationship", image: "/images/relationship-therapist.png" }
];

const LandingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero Section */}
    <section className="h-screen bg-cover bg-center flex items-center pl-20 text-white relative mt-18" style={{ backgroundImage: "url('/images/Hero-BG.png')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-md">
        <h2 className="text-5xl font-bold mb-4">St;<span className="text-teal">ll</span> Here</h2>
        <p className="text-lg mb-8">Your journey to mental wellness starts here.</p>
        <div className="flex gap-4">
          <Link to="/dashboard">
            <Button className="bg-teal hover:bg-teal-dark text-white">Get Help Now</Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">Learn More</Button>
        </div>
      </div>
    </section>

    {/* Support Section */}
    <section className="bg-teal text-center py-16 px-8">
      <h3 className="text-3xl font-bold text-white mb-8">How We Support You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {supportServices.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h4>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Therapists Section */}
    <section className="text-center py-16 px-8">
      <h3 className="text-3xl font-bold mb-4">Ready to prioritize your mental health?</h3>
      <p className="text-lg text-muted-foreground mb-8">Join thousands of Kenyan youth who are taking control of their mental wellbeing.</p>
      <div className="flex flex-wrap justify-center gap-8">
        {therapists.map((therapist, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-center w-56 shadow-md">
            <img src={therapist.image} alt={therapist.name} className="w-25 h-25 rounded-full mx-auto mb-4 object-cover" />
            <h4 className="text-lg font-semibold mb-2">{therapist.name}</h4>
            <p className="text-muted-foreground mb-4">{therapist.specialty}</p>
            <Button className="bg-accent hover:bg-accent/80 text-foreground font-semibold">Book Now</Button>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-secondary text-center py-12 px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <p className="text-lg text-foreground">You're not alone. Let's walk this path together</p>
        <Link to="/dashboard">
          <Button className="bg-teal hover:bg-teal-dark text-white">Get Started Today</Button>
        </Link>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-800 text-white text-center py-8 px-4">
      <p className="text-sm"><strong>MindConnect:</strong> <em>St;ll Here</em></p>
      <p className="text-sm mt-1">Supporting Kenyan youth on their mental health journey</p>
    </footer>
  </div>
);

export default LandingPage;