const GridBackground = ({ children }) => {
    return (
        <div className="w-screen h-screen bg-backgroundColor text-white relative overflow-auto">
            {children}
        </div>
    )
}
export default GridBackground
