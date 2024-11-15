import styles from "./ProductTypes.module.css";
function ProductTypes({ gradient = false, text = "" }) {
  return (
    <div
      className={`${
        gradient ? styles.gradient : ""
      } pl-2 pr-2 mr-4 mt-4 border-[1px] inline-block  ${
        gradient ? "border-blue-400" : "border-gray-400 text-gray-600"
      }`}
    >
      <p className="text-xs font-[500] leading-7">{text}</p>
    </div>
  );
}

export default ProductTypes;
