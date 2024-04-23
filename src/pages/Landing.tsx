import Ipgroup from "../components/Ipgroup";
import NcipLogo from "../components/NcipLogo";

const LandingPage = () => {
  return (
    <>
      <h1 className="text-4xl mb-8 float-left">
        Indigenous Culture Communities/Indigenous Peoples(ICCs/IPs)
      </h1>
      <div className="container mx-auto flex">
        <Ipgroup />
        <NcipLogo></NcipLogo>
      </div>
    </>
  );
};
export default LandingPage;
