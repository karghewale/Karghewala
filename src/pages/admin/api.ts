import { supabase } from "../../utils/supabase";


const currentDateAndTime = new Date();

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
export const insertHomeTestimonials = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,
    designation: formdata.designation,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return homeTestimonials;
  }
};

export const updateHomeTestimonials = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,
    designation: formdata.designation,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .update([adjustedData])
    .eq("id", formdata.id);

  if (error) {
    // Handle the error
    throw error;
  } else {
    return homeTestimonials;
  }
};

export const deleteTestimonials = async (id: string) => {
  let { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .delete()
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return homeTestimonials;
  }
};

export const insertJoinUSTestimonials = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,
    designation: formdata.designation,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: volunteerstories, error } = await supabase
    .from("volunteerstories")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return volunteerstories;
  }
};

export const updateJoinUSTestimonials = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,
    designation: formdata.designation,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: volunteerstories, error } = await supabase
    .from("volunteerstories")
    .update([adjustedData])
    .eq("id", formdata.id);

  if (error) {
    // Handle the error
    throw error;
  } else {
    return volunteerstories;
  }
};

export const deleteJoinUSTestimonials = async (id: string) => {
  let { data: volunteerstories, error } = await supabase
    .from("volunteerstories")
    .delete()
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return volunteerstories;
  }
};

// volunteers Directory

export const insertVolunteerDirectory = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: volunteerDirectory, error } = await supabase
    .from("volunteerDirectory")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return volunteerDirectory;
  }
};

export const updateVolunteerDirectory = async (formdata: any) => {
  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: volunteerDirectory, error } = await supabase
    .from("volunteerDirectory")
    .update([adjustedData])
    .eq("id", formdata.id);

  if (error) {
    // Handle the error
    throw error;
  } else {
    return volunteerDirectory;
  }
};

export const deleteVolunteerDirectory = async (id: string) => {
  let { data: volunteerDirectory, error } = await supabase
    .from("volunteerDirectory")
    .delete()
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return volunteerDirectory;
  }
};
