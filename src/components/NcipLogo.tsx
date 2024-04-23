import ncipimg from "../../public/img/436279650_403337832499808_473292433197979807_n.png";

const NcipLogo = () => {
  return (
    <>
      <div className="container flex flex-col items-center sm mx-aut w-4/5 h-3/3 bg-white-100">
        <div className="text-container mb-14">
          <h1 className="text-3xl text-black">National Commission of</h1>
          <h1 className="text-3xl text-black">Indigenous Peoples</h1>
        </div>
        <img className="size-40" src={ncipimg} alt="NCIP LOGO" />
      </div>
    </>
  );
};

export default NcipLogo;
