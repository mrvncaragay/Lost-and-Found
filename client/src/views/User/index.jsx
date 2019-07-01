import React from "react";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { UserTable } from "./components";

function User() {
  return (
    <DashboardLayout title="User">
      <UserTable />
    </DashboardLayout>
  );
}

export default User;
