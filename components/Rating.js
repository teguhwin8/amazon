import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as Star } from "@heroicons/react/24/solid";

function Rating({ value }) {
  return (
    <div className="flex items-center space-x-1">
      {Array(Math.floor(value))
        .fill()
        .map((_, i) => (
          <Star key={i} className="text-yellow-500 h-4" />
        ))}

      {Array(5 - Math.floor(value))
        .fill()
        .map((_, i) => (
          <StarIcon key={i} className="h-4" />
        ))}
    </div>
  );
}

export default Rating;
