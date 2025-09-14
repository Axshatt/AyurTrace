import Hero from '@/components/Hero';
import TraceabilityFlow from '@/components/TraceabilityFlow';
import ImportanceSection from '@/components/ImportanceSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ImportanceSection />
      <TraceabilityFlow />
    </div>
  );
}