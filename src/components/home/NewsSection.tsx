import { CalendarDays } from 'lucide-react';
import { AppleCardsCarouselDemo } from '../sections/AppleCardsCarouselDemo';

const news = [
  {
    title: "Annual Science Fair 2024",
    date: "March 15, 2024",
    description: "Join us for an exciting showcase of student projects and innovations.",
    image: "https://images.unsplash.com/photo-1564066379977-b0294a0525e1?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Sports Day Celebration",
    date: "April 5, 2024",
    description: "A day filled with athletic competitions and team spirit.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Cultural Festival",
    date: "May 20, 2024",
    description: "Experience the rich cultural diversity through performances and exhibitions.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60"
  }
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-primary hover:text-primary/80 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <AppleCardsCarouselDemo />
      </div>
    </section>
  );
}