import { InfiniteMovingCardsDemo } from '../sections/InfiniteMovingCardsDemo';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Community Says
        </h2>
        {/* <MovingCards items={testimonials} /> */}
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
}