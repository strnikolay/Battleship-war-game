

const Axis = ({ direction = "row" }) => {
  const getAxisLabels = (direction) => {
    switch (direction) {
      case "row":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      case "column":
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      default:
    }
  };

  /*const AxisItem = ({ label }) => {
    return <div className="axis__label">{label}</div>;
  };*/

  return (
    <div className={`square-title ${direction}`}>
      {getAxisLabels(direction).map((label, index) => {
        //return <AxisItem key={`axis_label_${label}`} label={label} />;
        return <div key={`square-title-label_${label}`} className="square-title-label">{label}</div>;
      })}
    </div>
  );
};

export default Axis;
