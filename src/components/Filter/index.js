import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from 'react-router-dom'

const images = [
  { id: "1", imageName: "ultivic-01.png", tag: "web" },
  { id: "2", imageName: "ultivic-02.png", tag: "web" },
  { id: "3", imageName: "ultivic-03.png", tag: "android" },
  { id: "4", imageName: "ultivic-04.png", tag: "ios" },
  { id: "5", imageName: "ultivic-05.png", tag: "ios" },
  { id: "6", imageName: "ultivic-06.png", tag: "web" },
  { id: "7", imageName: "ultivic-07.png", tag: "android" },
  { id: "8", imageName: "ultivic-08.png", tag: "web" },
  { id: "9", imageName: "ultivic-09.png", tag: "web" },
  { id: "10", imageName: "ultivic-10.png", tag: "web" },
];
function Filter() {
  const [tag, setTag] = useState("all");
  const [filterimages, setFilterimages] = useState([]);
  useEffect(() => {
    tag == "all"
      ? setFilterimages(images)
      : setFilterimages(images.filter((image) => image.tag == tag));   
  }, [tag]);
  return (
    <div className="container">
      <div className="filter_inner">
        <div className="tagsfilter text-center">
          <TagButton
            name="all"
            handleSetTag={setTag}
            tagActive={tag == "all" ? true : false}
          />
          <TagButton
            name="web"
            handleSetTag={setTag}
            tagActive={tag == "web" ? true : false}
          />
          <TagButton
            name="ios"
            handleSetTag={setTag}
            tagActive={tag == "ios" ? true : false}
          />
          <TagButton
            name="android"
            handleSetTag={setTag}
            tagActive={tag == "android" ? true : false}
          />
        </div>
        <SRLWrapper>
        <div className="row">
         
            {filterimages.map((image) => (
              <div key={image.id} className="image-card col-md-6 col-lg-4">
                <Link to={`/assets/portfolio/${image.imageName}`}>
                  <img
                    className="image"
                    src={`/assets/portfolio/${image.imageName}`}
                    alt=""
                  />
              </Link>

                {/* {image.imageName} */}
              </div>
            ))}
        
        </div>
        </SRLWrapper>
      </div>
    </div>
  );
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : "filt_button"}`}
      onClick={() => handleSetTag(name)}
    >
      {" "}
      {name.toUpperCase()}
    </button>
  );
};
export default Filter;
