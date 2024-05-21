import { getLoggedInUser } from "@src/lib/user-handler";
import Image from "next/image";
import { SProfileDetails } from "./s-profile-details";
import { EDataTestId } from "@src/types/common";

export async function SProfile() {
  const {
    payload: { loggedInUser },
  } = await getLoggedInUser();
  if (loggedInUser) {
    const { email, last_name, profile_pic, first_name, role } = loggedInUser;
    return (
      <div
        role={EDataTestId.SProfile}
        className={`flex flex-col justify-center items-center space-y-5`}
      >
        <div
          className={`flex justify-center items-center rounded-full overflow-hidden`}
        >
          <Image
            height={250}
            width={250}
            alt={first_name + " " + last_name}
            src={profile_pic}
            placeholder="blur"
            priority
            blurDataURL={`/static/assert/blur-demo-product.jpg`}
          />
        </div>
        <div className={`space-y-1 text-center`}>
          <SProfileDetails
            gender={"Male"}
            email={email}
            userName={first_name + " " + last_name}
            userType={role}
          />
        </div>
      </div>
    );
  } else {
    return <div role={EDataTestId.SProfile}>No User Found!!!</div>;
  }
}
