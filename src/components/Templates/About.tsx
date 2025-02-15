const About = () => {
  return (
    <>
      <div
        id="about"
        style={{
          backgroundImage: "url(/landing-page-assets/about-image.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
        className="bg-primary text-white p-[5%] text-left relative md:h-[40rem] flex flex-col justify-evenly gap-10 md:gap-0 "
        aria-details="about-us-container"
      >
        <h2 aria-details="label" className="font-bold text-2xl md:text-4xl font-primary">
          WHAT WE WANT TO ACHIEVE?
        </h2>
        <p
          aria-details="about-us"
          className="tracking-wider font-medium text-xl leading-relaxed md:text-2xl md:mr-[10%] md:leading-relaxed font-primary"
        >
          As enabling partner and lead advocate, the NCIP envisions genuinely
          empowered Indigenous Cultural Communities/Indigenous Peoples
          (ICCs/IPs) whose rights and multi-dimensional well-being are fully
          recognized, respected and promoted towards the attainment of national
          unity and development.
        </p>

        <div className="flex gap-5">
          <img src="/logo.png" className="aspect-square w-20 md:w-24" />
          <img src="/logo2.png" className="aspect-square w-20 md:w-24" />
        </div>
      </div>
    </>
  );
};

export default About;
