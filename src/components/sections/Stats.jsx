function Stats() {
    return (
        <div className="grid grid-cols-1 p-8 rounded-3xl bg-light bg-violet-700 divide-y divide-orange-500 md:divide-y-0 md:divide-x md:divide-orange-500 md:grid-cols-3 gap-8 text-center">
            <div className="py-4">
                <h1 className=" text-orange-500 text-3xl font-bold divide-orange-500">1M+</h1>
                <p className="text-gray-100">Sold phones</p>
            </div>
            <div className="py-4">
                <h1 className="text-orange-500 text-3xl font-bold divide-orange-500">5+</h1>
                <p className="text-gray-100">Years of existence</p>
            </div>
            <div className="py-4">
                <h1 className=" text-orange-500 text-3xl font-bold divide-orange-500">10</h1>
                <p className="text-gray-100">Branches Nationwide</p>
            </div>
        </div>
    )
}

export default Stats;