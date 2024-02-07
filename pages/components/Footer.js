import React from "react";


function Footer() {
  return (
    <div>
   <div className="hidden lg:block pt-40 h-[900px] bg-slate-50 overflow-hidden"> {/* Add height to parent */}
  <div className="relative">
    <div className="absolute h-[900px] w-full bg-slate-200">
        <h1 className="pt-[130px]">ftyugbhjn</h1>
    </div>
    <div className="relative -top-[100px] left-[300px]">
      <img
        src="/assets/image/footer.jpg"
        className="object-cover h-[200px] w-[900px] rounded-lg"
      />
    </div>
  </div>
</div>
    </div>
  );
}

export default Footer;
