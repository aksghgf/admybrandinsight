import React from 'react';

export default function DemoVideoSection() {
  return (
    <section className="max-w-2xl mx-auto bg-card/80 rounded-xl shadow-lg p-6 space-y-4 mt-6">
      <h2 className="text-2xl font-bold text-center">Demo Video</h2>
      <p className="text-center text-muted-foreground mb-4">
        Watch this short demo to see how the ADmyBRAND Insights Dashboard works in action!
      </p>
      <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.youtube.com/embed/xA3WiE_HkjY?si=X3FPpC2ek6feVcGj"
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
} 