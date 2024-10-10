import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Users } from 'lucide-react'

interface Influencer {
  id: number;
  name: string;
  image: string;
  followers: {
    instagram: number;
    twitter: number;
    facebook: number;
  };
}

const influencers: Influencer[] = [
  {
    id: 1,
    name: "Ana García",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    followers: {
      instagram: 50000,
      twitter: 30000,
      facebook: 20000
    }
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    followers: {
      instagram: 75000,
      twitter: 45000,
      facebook: 35000
    }
  },
  {
    id: 3,
    name: "Laura Martínez",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    followers: {
      instagram: 100000,
      twitter: 80000,
      facebook: 60000
    }
  },
  // Puedes agregar más influencers aquí
];

const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Marketplace de Influencers</h1>
          <Link to="/" className="text-white hover:text-purple-200 transition">Cerrar sesión</Link>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((influencer) => (
            <div key={influencer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={influencer.image} alt={influencer.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{influencer.name}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 mr-1 text-pink-500" />
                    <span>{influencer.followers.instagram.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Twitter className="w-5 h-5 mr-1 text-blue-400" />
                    <span>{influencer.followers.twitter.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Facebook className="w-5 h-5 mr-1 text-blue-600" />
                    <span>{influencer.followers.facebook.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default MarketplacePage