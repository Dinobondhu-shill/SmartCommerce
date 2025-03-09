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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
