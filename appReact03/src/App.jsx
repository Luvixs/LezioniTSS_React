import { useState } from 'react'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import './App.css'
import FormProva from '../components/FormProva'
import CardFormVero from '../components/CardFormVero'


function App() {


  const [birds, setBirds] = useState([
    {
      id: 0,
      title: "Tucano",
      imgURL: "https://images.unsplash.com/photo-1604428401169-906567f16f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "tutto coloratoooo",
      isSpotted: true,
      comment: "I tucaniiiii wauuuuhhh!!!"
    },

    {
      id: 1,
      title: "Flamingo",
      imgURL: "https://images.unsplash.com/photo-1488802484013-f23aca1e2d9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "è rosaaaaaaa",
      isSpotted: false,
      comment: "che posa classica"
    },

    {
      id: 2,
      title: "Parrot",
      imgURL: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "arggggggh",
      isSpotted: false,
      comment: "Ripete tutto quello che dico"
    },

    {
      id: 3,
      title: "Corvo",
      imgURL: "https://images.unsplash.com/photo-1572608705929-0e245b6fa24d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "sono dark",
      isSpotted: true,
      comment: "Sono il king intelligente"
    }
  ]);


  // Questa funzione usata nel prop di CardForm prende un newBird in ingresso. Questo newBird vive nel child non nel parent
  const addBird = (newBird) => {
      setBirds([...birds, newBird]);
  }

  const stampaUser = (userToPrint) => {
    console.log(userToPrint);
    
  }
  return (
    <>

      <h1>App BIRD WATCHING</h1>

      <div className="card-container">


        {birds.map((bird) => (
          <Card
            key={bird.id}
            title={bird.title}
            imgURL={bird.imgURL}
            description={bird.description}
            isSpotted={bird.isSpotted}>
            {bird.comment}
          </Card>
        ))}

      </div>

      <div className="clearfix"></div>
      <hr />

      <div className="card-container">
        {/*       propCHILD = propParent */}
        <CardForm addBird={addBird}></CardForm>
      </div>

      <div className="card-container">
        <FormProva stampaUser={stampaUser}></FormProva>
      </div>

      <hr />
      <div className="card-container">
        <CardFormVero addBird={addBird}></CardFormVero>
      </div>
    </>
  )
}

export default App
