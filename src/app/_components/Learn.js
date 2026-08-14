export const Learn = () => {
  return (
    <div className="flex gap-10 rounded-[45] border-b border-2 bg-black  justify-space-between w-fit h-[326] mt-20 mb-35 ml-25 mr-25">
      <div className="flex flex-1 justify-between flex-col px-20 py-20">
        <div className="text-white">
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </div>
        <div className="flex text-green-700">
          <div>Learn more</div>
          <img src="/Arrow 1.png" />
        </div>
      </div>

      <div className="border-2 line-clamp-2 rotation-[-90]"></div>

      <div className="flex flex-1 flex-col justify-between px-20 py-20">
        <div className="text-white">
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </div>
        <div className="flex text-green-700">
          <div>Learn more</div>
          <img src="/Arrow 1.png" />
        </div>
      </div>

      <div className="border-2 line-clamp-2 rotation-[-90]"></div>

      <div className="flex flex-1 flex-col justify-between px-20 py-20">
        <div className="text-white">
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </div>
        <div className="flex text-green-700 ">
          <div>Learn more</div>
          <img src="/Arrow 1.png" />
        </div>
      </div>
    </div>
  );
};
