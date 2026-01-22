import GuestGuard from "../components/GuestGuard";
import { userStore } from "../store/userStore";

export default function signup() {
  return (
     <GuestGuard isAuth={userStore.isAuth}>
   
         <div className="text-center mt-12 text-4xl">Signup Page</div>
              </GuestGuard>
  )
}
