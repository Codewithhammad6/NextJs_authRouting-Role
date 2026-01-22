import GuestGuard from "../components/GuestGuard";
import { userStore } from "../store/userStore";

export default function Login() {
  return (
     <GuestGuard isAuth={userStore.isAuth}>

               <div className="text-center mt-12 text-4xl">Login page</div>
           </GuestGuard>
  )
}
