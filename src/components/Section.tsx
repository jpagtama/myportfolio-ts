
interface Props {
    children: JSX.Element
}

const Section = (props: Props) => {
    return (
        <section className='w-full min-h-screen' >{props.children}</section>
    )
}

export default Section