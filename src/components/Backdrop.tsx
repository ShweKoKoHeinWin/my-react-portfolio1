import { type Dispatch, type SetStateAction } from 'react'

const Backdrop = ({setState}: {setState: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className='fixed w-screen h-screen left-0 top-0 z-20 bg-lgray/70 drop-shadow-lg drop-shadow-light' onClick={() => setState(false)}>
    </div>
  )
}

export default Backdrop
