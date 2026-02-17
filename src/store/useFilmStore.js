import { create } from "zustand";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/movies/list`;

export const useFilmStore = create((set) => ({
  films: [],
  loading: false,
  error: null,

  fetchFilms: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(API_URL);
      set({ films: res.data, loading: false });
    } catch (err) {
      set({ error: "Gagal mengambil data", loading: false });
    }
  },

  addFilm: async (film) => {
    const res = await axios.post(API_URL, film);
    set((state) => ({
      films: [...state.films, res.data],
    }));
  },

  updateFilm: async (id, updatedFilm) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedFilm);
    set((state) => ({
      films: state.films.map((film) =>
        film.id == id ? res.data : film
      ),
    }));
  },

  deleteFilm: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    set((state) => ({
      films: state.films.filter((film) => film.id !== id),
    }));
  },
}));

