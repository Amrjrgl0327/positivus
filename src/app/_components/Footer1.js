export const Footer1 = () => {
  return (
    <div className="flex flex-col ps-15 py15 bg-black rounded-[45]">
      <div className="w-screen px-25 h-17 flex justify-between items-center mt-15 mb-15 text-white">
        <img src="/logo1.png" />

        <div className="flex gap-10">
          <div>About us</div>
          <div>Services</div>
          <div>Use Cases</div>
          <div>Pricing</div>
          <div>Blog</div>

          <img src="/Social1.png" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex border rounded-[7px] text-4xl bg-green-300 text-black w-fit">
          Contact Us
        </div>
        <div className="text-white">
          <div>Email: info@positivus.com</div>
          <div>Phone: 555-567-8901</div>
          <div>Address: 1234 Main St</div>
          <div>Moonstone City, Stardust State 12345</div>
        </div>

        <div className="flex border-2 rounded-[7px] text-4xl bg-gray-900 text-white w-[285] h-[67]">
          Email
        </div>
        <div className="flex border rounded-[7px] text-4xl bg-green-300 text-black w-[249] h-[68] size-5">
          Subscribe to news
        </div>
      </div>
    </div>
  );
};
