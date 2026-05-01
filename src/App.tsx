import { useEffect, useState } from "react";
import { Retune } from "retune";
import ProductList from "./components/ProductList";
import CollectionDrawer from "./components/CollectionDrawer";
import type { SkuCardProps } from "./components/SkuCard";
import topImg from "./assets/Top.png";
import bottomImg from "./assets/Bottom.png";

const DRAWER_TRANSITION_MS = 300;

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<SkuCardProps | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!selectedProduct) return;
    const id = requestAnimationFrame(() => setIsOpen(true));
    return () => cancelAnimationFrame(id);
  }, [selectedProduct]);

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedProduct(null), DRAWER_TRANSITION_MS);
  };

  return (
    <>
      <div className="flex min-h-full w-full flex-col items-stretch justify-start bg-[#e9ebf0] py-8">
        <div className="relative mx-auto flex h-[812px] w-[375px] flex-col overflow-hidden bg-surface-primary">
          <img src={topImg} alt="" className="block w-full shrink-0" />
          <div className="min-h-0 flex-1 overflow-hidden">
            <ProductList onWishlistToggle={setSelectedProduct} />
          </div>
          <img src={bottomImg} alt="" className="block w-full shrink-0" />

          {selectedProduct && (
            <div className="absolute inset-0 z-50 flex flex-col justify-end">
              <button
                type="button"
                aria-label="Close"
                onClick={closeDrawer}
                className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`relative transition-transform duration-300 ease-out ${
                  isOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <CollectionDrawer
                  product={{ image: selectedProduct.image }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Retune />
    </>
  );
}
