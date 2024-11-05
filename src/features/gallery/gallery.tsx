export const Gallery = () => {
  return (
    <section
      className="grid h-full grid-cols-8 grid-rows-[repeat(7_5vw)] gap-1.5 p-1.5"
      id="gallery"
    >
      <figure className="col-[1/span_2] row-[1/span_2]">
        <img src="/assets/img1.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[3/span_3] row-[1/span_3]">
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="row-[1/span_2] col-[6/8]">
        <img src="/assets/img3.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[8/-1] row-[1/span_1]">
        <img src="/assets/img1.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="row-[3/span_1] col-[1/span_2]">
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="row-[4/span_2] col-[1/span_4]">
        <img src="/assets/img3.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[5/6] row-[4/5]">
        <img src="/assets/img2.webp" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="row-[3/span_2] col-[6/-1]">
        <img src="/assets/img6.jpg" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[8/-1] row-[2/3]">
        <img src="/assets/img8.jpg" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[1/span_5] row-[6/span_2]">
        <img src="/assets/img8.jpg" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[5/-1] row-[5/span_1]">
        <img src="/assets/img7.jpg" alt="house-1" className="w-full h-full" />
      </figure>
      <figure className="col-[6/-1] row-[6/span_2]">
        <img src="/assets/img4.webp" alt="house-1" className="w-full h-full" />
      </figure>
    </section>
  );
};
