import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center min-vh-100 align-items-center">
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="blue"
        strokeWidth="5"
        animationDuration="0.1"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
