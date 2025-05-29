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
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Category Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveCategory("business")}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
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
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
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
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              }`}
            >
              {/* Product Info */}
              <div className="p-3">
                {/* Header dengan Nama Produk dan Harga */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {product.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      product.price === "Rp 0" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                    }`}
                  >
                    {product.price}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle
                          className={`h-3 w-3 mr-2 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`}
                        />
                        <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-2 px-3 rounded-md font-medium text-xs transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    Bayar
                  </button>
                  <button
                    onClick={() => openExample(product)}
                    className={`px-3 py-2 rounded-md font-medium text-xs transition-all duration-300 border ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    } flex items-center gap-1`}
                  >
                    <ExternalLink className="h-3 w-3" />
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
              className={`max-w-4xl w-full h-[80vh] rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } overflow-hidden`}
            >
              {/* Modal Header */}
              <div
                className={`flex justify-between items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h2 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Contoh: {showExample.name}
                </h2>
                <button
                  onClick={closeExample}
                  className={`p-1 rounded-md ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <X className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
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
