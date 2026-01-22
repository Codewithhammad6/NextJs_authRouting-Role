import AuthGuard from "../components/AuthGuard";
import { userStore } from "../store/userStore";


export default function RootLayout({ children }) {
  return (
       <AuthGuard isAuth={userStore.isAuth} allowedRoles={['admin']}>
        {children}
        </AuthGuard>
  );
}
