import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    birthdate: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("birthdate", newUser.birthdate);
    formData.append("name", newUser.name);

    axios
      .post("http://localhost:5555/imagelist/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let setNewAuthor = setNewUser;
  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthdate"
        value={newUser.date}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default ImageUpload;
