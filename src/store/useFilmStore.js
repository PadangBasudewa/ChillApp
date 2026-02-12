import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useFilmStore = create(
  persist(
    (set) => ({
      films: [],

      addFilm: (film) => {
        const newFilm = {
          ...film,
          id: Date.now(),
        };

        set((state) => ({
          films: [...state.films, newFilm],
        }));
      },

      updateFilm: (id, updatedFilm) => {
        set((state) => ({
          films: state.films.map((film) =>
            film.id === id ? { ...film, ...updatedFilm } : film
          ),
        }));
      },

      deleteFilm: (id) => {
        set((state) => ({
          films: state.films.filter((film) => film.id !== id),
        }));
      },
    }),
    {
      name: "film-storage", // ✅ HARUS di dalam object config
    }
  )
);
