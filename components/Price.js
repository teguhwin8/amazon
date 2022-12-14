import currencyFormatter from "currency-formatter";

function Price({ value }) {
  return (
    <div className="text-black text-xl whitespace-nowrap">
      <span className="font-bold">
        {currencyFormatter.format(value, {
          symbol: "Rp",
          decimal: ",",
          thousand: ".",
          precision: 0,
          format: "%s %v", // %s is the symbol and %v is the value
        })}
      </span>
    </div>
  );
}

export default Price;
