'use client'

import React from 'react'
import Container from '../atoms/Container'
import { Check } from 'lucide-react'
import { Category } from '@/types'

interface CategoryNavProps {
      categories: Category[]
      selectedCategoryId: number | null
      onSelectCategory: (id: number | null) => void
}

export default function CategoryNav({
      categories,
      selectedCategoryId,
      onSelectCategory,
}: CategoryNavProps) {
      return (
            <Container>
                  <div className="flex gap-2 overflow-x-auto py-4">
                        {/* Botón estático para mostrar todos los productos */}
                        <button
                              className={`flex items-center gap-2 py-2 px-5 border border-border rounded-full text-sm leading-none font-medium active:bg-primary cursor-pointer transition-all duration-150 ${selectedCategoryId === null
                                          ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 font-semibold '
                                          : 'bg-white lg:hover:bg-accent lg:hover:border-primary/35 '
                                    }`}
                              onClick={() => onSelectCategory(null)}
                        >
                              {selectedCategoryId === null && <Check size={16} />}
                              Todos
                        </button>

                        {/* Categorías dinámicas de Supabase */}
                        {categories.map((cat) => {
                              const isSelected = selectedCategoryId === cat.id

                              return (
                                    <button
                                          key={cat.id}
                                          className={`flex items-center gap-2 py-2 px-5 border border-border rounded-full text-sm leading-none font-medium active:bg-primary cursor-pointer transition-all duration-150 ${isSelected
                                                      ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 font-semibold'
                                                      : 'bg-white lg:hover:bg-accent lg:hover:border-primary/35 '
                                                }`}
                                          onClick={() => onSelectCategory(cat.id)}
                                    >
                                          {isSelected && <Check size={16} />}
                                          {cat.name}
                                    </button>
                              )
                        })}
                  </div>
            </Container>
      )
}