"use client";

import Category from "@/components/admin/admin.category";
import { useSession } from "next-auth/react";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <Category />
    </>
  );
};

export default CategoryPage;
