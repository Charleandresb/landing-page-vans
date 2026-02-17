import ImageSlider from "./ImageSlider";

const images = [
  {
    src: "https://i.pinimg.com/1200x/9c/62/d1/9c62d135d0e2dcc489052bfdce2838e3.jpg",
    title: "Hombre",
  },
  {
    src: "https://images.journeys.com/images/products/1_744576_FS_ALT1B.JPG",
    title: "Mujer",
  },
  {
    src: "https://images.journeys.ca/images/products/1_786194_FS_ALT1B.JPG",
    title: "Niñ@",
  },
];

export default function Main() {
  return (
    <div>
      <ImageSlider />
      <div className="category">
        {images.map((item, index) => (
          <div className="category__container" key={index}>
            <div className="category__overlay"></div>
            <img src={item.src} alt={item.title} className="category__image" />
            <div className="category__title">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
