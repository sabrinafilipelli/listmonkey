import React from "react";

export const SignInGoogleBase = ({ history, firebase }) => {
  const onSubmit = async e => {
    e.preventDefault();

    try {
      const socialAuthUser = await firebase.doSignInWithGoogle();
      firebase.user(socialAuthUser.user.uid).set({
        username: socialAuthUser.additionalUserInfo.profile.name,
        email: socialAuthUser.additionalUserInfo.profile.email,
        token: socialAuthUser.credential.idToken,
        roles: { ADMIN: "ADMIN" }
      });
    } catch (e) {
      console.error(e.code, e.message);
    } finally {
      history.push("./dashboard");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Sign In with Google</button>
    </form>
  );
};
