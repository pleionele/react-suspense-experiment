import React from "react";

function suspensify(promise) {

  let status = "success";
  if (status === "pending") throw promise;

  if (status === "error") throw Error;

  if (status === "success") return { name: "Fake User" };

}
let user = suspensify(
  fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json())
);

export default function UserDetail() {
  return <div>{user.name}</div>;
}
