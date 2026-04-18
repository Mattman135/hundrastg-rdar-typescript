"use client"

import { useRef, useState, type ReactNode } from "react"
import config from "@/config"

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

interface FaqItem {
  question: string
  answer: ReactNode
}

interface ItemProps {
  item: FaqItem
}

const faqList: FaqItem[] = [
  {
    question: `Vad är ${config.appName} och vad kan jag hitta här?`,
    answer: (
      <p className="space-y-2 leading-relaxed">
        Hundrastgårdar är en samlad katalog dedikerad till hundrastgårdar runt
        om i Sverige. Här hittar du information om inhägnade områden där din
        hund kan springa löst och leka fritt i en trygg miljö. Du kan söka efter
        rastgårdar nära dig, läsa om deras faciliteter och ta del av andra
        hundägares erfarenheter.
      </p>
    ),
  },
  {
    question: "Vem är den här katalogen till för?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Katalogen är skapad för Sveriges hundägare som vill ge sina fyrbenta
        vänner en säker och rolig plats att röra sig fritt på. Oavsett om du är
        nybörjare som hundägare eller en erfaren hundmänniska som flyttat till
        en ny stad, är Hundrastgårdar din guide till de bästa lokala
        alternativen. Katalogen passar lika bra för den som söker en
        vardagsrastgård som för den som planerar ett hundsäkert utflyktsmål.
      </p>
    ),
  },
  {
    question: `Varför ska jag använda ${config.appName} istället för en vanlig sökmotor?`,
    answer: (
      <p className="space-y-2 leading-relaxed">
        Till skillnad från en vanlig sökmotor är Hundrastgårdar specialanpassad
        just för detta ändamål, vilket innebär att all information är noggrant
        kurerad och relevant för hundägare. Du slipper sålla igenom orelaterade
        sökresultat och hittar snabbare det du letar efter. Katalogen samlar
        dessutom uppdaterad och pålitlig information på ett och samma ställe,
        vilket sparar både tid och frustration.
      </p>
    ),
  },
]

const Item = ({ item }: ItemProps) => {
  const accordion = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion.current?.scrollHeight ?? 0, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Vanliga frågor och svar
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
