import HomeActive from "@/public/svgs/home-active.svg";
import HomeInactive from "@/public/svgs/home-inactive.svg";
import SportsActive from "@/public/svgs/sports-active.svg";
import SportsInactive from "@/public/svgs/sports-inactive.svg";
import CasinoActive from "@/public/svgs/casino-active.svg";
import CasinoInactive from "@/public/svgs/casino-inactive.svg";
import WalletActive from "@/public/svgs/wallet-active.svg";
import WalletInactive from "@/public/svgs/wallet-inactive.svg";
import LiveActive from "@/public/svgs/live-active.svg";
import LiveInactive from "@/public/svgs/live-inactive.svg";

import TopNavHome from "@/public/svgs/top-home.svg";
import TopNavSports from "@/public/svgs/top-sports.svg";
import TopNavCasino from "@/public/svgs/top-casino.svg";
import TopNavLive from "@/public/svgs/top-live.svg";
import TopNavLiveSports from "@/public/svgs/top-live-games.svg";

import BannerImg1 from "@/public/imgs/banner-img-1.png";
import BannerImg2 from "@/public/imgs/banner-img-3.png";
import BannerImg3 from "@/public/imgs/banner-img-4.png";
import BannerImg4 from "@/public/imgs/banner-img-5.png";
import BannerImg5 from "@/public/imgs/banner-img-6.png";

import CasinoImg1 from "@/public/imgs/casino-img-1.png";
import CasinoImg2 from "@/public/imgs/casino-img-2.png";
import CasinoImg3 from "@/public/imgs/casino-img-3.png";
import ExclusivesImg1 from "@/public/imgs/exclusives-img-1.png";
import ExclusivesImg2 from "@/public/imgs/exclusives-img-2.png";
import ExclusivesImg3 from "@/public/imgs/exclusives-img-3.png";
import NewImg1 from "@/public/imgs/new-img-1.png";
import NewImg2 from "@/public/imgs/new-img-2.png";
import NewImg3 from "@/public/imgs/new-img-3.png";
import LiveGamesImg1 from "@/public/imgs/live-img-1.png";
import LiveGamesImg2 from "@/public/imgs/live-img-2.png";
import LiveGamesImg3 from "@/public/imgs/live-img-3.png";
import LiveCasinoGamesImg1 from "@/public/imgs/live-casino-img-1.png";
import LiveCasinoGamesImg2 from "@/public/imgs/live-casino-img-2.png";
import LiveCasinoGamesImg3 from "@/public/imgs/live-casino-img-3.png";

export const bottomNavMenus = [
  {
    activeIcon: HomeActive,
    inactiveIcon: HomeInactive,
    label: "Home",
    link: "/",
  },
  {
    activeIcon: SportsActive,
    inactiveIcon: SportsInactive,
    label: "Sports",
    link: "/sports",
  },
  {
    activeIcon: WalletActive,
    inactiveIcon: WalletInactive,
    label: "Wallet",
    link: "/",
  },
  {
    activeIcon: CasinoActive,
    inactiveIcon: CasinoInactive,
    label: "Casino",
    link: "/",
  },
  {
    activeIcon: LiveActive,
    inactiveIcon: LiveInactive,
    label: "Live",
    link: "/live-games",
  },
];

export const topNavMenus = [
  {
    icon: TopNavHome,
    label: "Home",
    link: "/",
  },
  {
    icon: TopNavSports,
    label: "Sports",
    link: "/sports",
  },
  {
    icon: TopNavCasino,
    label: "Casino",
    link: "/casino",
  },
  {
    icon: TopNavLiveSports,
    label: "Live",
    link: "/live",
  },
];
 
export const topBanner = [
  {
    title: "Bonus on deposit up to 300%",
    desc: "Get up to 300% off deposit to bonus bets and casino wallets",
    image: BannerImg1,
  },
  {
    title: "Take up to $1000 for a royal flush",
    desc: "Win at the BetBloc poker cash tables",
    image: BannerImg2,
  },
  {
    title: "BetBloc style games win regularly",
    desc: "Get a taste of the victory in unique hit games",
    image: BannerImg3,
  },
  {
    title: "BetBloc Poker $1000 Freeroll",
    desc: "Try out free poker tournaments",
    image: BannerImg4,
  },
  {
    title: "Play BetBloc Dice & win the tournament",
    desc: "Don’t miss the opportunity to win regularly",
    image: BannerImg5,
  },
];

export const games = [
  {
    name: "checkers",
    img: CasinoImg1,
    playing: 1234,
    category: "casino",
  },
  {
    name: "hi-lo",
    img: CasinoImg2,
    playing: 1234,
    category: "casino",
  },
  {
    name: "coinflip",
    img: CasinoImg3,
    playing: 1234,
    category: "casino",
  },
  {
    name: "poker",
    img: ExclusivesImg1,
    playing: 1234,
    category: "exclusives",
  },
  {
    name: "roulette",
    img: ExclusivesImg2,
    playing: 1234,
    category: "exclusives",
  },
  {
    name: "spin wheel",
    img: ExclusivesImg3,
    playing: 1234,
    category: "exclusives",
  },
  {
    name: "bomb difusal",
    img: NewImg1,
    playing: 1234,
    category: "new",
  },
  {
    name: "panelty",
    img: NewImg2,
    playing: 1234,
    category: "new",
  },
  {
    name: "heads tails",
    img: NewImg3,
    playing: 1234,
    category: "new",
  },
  {
    name: "dice",
    img: LiveGamesImg1,
    playing: 1234,
    category: "live",
  },
  {
    name: "mines",
    img: LiveGamesImg2,
    playing: 1234,
    category: "live",
  },
  {
    name: "red dog",
    img: LiveGamesImg3,
    playing: 1234,
    category: "live",
  },
  {
    name: "3 card monte",
    img: LiveCasinoGamesImg1,
    playing: 1234,
    category: "live-casino",
  },
  {
    name: "slot machine",
    img: LiveCasinoGamesImg2,
    playing: 1234,
    category: "live-casino",
  },
  {
    name: "crash game",
    img: LiveCasinoGamesImg3,
    playing: 1234,
    category: "live-casino",
  },
];
