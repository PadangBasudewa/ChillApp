import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,
      selectedPlan: null,
      _hasHydrated: false,
      selectedPlan: null,
      selectedPaymentMethod: null,

      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },

      setSelectedPlan: (plan) => {
        set({ selectedPlan: plan });
      },

       setSelectedPaymentMethod: (method) => {
        set({ selectedPaymentMethod: method });
      },


      register: ({ username, password }) => {
        const existingUser = get().users.find((u) => u.username === username);

        if (existingUser) {
          return { error: "Username sudah digunakan" };
        }

        const newUser = { username, password, avatar: null };

        set((state) => ({
          users: [...state.users, newUser],
          currentUser: newUser,
        }));

        return { success: true };
      },

      login: ({ username, password }) => {
        const user = get().users.find(
          (u) => u.username === username && u.password === password,
        );

        if (!user) {
          return { error: "Username atau password salah" };
        }

        set({ currentUser: user });

        return { success: true };
      },

      updateUser: (data) => {
        const { users, currentUser } = get();

        if (!currentUser) return { error: "User belum login" };

        if (
          data.username &&
          users.find(
            (u) =>
              u.username === data.username &&
              u.username !== currentUser.username,
          )
        ) {
          return { error: "Username sudah digunakan" };
        }

        const updatedUser = {
          ...currentUser,
          ...data,
        };

        set({
          currentUser: updatedUser,
          users: users.map((u) =>
            u.username === currentUser.username ? updatedUser : u,
          ),
        });

        return { success: true };
      },

      logout: () => {
        set({ currentUser: null });
      },
    }),
    {
      name: "user-storage",
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    },
  ),
);
