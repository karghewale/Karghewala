import { create } from 'zustand'

interface BlogStoreType {
  item: BlogPost;
  setItem: (item: BlogPost) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isEdit: boolean) => void;
}

export const useBlogStore = create<BlogStoreType>()((set) => ({
  item: {
    id: '',
    created_at: '',
    title: '',
    image: '',
    description: '',
    category: '',
    author: '',
    dateofblog: '',
    extra_images: '',
  },
  setItem: (item) => set({ item }),
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
}))
