import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
const images = [
  { id: "1", imageName: "contact_bottom.jpg", tag: "web" },
  { id: "2", imageName: "contact_bottom.jpg", tag: "web" },
  { id: "3", imageName: "Ultivic_about.png", tag: "android" },
  { id: "4", imageName: "contact_bottom.jpg", tag: "ios" },
  { id: "5", imageName: "Ultivic_about.png", tag: "ios" },
  { id: "6", imageName: "Ultivic_about.png", tag: "web" },
  { id: "7", imageName: "contact_bottom.jpg", tag: "android" },
  { id: "8", imageName: "Ultivic_about.png", tag: "web" },
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
              <div key={image.id} className="image-card col-md-4">
                <a href={`/assets/${image.imageName}`}>
                  <img
                    className="image"
                    src={`/assets/${image.imageName}`}
                    alt=""
                  />
                </a>

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
