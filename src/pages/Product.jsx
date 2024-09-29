import React, { useState } from 'react'
import LivePreview from '../components/LivePreview'
import { Theme } from '@radix-ui/themes'
import TestimonialModal from '../components/modals/TestimonialModal'

const Product = () => {
    const [header, setHeader] = useState("Aman Website")
    const [customMessage, setCustomMessage] = useState("Hi, guys it would be a great help for me if you showed your love to my website and leave a testimonial down below in the form of text or video.")
    const [questions, setQuestions] = useState(["Who are you / what are you working on?",
"How has [our product / service] helped you?",
"What is the best thing about [our product / service"])
    const [theme, setTheme] = useState('light')
  return (
    <Theme appearance={theme}>
    <div className='h-screen'>
      <LivePreview header={header} customMessage={customMessage} questions={questions} isLarge={true}/>
      <TestimonialModal/>
    </div>
    </Theme>
  )
}

export default Product
