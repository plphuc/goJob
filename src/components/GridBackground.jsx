const GridBackground = ({ children }) => {
    return (
        <div className="w-screen h-screen bg-backgroundColor text-white relative">
            {children}
        </div>
    )
}
export default GridBackground
