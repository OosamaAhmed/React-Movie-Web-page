function Card(props) {
  // function Card({img, name, desc}) {
  //
  console.log(props);

  return (
    <>
      <div className="card text-center mt-2" style={{ width: "13rem",height:"240px" }}>
        <img src={props.img} className="card-img-top" alt="..." />

        {/* <img src={props.img} className="card-img-top" alt="..." /> */}
        {/* <img src={img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
          {/* <h5 className="card-title"> {name} </h5> */}

          {/* <p className="card-text"> {desc} </p> */}
        </div>
      </div>
    </>
  );
}

export default Card;
