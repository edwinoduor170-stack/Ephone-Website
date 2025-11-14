function Wrapper({ children, className }) {
    return (
        <section className={`py-12 px-4  ${className}`}>
            <div className="max-w-7xl mx-auto">{children}</div>
        </section>
    );
}

export default Wrapper;