import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StockTable() {
  const [activeTab, setActiveTab] = useState("tech");
  const stockLists = {
    tech: [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: "178.72",
        change: "+1.2%",
        volume: "52.3M",
        marketCap: "2.82T",
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: "378.85",
        change: "+0.8%",
        volume: "48.1M",
        marketCap: "2.94T",
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: "142.65",
        change: "-0.5%",
        volume: "31.2M",
        marketCap: "1.78T",
      },
      {
        symbol: "AMZN",
        name: "Amazon.com Inc.",
        price: "145.68",
        change: "+1.5%",
        volume: "44.7M",
        marketCap: "1.52T",
      },
      {
        symbol: "META",
        name: "Meta Platforms",
        price: "334.92",
        change: "+2.1%",
        volume: "29.8M",
        marketCap: "865.2B",
      },
    ],
    finance: [
      {
        symbol: "JPM",
        name: "JPMorgan Chase",
        price: "172.34",
        change: "+0.8%",
        volume: "22.1M",
        marketCap: "498.2B",
      },
      {
        symbol: "BAC",
        name: "Bank of America",
        price: "33.92",
        change: "-0.3%",
        volume: "18.7M",
        marketCap: "267.8B",
      },
      {
        symbol: "V",
        name: "Visa Inc.",
        price: "271.85",
        change: "+1.1%",
        volume: "15.4M",
        marketCap: "551.6B",
      },
    ],
    energy: [
      {
        symbol: "XOM",
        name: "Exxon Mobil",
        price: "102.45",
        change: "-1.2%",
        volume: "25.6M",
        marketCap: "411.2B",
      },
      {
        symbol: "CVX",
        name: "Chevron Corp.",
        price: "144.32",
        change: "-0.9%",
        volume: "19.8M",
        marketCap: "272.4B",
      },
      {
        symbol: "SHEL",
        name: "Shell plc",
        price: "65.78",
        change: "+0.5%",
        volume: "12.3M",
        marketCap: "215.6B",
      },
    ],
  };
  const tabs = [
    {
      id: "tech",
      label: "Technology",
    },
    {
      id: "finance",
      label: "Financial",
    },
    {
      id: "energy",
      label: "Energy",
    },
  ];
  return (
    <div className="w-full bg-gray-900 border-b border-gray-800 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${activeTab === tab.id ? "bg-gray-800 text-[#00ff00] border-[#00ff00] border" : "text-gray-400 hover:text-white hover:bg-gray-800"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                    >
                      Volume
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell"
                    >
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {stockLists[activeTab as keyof typeof stockLists].map(
                    (stock, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {stock.symbol}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                          {stock.name}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-300 hidden md:table-cell">
                          {stock.volume}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-300 hidden lg:table-cell">
                          ${stock.marketCap}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
