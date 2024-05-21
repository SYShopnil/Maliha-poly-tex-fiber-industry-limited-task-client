import { SProfile } from "@src/components/compound";
import { SLoading } from "@src/components/root";
import { EDataTestId } from "@src/types/common";
import { Suspense } from "react";

export default async function ProfilePage() {
  return (
    <section className={`py-5`} role={EDataTestId.ProfilePage}>
      <Suspense fallback={<SLoading text="Loading... Profile" />}>
        <SProfile />
      </Suspense>
    </section>
  );
}
