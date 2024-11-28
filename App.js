import React, { useState } from "react";
import { saveAs } from "file-saver";
import { useTheme } from "./context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid"; // Info icon import
import { Canvg } from "canvg";
import AvatarCanvas from "./components/AvatarCanvas";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [customization, setCustomization] = useState({
    faceShape: "round",
    hairstyle: "short",
    hairColor: "#000",
    clothing: "tshirt",
    accessory: "none",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCustomizationChange = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  const generateRandomAvatar = () => {
    const randomFaceShape = ["round", "oval", "square"][Math.floor(Math.random() * 3)];
    const randomHairstyle = ["short", "bald", "curly"][Math.floor(Math.random() * 3)];
    const randomHairColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const randomClothing = ["tshirt", "hoodie", "suit"][Math.floor(Math.random() * 3)];
    const randomAccessory = ["none", "glasses", "hat"][Math.floor(Math.random() * 3)];

    setCustomization({
      faceShape: randomFaceShape,
      hairstyle: randomHairstyle,
      hairColor: randomHairColor,
      clothing: randomClothing,
      accessory: randomAccessory,
    });
  };

  const downloadAvatar = () => {
    const svgElement = document.getElementById("avatar-canvas");
    if (svgElement) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const canvgInstance = Canvg.from(ctx, svgData);
      canvgInstance.render().then(() => {
        canvas.toBlob((blob) => saveAs(blob, "avatar.png"));
      });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100" : "bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900"} p-8 transition-all duration-300 ease-in-out`}
    >
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Custom Avatar Creator
        </h1>
        <p className="text-lg mt-3 text-gray-600 dark:text-gray-400">
          Create, customize, and download your personalized avatar.
        </p>
      </header>

      <div className={`flex flex-col md:flex-row gap-8 justify-center items-center ${isModalOpen ? "blur-sm" : ""}`}>
        {/* Avatar Canvas */}
        <div className="relative w-full md:w-1/2">
          <div
            id="avatar-canvas"
            className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <AvatarCanvas customization={customization} />
          </div>
        </div>

        {/* Customization Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Customize Your Avatar</h2>
          <div className="space-y-4">
            {["faceShape", "hairstyle", "clothing", "accessory"].map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize">{key}:</label>
                <select
                  value={customization[key]}
                  onChange={(e) => handleCustomizationChange(key, e.target.value)}
                  className="w-full mt-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-2 focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  {key === "faceShape" && ["round", "oval", "square"].map((option) => <option key={option}>{option}</option>)}
                  {key === "hairstyle" && ["short", "bald", "curly"].map((option) => <option key={option}>{option}</option>)}
                  {key === "clothing" && ["tshirt", "hoodie", "suit"].map((option) => <option key={option}>{option}</option>)}
                  {key === "accessory" && ["none", "glasses", "hat"].map((option) => <option key={option}>{option}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium">Hair Color:</label>
              <input
                type="color"
                value={customization.hairColor}
                onChange={(e) => handleCustomizationChange("hairColor", e.target.value)}
                className="mt-1 w-full h-10 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 max-w-full shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About Us</h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
              This Avatar Creator was developed by Pranjal, a passionate developer who loves building cool and
              interactive web applications. The project is designed to offer a fun and personalized experience for
              users to create avatars with unique customization options.
            </p>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-300">
            ©.2024.Pranjal.All Rights Reserved.
              <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                [Your Portfolio]
              </a>.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Us Button with Minimalist Icon */}
      <button
        onClick={openModal}
        className="fixed top-4 right-16 p-3 bg-transparent text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out border-none rounded-full z-10"
      >
        <InformationCircleIcon className="w-8 h-8 transition-transform transform hover:scale-110" />
      </button>

      {/* Theme Toggle Button with Animated Hover Effect */}
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="fixed top-4 right-4 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-500 transform hover:scale-110"
      >
        {isDarkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
      </button>

      {/* Footer section with Cool Button Designs */}
      <footer className="text-center mt-8 space-x-4">
        <button
          onClick={downloadAvatar}
          className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Download Avatar
        </button>
        <button
          onClick={generateRandomAvatar}
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
        >
          Randomize
        </button>
      </footer>
    </div>
  );
};

export default App;
