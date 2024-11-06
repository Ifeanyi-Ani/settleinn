import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/constant";
import { X } from "lucide-react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const gridClasses = [
    "col-[1/span_2] row-[1/span_2]",
    "col-[3/span_3] row-[1/span_3]",
    "row-[1/span_2] col-[6/8]",
    "col-[8/-1] row-[1/span_1]",
    "row-[3/span_1] col-[1/span_2]",
    "row-[4/span_2] col-[1/span_4]",
    "col-[5/6] row-[4/5]",
    "row-[3/span_2] col-[6/-1]",
    "col-[8/-1] row-[2/3]",
    "col-[1/span_5] row-[6/span_2]",
    "col-[5/-1] row-[5/span_1]",
    "col-[6/-1] row-[6/span_2]",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // const hoverVariants = {
  //   hover: {
  //     scale: 1.05,
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  const Lightbox = ({
    image,
    onClose,
  }: {
    image: { src: string; alt: string };
    onClose: () => void;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-7xl max-h-[90vh] w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain rounded-lg"
        />
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <motion.section
        className="grid h-full grid-cols-8 grid-rows-[repeat(7_5vw)] gap-1.5 p-1.5"
        id="gallery"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        {images.map((image, index) => (
          <motion.figure
            key={index}
            className={`${gridClasses[index]} overflow-hidden rounded-lg relative cursor-pointer group`}
            variants={itemVariants}
          >
            {!loadedImages[image.src] && <LoadingSpinner />}
            <motion.img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                loadedImages[image.src] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(image.src)}
              onClick={() => setSelectedImage(image)}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.figure>
        ))}
      </motion.section>
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
