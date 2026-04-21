import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Search, Heart, ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "T-Shirts",
    text: "Klare Basics für jeden Tag.",
  },
  {
    title: "Hoodies",
    text: "Schlichte Oversize-Pieces in neutralen Farben.",
  },
  {
    title: "Jackets",
    text: "Reduzierte Outerwear mit cleanem Look.",
  },
];

const products = [
  {
    name: "Essential Tee",
    price: "€39",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    tag: "Unisex",
  },
  {
    name: "Soft Hoodie",
    price: "€79",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    tag: "Best Seller",
  },
  {
    name: "Clean Jacket",
    price: "€119",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    tag: "New",
  },
  {
    name: "Classic Pants",
    price: "€69",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    tag: "Selected",
  },
];

export default function SelectedWearStore() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 hover:bg-zinc-100 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Store</p>
              <h1 className="text-xl font-semibold tracking-[0.2em]">SELECTED WEAR</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-600 lg:flex">
            <a href="#home" className="hover:text-zinc-950">Home</a>
            <a href="#shop" className="hover:text-zinc-950">Shop</a>
            <a href="#about" className="hover:text-zinc-950">About</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 hover:bg-zinc-100"><Search className="h-5 w-5" /></button>
            <button className="rounded-full p-2 hover:bg-zinc-100"><Heart className="h-5 w-5" /></button>
            <button className="rounded-full p-2 hover:bg-zinc-100"><ShoppingBag className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="border-b border-zinc-200 bg-zinc-100">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Minimal. Clean. Timeless.</p>
              <h2 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
                Selected pieces for everyday wear.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Ein schlichter Online-Store für moderne Basics in Grau, Weiß und ruhigen Neutrals. Weniger Lärm, mehr Stil.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="rounded-full bg-zinc-900 px-6 py-6 text-white hover:bg-zinc-800">
                  Shop now
                </Button>
                <Button variant="outline" className="rounded-full border-zinc-300 px-6 py-6 text-zinc-800">
                  Explore collection
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-zinc-200 blur-3xl lg:block" />
              <div className="absolute -bottom-4 right-0 hidden h-48 w-48 rounded-full bg-zinc-300/70 blur-3xl lg:block" />
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                alt="Selected Wear hero"
                className="relative z-10 h-[560px] w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((item) => (
              <Card key={item.title} className="rounded-3xl border-zinc-200 bg-zinc-50 shadow-none">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="shop" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Collection</p>
                <h3 className="mt-3 text-3xl font-semibold text-zinc-950 md:text-4xl">Current selected pieces</h3>
              </div>
              <a href="#" className="hidden items-center gap-2 text-sm text-zinc-700 hover:text-zinc-950 md:flex">
                View all <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="overflow-hidden rounded-[2rem] border-zinc-200 bg-white shadow-none transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="h-80 w-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
                        {product.tag}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-medium text-zinc-950">{product.name}</h4>
                          <p className="mt-1 text-sm text-zinc-500">Grey / White Edition</p>
                        </div>
                        <p className="text-base font-semibold text-zinc-900">{product.price}</p>
                      </div>
                      <Button className="mt-5 w-full rounded-full bg-zinc-900 text-white hover:bg-zinc-800">
                        Add to cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">About</p>
              <h3 className="mt-3 text-3xl font-semibold text-zinc-950 md:text-4xl">Less noise. More style.</h3>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                Selected Wear steht für klare Schnitte, neutrale Farben und Pieces, die du leicht kombinieren kannst. Die Seite ist bewusst reduziert, damit die Produkte im Mittelpunkt stehen.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Der Look ist ruhig, modern und hochwertig. Genau das hat deiner bisherigen Seite gefehlt: Struktur, Bilder, Produkte und echte Shop-Wirkung.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] bg-zinc-100 p-8">
                <p className="text-4xl font-semibold text-zinc-950">01</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">Klare Produktpräsentation ohne unnötige Ablenkung.</p>
              </div>
              <div className="rounded-[2rem] bg-zinc-900 p-8 text-white">
                <p className="text-4xl font-semibold">02</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">Ruhige Markenwirkung durch reduzierte Gestaltung.</p>
              </div>
              <div className="rounded-[2rem] bg-zinc-200 p-8">
                <p className="text-4xl font-semibold text-zinc-950">03</p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">Fokus auf Essentials statt auf überladene Kollektionen.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 ring-1 ring-zinc-200">
                <p className="text-4xl font-semibold text-zinc-950">04</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">Moderner Shop-Auftritt mit ruhiger Navigation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">Newsletter</p>
            <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Stay selected.</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-300">
              Erfahre als Erste:r von neuen Drops, Bestsellern und ausgewählten Looks.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="h-14 flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-5 text-white placeholder:text-zinc-400 focus:outline-none"
              />
              <Button className="h-14 rounded-full bg-white px-6 text-zinc-900 hover:bg-zinc-200">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Selected Wear</p>
            <h4 className="mt-3 text-2xl font-semibold text-zinc-950">Minimal store experience.</h4>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
              Ein cleaner Online-Store in Grau und Weiß – modern, ruhig und direkt auf die Produkte ausgerichtet.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Shop</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li><a href="#shop" className="hover:text-zinc-950">New In</a></li>
              <li><a href="#shop" className="hover:text-zinc-950">Best Seller</a></li>
              <li><a href="#shop" className="hover:text-zinc-950">Unisex</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>hello@selectedwear.com</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
