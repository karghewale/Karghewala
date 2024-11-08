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

export const deleteTestimnonial = async (formdata: any) => {
  let { data: testimonial, error } = await supabase
    .from("testimonial")
    .delete()
    .eq("id", formdata);

  if (error) {
    throw error;
  } else {
    return testimonial;
  }
};