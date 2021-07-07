const Layout: React.FC = ({ children }) => {
  const date = new Date()

  return (
    <div
      className='w-full h-screen p-10 flex flex-col items-center justify-center'
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundRepeat: 'repeat-x',
      }}
    >
      <div className='w-full max-w-md flex mb-4'>
        <div className='pr-2'>
          <p className='text-5xl'>{date.getDate()}</p>
        </div>
        <div>
          <p>{date.toLocaleString('default', { month: 'short' })}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <div className='flex-1 flex items-center justify-end'>
          <p className='font-bold uppercase'>
            {date.toLocaleString('default', { weekday: 'long' })}
          </p>
        </div>
      </div>
      <div className='w-full h-full'>{children}</div>
    </div>
  )
}

export default Layout
