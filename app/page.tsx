import { DoorOpen, Key, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ActionCard from '../components/ActionCard';
import QuickSearch from '../components/QuickSearch';
import CalendarCard from '../components/CalendarCard';

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-inox-bg font-sans">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">

            <ActionCard
              title="Unit"
              icon={<DoorOpen className="h-6 w-6" />}
              actions={["Move-In", "Move-Out", "Update Occupancy", "Schedule Viewing"]}
            />

            <ActionCard
              title="Access"
              icon={<Key className="h-6 w-6" />}
              actions={["Add an RFID", "Delete an RFID", "Add a Passcode", "Delete a Passcode", "Quick One-Time Passcode"]}
            />

            <ActionCard
              title="Security"
              icon={<Shield className="h-6 w-6" />}
              actions={["Audit Trail", "Security Alert", "Passage Mode", "Privacy Mode"]}
            />

            <div className="lg:col-span-1">
              <QuickSearch />
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <CalendarCard />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
