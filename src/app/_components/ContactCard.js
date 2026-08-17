export const ContactCard = () => {
  return (
    <div className="flex justify-between w-screen h-screen bg-gray-200 rounded-[45] px-25 py-15 mt-[80] mb-[140] mr-[100] ml-[100]">
      <div>
        <div className="flex gap-12 px-25">
          <img src="/Ellipse.png" />
          <div> Say Hi</div>
          <img src="/Ellipse1.png" />
          <div>Get a Quote</div>
        </div>

        <div className="flex flex-col gap-12 px-25">
          <div>Name</div>
          <div className="border-2 rounded-[14] gap-[10] w-[556] h-[59] flex justify-start items-center">
            Name
          </div>
        </div>

        <div className="flex flex-col gap-12 px-25">
          <div>Email*</div>
          <div className="border-2 rounded-[14] gap-[10] w-[556] h-[59] flex justify-start items-center">
            Email
          </div>
        </div>

        <div className="flex flex-col gap-12 px-25">
          <div>Message*</div>
          <div className="border-2 rounded-[14] gap-[10] w-[556] h-[190] flex justify-start items-start">
            Message
          </div>
          <div className="flex justify-center items-center text-white bg-black w-[556] h-[59] rounded-[14]">
            Send Message
          </div>
        </div>
      </div>
      <img src="/Illustration10.png" />
    </div>
  );
};
