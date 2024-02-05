import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className="w-9/12 border-2 border-blue-800">
          <img
            src=""
            alt="Image not uploaded."
            className="border-2 border-grey-800"
          />
          <span>This is a Blog</span>
          <img src="" alt="Profile image" />
          <span>Tarun Tomar</span>
          <span>Subscribers</span>
          <a href="">
            <img src="" alt="Save to collection" />
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reiciendis rerum. Aliquam aliquid magni illo, maiores voluptatibus a rem blanditiis repudiandae libero earum. Quia magni nam eos eum tenetur aspernatur sequi tempore nisi atque?</p>
          <hr />
        </div>
        <div className="w-3/12  border-2 border-green-800">
            <img src="" alt="Blog Picture" />
            <span>Blog in trending list</span>
        </div>
      </div>
    </>
  );
};

export default Home;
