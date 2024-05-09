import { supabase } from "../../utils/supabase";

const currentDateAndTime = new Date();
let users: string = "";

const fetchUserData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  users = user?.email ?? "";
};

const year = currentDateAndTime.getFullYear();
const month = currentDateAndTime.getMonth() + 1;
const day = currentDateAndTime.getDate();
const hours = currentDateAndTime.getHours();
const minutes = currentDateAndTime.getMinutes();
const seconds = currentDateAndTime.getSeconds();

const formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

export const getBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blogs").select("*");
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return blogs;
  }
};

export const insertBlogs = async (formdata: any) => {
  const adjustedData = {
    title: formdata.title,
    created_at: formattedDateAndTime,
    author: formdata.author,
    dateofblog: formdata.dateofblog,
    extra_images: formdata.extra_images,
    image: formdata.image,
    description: formdata.description,
    category: formdata.categories,
  };
  console.log(adjustedData);
  const { data: blogs, error } = await supabase
    .from("blogs")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return blogs;
  }
};
export const updateBlogs = async (formdata: any) => {
  const adjustedData = {
    title: formdata.title,
    created_at: formattedDateAndTime,
    author: formdata.author,
    dateofblog: formdata.dateofblog,
    extra_images: formdata.extra_images,
    image: formdata.image,
    description: formdata.description,
    category: formdata.categories,
  };
  console.log(adjustedData);
  const { data: blogs, error } = await supabase
    .from("blogs")
    .update([adjustedData])
    .eq("id", formdata.id);

  if (error) {
    // Handle the error
    throw error;
  } else {
    return blogs;
  }
};

// gllery
export const getGallery = async () => {
  let { data: gallery, error } = await supabase.from("gallery").select("*");
  if (error) {
    throw error;
  } else {
    return gallery;
  }
};

export const insertGallery = async (formdata: any) => {
  await fetchUserData();

  const adjustedData = {
    created_at: formattedDateAndTime,
    image: formdata,
    created_by: users,
  };
  let { data: gallery, error } = await supabase
    .from("gallery")
    .insert([adjustedData])
    .select();
  if (error) {
    throw error;
  } else {
    return gallery;
  }
};

export const deleteGallery = async (formdata: any) => {
  let { data: gallery, error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", formdata);

  if (error) {
    throw error;
  } else {
    return gallery;
  }
};

// testimonils
export const getTestimonial = async () => {
  let { data: testimonial, error } = await supabase
    .from("testimonial")
    .select("*");

  if (error) {
    throw error;
  } else {
    return testimonial;
  }
};

export const insertTestimonials = async (formdata: any) => {
  const adjustedData = {
    quote: formdata.quote,
    created_at: formattedDateAndTime,
    name: formdata.name,
    age: formdata.age,
    month: formdata.month,
    avgsale: formdata.avgsale,
    imageSrc: formdata.imageSrc,
    created_by: users,
  };
  console.log(adjustedData);
  const { data: testimonial, error } = await supabase
    .from("testimonial")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return testimonial;
  }
};
