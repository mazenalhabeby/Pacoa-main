import { containerPallets, palletQualities } from "@/data";
import ProductCard, { CustomPalletCard } from "@/components/ProductCard";

const Products = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-6 flex flex-col gap-12">
      <div>
        <span className="text-3xl font-bold uppercase py-6 inline-block tracking-widest">
          Palletten
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {palletQualities.map(({ grade, image, description, slug }) => (
            <ProductCard
              key={grade}
              slug={slug}
              grade={grade}
              image={image}
              description={description}
            />
          ))}
        </div>
      </div>
      <div>
        <span className="text-3xl font-bold uppercase py-6 inline-block tracking-widest">
          Containerpaletten
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {containerPallets.map(({ grade, image, description, slug }) => (
            <ProductCard
              key={grade}
              slug={slug}
              grade={grade}
              image={image}
              description={description}
            />
          ))}
        </div>
      </div>
      <div>
        <span className="text-3xl font-bold uppercase py-6 inline-block tracking-widest">
          Sonderpalette
        </span>
        <CustomPalletCard />
      </div>
    </section>
  );
};

export default Products;
