import React from "react";
import Banner from "../common/Banner";

export default function BlogIndex() {
  return (
    <div>
      <div className="w-100 flex column gap-2">
        <Banner title={"7 Best Compact SUVs Under $18K Ranked For 2023"} />
        <div
          className="w-85 py-6 auto flex column gap-4"
          style={{ width: "65%" }}
        >
          <div className="flex column w-100 gap-2">
            <p className="family1 fs-20 text-dark text-light">
              A lacus vestibulum sed arcu non odio euismod. Accumsan in nisl
              nisi scelerisque eu ultrices. Duis ut diam quam nulla. Nascetur
              ridiculus mus mauris vitae ultricies leo integer malesuada.
              Elementum nibh tellus molestie nunc non blandit massa enim nec.
              Cursus risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Fermentum leo vel orci porta non pulvinar neque
              laoreet suspendisse. Sit amet luctus venenatis lectus magna.
              Curabitur gravida arcu ac tortor dignissim convallis aenean et.
            </p>
            <p className="family1 fs-20 text-dark text-light">
              Vel pretium lectus quam id leo in. Viverra nibh cras pulvinar
              mattis nunc sed blandit libero. Sit amet facilisis magna etiam
              tempor orci eu lobortis elementum. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus. In egestas
              erat imperdiet sed.
            </p>
          </div>
          <div className="w-100 flex column gap-2">
            <h3 className="fs-35 text-extra-bold text-dark">
              Some Highlights About Car Buying
            </h3>
            <p className="family1 fs-20 text-dark text-light">
              Vel pretium lectus quam id leo in. Viverra nibh cras pulvinar
              mattis nunc sed blandit libero. Sit amet facilisis magna etiam
              tempor orci eu lobortis elementum. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus. In egestas
              erat imperdiet sed.
            </p>
          </div>
          {/* images */}
          <div className="w-100 flex column gap-2">
            <h3 className="fs-35 text-extra-bold text-dark">
              What’s Trending In 2022
            </h3>
            <p className="family1 fs-20 text-dark text-light">
              Vel pretium lectus quam id leo in. Viverra nibh cras pulvinar
              mattis nunc sed blandit libero. Sit amet facilisis magna etiam
              tempor orci eu lobortis elementum. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus. In egestas
              erat imperdiet sed.
            </p>
            {/* images */}
            <p className="family1 fs-20 text-dark text-light">
              Duis ut diam quam nulla. Nascetur ridiculus mus mauris vitae
              ultricies leo integer malesuada. Elementum nibh tellus molestie
              nunc non blandit massa enim nec. Cursus risus at ultrices mi
              tempus imperdiet nulla malesuada pellentesque. Fermentum leo vel
              orci porta non pulvinar neque laoreet suspendisse. Eu sem integer
              vitae justo eget magna fermentum iaculis. Condimentum mattis
              pellentesque id nibh tortor id aliquet. Eu facilisis sed odio
              morbi quis commodo. Enim facilisis gravida neque convallis.
            </p>
          </div>

          <div className="flex w-100 gap-1 column">
            <h3 className="fs-20 text-extra-bold text-dark">Leave A Comment</h3>
            <textarea className="textarea" placeholder="Send a message" />
            <div className="flex w-100 gap-1 item-center">
              <input type="text" placeholder="Name (required)" />
              <input type="text" placeholder="Email (required)" />
              <input type="text" placeholder="Message" />
            </div>
            <div className="w-100 py-2">
              <button className="btn red fs-16 py-2 px-2 text-white text-bold">Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
