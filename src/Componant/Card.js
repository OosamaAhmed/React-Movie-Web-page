
function Card(props) {


  return (
    <div>
      <div className="text-center">
        <img src={props.img} className="card-img-top w-100" alt="..." />
        <div className="body">
          <h5 className="card-title p-2 "> {props.name} </h5>
        </div>
      </div>
    </div>
  );
}
export default Card;
