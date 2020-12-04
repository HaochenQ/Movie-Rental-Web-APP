import React from "react";

function Profile(props) {
  const { user } = props;
  if (user) {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text-dark">Welcome back! {user.name}</h1>

          {user.isAdmin && (
            <h2 className="text-secondary mb-5">You are an admin user!</h2>
          )}
          <h4>Email: {user.email}</h4>
        </div>
      </div>
    );
  }
  return null;
}

export default Profile;
