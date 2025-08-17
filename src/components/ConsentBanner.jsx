import React, { useState, useEffect } from 'react'

const ConsentBanner = ({ language, onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('analyticsConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('analyticsConsent', 'accepted')
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('analyticsConsent', 'declined')
    setIsVisible(false)
    onDecline()
  }

  if (!isVisible) return null

  const getText = () => {
    switch (language) {
      case 'slovak':
        return {
          message: 'Táto stránka používa analytické súbory cookie na zlepšenie používateľského zážitku.',
          accept: 'Prijať',
          decline: 'Odmietnuť'
        }
      case 'english':
        return {
          message: 'This site uses analytics cookies to improve user experience.',
          accept: 'Accept',
          decline: 'Decline'
        }
      case 'czech':
        return {
          message: 'Tato stránka používá analytické soubory cookie pro zlepšení uživatelského zážitku.',
          accept: 'Přijmout',
          decline: 'Odmítnout'
        }
      default:
        return {
          message: 'This site uses analytics cookies to improve user experience.',
          accept: 'Accept',
          decline: 'Decline'
        }
    }
  }

  const text = getText()

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      style={{
        background: '#6e587a',
        color: '#f1bf41',
        fontSize: '18px'
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
        <p className="text-justify flex-1">{text.message}</p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            style={{
              background: '#d1d5db',
              color: '#374151',
              fontSize: '18px',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {text.decline}
          </button>
          <button
            onClick={handleAccept}
            style={{
              background: '#39bb2f',
              color: '#fff',
              fontSize: '18px',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsentBanner