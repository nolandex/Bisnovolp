"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { X, CheckCircle, ExternalLink } from "lucide-react"

interface Product {
  name: string
  price: string
  category: string
  features: string[]
  exampleUrl: string
}

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("business")
  const [showExample, setShowExample] = useState<Product | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products: Product[] = [
    // Kategori Paket Bisnis Online
    {
      name: "Paket Bisnis Starter",
      price: "Rp 50.000",
      category: "business",
      features: ["Website Profesional", "Chatbot Otomatis", "Social Media Content"],
      exampleUrl: "https://example.com",
    },
    // Kategori Website
    {
      name: "Website Toko Online",
      price: "Rp 25.000",
      category: "website",
      features: ["Domain gratis", "Hosting unlimited", "Responsif"],
      exampleUrl: "https://shopify.com",
    },
    {
      name: "Website Landing Page",
      price: "Rp 25.000",
      category: "website",
      features: ["Domain gratis", "Hosting unlimited", "Responsif"],
      exampleUrl: "https://unbounce.com",
    },
  ]

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter((product) => product.category === activeCategory)

  const openExample = (product: Product) => {
    setShowExample(product)
  }

  const closeExample = () => {
    setShowExample(null)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory("business")}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeCategory === "business"
                ? theme === "dark"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-lg"
                : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            Paket Bisnis Online
          </button>
          <button
            onClick={() => setActiveCategory("website")}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeCategory === "website"
                ? theme === "dark"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white shadow-lg"
                : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            Website
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              }`}
            >
              {/* Product Info */}
              <div className="p-5">
                {/* Header dengan Nama Produk dan Harga */}
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-base font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    {product.name}
                  </h3>
                  <span
                    className={`px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ml-2 ${
                      product.price === "Rp 0"
                        ? theme === "dark"
                          ? "bg-green-600 text-white"
                          : "bg-green-500 text-white"
                        : theme === "dark"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                          : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    } shadow-md`}
                  >
                    {product.price}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle
                          className={`h-4 w-4 mr-3 flex-shrink-0 ${
                            theme === "dark" ? "text-green-400" : "text-green-500"
                          }`}
                        />
                        <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    }`}
                  >
                    Bayar Sekarang
                  </button>
                  <button
                    onClick={() => openExample(product)}
                    className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-2 ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                    } flex items-center gap-2 shadow-md hover:shadow-lg`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Contoh
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Example Website Modal */}
        {showExample && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              className={`max-w-5xl w-full h-[85vh] rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden shadow-2xl`}
            >
              {/* Modal Header */}
              <div
                className={`flex justify-between items-center p-5 border-b ${
                  theme === "dark" ? "border-gray-700 bg-gray-750" : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contoh: {showExample.name}
                </h2>
                <button
                  onClick={closeExample}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Embedded Website */}
              <div className="h-full">
                <iframe
                  src={showExample.exampleUrl}
                  title={`Contoh ${showExample.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
