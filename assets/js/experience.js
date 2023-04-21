AOS.init();

//  Individual experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Sehej Gumber",
    cardImage: "assets/images/sehej.jpeg",
    place: "Pune",
    time: "(2021-2024)",
    desp: "The port visit was an exciting and memorable experience, as I had the opportunity to explore a bustling and dynamic port city. As we arrived at the port, I was struck by the sheer size of the cargo ships docked along the waterfront, towering over the surrounding buildings.We also had the chance to witness the unloading of cargo from the ships, marveling at the efficiency and organization of the port workers.",
  },
  {
    title: "Sruthi Kosuri",
    cardImage: "assets/images/sruthi.jpeg",
    place: "Hyderabad",
    time: "(2021-2024)",
    desp: "The port visit was a unique and unforgettable experience, providing me with a newfound appreciation for the interconnectivity of the world and the important role that ports play in facilitating global trade and exchange.There was a renewed sense of curiosity and wonder about the world around us.",
  },
  {
    title: "Shaik Sahar",
    cardImage: "assets/images/sahar (2).jpeg",
    place: "Goa",
    time: "(2021-2024)",
    desp: "During the visit, we had the opportunity to tour the various port facilities, including the container terminal and the bulk cargo terminal, where we learned about the different types of cargo that were handled at the port.",
  },
  {
    title: "Yashi Khera",
    cardImage: "assets/images/yashi.png",
    place: "Prayagraj",
    time: "(2021-2024)",
    desp: "During the field trip, I got the opportunity to tour the port facilities and see the various types of cargo being loaded and unloaded from ships. I also learned about the logistics of port operations, including the role of customs officials, port authorities, and other stakeholders in the supply chain. The entire visit was very engaging and informative.",
  },
  {
    title: "Arya Jain",
    cardImage: "assets/images/arya (2).jpeg",
    place: "Indore",
    time: "(2021-2024)",
    desp: "The educational field trip to port in Mumbai was a dynamic and engaging experience, providing us with a multifaceted perspective on the port industry and its significance in shaping the global economy. We came away with a greater appreciation for the importance of collaboration and innovation in the industry.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


 
  
  
    

