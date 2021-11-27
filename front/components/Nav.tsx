import React from "react";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="hidden bg-green-500 bg-opacity-40 rounded-3xl max-w-max px-6 py-10 md:grid md:sticky top-36 left-16 justify-center gap-3 text-white lg:left-48 xl:py-14 xl:left-64">
        <div>
          <h3 className="nav-title mb-3">ROADMAP</h3>
          <ul className="text-lg grid gap-4 xl:text-2xl">
            <li className="nav-list-item">
              <a href="#P1">P1 - They see us rolling</a>
            </li>
            <li className="nav-list-item">
              {" "}
              <a href="#P2">P2 - Keep rolling</a>
            </li>
            <li className="nav-list-item">
              <a href="#P3">P3 - Roll another tree</a>
            </li>
            <li className="nav-list-item">
              <a href="#P4">P4 - Come and roll together</a>
            </li>
            <li className="nav-list-item">
              <a href="#P5">P5 - Revive Dinos</a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="nav-title mb-3">ABOUT</h3>
          <ul className="text-lg grid gap-3 xl:text-2xl">
            <li className="nav-list-item">
              <a href="#mission">Our mission</a>{" "}
            </li>
            <li className="nav-list-item">
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
