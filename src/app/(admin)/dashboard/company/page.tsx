"use client";

import Company from "@/components/admin/admin.company";
import { useSession } from "next-auth/react";
import React from "react";

const CompanyPage = () => {
  return (
    <>
      <Company />
    </>
  );
};

export default CompanyPage;
