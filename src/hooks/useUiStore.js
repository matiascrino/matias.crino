import { useSelector, useDispatch } from "react-redux"
import { onOpenDateModal, onCloseDateModal } from "../store";




export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen, experienceId } = useSelector((state) => state.ui);

    const openDateModal = (experienceId) => {
        dispatch(onOpenDateModal(experienceId));
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    return {
			//properties
			isDateModalOpen,
            experienceId,

			//methods
            openDateModal,
            closeDateModal,
    }
}