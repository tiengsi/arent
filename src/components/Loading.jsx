/* eslint-disable react/prop-types */
const Loading = ({ loadingText }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center h-full">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">{loadingText}</h2>
    </div>
  )
}

export default Loading