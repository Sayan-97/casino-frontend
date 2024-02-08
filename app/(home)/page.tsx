import Image from "next/image";
import Banner from "./_components/banner";
import Casino from "./_components/casino";
import Exclusives from "./_components/exclusives";
import Hero from "./_components/hero";
import LiveCasino from "./_components/live-casino";
import LiveGames from "./_components/live-games";
import LiveSports from "./_components/live-sports";
import NewArrivals from "./_components/new-arrivals";
import TopProviders from "./_components/top-providers";
import ExclusivesImg1 from "@/public/imgs/poker-bg.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:mx-2">
        <Exclusives />
        <div className="max-lg:hidden py-2">
          <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <Image
              src={ExclusivesImg1}
              alt="img"
              fill
              objectFit="cover"
              className="-z-10"
            />
            <div className="absolute inset-0 bg-black bg-opacity-35">
              <div className="p-6 flex flex-col justify-between w-full h-full">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                  >
                    <path
                      d="M32.9639 0H8.96387C4.54559 0 0.963867 3.58172 0.963867 8V32C0.963867 36.4183 4.54559 40 8.96387 40H32.9639C37.3821 40 40.9639 36.4183 40.9639 32V8C40.9639 3.58172 37.3821 0 32.9639 0Z"
                      fill="url(#paint0_linear_255_1413)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1638 12.807C10.0238 11.921 9.95381 11.479 10.0728 11.114C10.1772 10.7927 10.3805 10.5127 10.6538 10.314C10.9648 10.088 11.4078 10.018 12.2928 9.87804L19.8798 8.67604C20.7648 8.53604 21.2068 8.46604 21.5728 8.58404C21.8943 8.68866 22.1743 8.8924 22.3728 9.16604C22.5988 9.47604 22.6688 9.91904 22.8088 10.804L24.9128 24.088C25.0528 24.973 25.1228 25.416 25.0038 25.781C24.8997 26.1022 24.6967 26.3822 24.4238 26.581C24.1118 26.807 23.6698 26.877 22.7838 27.017L15.1968 28.219C14.3118 28.359 13.8698 28.429 13.5048 28.31C13.1836 28.206 12.9036 28.0029 12.7048 27.73C12.4788 27.418 12.4088 26.976 12.2688 26.09L10.1638 12.807ZM20.9468 11.64C21.0368 12.203 20.6728 12.728 20.1358 12.813C19.5988 12.898 19.0908 12.511 19.0018 11.949C18.9118 11.386 19.2758 10.861 19.8128 10.776C20.3498 10.691 20.8578 11.078 20.9468 11.64ZM15.2638 26.12C15.8008 26.034 16.1638 25.509 16.0748 24.946C15.9858 24.383 15.4778 23.996 14.9408 24.081C14.4038 24.166 14.0408 24.691 14.1298 25.254C14.2198 25.817 14.7268 26.204 15.2638 26.119V26.12ZM19.8288 17.421L17.9678 15.564C17.8983 15.4947 17.8183 15.4366 17.7308 15.392C17.2458 15.144 16.6378 15.352 16.3718 15.855L15.0878 18.285C14.8768 18.685 14.9418 19.168 15.2478 19.473L17.1088 21.331C17.1788 21.401 17.2588 21.458 17.3458 21.503C17.8308 21.751 18.4388 21.543 18.7058 21.04L19.9888 18.609C20.0925 18.4199 20.1329 18.2025 20.1041 17.9887C20.0753 17.775 19.9788 17.576 19.8288 17.421Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5438 29.387L18.7208 29.422L26.2578 30.908C27.1378 31.081 27.5768 31.168 27.9458 31.063C28.271 30.9711 28.5588 30.7785 28.7678 30.513C29.0048 30.21 29.0918 29.771 29.2648 28.891L31.8668 15.696C32.0398 14.816 32.1268 14.377 32.0218 14.007C31.9293 13.6824 31.7364 13.3953 31.4708 13.187C31.1688 12.949 30.7288 12.862 29.8508 12.689L24.8328 11.699C24.9498 12.114 25.0358 12.659 25.1578 13.426L26.8608 24.182C27.0708 25.509 27.1768 26.173 26.9978 26.722C26.8414 27.2039 26.5365 27.6239 26.1268 27.922C25.6598 28.26 24.9968 28.365 23.6688 28.575L18.6098 29.377L18.5438 29.387ZM30.2088 15.474C30.3188 14.915 29.9758 14.377 29.4418 14.271C28.9078 14.166 28.3868 14.534 28.2758 15.093C28.1658 15.653 28.5088 16.191 29.0428 16.296C29.5768 16.401 30.0978 16.033 30.2088 15.474Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_255_1413"
                        x1="25.5929"
                        y1="39.7"
                        x2="6.13387"
                        y2="-1.671"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#32C5FF" />
                        <stop offset="0.431" stop-color="#43B0FB" />
                        <stop offset="1" stop-color="#B620E0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-3xl font-bold">Poker</h2>
                </div>
                <div className="space-y-2">
                  <p>Come in, Play and Win</p>
                  <Button variant="custom">Get Bonus</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <LiveSports />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:mx-2">
        <Casino />
        <div className="lg:hidden">
          <NewArrivals />
        </div>
        <div className="lg:hidden">
          <TopProviders />
        </div>
        <LiveGames />
      </div>
      <div className="lg:hidden">
        <LiveCasino />
      </div>
      <div className="lg:hidden">
        <Banner />
      </div>
    </>
  );
}
