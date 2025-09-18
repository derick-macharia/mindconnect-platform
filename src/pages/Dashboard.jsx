import { Link } from "react-router-dom";
import { useState } from "react";
import { MessageCircle, BookOpen, Clock, Lightbulb, Users, User, X } from "lucide-react";
import { useAuth } from "../context/Auth"; // Make sure this is included

const features = [
  { title: "AI Therapist", description: "24/7 AI Conversation support", icon: MessageCircle, href: "/therapist" },
  { title: "Journal", description: "Write thoughts, view old Notes", icon: BookOpen, href: "/journal" },
  { title: "Reminders", description: "View or edit Wellness reminders", icon: Clock, href: "/reminders" },
  { title: "Nuggets", description: "Browse daily mental health insights", icon: Lightbulb, href: "/nuggets" },
  { title: "Therapist Sessions", description: "Connect with Licensed therapists and schedule your next session", icon: User, href: "/events" },
  { title: "Peer Help", description: "Talk with peer counsellor", icon: Users, href: "/peer-help" }
];

const Dashboard = () => {
  const { user } = useAuth();
  const [showNugget, setShowNugget] = useState(true);


  return (
    <div className="min-h-screen bg-muted p-5">
      <div className="max-w-4xl mx-auto">
        <p className="font-semibold text-sm text-muted-teal italic mb-2">
          <strong className="not-italic">M;ndConnect:</strong> <span className="italic">st;ll here</span>
        </p>
        <div className="bg-[#0D98BA]/10 backdrop-blur-md p-8 border border-border rounded-lg">

          {/* Profile Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Hello, {user?.name || 'Friend'} 👋
            </h1>
            <img
              src="/images/derick-profile.png"
              alt="Derick's Profile"
              className="w-32 h-32 rounded-full"
            />
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="block bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="mb-3">
                    <Icon className="w-8 h-8 mx-auto text-foreground group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-teal mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground m-0">{feature.description}</p>
                </Link>
              );
            })}
          </div>

          {/* Today's Nugget */}
          {showNugget && (
            <div className="flex items-center justify-between bg-accent mt-8 px-5 py-4 rounded-lg font-semibold text-card-foreground">
              <Lightbulb className="text-[#2563EB] w-6 h-6 mr-3 animate-pulse" />
              <span className="flex-1 ml-3 text-sm">
                <strong>Today's Nugget</strong>: You're allowed to rest
              </span>
              <button
                onClick={() => setShowNugget(true)}
                className="font-bold cursor-pointer select-none hover:opacity-70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;