export const CardPost = () => {
  return (
    <div className="flex flex-col px-25">
      <div className="flex justify-between gap-10">
        <div className="flex-1 flex justify-center items-center mt-20 border-b border-black border-2 bg-gray-100 w-fit rounded-2xl px-25">
          <div className="flex gap-20 flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-17.5">
            <div>
              <p className="bg-green-200 w-fit rounded-b-md gap-50">
                Search engine
              </p>
              <p className="bg-green-200 w-fit rounded-b-lg">optimization</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/Icon.png" />
              <div>Learn more</div>
            </div>
          </div>

          <div className="flex ">
            <img className="w-50 h-50" src="/Elements1.png" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-20 border-b border-black border-2 bg-green-200 w-fit rounded-2xl px-25">
          <div className="flex gap-20  flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-20.5">
            <div>
              <p className="bg-white w-fit rounded-b-md gap-50">
                Pay-per-click
              </p>
              <p className="bg-white w-fit rounded-b-lg">advertising</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/Icon.png" />
              <div className="text-black">Learn more</div>
            </div>
          </div>

          <div className="flex">
            <img className="w-50 h-50" src="Illustration.png" />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex-1 flex justify-center items-center mt-20 border-b border-black border-2 bg-black w-fit rounded-2xl px-25">
          <div className="flex  gap-20  flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-23.5">
            <div>
              <p className="bg-white w-fit rounded-b-md gap-50">Social Media</p>
              <p className="bg-white w-fit rounded-b-lg">Marketing</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/Icon (2).png" />
              <div className="text-white">Learn more</div>
            </div>
          </div>

          <div className="flex">
            <img className="w-50 h-50" src="/picture.png" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-20 border-b border-black border-2 bg-gray-100 w-fit rounded-2xl px-25">
          <div className="flex  gap-20  flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-31.5">
            <div>
              <p className="bg-green-200 w-fit rounded-b-md gap-50">Email</p>
              <p className="bg-green-200 w-fit rounded-b-lg">Marketing</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/Icon.png" />
              <div>Learn more</div>
            </div>
          </div>

          <div className="flex">
            <img className="w-50 h-50" src="picture2.png" />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex-1 flex justify-center items-center mt-20 border-b border-black border-2 bg-green-200 w-fit rounded-2xl px-25">
          <div className="flex gap-20  flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-31.5">
            <div>
              <p className="bg-white w-fit rounded-b-md gap-50">Content</p>
              <p className="bg-white w-fit rounded-b-lg">Creation</p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/Icon.png" />
              <div>Learn more</div>
            </div>
          </div>

          <div className="flex">
            <img className="w-50 h-50" src="/picture3.png" />
          </div>
        </div>

        <div>
          <div className="flex-1 flex mt-20 justify-center items-center border-b border-black border-2 bg-black w-fit rounded-2xl px-25">
            <div className="flex gap-20  flex-col justify-between mt-12.5 mb-12.5 ml-12.5 mr-20">
              <div>
                <p className="bg-white w-fit rounded-b-md gap-50">
                  Analytics and
                </p>
                <p className="bg-white w-fit rounded-b-lg">Tracking</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="/Icon (2).png" />
                <div className="text-white">Learn more</div>
              </div>
            </div>

            <div className="flex">
              <img className="w-50 h-50" src="picture4.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
