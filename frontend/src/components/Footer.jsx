import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      &copy; {new Date().getFullYear()} Hafidz Portfolio. All rights reserved.
    </footer>
  );
}
