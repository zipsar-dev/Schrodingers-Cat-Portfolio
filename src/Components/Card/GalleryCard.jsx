const GalleryCard = () => {
  return (
    <div className="w-full min-h-[50vh] bg-[#ccc] relative">
      <div className="abs-center w-[90%] h-[90%] md:w-[70%] md:h-[80%] md:border-2 border border-[#008081] border-shape z-10 relative">
        {/* Clipped container content here */}
      </div>
      <div className="abs-center w-[90%] h-[90%] md:w-[70%] md:h-[80%] z-50">
        <img
          src="Images/Illustration/ima.png"
          alt="Images"
          className="absolute top-[100%] left-[70%] transform -translate-y-[100%] w-[80px] md:w-[120px] md:h-[40px] h-[20px]"
        />
      </div>
    </div>
  );
};
export default GalleryCard;
