import { useUserStore } from "../store/useUserStore";

export default function ProtectedRoute({ children }) {
  const currentUser = useUserStore((state) => state.currentUser);
  const hasHydrated = useUserStore((state) => state._hasHydrated);

  if (!hasHydrated) {
    return null; // atau loading spinner
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
