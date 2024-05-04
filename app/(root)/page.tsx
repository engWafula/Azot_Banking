import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
    const loggedIn = {
        $id: "some_id",
        email: "example@example.com",
        userId: "user_id",
        dwollaCustomerUrl: "dwolla_url",
        dwollaCustomerId: "dwolla_customer_id",
        firstName: "John",
        lastName: "Doe",
        name: "John Doe",
        address1: "123 Main St",
        city: "City",
        state: "State",
        postalCode: "12345",
        dateOfBirth: "1990-01-01",
        ssn: "123-45-6789"
      };
      
      return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={20000}
          /> 
        </header>
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[{},{}]}
        banks={[{},{}]}
      />
    </section>
  );
}

export default Home;
