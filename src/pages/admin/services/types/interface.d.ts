interface BlogPost {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  author: string;
  dateofblog: string; // Alternatively, you can use Date if you parse it to a Date object.
  extra_images: string;
}

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  age: string;
  month: string;
  avgsale: string;
  imageSrc: string;
}
