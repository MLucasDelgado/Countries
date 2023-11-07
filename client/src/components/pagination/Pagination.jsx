import style from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={style.container}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={style.button}
            >
                &#8249; {/* Flecha izquierda */}
            </button>
            <span className={style.text}>
                {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={style.button}
            >
                &#8250; {/* Flecha derecha */}
            </button>
        </div>
    );
};

export default Pagination;