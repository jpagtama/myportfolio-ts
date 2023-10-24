import notFoundIcon from '../assets/icon404.svg'

const NotFound = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center w-screen h-screen gap-8' >
            <div className='flex justify-center items-center bg-zinc-950 w-full h-1/2 sm:h-screen'>
                <img className='h-72 w-72' src={notFoundIcon} alt="Page not found icon" />
            </div>
            <div className='flex flex-col justify-center items-center w-full h-1/2'>
                <h1 className='text-6xl text-center'>Page not found</h1>
                <p className='text-xl text-center'>It seems this page does not exist. You can find my <a className='text-lime-600 hover:text-lime-500' href="/" >homepage here</a></p>
            </div>
        </div>
    )
}

export default NotFound