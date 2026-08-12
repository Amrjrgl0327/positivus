export const Header = () => {
    return (
          <div className="w-screen px-25 h-17 flex justify-between items-center mt-15 mb-15 bg-white text-black">
      <img src="/logo.png" />

      <div className="flex items-center gap-10">
        <div>About us</div>
        <div>Services</div>
        <div>Use Cases</div>
        <div>Pricing</div>
        <div>Blog</div>

        <div className="px-8.75 py-5 border rounded-[14px]">Request a quote</div>
        
      </div>
    </div>

    );
};