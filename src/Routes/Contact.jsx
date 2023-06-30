import React from 'react'
import Form from '../Components/Form'
import { useTheme } from '../Components/utils/global.context'

const Contact = () => {
  const {theme} = useTheme()
  return (
    <div className={theme.footerBody}>
      <h2 className={theme.title}>Querés contactárnos</h2>
      <p className={theme.text}>Dejá aquí tus datos y te contáctaremos a la brevedad

</p>
      <Form/>
    </div>
  )
}

export default Contact