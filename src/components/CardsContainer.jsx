import { quotes } from "../quotes"
import { Card } from "./Card"

export const CardsContainer = () => {
  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-4">
      {
        quotes.map( quote => (

          <Card key={ quote.name } props={{ ...quote }} />

        ))
      }
    </div>
  )
}
