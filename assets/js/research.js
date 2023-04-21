/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Mumbai Port Trust",
    authors:
      "Ms. Devleena Banerjee",
    conferences:
      "Mumbai Port Trust is a port which lies midway on the West coast of India, on the natural deep-water harbour of Mumbai in Maharashtra.The harbour spread over 400 square kilometres",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/mumbai.jpeg",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    Documentation:
      "https://docs.google.com/document/d/1eX7vo1T960HLzB7RfPqNtBzkNE9NxeXl/edit?usp=sharing&ouid=116754275832727166493&rtpof=true&sd=true",
    absbox: "absPopup1",
  },


];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      Documentation,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <a class="button button-accent button-small text-right button-Documentation " target="_blank" href="https://docs.google.com/document/d/1eX7vo1T960HLzB7RfPqNtBzkNE9NxeXl/edit?usp=sharing&ouid=116754275832727166493&rtpof=true&sd=true" >
                            Documentation
                        </a>
                
                       
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${Documentation}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
