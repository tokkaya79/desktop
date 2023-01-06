import { useBoards } from '../hooks/boards';

import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Board } from '../components/Board';
import { Pagination } from '../components/Pagination';

export function BoardPage() {
    const { error, loading, boards, pagin } = useBoards();

    return (
        <>
            <div className="container mx-auto max-w-[1400px]">
                {loading && <Loader />}
                {error && <ErrorMessage error={error} />}
                {boards.map((board) => (
                    <Board
                        board={board}
                        key={board.id}
                    />
                )).slice(0, 5)}
                {pagin && <Pagination />}
            </div>
            
        </>
    );
}
