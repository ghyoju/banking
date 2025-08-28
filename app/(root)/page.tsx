import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { GalleryThumbnails } from "lucide-react";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Gyanendra",
    lastName: "Hyoju",
    email: "ghyoju@gmail.com",
  };
  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and Manage your account and transactions efficiently"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
          TRANSACTIONS
        </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.23 }, { currentBalance: 500 }]}
        />
      </section>
    </>
  );
};

export default Home;
