interface ErrorMessageProps {
    error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return <p className="text-centr text-red-600">{error}</p>;
}
