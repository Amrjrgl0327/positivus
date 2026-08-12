export const Postcard = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex mt-20 border-b border-black border-2 w-fit rounded-2xl px-25">
          <div className="flex  flex-col justify-between">
            <div>
              <p className="bg-green-300 w-fit rounded-b-md gap-50">
                Search engine
              </p>
              <p className="bg-green-300 w-fit rounded-b-lg">optimization</p>
            </div>
            <div className="flex">
              <img src="/Icon.png" />
              <div>Learn more</div>
            </div>
          </div>

          <div className="flex mt-2">
            <img src="/Elements1.png" className="" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex mt-20 border-b border-black border-2 bg-green-300 w-fit rounded-2xl px-25">
          <div className="flex  flex-col justify-between">
            <div>
              <p className="bg-white w-fit rounded-b-md gap-50">
                Pay-per-click
              </p>
              <p className="bg-white w-fit rounded-b-lg">advertising</p>
            </div>
            <div className="flex">
              <img src="/Icon.png" />
              <div>Learn more</div>
            </div>
          </div>

          <div className="flex mt-2">
            <img src="Illustration.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
