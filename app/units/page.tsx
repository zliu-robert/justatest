import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Units() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-inox-bg font-sans">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Units</h1>
          <div className="bg-white p-6 rounded-lg shadow">
            <p>Units list will be displayed here.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
