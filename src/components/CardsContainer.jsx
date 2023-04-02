import { quotes } from "../quotes"
import { Card } from "./Card"

export const CardsContainer = () => {

  console.log(quotes);

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-4">
      {
        quotes.map( quote => (

          <Card key={ quote.name } props={{ ...quote }} />

        ))
      }
    </div>
  )
}
