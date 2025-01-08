import Verify from "@/components/auth/verify";

// const VerifyPage = ({ params }: { params: { id: string } }) => {
//   const { id } = params;
//   return (
//     <>
//       <Verify id={id} />
//     </>
//   );
// };

// export default VerifyPage;

import React from "react";

// Component for the dynamic page
const VerifyPage = ({ params }: { params: { id: string } }) => {
  return <div>Verifying user with ID: {params.id}</div>;
};

export default VerifyPage;

// This function returns the params that will be used to generate static pages
export async function generateStaticParams() {
  const ids = [1, 2, 3, 4, 5]; // Replace this with the actual IDs you need
  return ids.map((id) => ({
    id: id.toString(),
  }));
}
