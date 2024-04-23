const Ipgroup = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col bg-white items-center h-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-3 rounded-lg border border-gray-300"
        />
        <textarea
          className="w-full h-5/6 mt-2 py-2 px-3 rounded-lg border border-gray-300 resize-y"
          placeholder="Your message"
          rows={5}
        ></textarea>
      </div>
    </>
  );
};

export default Ipgroup;
