import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./napster-service";
import { Navigate, Route, Routes } from "react-router-dom";
import NapsterSearch from "./napster-search";
import NapsterAlbum from "./napster-album";
import UserList from "./users/list";
import UserDetails from "./users/details";
import SignIn from "./users/signin";
import Account from "./users/account";
import SignUp from "./users/signup";
import Nav from "./nav";
import store from "./store";
import { Provider } from "react-redux";
import CurrentUser from "./users/currentUser";
import ProtectedAdminRoute from "./users/protectedAdminRoute";
import UserTable from "./users/table";

function Project() {
  return (
    <Provider store={store}>
      <div className="row container-fluid mt-2">
      <div className="col-3">
        <Nav />
      </div>
        <div className="col-9">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/project/signin" />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            {/* <Route path="/napster-search" element={<NapsterSearch />} />
            <Route path="/napster-album/:id" element={<NapsterAlbum />} /> */}
            <Route
              path="/users"
              element={
                <ProtectedAdminRoute>
                  <UserList />
                </ProtectedAdminRoute>
              }
            />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
      <CurrentUser></CurrentUser>
    </Provider>
  );
}

export default Project;
