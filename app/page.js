import BarChart from "./components/BarChart";
import Navbar from "./components/Navbar";
import RecentOrders from "./components/RecentOrders";
import TopCards from "./components/TopCards";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <Navbar />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
