import toast from 'react-hot-toast';

export const ToastError = (message) => {
    return (
        toast.error(message, {
            duration: 4000,
            position: 'top-center',})
    );
}

export const ToastSuccess = (message) => {
    return (
        toast.success(message, {
            duration: 4000,
            position: 'top-center',})
    );
}