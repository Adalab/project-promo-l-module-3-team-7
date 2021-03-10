//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";
import defaultImage from "../images/lee.jpg";
import React, { useEffect, useState } from "react";

function Main() {
  console.log("Me estoy renderizando");

  function getFromLocalStorage() {
    // if (localStorage.getItem("userDataAPC") !== null) {
    return JSON.parse(localStorage.getItem("userDataAPC"));
    // }
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
        }
  );
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);
  // const [profile, setProfile] = useState({ avatar: defaultImage });

  const handleChangePalette = (ev) => {
    const newValue = ev.currentTarget.value;
    // setSelectedPalette(newValue);
    setUserData({ ...userData, palette: newValue });
  };
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
    // setProfile({ avatar: img });
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
      />
    </main>
  );
}

export default Main;
