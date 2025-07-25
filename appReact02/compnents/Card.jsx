import './Card.css'
import { useState } from 'react'
// function Card() {

//     const title = "Tucano";
//     const imgURL = "https://images.unsplash.com/photo-1604428401169-906567f16f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const description = "tutto coloratoooo"
//     return(
//         <div className="card">
//             <img className="card-img" src={imgURL} alt="" />
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

// function Card(props){
//     const title = props.tilte;
//     const description = props.description;
//     const imgURL = props.imgURL;

//     return(
//         <div className="card">
//             <div className="card-img">

//              <img src={imgURL} alt="" />
//             </div>
//              <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//              </div>
//          </div>
//     )
// }

// function Card({title, description, imgURL}){
//     return(
//         <div className="card">
//              <div className="card-img">

//               <img src={imgURL} alt="" />
//              </div>
//               <div>
//                  <h2>{title}</h2>
//                  <p>{description}</p>
//               </div>
//           </div>
//     )
// }

function Card({title, description, imgURL, children}){
    
    const [isSpotted, setIsSpotted] = useState(true);

    const cambiaSfondo = () =>{
      setIsSpotted (isSpotted => !isSpotted)
    }
    return(
<div className= {` card ${isSpotted ? "avvistato" : "nonAvvistato"}`} >
  {/* style={{ backgroundColor: isSpotted ? "lightgreen" : "lightcoral" }} */}
              <div className="card-img">

               <img src={imgURL} alt="" />
              </div>
               <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                    <p>Commento:{children}</p>
               </div>

               {/* <div>
                <span>{isSpotted ? "avvistato" : "non avvistato"}</span>
               </div> */}

          <button onClick={cambiaSfondo} >{isSpotted ? "avvistato" : "non avvistato"}
          </button>

           </div>
            
    )
}
export default Card;