import PropTypes from "prop-types";

function CustomBadge(props) {
  return (
    <div
      className={`min-w-2 min-h-2 w-fit h-fit rounded-3xl text-xs  py-1 px-2 bg-${props.color}`}
    ></div>
  );
}

CustomBadge.propTypes = {
  color: PropTypes.string,
};
export default CustomBadge;
