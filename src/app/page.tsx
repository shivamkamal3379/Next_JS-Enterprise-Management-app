"use client";
import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "../components/ui/navbar-menu";

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ✅ Navbar */}
      <Menu setActive={setActive}>
        {/* Dashboard */}
        <MenuItem item="Dashboard" active={active} setActive={setActive}>
          <HoveredLink href="/dashboard">Main Dashboard</HoveredLink>
        </MenuItem>

        {/* Administrator */}
        <MenuItem item="Administrator" active={active} setActive={setActive}>
          <HoveredLink href="/administrator/company-group">Company Group</HoveredLink>
          <HoveredLink href="/administrator/company">Company</HoveredLink>
          <HoveredLink href="/administrator/branch">Branch</HoveredLink>
          <HoveredLink href="/administrator/bank">Bank</HoveredLink>
          <HoveredLink href="/administrator/bank-allow">Bank Allow</HoveredLink>
          <HoveredLink href="/administrator/user">User</HoveredLink>
        </MenuItem>

        {/* Payment Management */}
        <MenuItem item="Payment Management" active={active} setActive={setActive}>
          <HoveredLink href="/payment/cash">Cash</HoveredLink>
          <HoveredLink href="/payment/instrument">Instrument</HoveredLink>
          <HoveredLink href="/payment/posting">Posting Bank</HoveredLink>
          <HoveredLink href="/payment/tally">Tally Bounce Cheque</HoveredLink>
          <HoveredLink href="/payment/rpt-instrument">Rpt Instrument</HoveredLink>
          <HoveredLink href="/payment/rpt-cash">Rpt Cash</HoveredLink>
          <HoveredLink href="/payment/rpt-ins-postdate">Rpt Ins Postdate</HoveredLink>
          <HoveredLink href="/payment/rpt-groupcash">Rpt Group Cash In Hand</HoveredLink>
          <HoveredLink href="/payment/rpt-crossbank">Rpt Cash Cross Bank</HoveredLink>
          <HoveredLink href="/payment/rpt-closing">Rpt Closing Cash</HoveredLink>
        </MenuItem>

        {/* Settings */}
        <MenuItem item="Setting" active={active} setActive={setActive}>
          <HoveredLink href="/setting/left-menu">Left Menu</HoveredLink>
          <HoveredLink href="/setting/dealership">Dealership</HoveredLink>
          <HoveredLink href="/setting/subsource">Subsource</HoveredLink>
          <HoveredLink href="/setting/department">Department</HoveredLink>
        </MenuItem>
      </Menu>

      {/* ✅ Landing page content */}
      <main className="p-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Welcome to Sales Pro 🚀
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Select a menu item from above to explore different modules.
        </p>
      </main>
    </div>
  );
}
