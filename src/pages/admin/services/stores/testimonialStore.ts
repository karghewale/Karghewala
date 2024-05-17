import { create } from 'zustand'

interface TestimonialStoreType {
  item: Testimonial;
  setItem: (item: Testimonial) => void;
}

export const useTestimonialStore = create<TestimonialStoreType>()((set) => ({
  item: {
    id: '',
    quote: '',
    name: '',
    age: '',
    month: '',
    avgsale: '',
    imageSrc: '',
  },
  setItem: (item) => set({ item }),
}))
