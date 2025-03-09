import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPlugin({ items = [], time = 3000 }) {
  const plugin = React.useRef(
    Autoplay({ delay: time, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{ loop: true }} 
    >
      <CarouselContent>
        {items.map((banner, index) => (
          <CarouselItem key={index} className="border-0 p-0">
            <div className="border-0">
              <Card className="border-0 rounded-none p-0">
                <CardContent className="flex aspect-square  items-center justify-center p-0">
                  <img src={banner.image} alt="Banner" className="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={'bg-gradient-to-x from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 bg-opacity-90 backdrop-blur-md shadow-2xl hover:shadow-[0px_0px_20px_rgba(219,39,119,0.6)] transition-all duration-300 ease-in-out hover:scale-105 rounded-full px-5 py-2 text-purple-600 font-semibold'} />
      <CarouselNext className={'bg-gradient-to-x from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 bg-opacity-90 backdrop-blur-md shadow-2xl hover:shadow-[0px_0px_20px_rgba(219,39,119,0.6)] transition-all duration-300 ease-in-out hover:scale-105 rounded-full px-5 py-2 text-purple-600 font-semibold'} />
    </Carousel>
  )
}
