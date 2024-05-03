import Navbar from "@/components/Header/Navbar";

const RootAuth = () => {
  return (
    <>
      <Navbar />
      <section className="flex h-full justify-center items-center">
        <div className="grid grid-cols-2 border">
          <div className="px-12 py-16 flex flex-col items-center justify-center">
            <h1 className="text-3xl text-wrap font-semibold max-w-80">
              Log in
            </h1>
          </div>
          <div className="bg-primary px-12 py-16 flex flex-col items-center justify-center gap-6">
            <img src="./logo.png" alt="logo" className="w-[220px] h-[220px]" />
            <h1 className="text-white  text-3xl text-wrap font-semibold max-w-80">
              National Commission of Indigenous Peoples
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default RootAuth;
