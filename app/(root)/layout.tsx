import Sidebar from "@/components/Sidebar";
import { Main } from "next/document";
import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

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
      <main className="flex h-screen w-full font-inter">
          <Sidebar user={loggedIn} />
          <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* <MobileNav user={loggedIn} /> */}
          </div>
        </div>
        {children}
      </div>
      </main>
    );
  }
  