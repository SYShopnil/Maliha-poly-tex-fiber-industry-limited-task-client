import { CAddNewText } from "@src/components/compound/c-add-new-text";
import { SShowAllTextBox } from "@src/components/compound/s-show-all-texts-boxs";
import { SLoading } from "@src/components/root";
import { Suspense } from "react";

export default async function TextBoxPage() {
  return (
    <div className="space-y-3">
      <section
        className={`flex justify-end items-end  pr-8 md:pr-5 lg:pr-0 pt-3`}
      >
        <CAddNewText />
      </section>
      <section className="pr-8 md:pr-5 lg:pr-0 pb-5">
        <Suspense fallback={<SLoading text="Loading... Text box" />}>
          <SShowAllTextBox />
        </Suspense>
      </section>
    </div>
  );
}
