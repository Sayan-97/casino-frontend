import Casino from "./_components/casino";
import Exclusives from "./_components/exclusives";
import Hero from "./_components/hero";
import LiveCasino from "./_components/live-casino";
import LiveGames from "./_components/live-games";
import LiveSports from "./_components/live-sports";
import NewArrivals from "./_components/new-arrivals";
import TopProviders from "./_components/top-providers";

export default function Home() {
  return (
    <>
      <Hero />
      <Exclusives />
      <LiveSports />
      <Casino />
      <NewArrivals />
      <TopProviders />
      <LiveGames />
      <LiveCasino />
    </>
  );
}
