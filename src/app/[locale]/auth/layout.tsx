/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
}
