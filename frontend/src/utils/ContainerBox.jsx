import PropTypes from "prop-types";

const ContainerBox = ({ children, styles }) => {
  return (
    <div
      className={`containerBox max-w-6xl w-full mx-auto ${
        styles ? styles : " "
      }`}
    >
      {children}
    </div>
  );
};

export default ContainerBox;

ContainerBox.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.string,
};
