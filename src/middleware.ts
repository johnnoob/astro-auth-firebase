import { defineMiddleware } from "astro:middleware";
import { projectAuth } from "./firebase/config";

export const onRequest = defineMiddleware((context, next) => {
  const currentUser = projectAuth.currentUser;
  const { pathname } = context.url;
  console.log(currentUser);

  if (
    !currentUser &&
    pathname !== "/new" &&
    pathname !== "/login" &&
    context.request.method === "GET"
  ) {
    console.log("haha");

    return context.redirect("/login");
  }

  if (currentUser) {
    context.locals.userEmail = currentUser.email;
  }
  if (currentUser && (pathname === "/login" || pathname === "/new")) {
    return context.redirect("/");
  }
  return next();
});
