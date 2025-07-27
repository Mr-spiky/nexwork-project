
import { Header } from '@/components/dashboard/Header';
import { TodaysMeetings } from '@/components/dashboard/TodaysMeetings';
import { CompanyNews } from '@/components/dashboard/CompanyNews';
import { TeamSpotlight } from '@/components/dashboard/TeamSpotlight';
import { QuickLinks } from '@/components/dashboard/QuickLinks';
import { UpcomingEvents } from '@/components/dashboard/UpcomingEvents';
import { WellnessCorner } from '@/components/dashboard/WellnessCorner';
import { QuickPoll } from '@/components/dashboard/QuickPoll';
import { Footer } from '@/components/dashboard/Footer';
import { ChatWidget } from '@/components/dashboard/ChatWidget';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header />
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TodaysMeetings />
            <CompanyNews />
            <UpcomingEvents />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <TeamSpotlight />
            <WellnessCorner />
            <QuickPoll />
            <QuickLinks />
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
