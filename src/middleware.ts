import { defineMiddleware } from "astro:middleware";
import { projectAuth } from "./firebase/config";
import { app } from "./firebase/server";
import { getAuth } from "firebase-admin/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const auth = getAuth(app);
  const sessionCookie = context.cookies.get("__session")?.value;
  if (sessionCookie) {
    const { name: username } = await auth.verifySessionCookie(sessionCookie);
    console.log(username);
  }

  const { pathname } = context.url;
  // console.log(currentUser);

  // if (
  //   !currentUser &&
  //   pathname !== "/new" &&
  //   pathname !== "/login" &&
  //   context.request.method === "GET"
  // ) {
  //   console.log("haha");

  //   return context.redirect("/login");
  // }

  // if (currentUser && (pathname === "/login" || pathname === "/new")) {
  //   return context.redirect("/");
  // }
  return next();
});
