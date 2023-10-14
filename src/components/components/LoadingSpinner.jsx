import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <FontAwesomeIcon className="animate-spin w-12 h-12" icon={'fa-solid fa-spinner'} />
    </div>
  );
};

export default LoadingSpinner;