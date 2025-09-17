import { Link } from "react-router-dom";
import { useState } from "react";
import { MessageCircle, BookOpen, Clock, Lightbulb, Users, User, X } from "lucide-react";

const features = [
  { title: "AI Therapist", description: "24/7 AI Conversation support", icon: MessageCircle, href: "/therapist" },
  { title: "Journal", description: "Write thoughts, view old Notes", icon: BookOpen, href: "/journal" },
  { title: "Reminders", description: "View or edit Wellness reminders", icon: Clock, href: "/reminders" },
  { title: "Nuggets", description: "Browse daily mental health insights", icon: Lightbulb, href: "/nuggets" },
  { title: "Therapist Sessions", description: "Connect with Licensed therapists and schedule your next session", icon: User, href: "/events" },
  { title: "Peer Help", description: "Talk with peer counsellor", icon: Users, href: "/peer-help" }
];

const Dashboard = () => {
  const [showNugget, setShowNugget] = useState(true);

  return (
    <div className="min-h-screen bg-muted p-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-secondary p-8 border border-border rounded-lg">

          {/* Profile Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="flex items-center gap-4 text-3xl font-bold">
              <span>Hello, Derick</span>
              <span className="text-2xl">👋</span>
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
                  className="block bg-card p-5 rounded-lg text-center no-underline text-teal shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="mb-3">
                    <Icon className="w-8 h-8 mx-auto text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground m-0">{feature.description}</p>
                </Link>
              );
            })}
          </div>

          {/* Today's Nugget */}
          {showNugget && (
            <div className="flex items-center justify-between bg-nugget-yellow mt-8 px-5 py-4 rounded-lg text-foreground">
              <span className="mr-3">💡</span>
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