const Pictures = (props) => {
  const { name, img } = props;
  return (
    <div>
      <div className="imgDiv">
        <img src={img} alt="" />
      </div>
      <p className="name">{name}</p>
    </div>
  );
};

export default Pictures;
