export default function Footer() {
  return (
    <div className="bg-primary w-full text-white px-4 md:px-24 py-10 font-primary">
      <div className="flex flex-col md:flex-row gap-8 border-b-2 border-gray-400 text-left pb-8 mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Services</h1>
          <div>
            <p>COC Application</p>
            <p>IPO Application</p>
            <p>IPMR Application</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">About</h1>
          <div>
            <p>About Us</p>
            <p>Sitemap</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Help</h1>
          <div>
            <p>FAQs</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Contact</h1>
          <div>
            <p>oehr@ncip.gov.ph</p>
            <p>Call (02) 123123</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <img className="h-16 w-16 mx-auto md:mx-0" src="logo.png" alt="Logo" />
        <p className="text-center md:text-left">
          &copy; 2024 All rights reserved
        </p>
      </div>
    </div>
  );
}

