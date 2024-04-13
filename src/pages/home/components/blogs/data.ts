import blog1 from './assets/blog1.png'
import blog2 from "./assets/blog2.png";

type Blog = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

export const BlogData: Blog[] = [
   {
     title: "BLOG",
     description: "Discover our latest updates, events, and more on our journey to empower the makers – read on to explore.",
     image: blog1,
     link: "#",
     id: 0
   },
   {
     title: "WEBSITE",
     description: "Shop our beautiful weaver-designed products on our official website of Karghewale - Karghewale.com",
     image: blog2,
     link: "#",
     id: 0
   },
   {
     title: "WEBSITE",
     description: "Shop our beautiful weaver-designed products on our official website of Karghewale - Karghewale.com",
     image: blog2,
     link: "#",
     id: 0
   },
 ];
