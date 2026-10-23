import { useState } from 'react'
import Card from '../components/Card.jsx'

// Centraliza as opções para alimentar os filtros.
const categories = ['Todos', 'Sushis', 'Combinados', 'Quentes', 'Sobremesas']

// Mantém o endereço das fotos no mesmo formato.
const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`

// Cada objeto fornece ao Card apenas os dados que ele exibe.
const dishes = [
  {
    name: 'Sakura roll', category: 'Sushis', price: 38, label: 'Mais pedido',
    description: 'Salmão, cream cheese e cebolinha, finalizados com molho da casa.',
    image: photo('photo-1579871494447-9811cf80d66c'),
  },
  {
    name: 'Sashimi de salmão', category: 'Sushis', price: 32,
    description: 'Fatias frescas de salmão, cortadas na hora e servidas em cinco unidades.',
    image: photo('photo-1579584425555-c3ce17fd4351'),
  },
  {
    name: 'Combinado Hanami', category: 'Combinados', price: 86,
    label: 'Para compartilhar',
    description: 'Uma seleção da casa com niguiris, uramakis e sashimis para compartilhar.',
    image: photo('photo-1617196034796-73dfa7b1fd56'),
  },
  {
    name: 'Temaki de salmão', category: 'Sushis', price: 29,
    description: 'Alga crocante, arroz temperado e salmão fresco preparados na hora.',
    image: photo('photo-1615361200141-f45040f367be'),
  },
  {
    name: 'Yakisoba da casa', category: 'Quentes', price: 42,
    description: 'Macarrão salteado com legumes frescos e molho oriental da casa.',
    image: photo('photo-1585032226651-759b368d7246'),
  },
  {
    name: 'Guioza grelhado', category: 'Quentes', price: 26,
    description: 'Massa delicada recheada e dourada na chapa, servida em seis unidades.',
    image: photo('photo-1563245372-f21724e3856d'),
  },
  {
    name: 'Tempurá de legumes', category: 'Quentes', price: 31,
    description: 'Legumes da estação em massa leve e crocante, com molho para acompanhar.',
    image: photo('photo-1604908176997-125f25cc6f3d'),
  },
  {
    name: 'Mochi de morango', category: 'Sobremesas', price: 18,
    description: 'Doce japonês macio com recheio delicado de morango.',
    image: photo('photo-1488477181946-6428a0291777'),
  },
]

// A página controla o filtro e entrega cada prato para o componente Card.
const Cardapio = () => {
  // A primeira categoria mostra o menu completo.
  const [activeCategory, setActiveCategory] = useState(categories[0])

  // O estado selecionado define quais pratos aparecem na grade.
  const visibleDishes = dishes.filter(
    (dish) => activeCategory === 'Todos' || dish.category === activeCategory,
  )

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        {/* A abertura apresenta o restaurante e a ideia da página. */}
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-red-700 transition-all duration-300 hover:tracking-[0.32em]">
            Sakura Sushi
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Feito com cuidado.
            <span className="block text-red-700 transition-colors duration-300 hover:text-red-600">
              Servido com calma.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            Sabores japoneses preparados na hora, com ingredientes frescos e respeito a cada detalhe.
          </p>
        </div>

        {/* Clicar em uma categoria atualiza o estado e filtra os pratos. */}
        <div className="mt-12 border-y border-zinc-200 py-5 sm:mt-16">
          <div className="flex flex-wrap gap-2" aria-label="Filtrar pratos por categoria">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:text-white hover:shadow-md hover:shadow-red-700/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 motion-reduce:transform-none ${
                  activeCategory === category
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* O título e a contagem refletem o filtro ativo. */}
        <div className="mb-6 mt-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {activeCategory === 'Todos' ? 'Escolhas da casa' : activeCategory}
          </h2>
          <p className="pb-1 text-sm text-zinc-500">
            {visibleDishes.length} opções
          </p>
        </div>

        {/* A grade adapta o número de colunas ao tamanho da tela. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleDishes.map((dish) => (
            <Card key={dish.name} dish={dish} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Cardapio
