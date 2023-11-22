import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "../../axios";

const CreateWork = () => {
  const [imgUrl, setImgUrl] = useState(undefined);

  const [imgPerc, setImgPerc] = useState(0);
  const [image, setImage] = useState("");
  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc(Math.round(progress));
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  useEffect(() => {
    imgUrl && uploadFile(imgUrl);
  }, [imgUrl]);
  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post("/works/new", { image: image });

      alert("Work has been created")
      setImgUrl(undefined);
      setImage("");
      setImgPerc(0);
  
  };
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Create a Product </h3>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>

        {imgPerc > 0 ? (
          "uploading: " + imgPerc + "%"
        ) : (
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full mx-auto mt-8"
            onChange={(e) => setImgUrl(e.target.files[0])}
          />
        )}
        <div className="mt-10 flex gap-4 items-center justify-center">
          <button className="btn btn-success" onClick={handleUpload}>
            create
          </button>
          <button className="btn btn-success">cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateWork;
