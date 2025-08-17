const loadUmamiScript = () => {
  if (document.querySelector('script[data-website-id]')) {
    return
  }

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://cloud.umami.is/script.js'
  script.setAttribute('data-website-id', process.env.REACT_APP_UMAMI_WEBSITE_ID || 'your-umami-website-id')
  
  document.head.appendChild(script)
}

const removeUmamiScript = () => {
  const script = document.querySelector('script[data-website-id]')
  if (script) {
    script.remove()
  }
}

export { loadUmamiScript, removeUmamiScript }