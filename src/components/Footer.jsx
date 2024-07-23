import React from 'react'

const Footer = () => {
  return (
    <footer className=''>
      <section className='text-[18px] text-[#ffffff] pt-16 pb-8'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          {/* <p className='hidden lg:flex pb-4'>|</p>

          <a href='https://jwfakty.sk' target='_blank'>
            jwfakty.sk
          </a> */}
        </div>
        <div className='flex justify-center text-[#8d8d8d] mt-2 text-[12px]'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
