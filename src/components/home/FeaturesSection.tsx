import { BookOpen, Users, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum following CBSE guidelines with focus on conceptual learning."
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated teachers with years of experience in nurturing young minds."
  },
  {
    icon: Trophy,
    title: "Extra-Curricular",
    description: "Wide range of sports and cultural activities for holistic development."
  },
  {
    icon: Heart,
    title: "Student Support",
    description: "Individual attention and guidance for every student's growth."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Jaigaon Public School?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}