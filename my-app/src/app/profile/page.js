import AuthGuard from "../components/AuthGuard";
import { userStore } from "../store/userStore";

export default function Profile() {
  return (
    <AuthGuard isAuth={userStore.isAuth}>

        <div className="text-center mt-12 text-4xl">Profile page</div>
    </AuthGuard>
  )
}
