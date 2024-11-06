import { motion } from "framer-motion";

export const Gallery = () => {
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

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="grid h-full grid-cols-8 grid-rows-[repeat(7_5vw)] gap-1.5 p-1.5"
      id="gallery"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
      <motion.figure
        className="col-[1/span_2] row-[1/span_2]"
        variants={itemVariants}
        whileHover={hoverVariants.hover}
      >
        <img src="/assets/img1.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[3/span_3] row-[1/span_3]"
      >
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="row-[1/span_2] col-[6/8]"
      >
        <img src="/assets/img3.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[8/-1] row-[1/span_1]"
      >
        <img src="/assets/img1.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="row-[3/span_1] col-[1/span_2]"
      >
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="row-[4/span_2] col-[1/span_4]"
      >
        <img src="/assets/img3.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[5/6] row-[4/5]"
      >
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="row-[3/span_2] col-[6/-1]"
      >
        <img src="/assets/img6.jpg" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[8/-1] row-[2/3]"
      >
        <img src="/assets/img8.jpg" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[1/span_5] row-[6/span_2]"
      >
        <img src="/assets/img8.jpg" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[5/-1] row-[5/span_1]"
      >
        <img src="/assets/img7.jpg" alt="house-1" className="w-full h-full" />
      </motion.figure>
      <motion.figure
        variants={itemVariants}
        whileHover={hoverVariants.hover}
        className="col-[6/-1] row-[6/span_2]"
      >
        <img src="/assets/img4.webp" alt="house-1" className="w-full h-full" />
      </motion.figure>
    </motion.section>
  );
};
