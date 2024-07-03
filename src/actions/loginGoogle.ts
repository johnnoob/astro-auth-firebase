import { projectAuth } from "@/firebase/config";
import { defineAction, z } from "astro:actions";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const loginGoogle = defineAction({
  handler: async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(projectAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        }
        const user = result.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    console.log(result);
    console.log(projectAuth.currentUser);
  },
});
