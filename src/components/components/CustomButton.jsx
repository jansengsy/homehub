export default function CustomButton({content, click, type, customClasses}) {

  const classes = `px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white ${customClasses}`;
  
  return (
    <button
      className={classes}
      onClick={click}
      type={type}
    >
      {content}
    </button>
  );
}
