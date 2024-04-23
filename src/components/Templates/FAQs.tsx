const Card = ({ title, paragraph }: { title: string; paragraph: string }) => {
  return (
    <div className="relative border-solid border-gray-200 border-2 rounded-sm max-w-full p-6 text-left">
      <div className="absolute italic -top-5 left-0 bg-black text-white rounded-full w-6 h-6 text-center font-bold">
        i
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-black mt-2">{paragraph}</p>
    </div>
  );
};

export default function FAQs() {
  const exampleTitle = "What is NCIP in the Philippines";
  const exampleParagraph = `The National Commission on Indigenous Peoples (NCIP) is the agency of
        the national government of the Philippines that is responsible for
        protecting the rights of the indigenous peoples of the Philippines. The commission is composed of seven commissioners`;

  return (
    <>
      <div className="flex flex-col gap-4 my-8">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
        <p className="text-black font-regular text-lg text-center px-6">
          Find quick answers to common queries about our servicer, process and
          more. We’re here to help you understand everything you need.
        </p>
        <p className="text-black font-regular text-lg text-center">
          Can’t you find what your looking for? Check our full documention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] lg:grid-cols-3 gap-8 mx-auto my-10 px-10">
        {Array.from({ length: 6 }).map(() => (
          <>
            <Card title={exampleTitle} paragraph={exampleParagraph} />
          </>
        ))}
      </div>
    </>
  );
}
