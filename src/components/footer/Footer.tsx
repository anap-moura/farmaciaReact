import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-black text-yellow-500">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Drogaria APMC - todos os direitos reservados. </p>
            <p className='text-lg'>Conheça nossas redes sociais:</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer