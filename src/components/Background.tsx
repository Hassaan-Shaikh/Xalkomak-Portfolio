export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <video
          className="contrast-10 brightness-20 h-full w-full object-cover filter"
          autoPlay
          loop
          muted
        >
          <source src="/videos/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#8f00ff] bg-opacity-80"></div>
      </div>
    </>
  );
}
