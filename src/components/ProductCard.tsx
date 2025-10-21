import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import PalletDialog from "./PalletDialog";
import { customPallet } from "@/assets";

interface ProductCardProps {
  grade: string;
  description: string;
  slug: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  grade,
  description,
  slug,
  image,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#fefefe] to-[#f4f4f4] shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e0e0e0]">
      {/* IMAGE CONTAINER – keeps full image visible and centered */}
      <div className="w-full h-48 rounded-lg mb-4 bg-white/60 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={grade}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="text-2xl font-extrabold text-[#b85b16] mb-2">{grade}</h3>
      <p className="text-gray-700 text-sm flex-1 mb-6">{description}</p>

      <div className="flex items-center justify-between gap-4">
        <PalletDialog grade={grade} />
        <Link
          to={`/products/${slug}`}
          className="mt-auto px-4 py-2 bg-[#b85b16] hover:bg-[#a24e13] text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer"
          aria-label={`${grade} ansehen`}
        >
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

export const CustomPalletCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#fefefe] to-[#f4f4f4] shadow-lg rounded-xl p-6 text-center border border-[#e0e0e0] flex flex-col">
      {/* Same containment behavior for consistency */}
      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-orange-100 to-white mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={customPallet}
          alt="Sonderpalette Illustration"
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="text-2xl font-extrabold text-[#b85b16] mb-2">
        Sonderpalette
      </h3>
      <p className="text-gray-700 text-sm mb-6 flex-1">
        Eigene Maße wählen – Länge, Breite, Höhe. Live-Preisabschätzung &
        Anfrage.
      </p>
      <Link
        to="/products/custom"
        className="mt-auto px-4 py-2 bg-[#b85b16] hover:bg-[#a24e13] text-white font-semibold rounded-full transition-colors duration-300"
        aria-label="Sonderpalette konfigurieren"
      >
        Jetzt konfigurieren
      </Link>
    </div>
  );
};
