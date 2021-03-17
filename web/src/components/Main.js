//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";
import defaultImage from "../images/profile_image.gif";
import React, { useEffect, useState } from "react";

function Main() {
  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userDataAPC"));
  }

  const savedUserData = getFromLocalStorage();

  const [userData, setUserData] = useState(
    savedUserData
      ? {
          // photo
          // palette: savedUserData.palette,
          // name: savedUserData.name,
          // job: savedUserData.job,
          // email: savedUserData.email,
          // phone: savedUserData.phone,
          // linkedin: savedUserData.linkedin,
          // github: savedUserData.github,
          ...savedUserData,
        }
      : {
          photo: defaultImage,
          palette: "1",
          name: "",
          job: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          customColors: {
            color1: "#667788",
            color2: "#f47373",
            color3: "#FABDAA",
          },
        }
  );
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);

  const handleChangePalette = (ev) => {
    const newValue = ev.currentTarget.value;
    setUserData({ ...userData, palette: newValue });
  };

  const handleUpdateColors = (value) => {
    console.log("trying to change the color");
    console.log(value);
    if (value.key === "color1") {
      setUserData({
        ...userData,
        customColors: { ...userData.customColors, color1: value.color },
      });
    }
    if (value.key === "color2") {
      setUserData({
        ...userData,
        customColors: { ...userData.customColors, color2: value.color },
      });
    }
    if (value.key === "color3") {
      setUserData({
        ...userData,
        customColors: { ...userData.customColors, color3: value.color },
      });
    }
  };

  console.log(userData.customColors);

  function handleInput(ev) {
    const field = ev.target.name;

    setUserData({
      ...userData,
      [field]: ev.target.value,
    });

    // if (field === "name") {
    //   setUserData({ ...userData, name: ev.target.value });
    // } else if (field === "job") {
    //   setUserData({ ...userData, job: ev.target.value });
    // } else if (field === "email") {
    //   setUserData({ ...userData, email: ev.target.value });
    // } else if (field === "phone") {
    //   setUserData({ ...userData, phone: ev.target.value });
    // } else if (field === "linkedin") {
    //   setUserData({ ...userData, linkedin: ev.target.value });
    // } else if (field === "github") {
    //   setUserData({ ...userData, github: ev.target.value });
    // }
  }

  useEffect(() => {
    console.log("Me estoy montando");
    localStorage.setItem("userDataAPC", JSON.stringify(userData));
  }, [userData]);

  function updateAvatar(img) {
    setUserData({ ...userData, photo: img });
    setIsAvatarDefault(false);
  }
  const resetUserData = () => {
    return setUserData({
      ...userData,
      photo: defaultImage,
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      customColors: {
        color1: "#667788",
        color2: "#f47373",
        color3: "#FABDAA",
      },
    });
  };
  return (
    <main className="main">
      <Preview
        job={userData.job}
        name={userData.name}
        email={userData.email}
        phone={userData.phone}
        linkedin={userData.linkedin}
        github={userData.github}
        selectedPalette={userData.palette}
        avatar={userData.photo}
        resetUserData={resetUserData}
        colors={userData.palette === "4" ? userData.customColors : {}}
      />
      <Form
        job={userData.job}
        name={userData.name}
        email={userData.email}
        phone={userData.phone}
        linkedin={userData.linkedin}
        github={userData.github}
        handleInput={handleInput}
        selectedPalette={userData.palette}
        changePalette={handleChangePalette}
        avatar={userData.photo}
        updateAvatar={updateAvatar}
        isAvatarDefault={isAvatarDefault}
        userData={userData}
        colors={userData.customColors}
        handleUpdateColors={handleUpdateColors}
      />
    </main>
  );
}

export default Main;
