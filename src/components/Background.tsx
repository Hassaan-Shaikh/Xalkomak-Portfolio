export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <video
          className="brightness-25 h-full w-full object-cover grayscale filter"
          autoPlay
          loop
          muted
        >
          <source src="/videos/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
    </>
  );
}
