import WorkspacePreferencesModalContext from "@/context/WorkspacePreferencesModalContext"
import { useContext } from "react"

export const useWorkspacePreferncesModal = () => {
    return useContext(WorkspacePreferencesModalContext)
}
