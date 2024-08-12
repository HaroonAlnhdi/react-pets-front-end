const PetList = (props) => {
  const pets = props.petList.map((pet) => (
    <a key={pet._id} onClick={() => props.updateSelected(pet)}>
      <li>{pet.name}</li>
    </a>
  ));

  return (
    <div>
      <h1>Pet List</h1>
      {!props.petList.length ? (
        <h2>No Pets Yet!</h2>
      ) : (
        <div>
          <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'New Pet'}
          </button>
          <ul>{pets}</ul>
        </div>
      )}
    </div>
  );
};

export default PetList;