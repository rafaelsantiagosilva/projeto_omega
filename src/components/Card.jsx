/* eslint-disable react/prop-types */
export default function Card({card}) {
  return (
    <section className="w-96 p-2 border-black border-2 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center text-lg font-bold gap-1 underline">
          <img src="/arithmetic.png" className="w-12 h-10" alt="Símbolo de aritmética" />
          {
            card.type === "Aritmética" && (
              <p>{card.type}</p>
            )
          }
        </div>
        <div className="flex items-center text-lg font-bold gap-1 underline">
          <img src="/algebra.png" className="w-12 h-10" alt="Símbolo de algebra" />
          {
            card.type === "Álgebra" && (
              <p>{card.type}</p>
            )
          }
        </div>
        <div className="flex items-center text-lg font-bold gap-1 underline">
          <img src="/geometry.png" className="w-12 h-10" alt="Símbolo de geometria" />
          {
            card.type === "Geometria" && (
              <p>{card.type}</p>
            )
          }
        </div>
        <div className="flex items-center text-lg font-bold gap-1 underline">
          <img src="/logic.png" className="w-12 h-10" alt="Símbolo de lógica" />
          {
            card.type === "Lógica" && (
              <p>{card.type}</p>
            )
          }
        </div>
      </div>
      <hr className="bg-black border-black border-1 mt-2" />
      <p className="font-jetbrainsmono font-bold">
        {card.question}
      </p>
    </section>

  );
}