import React from "react";

export const SignInFacebookBase = ({ history, firebase }) => {
  const onSubmit = async e => {
    e.preventDefault();
    const socialAuthUser = await firebase.doSignInWithFacebook();
    try {
      return firebase.user(socialAuthUser.user.uid).set({
        username: socialAuthUser.additionalUserInfo.profile.name,
        email: socialAuthUser.additionalUserInfo.profile.email,
        roles: {}
      });
    } catch (e) {
      console.error(e.code, e.message);
    } finally {
      history.push("./dashboard");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Sign In with Facebook</button>
    </form>
  );
};
