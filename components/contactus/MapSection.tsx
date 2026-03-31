export default function MapSection() {
  return (
    <section
      // ↓ fixed height: 457px → responsive; mobile: h-[220px], sm: h-[300px], lg+: restores h-[457px]
      className="w-full h-[220px] sm:h-[300px] lg:h-[457px]"
      style={{
        backgroundImage: "url('/contactus/map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}