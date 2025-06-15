import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";

const items = [
  { type: "image", src: img1, overlay: "Quality Engineering" },
  { type: "text", title: "Innovation", desc: "We bring fresh ideas to every project." },
  { type: "image", src: img2, overlay: "Creative Solutions" },
  { type: "image", src: img4, overlay: "Trusted Partners" },
  { type: "image", src: img3, overlay: "Cutting Edge" },
  { type: "image", src: img7, overlay: "Smart Technologies" },
  { type: "text", title: "Sustainability", desc: "Eco-friendly solutions for the future." },
  { type: "image", src: img5, overlay: "Innovative Process" },
  { type: "text", title: "Client Focus", desc: "We prioritize your needs above all." },
  { type: "image", src: img6, overlay: "Future Ready" },
];

export default function MixedGrid() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] xl:auto-rows-[300px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-full overflow-hidden group ${index % 5 === 0 ? "row-span-2" : ""}`}
          >
            {item.type === "image" ? (
              <>
                <img
                  src={item.src}
                  alt={`Item ${index}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold text-center px-4">
                  {item.overlay}
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-red-600 hover:bg-red-700 transition-colors duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
